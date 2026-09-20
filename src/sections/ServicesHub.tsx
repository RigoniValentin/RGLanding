"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";

/* ─── Nuestros servicios — 3 CARDS clickeables (Rio Gestión) ─────── */

type Service = {
  id: "gestion" | "desarrollo" | "diseno";
  target: string;
  index: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    id: "gestion",
    target: "#software-gestion",
    index: "01",
    tag: "Software",
    title: "Software de gestión",
    desc: "Caja, ventas, compras, stock, balance, contabilidad, IA y app mobile. Integración nativa con ARCA.",
    bullets: ["Multi-sucursal", "App mobile + IA", "Gestión de Mesas", "Soporte 24/7"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M3 9h18M9 17v3m6-3v3M7 20h10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "desarrollo",
    target: "#desarrollo",
    index: "02",
    tag: "Desarrollo",
    title: "Desarrollo a medida",
    desc: "Apps móviles, sitios web y tiendas online vinculadas a tu sistema de gestión. Resolvemos cualquier proyecto digital.",
    bullets: ["Mobile", "Tienda + ERP", "Webs custom", "Integraciones"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "diseno",
    target: "#diseno",
    index: "03",
    tag: "Diseño",
    title: "Diseño gráfico",
    desc: "Branding, packaging y contenido para redes sociales. A cargo del equipo de Pachu Design — partner creativo de Río Gestión.",
    bullets: ["Branding", "Packaging", "Redes sociales", "Audiovisual"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M12 2a10 10 0 100 20c1.5 0 2.5-1 2.5-2.5S13.5 17 12 17h-1.5a2.5 2.5 0 010-5H14a6 6 0 006-6c0-2-2-4-8-4z" strokeLinejoin="round" />
        <circle cx="7" cy="11" r="1" fill="currentColor" />
        <circle cx="9" cy="7" r="1" fill="currentColor" />
        <circle cx="13" cy="6" r="1" fill="currentColor" />
        <circle cx="17" cy="8" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export const ServicesHub = () => {
  const handleCardClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    const targetId = target.replace(/^#/, "");
    const targetExists =
      typeof document !== "undefined" && document.getElementById(targetId);
    if (!targetExists) {
      e.preventDefault();
      window.location.hash = target;
    }
  };

  return (
    <section
      id="servicios"
      className="relative scroll-mt-[var(--header-height)] overflow-hidden bg-white py-28 text-rio-dark"
    >
      {/* Background: grid oscuro sutil + orbes dorados (estándar Rio Gestión) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mask-radial-fade"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,12,15,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,12,15,0.045) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-rio-gold/[0.18] blur-[140px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-rio-gold/[0.12] blur-[120px]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rio-gold/55 to-transparent" />

      <div className="container relative">
        {/* ── Header ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-rio-gold/40 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rio-dark shadow-[0_8px_24px_-12px_rgba(234,189,35,0.5)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rio-gold" />
              Nuestros servicios
            </div>
          </div>
          <SectionTitle className="mt-5 font-black text-rio-dark">
            Software, desarrollo{" "}
            <span className="bg-gradient-to-r from-rio-gold via-yellow-500 to-rio-gold bg-clip-text text-transparent">
              y diseño.
            </span>
          </SectionTitle>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-center text-lg leading-8 text-rio-dark/65 md:text-xl">
            Tres servicios, un mismo equipo. Tocá cualquier tarjeta para
            profundizar en cada pilar y descubrir cómo se integra con los
            demás.
          </p>
        </motion.div>

        {/* ── 3 cards en grid ─────────────────────────────── */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:gap-6">
          {services.map((s, idx) => (
            <motion.a
              key={s.id}
              href={s.target}
              onClick={(e) => handleCardClick(e, s.target)}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -14, scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border-2 border-rio-dark/15 bg-white p-8 shadow-[0_18px_45px_-20px_rgba(11,12,15,0.22)] transition-[border-color,box-shadow,background-color] duration-500 hover:border-rio-gold/70 hover:shadow-[0_36px_80px_-18px_rgba(234,189,35,0.55)] md:p-9"
              aria-label={`Explorar servicio ${s.tag}`}
            >
              {/* Shine que cruza la card en hover (indica clickeabilidad) */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-[60%] z-10 w-[55%] -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition-[left,opacity] duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
              />

              {/* Header: icon + eyebrow + arrow chip */}
              <div className="relative z-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-rio-gold/15 text-rio-dark shadow-[inset_0_0_0_1px_rgba(234,189,35,0.25)] transition-all duration-500 group-hover:scale-110 group-hover:bg-rio-gold/30 group-hover:shadow-[inset_0_0_0_1px_rgba(234,189,35,0.55),0_0_28px_rgba(234,189,35,0.55)]">
                    {s.icon}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-rio-gold">
                    {s.index} · {s.tag}
                  </span>
                </div>
                <span
                  aria-hidden
                  className="grid h-10 w-10 place-items-center rounded-full border-2 border-rio-dark/15 bg-white text-rio-dark/45 transition-all duration-500 group-hover:scale-110 group-hover:rotate-45 group-hover:border-rio-gold group-hover:bg-rio-gold group-hover:text-rio-dark group-hover:shadow-[0_0_24px_rgba(234,189,35,0.55)]"
                >
                  <span className="text-base">↗</span>
                </span>
              </div>

              {/* Title + description */}
              <div className="relative z-20 mt-6 md:mt-8">
                <h3 className="text-balance text-2xl font-black leading-[1.1] tracking-tight text-rio-dark transition-colors duration-500 group-hover:text-rio-dark md:text-[28px] md:leading-[1.1]">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-rio-dark/65 md:text-base md:leading-7">
                  {s.desc}
                </p>
              </div>

              {/* Bullets / chips */}
              <div className="relative z-20 mt-5 flex flex-wrap gap-1.5 md:mt-6">
                {s.bullets.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-rio-dark/15 bg-rio-dark/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-rio-dark/65 transition-colors duration-500 group-hover:border-rio-gold/45 group-hover:bg-rio-gold/10 group-hover:text-rio-dark"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* Spacer para empujar el footer abajo */}
              <div className="relative z-20 mt-auto pt-8" />

              {/* Footer: separator + CTA clickeable */}
              <div className="relative z-20 flex items-center justify-between border-t-2 border-rio-dark/[0.08] pt-5 transition-colors duration-500 group-hover:border-rio-gold/30">
                <span className="text-[11px] font-bold uppercase tracking-widest text-rio-dark/65 transition-colors duration-500 group-hover:text-rio-gold">
                  Descubrir más
                </span>
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rio-dark/[0.04] text-rio-dark transition-all duration-300 group-hover:scale-110 group-hover:bg-rio-gold group-hover:text-rio-dark group-hover:shadow-[0_0_18px_rgba(234,189,35,0.55)]"
                >
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    →
                  </span>
                </span>
              </div>

              {/* Ring decorativo border-gold-glow en hover (utilidad de globals.css) */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl border-gold-glow opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rio-gold/40 to-transparent" />
    </section>
  );
};
