"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { PlanFinderButton } from "@/components/PlanFinderButton";
import { SectionTitle } from "@/components/SectionTitle";

import imgGallis    from "@/assets/Cliente1.png";
import imgTricarios from "@/assets/Cliente2.png";
import imgMasaro    from "@/assets/Cliente3.png";
import imgVestis    from "@/assets/Cliente4.png";
import imgNehilak   from "@/assets/Cliente5.png";
import imgViaje     from "@/assets/Cliente6.png";
import imgSolkia    from "@/assets/Cliente7.png";
import imgRenatango from "@/assets/Cliente8.png";
import imgSarah     from "@/assets/Cliente9.png";

/* ─── Desarrollo a medida — LIGHT ─────────────────────────── */

const capabilities = [
  { icon: "📱", title: "Apps mobile", desc: "Apps nativas y multiplataforma con UI moderna y backend escalable.",highlight: true  },
  { icon: "🛒", title: "Tiendas online",   desc: "E-commerce moderno a medida con posibildiad de integrarlo con el sistema Río Gestión u otros", highlight: true },
  { icon: "🌐", title: "Sitios web institucionales",  desc: "Landing pages, sitios corporativos y micro-sites con animaciones y SEO." ,highlight: true },
  { icon: "⚙️", title: "Integraciones a medida",      desc: "Mercado Pago, ARCA, WhatsApp, Google Sheets, sistemas legacy y más." ,highlight: true },
  { icon: "🤖", title: "Automatizaciones con IA",     desc: "Bots, asistentes y flujos inteligentes que reducen trabajo manual." ,highlight: true },
  { icon: "🔐", title: "Mantenimiento y soporte",     desc: "Equipo dedicado a evolución continua, seguridad y monitoreo del producto." ,highlight: true },
];

const projects = [
  { name: "Gallis & Co",            url: "https://gallisandco.com/en",               sector: "Estudio jurídico/legales",     color: "from-slate-500/30 to-zinc-700/10",    accent: "#64748b", image: imgGallis    },
  { name: "Tricarios Grow Shop",    url: "https://tricariosgrowshop.com/",          sector: "Grow Shop",             color: "from-green-500/30 to-emerald-700/10", accent: "#10b981", image: imgTricarios },
  { name: "Masaro",                 url: "https://masaro.com.ar/",                  sector: "Limpieza profesional",  color: "from-cyan-500/30 to-sky-700/10",       accent: "#06b6d4", image: imgMasaro    },
  { name: "Vestís Evolución",       url: "https://www.vestisevolucion.com/",        sector: "Indumentaria y moda",          color: "from-rose-500/30 to-pink-700/10",      accent: "#f43f5e", image: imgVestis    },
  { name: "Expreso Mi Arte",        url: "https://expresomiartenehilak.com/",       sector: "Educación y Capacitación",   color: "from-violet-500/30 to-purple-700/10",  accent: "#a855f7", image: imgNehilak   },
  { name: "Viaje al Ser",           url: "https://viajealser.com/",                 sector: "Bienestar & Consciencia",  color: "from-amber-500/30 to-orange-700/10",   accent: "#f59e0b", image: imgViaje     },
  { name: "Solkia Pilates",         url: "https://solkiapilates.com/",              sector: "Pilates",               color: "from-teal-500/30 to-cyan-700/10",      accent: "#14b8a6", image: imgSolkia    },
  { name: "Renatango",              url: "https://www.renatango.com/",              sector: "Tango & cultura",       color: "from-red-500/30 to-rose-700/10",       accent: "#ef4444", image: imgRenatango },
  { name: "Pilates Transmission",   url: "https://pilatestransmissionsarah.com/",   sector: "Pilates & Consciencia",  color: "from-indigo-500/30 to-blue-700/10",    accent: "#6366f1", image: imgSarah     },
];

