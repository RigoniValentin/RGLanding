"use client";

import Image from "next/image";
import logo from "@/assets/logosaas.png";
import { motion } from "framer-motion";

const navColumns = [
  {
    title: "Servicios",
    links: [
      { label: "Software de gestión", href: "#software-gestion" },
      { label: "Desarrollo a medida", href: "#desarrollo" },
      { label: "Diseño gráfico",      href: "#diseno" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Clientes",     href: "#clientes" },
      { label: "Testimonios",  href: "#testimonios" },
      { label: "Contacto",     href: "#contacto" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "WhatsApp", href: "https://wa.me/5493585009887" },
      { label: "Instagram", href: "https://www.instagram.com/rio_gestion/" },
      { label: "riogestion@hotmail.com", href: "mailto:riogestion@hotmail.com" },
    ],
  },
];

export const Footer = () => {
  const year = 2024;

  return (
    <footer className="relative overflow-hidden border-t border-rio-gold/20 bg-rio-dark text-white/55">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rio-gold/50 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-rio-gold/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-rio-gold/[0.04] blur-[120px]" />

      <div className="container relative py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3">
              <div className="relative">
                <motion.div
                  animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.85, 1.12, 0.85] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-rio-gold/50 blur-lg"
                />
                <Image
                  src={logo}
                  alt="Río Gestión"
                  width={44}
                  height={44}
                  className="relative rounded-full ring-2 ring-rio-gold/45"
                />
              </div>
              <span className="text-xl font-extrabold">
                <span className="text-white">Río</span>
                <span className="ml-1 bg-gradient-to-r from-rio-gold via-yellow-200 to-rio-gold bg-clip-text text-transparent">
                  Gestión
                </span>
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Software ERP, desarrollo a medida y diseño gráfico —
              todo lo que tu marca necesita para crecer, bajo un mismo techo.
            </p>

            <a
              href="https://wa.me/5493585009887?text=Hola%2C%20quiero%20coordinar%20una%20demo%20de%20R%C3%ADo%20Gesti%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl border border-rio-gold/30 bg-rio-gold/10 px-5 py-3 text-sm font-bold text-rio-gold shadow-[0_0_18px_rgba(234,189,35,0.25)] transition-all hover:border-rio-gold/60 hover:bg-rio-gold/20 hover:shadow-[0_0_32px_rgba(234,189,35,0.45)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rio-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rio-gold" />
              </span>
              Coordinar una demo
            </a>
          </motion.div>

          {/* Nav columns */}
          <div className="grid gap-8 sm:grid-cols-3">
            {navColumns.map((col) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-rio-gold">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group inline-flex min-h-[36px] items-center gap-2 py-2 text-sm text-white/55 transition-colors hover:text-rio-gold"
                      >
                        <span className="h-[2px] w-2 rounded-full bg-rio-gold/30 transition-all group-hover:w-4 group-hover:bg-rio-gold" />
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-rio-gold/20 to-transparent" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-white/35 md:flex-row">
          <span>&copy; {year} Río Gestión. Todos los derechos reservados.</span>
          <span>Diseñado y desarrollado en Argentina</span>
        </div>
      </div>
    </footer>
  );
};
