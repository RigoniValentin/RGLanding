"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * HERO — fondo con UNA imagen animada (Ken Burns) + capas dinámicas.
 *
 * Subí tu imagen a /public/images/hero-1.png (o cambiá la constante
 * `HERO_IMAGE.src` para apuntar al nombre que uses).
 *
 * Capas animadas:
 *   1. Ken Burns sobre la imagen (scale + pan lentos, en loop).
 *   2. Barrido diagonal de luz que cruza la imagen periódicamente.
 *   3. Glow central dorado pulsante.
 *   4. Orbes flotantes (DecorLayer).
 *   5. Sparkles dorados.
 */
const HERO_IMAGE = {
  src: "/images/hero-1.png",
  alt: "",
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
};

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  useEffect(() => {
    setMounted(true);
    if (prefersReducedMotion) return;
    const el = sectionRef.current;
    if (!el) return;
    setInView(true);
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [prefersReducedMotion]);

  const animate = mounted && !prefersReducedMotion && inView && !isMobile;
  const reduceEffects = prefersReducedMotion || isMobile;

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="hero-full relative isolate flex flex-col justify-center overflow-hidden bg-rio-dark text-white"
    >
      {/* ── Capa de imagen + overlays dinámicos ───────────────── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* 1. Imagen con Ken Burns (scale + pan continuos, en loop) */}
        <motion.div
          initial={{ scale: 1.18, x: "-4%", y: 0 }}
          animate={animate ? { scale: [1.18, 1.05, 1.14], x: ["-4%", "0%", "-2%"], y: ["0%", "-2%", "1%"] } : { scale: 1.12, x: 0, y: 0 }}
          transition={{
            duration: 26,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* 2. Barrido diagonal de luz que cruza la imagen */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-y-12 left-0 w-[55%] bg-[linear-gradient(115deg,transparent_0%,transparent_45%,rgba(255,255,255,0.07)_50%,transparent_55%,transparent_100%)] blur-[2px]"
          initial={{ x: "-65%" }}
          animate={animate ? { x: "260%" } : { x: "-65%" }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 3. Glow central dorado pulsante */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(234,189,35,0.10)_0%,transparent_60%)]"
          animate={animate ? { opacity: [0.55, 1, 0.55], scale: [1, 1.06, 1] } : { opacity: 0.75 }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Overlays para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-rio-dark/85 via-rio-dark/65 to-rio-dark/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0B0C0F_90%)]" />
        <div className="absolute inset-0 bg-dots-gold opacity-30 mask-radial-fade" />
      </div>

      {/* ── Decoración (orbes, sparkles) ─────────────────────── */}
      <DecorLayer animate={animate} />

      {/* ── Contenido ─────────────────────────────────────────── */}
      <div className="container relative z-10 py-24 md:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className={`glow-pill ${reduceEffects ? "" : "animate-pulse-glow"}`}>
              <span className="relative flex h-2 w-2">
                <span className={`absolute inline-flex h-full w-full rounded-full bg-rio-gold opacity-75 ${reduceEffects ? "" : "animate-ping"}`} />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rio-gold" />
              </span>
              Software · Desarrollo · Diseño
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-[2.4rem] font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-[68px] md:leading-[1.02]"
          >
            Gestionamos con vos,{" "}
            <span className={`block bg-gradient-to-r from-rio-gold via-yellow-200 to-rio-gold bg-clip-text text-transparent [background-size:200%] ${reduceEffects ? "" : "animate-gradient-x"}`}>
              crecemos juntos.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8 md:text-xl"
          >
            Software ERP, desarrollo de apps a medida y diseño gráfico —
            todo lo que tu marca necesita para crecer, bajo un mismo techo.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#servicios"
              className="btn btn-primary shine group gap-2 px-8 py-3.5 text-base"
            >
              <span>Descubrir servicios</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#clientes" className="btn btn-ghost gap-2 px-7 py-3.5 text-base">
              Ver clientes
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-2"
          >
            {[
              { k: "ERP",    v: "Argentino · IA · ARCA" },
              { k: "Apps",   v: "Mobile · Web" },
              { k: "Diseño", v: "Branding · Packaging" },
            ].map(({ k, v }) => (
              <div
                key={k}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
              >
                <span className="text-sm font-bold text-rio-gold">{k}</span>
                <span className="text-sm text-white/60">{v}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-label="Bajar"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5"
        >
          <span className="h-2 w-[2px] rounded-full bg-rio-gold shadow-[0_0_8px_rgba(234,189,35,0.7)]" />
        </motion.div>
      </motion.a>

      {/* Acentos top/bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rio-gold to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rio-gold/40 to-transparent" />
    </section>
  );
}

function DecorLayer({ animate }: { animate: boolean }) {
  if (!animate) return null;

  return (
    <>
      <motion.div
        animate={{ x: [0, 60, -30, 0], y: [0, -50, 40, 0], scale: [1, 1.18, 0.9, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-52 top-0 h-[660px] w-[660px] rounded-full bg-rio-gold/[0.10] blur-[160px]"
      />
      <motion.div
        animate={{ x: [0, -50, 22, 0], y: [0, 40, -45, 0], scale: [1, 0.85, 1.12, 1] }}
        transition={{ duration: 27, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-rio-gold/[0.08] blur-[140px]"
      />

      {/* Orbe central pequeño extra */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rio-gold/[0.07] blur-[100px]"
      />

      {[
        { x: "7%",  y: "20%", s: 3, d: 0,   dr: 9  },
        { x: "87%", y: "17%", s: 2, d: 2,   dr: 12 },
        { x: "74%", y: "66%", s: 3, d: 0.5, dr: 10 },
        { x: "20%", y: "79%", s: 2, d: 3,   dr: 14 },
        { x: "94%", y: "44%", s: 2, d: 1,   dr: 11 },
        { x: "4%",  y: "57%", s: 2, d: 4,   dr: 13 },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -22, 0], opacity: [0.18, 0.7, 0.18] }}
          transition={{ duration: p.dr, repeat: Infinity, delay: p.d, ease: "easeInOut" }}
          className="pointer-events-none absolute rounded-full bg-rio-gold shadow-[0_0_8px_rgba(234,189,35,0.7)]"
          style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
        />
      ))}

      {[
        { x: "33%", y: "18%", d: 0 },
        { x: "78%", y: "32%", d: 1.5 },
        { x: "14%", y: "45%", d: 3 },
        { x: "55%", y: "72%", d: 0.8 },
        { x: "91%", y: "58%", d: 2.4 },
      ].map((sp, i) => (
        <div
          key={i}
          className="pointer-events-none absolute animate-sparkle"
          style={{ left: sp.x, top: sp.y, animationDelay: `${sp.d}s` }}
        >
          <svg width="8" height="8" viewBox="0 0 6 6">
            <path
              d="M3 0L3.4 2.6L6 3L3.4 3.4L3 6L2.6 3.4L0 3L2.6 2.6Z"
              fill="rgba(234,189,35,0.85)"
            />
          </svg>
        </div>
      ))}
    </>
  );
}