export const ServiceCustomDev = () => {
  return (
    <section
      id="desarrollo"
      className="relative scroll-mt-[var(--header-height)] overflow-hidden bg-white py-28 text-rio-dark"
    >
      {/* Background grid + dorado suave (light) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mask-radial-fade"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,12,15,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,12,15,0.045) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[450px] w-[450px] rounded-full bg-rio-gold/[0.18] blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-rio-gold/[0.12] blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rio-gold/55 to-transparent" />

      <div className="container relative">
        {/* Header */}
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
              02 · Desarrollo a medida
            </div>
          </div>
          <SectionTitle className="mt-5 font-black text-rio-dark">
            Cualquier idea,{" "}
            <span className="bg-gradient-to-r from-rio-gold via-yellow-500 to-rio-gold bg-clip-text text-transparent">
              en código real.
            </span>
          </SectionTitle>
          <p className="mt-5 text-pretty text-center text-lg leading-8 text-rio-dark/65 md:text-xl">
            Resolvemos cualquier tipo de app o sitio web. Y si necesitás una{" "}
            <span className="font-semibold text-rio-dark">tienda online vinculada</span>{" "}
            a tu sistema Río Gestión, la armamos sincronizada de punta a punta.
          </p>
        </motion.div>

        {/* Bloque destacado — tienda + ERP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-rio-dark/[0.08] bg-white p-8 shadow-[0_28px_70px_-25px_rgba(234,189,35,0.35)] md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl border-gold-glow opacity-50" />
          <div className="pointer-events-none absolute -top-32 -right-20 h-72 w-72 rounded-full bg-rio-gold/20 blur-[100px]" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-rio-gold/40 bg-rio-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rio-dark">
                ★ Servicio estrella
              </div>
              <h3 className="mt-5 text-3xl font-bold leading-tight text-rio-dark md:text-[40px] md:leading-[1.1]">
                Tienda online{" "}
                <span className="bg-gradient-to-r from-rio-gold via-yellow-500 to-rio-gold bg-clip-text text-transparent">
                  vinculada a tu sistema
                </span>{" "}
                Río Gestión
              </h3>
              <p className="mt-5 text-lg leading-8 text-rio-dark/70">
                Tu catálogo, precios y stock se sincronizan en tiempo real con
                el ERP. 
              </p>
              <ul className="mt-6 space-y-2.5 text-rio-dark/75">
                {[
                  "Catálogo sincronizado",
                  "Carrito + Pasarela de Pagos + comprobantes A/B/C",
                  "Vendé en cualquier momento, gestioná desde Río Gestión",
                  "Diseño exclusivo, mobile-first y rápido",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-1 text-rio-gold">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <SyncMockup />
          </div>
        </motion.div>

        {/* Capacidades */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                c.highlight
                  ? "border-rio-gold/45 bg-gradient-to-br from-rio-gold/[0.10] to-rio-gold/[0.02] shadow-[0_18px_45px_-15px_rgba(234,189,35,0.35)] hover:border-rio-gold/65 hover:shadow-[0_24px_60px_-15px_rgba(234,189,35,0.55)]"
                  : "border-rio-dark/[0.08] bg-white shadow-[0_8px_28px_-12px_rgba(11,12,15,0.15)] hover:border-rio-gold/45 hover:shadow-[0_18px_45px_-15px_rgba(234,189,35,0.40)]"
              }`}
            >
              <span className="text-3xl">{c.icon}</span>
              <h4 className="mt-4 text-lg font-bold text-rio-dark">{c.title}</h4>
              <p className="mt-2 text-sm leading-6 text-rio-dark/60">{c.desc}</p>
              <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-rio-gold/0 blur-2xl transition-all duration-500 group-hover:bg-rio-gold/25" />
            </motion.div>
          ))}
        </div>

        {/* Proyectos */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-28 text-center"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-rio-dark/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-rio-dark/70 shadow-sm">
              Proyectos en vivo
            </div>
          </div>
          <h3 className="mt-4 text-3xl font-bold text-rio-dark md:text-4xl">
            Algunos de nuestros{" "}
            <span className="bg-gradient-to-r from-rio-gold via-yellow-500 to-rio-gold bg-clip-text text-transparent">
              desarrollos.
            </span>
          </h3>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectPreview key={p.name} {...p} delay={i * 0.06} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-20 overflow-hidden rounded-3xl border border-rio-gold/40 bg-white p-10 text-center shadow-[0_28px_70px_-25px_rgba(234,189,35,0.45)] md:p-14"
        >
          <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rio-gold/20 blur-[100px]" />
          <h3 className="relative text-2xl font-bold text-rio-dark md:text-3xl">¿Tenés un proyecto en mente?</h3>
          <p className="relative mx-auto mt-3 max-w-xl text-rio-dark/65">
            Cada desarrollo es único. Te ayudamos a encontrar el alcance, stack y plan ideal.
          </p>
          <div className="relative mt-7 flex justify-center">
            <PlanFinderButton service="desarrollo" />
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rio-gold/55 to-transparent" />
    </section>
  );
};

/* ─── SyncMockup (mantiene look oscuro: representa la UI real del producto RG WEB) ─ */
function SyncMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-rio-gold/[0.18] blur-3xl" />
      <div className="relative grid gap-4">
        <motion.div
          animate={{ y: [-4, 4] }}
          transition={{ duration: 3.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="relative rounded-2xl border border-white/10 bg-rio-panel/95 p-5 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest text-rio-gold">RG WEB · ERP</span>
            <span className="flex items-center gap-1.5 text-[10px] text-white/40">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />EN LÍNEA
            </span>
          </div>
          <div className="mt-3 space-y-2">
            <Row label="Stock #2410" value="148 u." />
            <Row label="Precio venta" value="$ 12.450" />
            <Row label="Última venta" value="hace 2 min" />
          </div>
        </motion.div>

        <div className="relative mx-auto h-12 w-px">
          <div className="absolute inset-0 bg-gradient-to-b from-rio-gold/0 via-rio-gold/60 to-rio-gold/0" />
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-1 h-2 w-2 rounded-full bg-rio-gold shadow-[0_0_8px_rgba(234,189,35,0.8)]"
          />
        </div>

        <motion.div
          animate={{ y: [4, -4] }}
          transition={{ duration: 3.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.3 }}
          className="relative rounded-2xl border border-rio-gold/30 bg-gradient-to-br from-rio-gold/[0.08] to-transparent p-5 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest text-rio-gold">Tienda online</span>
            <span className="flex items-center gap-1.5 text-[10px] font-semibold text-rio-dark/70">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />SINCRONIZADO
            </span>
          </div>
          <div className="mt-3 space-y-2">
            <Row label="Stock visible" value="148 u." gold light />
            <Row label="Precio web" value="$ 12.450" gold light />
            <Row label="Pedido nuevo" value="+1 carrito" gold light />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Row({ label, value, gold = false, light = false }: { label: string; value: string; gold?: boolean; light?: boolean }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className={light ? "font-medium text-rio-dark/70" : "text-white/50"}>{label}</span>
      <span className={`font-bold ${gold ? "text-rio-gold" : "text-white"}`}>{value}</span>
    </div>
  );
}

/* ─── ProjectPreview ──────────────────────────────────────── */
function ProjectPreview({ name, url, sector, color, accent, image, delay }: {
  name: string; url: string; sector: string; color: string; accent: string;
  image?: StaticImageData | null; delay: number;
}) {
  return (
    <motion.a
      href={url} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -6 }}
      className="group relative block overflow-hidden rounded-2xl border border-rio-dark/[0.08] bg-white shadow-[0_10px_35px_-15px_rgba(11,12,15,0.18)] transition-all duration-300 hover:border-rio-gold/45 hover:shadow-[0_24px_60px_-15px_rgba(234,189,35,0.45)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-rio-dark">
        {image ? (
          <>
            <Image
              src={image}
              alt={`Vista previa de ${name}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${color}`} />
            <div className="absolute inset-0 bg-grid-soft opacity-40" />
            <div
              className="absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: `radial-gradient(circle at 50% 50%, ${accent}40, transparent 60%)` }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span
                className="text-4xl font-black tracking-tight transition-transform duration-500 group-hover:scale-110"
                style={{ color: accent }}
              >
                {name}
              </span>
            </div>
          </>
        )}

        <span className="absolute bottom-3 right-3 z-10 inline-flex translate-y-1 items-center gap-1.5 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Visitar sitio <span className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
        </span>
      </div>
      <div className="flex items-center justify-between border-t border-rio-dark/[0.06] px-5 py-4">
        <div>
          <p className="text-sm font-bold text-rio-dark">{name}</p>
          <p className="text-xs text-rio-dark/55">{sector}</p>
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-rio-gold/90">Live</span>
      </div>
    </motion.a>
  );
}
