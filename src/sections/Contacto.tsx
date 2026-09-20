"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dashboardBg from "@/assets/DashboardFinal.png";
import { SectionTitle } from "@/components/SectionTitle";

const WHATSAPP_NUMBER = "5493585009887";
const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, quiero hacer una consulta sobre Río Gestión.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

const CHANNELS = [
  {
    label: "WhatsApp",
    value: "+54 9 3585 009-887",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    accent: "green",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-white">
        <path d="M16.003 0C7.169 0 0 7.169 0 16.003c0 2.823.74 5.512 2.078 7.866L0 32l8.288-2.078A15.93 15.93 0 0 0 16.003 32C24.837 32 32 24.837 32 16.003 32 7.169 24.837 0 16.003 0zm0 28.834a12.79 12.79 0 0 1-6.526-1.785l-.468-.279-4.918 1.234 1.314-4.793-.305-.494A12.83 12.83 0 0 1 3.166 16C3.166 8.937 8.937 3.166 16 3.166 23.063 3.166 28.834 8.937 28.834 16c0 7.063-5.771 12.834-12.834 12.834zm7.046-9.616c-.387-.193-2.285-1.127-2.638-1.255-.353-.128-.61-.193-.867.193-.257.386-.995 1.255-1.219 1.513-.224.257-.448.29-.835.097-.387-.193-1.633-.602-3.11-1.92-1.15-1.026-1.927-2.293-2.151-2.68-.224-.386-.024-.594.169-.787.173-.173.386-.45.579-.676.193-.224.257-.386.386-.643.128-.257.064-.482-.032-.676-.097-.193-.867-2.09-1.188-2.863-.313-.75-.63-.65-.867-.66-.224-.012-.482-.012-.74-.012a1.42 1.42 0 0 0-1.029.482c-.354.386-1.35 1.32-1.35 3.22 0 1.9 1.382 3.734 1.575 3.992.193.257 2.721 4.156 6.6 5.832.923.4 1.643.638 2.205.816.926.295 1.768.253 2.434.154.743-.111 2.285-.934 2.607-1.834.322-.9.322-1.672.225-1.834-.097-.16-.354-.257-.74-.45z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "riogestion@hotmail.com",
    href: "mailto:riogestion@hotmail.com",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m3 7 9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@riogestion",
    href: "https://instagram.com/riogestion",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export const Contacto = () => {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-[var(--header-height)] overflow-hidden bg-gradient-to-b from-rio-dark via-rio-soft to-rio-dark py-24 text-white md:py-28"
    >
      {/* Background fx */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <Image
          src={dashboardBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rio-dark via-rio-dark/40 to-rio-dark" />
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-25 mask-radial-fade" />
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -35, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-1/3 h-[520px] w-[520px] rounded-full bg-rio-gold/[0.10] blur-[150px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 35, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="pointer-events-none absolute -right-32 bottom-1/4 h-[460px] w-[460px] rounded-full bg-rio-gold/[0.08] blur-[140px]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rio-gold/55 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rio-gold/40 to-transparent" />

      <div className="container relative">
        {/* ── Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading"
        >
          <div className="flex justify-center">
            <div className="glow-pill animate-pulse-glow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rio-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rio-gold" />
              </span>
              Estamos en línea
            </div>
          </div>

          <SectionTitle tone="light" className="mt-5 font-black">
            ¿Tenés alguna consulta?{" "}
            <span className="bg-gradient-to-r from-rio-gold via-yellow-200 to-rio-gold bg-clip-text text-transparent">
              Hablemos por WhatsApp.
            </span>
          </SectionTitle>

          <p className="section-description mt-5">
            Cualquier duda, idea o proyecto — el equipo responde directo,
            sin formularios ni vueltas.
          </p>
        </motion.div>

        {/* ── Hero WhatsApp card (light) ─────────────────────────── */}
        <motion.a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6 }}
          className="group relative isolate mx-auto mt-12 flex max-w-4xl flex-col items-center gap-8 overflow-hidden rounded-3xl border border-rio-gold/35 bg-white p-8 text-rio-dark shadow-[0_30px_90px_-25px_rgba(234,189,35,0.55)] md:flex-row md:p-12"
        >
          {/* Glow decorativo */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rio-gold/25 blur-[100px] transition-opacity duration-700 group-hover:opacity-80"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#25D366]/15 blur-[110px]"
          />

          {/* Shine sweep */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 -left-[60%] z-10 w-[55%] -skew-x-12 bg-gradient-to-r from-transparent via-rio-dark/[0.06] to-transparent opacity-0 transition-[left,opacity] duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
          />

          {/* Icono */}
          <div className="relative z-10 shrink-0">
            <div className="absolute inset-0 -z-10 animate-pulse rounded-3xl bg-[#25D366]/30 blur-2xl" />
            <span className="grid h-24 w-24 place-items-center rounded-3xl bg-[#25D366] text-white shadow-[0_18px_45px_-10px_rgba(37,211,102,0.7)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg] md:h-28 md:w-28">
              <svg viewBox="0 0 32 32" aria-hidden="true" className="h-14 w-14 fill-white md:h-16 md:w-16">
                <path d="M16.003 0C7.169 0 0 7.169 0 16.003c0 2.823.74 5.512 2.078 7.866L0 32l8.288-2.078A15.93 15.93 0 0 0 16.003 32C24.837 32 32 24.837 32 16.003 32 7.169 24.837 0 16.003 0zm0 28.834a12.79 12.79 0 0 1-6.526-1.785l-.468-.279-4.918 1.234 1.314-4.793-.305-.494A12.83 12.83 0 0 1 3.166 16C3.166 8.937 8.937 3.166 16 3.166 23.063 3.166 28.834 8.937 28.834 16c0 7.063-5.771 12.834-12.834 12.834zm7.046-9.616c-.387-.193-2.285-1.127-2.638-1.255-.353-.128-.61-.193-.867.193-.257.386-.995 1.255-1.219 1.513-.224.257-.448.29-.835.097-.387-.193-1.633-.602-3.11-1.92-1.15-1.026-1.927-2.293-2.151-2.68-.224-.386-.024-.594.169-.787.173-.173.386-.45.579-.676.193-.224.257-.386.386-.643.128-.257.064-.482-.032-.676-.097-.193-.867-2.09-1.188-2.863-.313-.75-.63-.65-.867-.66-.224-.012-.482-.012-.74-.012a1.42 1.42 0 0 0-1.029.482c-.354.386-1.35 1.32-1.35 3.22 0 1.9 1.382 3.734 1.575 3.992.193.257 2.721 4.156 6.6 5.832.923.4 1.643.638 2.205.816.926.295 1.768.253 2.434.154.743-.111 2.285-.934 2.607-1.834.322-.9.322-1.672.225-1.834-.097-.16-.354-.257-.74-.45z" />
              </svg>
            </span>
          </div>

          {/* Texto + CTA */}
          <div className="relative z-10 flex-1 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/35 bg-[#25D366]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#1F8E4F]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-80" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#25D366]" />
              </span>
              WhatsApp · Respuesta inmediata
            </span>

            <h3 className="mt-4 text-balance text-2xl font-black leading-[1.1] tracking-tight md:text-4xl md:leading-[1.05]">
              Escribinos por WhatsApp
              <br className="hidden md:block" />
              y te respondemos hoy.
            </h3>

            <p className="mt-3 text-base leading-7 text-rio-dark/65 md:text-lg md:leading-8">
              La forma más rápida de hablar con el equipo — sin formularios ni demoras.
            </p>

            <span className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-rio-gold via-yellow-300 to-rio-gold px-7 py-3.5 text-base font-extrabold text-rio-dark shadow-[0_0_30px_rgba(234,189,35,0.5)] transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(234,189,35,0.75)]">
              Iniciar conversación
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </motion.a>

        {/* ── Otros canales (light chips) ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          {CHANNELS.map((c) => {
            const isExternal = c.href.startsWith("http");
            const accentClasses =
              c.accent === "green"
                ? "bg-[#25D366] text-white shadow-[0_8px_24px_-8px_rgba(37,211,102,0.6)]"
                : "bg-rio-gold text-rio-dark shadow-[0_8px_24px_-8px_rgba(234,189,35,0.6)]";

            return (
              <a
                key={c.label}
                href={c.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group/chip flex items-center gap-4 rounded-2xl border border-white/10 bg-rio-light p-4 transition-all duration-300 hover:-translate-y-1 hover:border-rio-gold/55 hover:shadow-[0_18px_45px_-15px_rgba(234,189,35,0.45)]"
              >
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover/chip:scale-110 ${accentClasses}`}>
                  {c.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-rio-dark/55">
                    {c.label}
                  </p>
                  <p className="truncate text-sm font-bold text-rio-dark transition-colors">
                    {c.value}
                  </p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-rio-dark/[0.06] text-rio-dark/45 transition-all duration-300 group-hover/chip:bg-rio-gold group-hover/chip:text-rio-dark">
                  <span className="text-base transition-transform duration-300 group-hover/chip:translate-x-0.5">→</span>
                </span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
