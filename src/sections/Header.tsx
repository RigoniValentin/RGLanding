"use client";

import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";

const navLinks = [
  { href: "#servicios",        label: "Servicios"   },
  { href: "#software-gestion", label: "ERP"         },
  { href: "#desarrollo",       label: "Desarrollo"  },
  { href: "#diseno",           label: "Diseño"      },
  { href: "#clientes",         label: "Clientes"    },
  { href: "#contacto",         label: "Contacto"    },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      if (window.location.hash !== "#inicio") {
        window.location.hash = "inicio";
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  const useIsoLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsoLayoutEffect(() => {
    const id = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 101);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    const navIds = new Set(ids);
    const syncActiveFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash || hash === "inicio") {
        setActiveSection("");
        return;
      }
      if (navIds.has(hash)) {
        setActiveSection(hash);
      }
    };
    window.addEventListener("hashchange", syncActiveFromHash);

    const initialHash = window.location.hash.replace(/^#/, "");
    if (initialHash === "inicio") {
      setActiveSection("");
    } else if (initialHash && navIds.has(initialHash)) {
      setActiveSection(initialHash);
    }

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("hashchange", syncActiveFromHash);
    };
  }, []);

  return (
    <>
      <header
        id="site-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-rio-dark/85 backdrop-blur-md border-b border-rio-gold/25 shadow-[0_8px_32px_rgba(0,0,0,0.5)] lg:backdrop-blur-xl"
            : "bg-transparent border-b border-white/5"
        }`}
      >
        {/* Top gold accent (siempre visible) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rio-gold/60 to-transparent" />

        {/* Announcement bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-r from-rio-gold/95 via-yellow-300 to-rio-gold/95 py-2"
        >
          <div className="container flex items-center justify-center gap-3 text-xs md:text-sm">
            <span className="hidden font-medium text-rio-dark/70 md:inline">
              Software · Desarrollo · Diseño
            </span>
            <span className="font-bold uppercase tracking-widest text-rio-dark">
              Río Gestión · Equipo creativo
            </span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="text-xs font-bold text-rio-dark"
            >
              →
            </motion.span>
          </div>
        </motion.div>

        <div className="py-3.5">
          <div className="container flex items-center justify-between gap-4 md:grid md:grid-cols-[1fr_auto_1fr]">
            {/* Logo */}
            <motion.a
              href="#inicio"
              onClick={handleLogoClick}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="group inline-flex items-center gap-3 justify-self-start"
            >
              <div className="relative">
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.85, 1.12, 0.85] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-rio-gold/55 blur-lg"
                />
                <div className="relative overflow-hidden rounded-full ring-2 ring-rio-gold/50 transition-all duration-300 group-hover:ring-rio-gold">
                  <Image src={Logo} alt="Río Gestión" height={36} width={36} />
                </div>
              </div>
              <span className="text-[1.1rem] font-extrabold leading-none tracking-tight">
                <span className="text-white">Río</span>
                <span className="ml-1 bg-gradient-to-r from-rio-gold via-yellow-200 to-rio-gold bg-clip-text text-transparent">
                  Gestión
                </span>
              </span>
            </motion.a>

            {/* Centered desktop nav */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="justify-self-center hidden items-center gap-0.5 md:flex"
              onMouseLeave={() => setHoveredLink(null)}
            >
              {navLinks.map(({ href, label }, i) => {
                const id = href.slice(1);
                const isActive = activeSection === id;
                const isHovered = hoveredLink === href;

                return (
                  <motion.a
                    key={href}
                    href={href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18 + i * 0.07, duration: 0.4 }}
                    onMouseEnter={() => setHoveredLink(href)}
                    className="relative select-none rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-150"
                    style={{
                      color: isActive
                        ? "#EABD23"
                        : isHovered
                        ? "#FFFFFF"
                        : "rgba(255,255,255,0.65)",
                    }}
                  >
                    {isHovered && (
                      <motion.span
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 rounded-lg bg-rio-gold/10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 480, damping: 36 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="active-indicator"
                        className="absolute bottom-1 left-1/2 h-[3px] w-[18px] -translate-x-1/2 rounded-full bg-rio-gold shadow-[0_0_10px_rgba(234,189,35,0.7)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </motion.nav>

            {/* Right side: CTA + Hamburger */}
            <div className="justify-self-end flex items-center gap-3">
              <motion.a
                href="https://wa.me/5493585009887?text=Hola%2C%20quiero%20coordinar%20una%20demo%20de%20R%C3%ADo%20Gesti%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.68, duration: 0.4, type: "spring" }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(234,189,35,0.65)" }}
                whileTap={{ scale: 0.97 }}
                className="relative hidden overflow-hidden rounded-xl bg-gradient-to-br from-rio-gold via-yellow-300 to-rio-gold px-5 py-2.5 text-sm font-bold text-rio-dark shadow-[0_0_18px_rgba(234,189,35,0.45)] md:inline-flex"
              >
                <motion.span
                  animate={{ x: ["-110%", "210%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    ease: "easeInOut",
                    repeatDelay: 2.5,
                  }}
                  className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent"
                />
                <span className="relative z-10">Solicitar demo</span>
              </motion.a>

              {/* Hamburger (mobile) */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="relative flex h-11 w-11 items-center justify-center rounded-xl text-white/85 transition hover:bg-rio-gold/10 md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menú"
              >
                <div className="flex h-[18px] w-5 flex-col justify-between">
                  <motion.span
                    animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.26 }}
                    className="block h-[2px] w-full origin-center rounded-full bg-current"
                  />
                  <motion.span
                    animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    className="block h-[2px] w-full rounded-full bg-current"
                  />
                  <motion.span
                    animate={menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.26 }}
                    className="block h-[2px] w-full origin-center rounded-full bg-current"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              key="mobile-panel"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed bottom-0 right-0 top-0 z-[60] flex w-4/5 max-w-[320px] flex-col border-l border-rio-gold/25 bg-rio-dark shadow-[-8px_0_40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between border-b border-rio-gold/20 bg-rio-gold/[0.06] px-6 py-5">
                <a
                  href="#inicio"
                  onClick={handleLogoClick}
                  className="inline-flex items-center gap-2.5"
                >
                  <Image src={Logo} alt="Río Gestión" height={30} width={30} className="rounded-full" />
                  <span className="text-base font-extrabold">
                    <span className="text-white">Río</span>
                    <span className="ml-1 bg-gradient-to-r from-rio-gold to-yellow-300 bg-clip-text text-transparent">
                      Gestión
                    </span>
                  </span>
                </a>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Cerrar menú"
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-xl leading-none text-white/55 transition hover:bg-rio-gold/10 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
                {navLinks.map(({ href, label }, i) => {
                  const id = href.slice(1);
                  const isActive = activeSection === id;
                  return (
                    <motion.a
                      key={href}
                      href={href}
                      initial={{ opacity: 0, x: 28 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.065 + 0.08,
                        type: "spring",
                        stiffness: 320,
                        damping: 28,
                      }}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex items-center gap-3 rounded-xl px-4 py-3.5 text-[0.95rem] font-semibold transition-colors hover:bg-rio-gold/[0.08] hover:text-white ${
                        isActive ? "bg-rio-gold/[0.08] text-rio-gold" : "text-white/60"
                      }`}
                    >
                      <motion.span
                        className={`h-[2px] rounded-full transition-colors duration-300 ${
                          isActive ? "bg-rio-gold" : "bg-rio-gold/40 group-hover:bg-rio-gold"
                        }`}
                        initial={{ width: 12 }}
                        animate={{ width: isActive ? 22 : 12 }}
                      />
                      {label}
                    </motion.a>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48 }}
                className="border-t border-rio-gold/20 px-6 py-6"
              >
                <a
                  href="https://wa.me/5493585009887?text=Hola%2C%20quiero%20coordinar%20una%20demo%20de%20R%C3%ADo%20Gesti%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-br from-rio-gold via-yellow-300 to-rio-gold py-3.5 text-[0.95rem] font-bold text-rio-dark shadow-[0_0_22px_rgba(234,189,35,0.45)] transition-all hover:brightness-105"
                >
                  Solicitar demo
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
