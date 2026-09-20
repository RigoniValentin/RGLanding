"use client";

import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import CajaCentral  from "@/assets/CajaCentral.png";
import CajaCentral2 from "@/assets/CajaCentral2.png";
import CajaCentral3 from "@/assets/CajaCentral3.png";
import ARCA         from "@/assets/ARCA.png";
import ARCA2         from "@/assets/ARCA2.png";
import DashboardFinal from "@/assets/DashboardFinal.png";
import DashboardFinal2 from "@/assets/DashboardFinal2.png";
import DashboardFinal3 from "@/assets/DashboardFinal3.png";
import DashboardFinal4 from "@/assets/DashboardFinal4.png";
import DashboardFinal5 from "@/assets/DashboardFinal5.png";
import DashboardFinal6 from "@/assets/DashboardFinal6.png";
import dashboardAlt1   from "@/assets/dashboard-principal-2.png";
import dashboardAlt2   from "@/assets/dashboard-principal-3.png";
import dashboardAlt3   from "@/assets/dashboard-principal.png";
import wspImage1 from "@/assets/Wsp.png";

import { PlanFinderButton } from "@/components/PlanFinderButton";
import { SectionTitle } from "@/components/SectionTitle";

/* ─────────────────────────────────────────────────────────────
   Software de gestión RG WEB — LIGHT
   ───────────────────────────────────────────────────────────── */

type FeatureHighlight = {
  lead: string;
  body: string;
  callout?: { label: string; text: string; icon: string };
  callout2?: { label: string; text: string; icon: string };
  whatsAppPreview?: {
    sent: { title: string; subtitle?: string }[];
    received: { icon: string; label: string }[];
  };
  closing?: string;
};

type Feature = {
  icon: string;
  title: string;
  desc: string;
  image: StaticImageData;
  images: StaticImageData[];
  tag: string;
  highlight?: FeatureHighlight;
};

const features: Feature[] = [
  {
    icon: "▦",
    title: "Dashboard",
    desc: "",
    image: DashboardFinal,
    images: [DashboardFinal, DashboardFinal2, DashboardFinal3, DashboardFinal4, DashboardFinal5, DashboardFinal6],
    tag: "Analítica",
    highlight: {
      lead:
        "Toda la información clave de tu negocio, resumida en un solo lugar.",
      body:
        "Visualizá en tiempo real el rendimiento general de tu empresa y analizá cualquier período con indicadores claros de ventas, facturación, ganancia, margen, ticket promedio y balance de Caja Central.",
      callout: {
        label: "Análisis en profundidad",
        icon: "📊",
        text:
          "Además, conocé cómo se distribuyen tus cobros, cuáles son tus productos, categorías y clientes más importantes, el rendimiento de cada cajero, los días y horarios de mayor actividad y los productos que necesitan reposición.",
      },
      closing:
        "Toda la información que necesitás para entender tu negocio y tomar mejores decisiones, apenas ingresás al sistema.",
    },
  },
  {
    icon: "▣",
    title: "Caja Central",
    desc: "",
    image: CajaCentral,
    images: [CajaCentral, CajaCentral2, CajaCentral3],
    tag: "Tesorería",
    highlight: {
      lead:
        "Todo el movimiento de dinero de tu negocio, en un solo lugar.",
      body:
        "Visualizá de forma centralizada cada ingreso y egreso: cierres de caja, cobranzas, gastos y demás movimientos financieros.",
      callout: {
        label: "Balance",
        icon: "⚖",
        text:
          "Consultá el balance de tu negocio por el período que necesites y mantené siempre una visión clara de cuánto dinero entró, cuánto salió y cuál es el resultado.",
      },
    },
  },
  {
    icon: "◉",
    title: "Facturación electrónica ARCA",
    desc: "",
    image: ARCA,
    images: [ARCA, ARCA2],
    tag: "Fiscal",
    highlight: {
      lead:
        "Facturá directamente desde Río Gestión, sin salir del sistema.",
      body:
        "Emití comprobantes electrónicos A, B y C con integración nativa a ARCA, de forma rápida y centralizada.",
      callout: {
        label: "Constancias fiscales",
        icon: "🧾",
        text:
          "Accedé también a constancias y consultas fiscales desde el mismo entorno, evitando procesos manuales y simplificando la operatoria diaria.",
      },
    },
  },
  {
    icon: "⬢",
    title: "Carga inteligente de comprobantes con IA",
    desc: "",
    image: dashboardAlt2,
    images: [dashboardAlt2, dashboardAlt3, dashboardAlt1],
    tag: "Automatización",
    highlight: {
      lead:
        "Sacale una foto al comprobante y dejá que Río Gestión haga el resto.",
      body:
        "La inteligencia artificial analiza la imagen, identifica los datos principales de la compra y agiliza su carga en el sistema, reduciendo tareas manuales, errores de tipeo y tiempo administrativo.",
      closing:
        "Menos tiempo cargando comprobantes. Más tiempo para gestionar tu negocio.",
    },
  },
  {
    icon: "✦",
    title: "Integración con WhatsApp Business",
    desc: "",
    image: wspImage1,
    images: [wspImage1],
    tag: "WhatsApp",
    highlight: {
      lead:
        "Vincúlá tu número de WhatsApp Business y comunicate con tus clientes directo desde Río Gestión.",
      body:
        "Enviá comprobantes, resúmenes y promociones desde el sistema y recibí alertas automáticas sin salir de tu WhatsApp.",
      whatsAppPreview: {
        sent: [
          { title: "Comprobante #00123", subtitle: "Total $15.450 · Enviado ✓" },
          { title: "Resumen de cuenta", subtitle: "Saldo $45.200 · Ver detalle" },
          { title: "Promo 2x1 hoy", subtitle: "Enviado a 240 clientes" },
        ],
        received: [
          { icon: "📉", label: "Stock bajo" },
          { icon: "💰", label: "Ventas top" },
          { icon: "🧾", label: "Cierre de caja" },
          { icon: "📊", label: "Informes" },
        ],
      },
      closing:
        "Tu negocio y tus clientes conectados en el canal que más usan.",
    },
  },
];

const modules = [
  { icon: "◎", title: "Caja Central",     desc: "Control unificado de ingresos y egresos.",      tag: "Tesorería"    },
  { icon: "◎", title: "Gestión de Mesas", desc: "Pedidos y facturación instantánea.",             tag: "Gastronómico" },
  { icon: "◎", title: "Rendimientos",     desc: "Rentabilidad y evolución del negocio.",          tag: "Analítica"    },
  { icon: "◎", title: "Facturación",      desc: "Comprobantes A, B y C ilimitados.",              tag: "Fiscal"       },
  { icon: "◎", title: "App Mobile",       desc: "Operación desde el celular en todo momento.",    tag: "Movilidad"    },
  { icon: "◎", title: "Balance General",  desc: "Visión financiera al cierre diario.",            tag: "Contabilidad" },
  { icon: "◎", title: "RIO BOT con IA",  desc: "Consultas en lenguaje natural a tu negocio.",    tag: "IA"           },
  { icon: "◎", title: "Multi-sucursal",   desc: "Operá varias sucursales en una sola cuenta.",    tag: "Escalable"    },
  { icon: "◎", title: "Integraciones",   desc: "Conectá RG WEB con tu ecosistema digital.",      tag: "Conectividad" },
];

export const ServiceManagement = () => {
  return (
    <section
      id="software-gestion"
      className="relative scroll-mt-[var(--header-height)] overflow-hidden bg-white py-28 text-rio-dark"
    >
      {/* Background fx */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mask-radial-fade"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,12,15,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,12,15,0.045) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-rio-gold/[0.18] blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-rio-gold/[0.12] blur-[120px]" />
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
          {/* 1. Tag (eyebrow) — el más sutil */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-rio-gold/40 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rio-dark shadow-[0_8px_24px_-12px_rgba(234,189,35,0.5)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rio-gold" />
              01 · Software de gestión
            </div>
          </div>

          {/* 2. Título principal con jerarquía dark / gold */}
          <SectionTitle className="mt-6 font-black text-rio-dark">
            Dejá de adivinar qué pasa en tu negocio.
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-rio-gold via-yellow-500 to-rio-gold bg-clip-text text-transparent">
              Empezá a saberlo.
            </span>
          </SectionTitle>

          {/* 3. Lead — descripción general (jerarquía media) */}
          <p className="mt-7 text-pretty text-center text-lg leading-8 text-rio-dark/65 md:text-xl md:leading-9">
            RG WEB centraliza toda tu gestión para que ningún movimiento se te
            escape. Ventas, caja, cobranzas, gastos, compras, stock, balances
            y facturación electrónica, todo conectado en una misma plataforma.
          </p>

          {/* 4. Benefit — consecuencia directa (mayor énfasis) */}
          <p className="mt-4 text-pretty text-center text-lg font-semibold leading-8 text-rio-dark md:text-xl md:leading-9">
            Conocé qué entra, qué sale, dónde está tu dinero y qué está
            pasando en tu negocio, estés donde estés.
          </p>

          {/* 5. Tagline de cierre — contraste antes/después */}
          <div className="mt-8 flex justify-center">
            <p className="inline-block border-l-[3px] border-rio-gold bg-gradient-to-r from-rio-gold/[0.10] to-transparent py-3 pl-5 pr-4 text-base leading-7 text-rio-dark/70 md:text-lg md:leading-8">
              Menos tiempo controlando.{" "}
              <span className="font-bold text-rio-dark">
                Más tiempo haciendo crecer tu negocio.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Features con imagen + texto, alternados */}
        <div className="mt-20 space-y-24">
          {features.map((f, i) => (
            <FeatureRow key={f.title} feature={f} reverse={i % 2 === 1} index={i} />
          ))}
        </div>

        {/* ── …y mucho más ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-28 overflow-hidden rounded-3xl border border-rio-gold/35 bg-gradient-to-br from-rio-gold/[0.10] via-white to-rio-gold/[0.04] p-8 shadow-[0_24px_70px_-25px_rgba(234,189,35,0.40)] md:p-14"
        >
          {/* Decoraciones */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rio-gold/20 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-rio-gold/12 blur-[110px]" />

          <div className="relative">
            {/* Título principal */}
            <h3 className="text-balance text-center text-4xl font-black tracking-tight text-rio-dark md:text-6xl md:leading-[1.02]">
              …y{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-rio-gold via-yellow-500 to-rio-gold bg-clip-text text-transparent">
                  mucho más
                </span>
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-1 right-1 h-[10px] rounded-full bg-rio-gold/35"
                />
              </span>
            </h3>

            {/* Chips / Pills de módulos */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
              {modules.map((m, i) => (
                <motion.span
                  key={m.title}
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group/chip inline-flex items-center gap-2 rounded-full border border-rio-dark/10 bg-white px-4 py-2 text-sm font-semibold text-rio-dark shadow-[0_4px_12px_-6px_rgba(11,12,15,0.12)] transition-all hover:-translate-y-0.5 hover:border-rio-gold/45 hover:shadow-[0_8px_24px_-10px_rgba(234,189,35,0.45)]"
                >
                  <span className="text-base text-rio-gold transition-transform group-hover/chip:scale-110">
                    {m.icon}
                  </span>
                  {m.title}
                  <span className="hidden rounded-full bg-rio-dark/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-rio-dark/55 sm:inline-block">
                    {m.tag}
                  </span>
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-20 overflow-hidden rounded-3xl border border-rio-gold/40 bg-white p-10 text-center shadow-[0_28px_70px_-25px_rgba(234,189,35,0.45)] md:p-14"
        >
          <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rio-gold/20 blur-[100px]" />
          <h3 className="relative text-2xl font-bold text-rio-dark md:text-3xl">
            Cada negocio es único. Tu plan también.
          </h3>
          <p className="relative mx-auto mt-3 max-w-xl text-rio-dark/60">
            El mejor plan depende de tu rubro, condición frente al IVA,
            cantidad de sucursales y necesidades. Te ayudamos a encontrarlo.
          </p>
          <div className="relative mt-7 flex justify-center">
            <PlanFinderButton service="gestion" />
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rio-gold/55 to-transparent" />
    </section>
  );
};

/* ─── FeatureRow (light) ────────────────────────────────────── */

function FeatureRow({
  feature,
  reverse,
  index,
}: {
  feature: (typeof features)[number];
  reverse: boolean;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const totalImages = feature.images.length;
  const hasGallery = totalImages > 1;

  // Auto-ciclo de imágenes (se pausa en hover o con el lightbox abierto)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (!hasGallery || paused || open) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % totalImages);
    }, 2500);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [hasGallery, paused, open, totalImages]);

  // ESC + Arrow keys + body lock cuando el lightbox está abierto
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (hasGallery) {
        if (e.key === "ArrowRight")
          setLightboxIndex((i) => (i + 1) % totalImages);
        if (e.key === "ArrowLeft")
          setLightboxIndex((i) => (i - 1 + totalImages) % totalImages);
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, hasGallery, totalImages]);

  const openLightbox = () => {
    setLightboxIndex(currentIndex);
    setOpen(true);
  };
  const prevLightbox = () =>
    setLightboxIndex((i) => (i - 1 + totalImages) % totalImages);
  const nextLightbox = () =>
    setLightboxIndex((i) => (i + 1) % totalImages);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`grid items-center gap-12 lg:grid-cols-2 ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Imagen */}
      <div
        className="relative lg:[direction:ltr]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute -inset-6 rounded-3xl bg-rio-gold/[0.15] blur-3xl" />
        <motion.div
          whileHover={{ y: -8, rotate: reverse ? -0.6 : 0.6 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="group/img relative overflow-hidden rounded-2xl border border-rio-dark/[0.08] shadow-[0_30px_70px_-20px_rgba(11,12,15,0.30)] ring-1 ring-rio-dark/5"
        >
          {/* Frame top — emula barra de ventana */}
          <div className="flex items-center gap-2 border-b border-rio-dark/10 bg-rio-light px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="ml-3 text-[10px] font-bold uppercase tracking-widest text-rio-dark/40">RG WEB</span>
            {hasGallery && (
              <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-rio-dark/40">
                {currentIndex + 1} / {totalImages}
              </span>
            )}
          </div>

          {/* Botón — abre el lightbox en la imagen actual */}
          <button
            type="button"
            onClick={openLightbox}
            aria-label={`Ver ${feature.title} en pantalla completa`}
            className="relative block w-full cursor-zoom-in overflow-hidden bg-rio-light"
          >
            <div className="relative aspect-video overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    key={currentIndex}
                    src={feature.images[currentIndex]}
                    alt={`${feature.title} — imagen ${currentIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-contain"
                    placeholder="blur"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Hint "Ver galería" */}
              <span className="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-rio-dark/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/img:opacity-100">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M9 21H3v-6" />
                  <path d="M14 10 3 21" />
                </svg>
                Ver galería
              </span>
            </div>
          </button>

          {/* Indicadores (dots) — debajo de la imagen */}
          {hasGallery && (
            <div className="flex items-center justify-center gap-2 border-t border-rio-dark/[0.06] bg-rio-light/60 px-4 py-3">
              {feature.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Mostrar imagen ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-7 bg-rio-gold shadow-[0_0_10px_rgba(234,189,35,0.5)]"
                      : "w-1.5 bg-rio-dark/25 hover:bg-rio-dark/50"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Badge flotante */}
        <motion.div
          animate={{ y: [-6, 6] }}
          transition={{ duration: 3.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          className="absolute -bottom-6 right-6 z-10 rounded-xl border border-rio-gold/40 bg-white px-4 py-3 shadow-[0_18px_50px_-15px_rgba(234,189,35,0.45)] backdrop-blur-sm"
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-rio-gold">{feature.tag}</p>
          <p className="mt-0.5 text-sm font-bold text-rio-dark">{feature.title}</p>
        </motion.div>
      </div>

      {/* Copy */}
      <div className="lg:[direction:ltr]">
        <span className="rounded-full border border-rio-gold/40 bg-rio-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-rio-dark">
          0{index + 1} · {feature.tag}
        </span>
        <h3 className="mt-5 text-3xl font-bold leading-tight text-rio-dark md:text-[40px] md:leading-[1.1]">
          {feature.title}
        </h3>

        {feature.highlight ? (
          <div className="mt-6 space-y-5">
            {/* Lead — frase principal destacada */}
            <p className="text-2xl font-bold leading-snug text-rio-dark md:text-[28px] md:leading-[1.2]">
              <span className="relative inline">
                {feature.highlight.lead}
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-rio-gold/60"
                />
              </span>
            </p>

            {/* Cuerpo — explicación */}
            <p className="text-base leading-7 text-rio-dark/70 md:text-lg md:leading-8">
              {feature.highlight.body}
            </p>

            {/* Callout — info de balance */}
            {feature.highlight.callout && (
              <div className="relative overflow-hidden rounded-2xl border border-rio-gold/45 bg-gradient-to-br from-rio-gold/[0.10] via-rio-gold/[0.04] to-transparent p-5 shadow-[0_18px_40px_-20px_rgba(234,189,35,0.45)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rio-gold/20 blur-2xl"
                />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rio-gold text-2xl text-rio-dark shadow-[0_8px_20px_-8px_rgba(234,189,35,0.7)]">
                    {feature.highlight.callout.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-rio-gold">
                      {feature.highlight.callout.label}
                    </p>
                    <p className="mt-1 text-base leading-6 text-rio-dark/80 md:text-[17px] md:leading-7">
                      {feature.highlight.callout.text}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Callout secundario */}
            {feature.highlight.callout2 && (
              <div className="relative overflow-hidden rounded-2xl border border-rio-gold/45 bg-gradient-to-br from-rio-gold/[0.10] via-rio-gold/[0.04] to-transparent p-5 shadow-[0_18px_40px_-20px_rgba(234,189,35,0.45)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rio-gold/20 blur-2xl"
                />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rio-gold text-2xl text-rio-dark shadow-[0_8px_20px_-8px_rgba(234,189,35,0.7)]">
                    {feature.highlight.callout2.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-rio-gold">
                      {feature.highlight.callout2.label}
                    </p>
                    <p className="mt-1 text-base leading-6 text-rio-dark/80 md:text-[17px] md:leading-7">
                      {feature.highlight.callout2.text}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* WhatsApp preview — burbujas + alertas */}
            {feature.highlight.whatsAppPreview && (
              <div className="relative overflow-hidden rounded-2xl border border-rio-gold/45 bg-gradient-to-br from-rio-gold/[0.10] via-rio-gold/[0.04] to-transparent p-5 shadow-[0_18px_40px_-20px_rgba(234,189,35,0.45)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rio-gold/20 blur-2xl"
                />
                <div className="relative grid gap-5 md:grid-cols-5">
                  {/* Lo que mandás — burbujas */}
                  <div className="md:col-span-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-rio-gold">
                      Lo que mandás a tus clientes
                    </p>
                    <div className="mt-3 space-y-2">
                      {feature.highlight.whatsAppPreview.sent.map((msg, i) => (
                        <div
                          key={i}
                          className="ml-auto max-w-[88%] rounded-2xl rounded-br-md border border-rio-gold/30 bg-rio-gold/15 px-3.5 py-2 shadow-sm"
                        >
                          <p className="text-sm font-semibold text-rio-dark">{msg.title}</p>
                          {msg.subtitle && (
                            <p className="mt-0.5 text-xs text-rio-dark/65">{msg.subtitle}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lo que recibís — chips */}
                  <div className="md:col-span-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-rio-gold">
                      Alertas que recibís
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {feature.highlight.whatsAppPreview.received.map((alert, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-rio-dark/10 bg-white/80 px-2.5 py-1.5 text-xs font-semibold text-rio-dark shadow-sm"
                        >
                          <span>{alert.icon}</span>
                          {alert.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Closing — frase motivadora */}
            {feature.highlight.closing && (
              <p className="relative border-l-2 border-rio-gold pl-4 text-base italic leading-7 text-rio-dark/75 md:text-lg md:leading-8">
                {feature.highlight.closing}
              </p>
            )}
          </div>
        ) : (
          <p className="mt-5 text-lg leading-8 text-rio-dark/65">{feature.desc}</p>
        )}

        <div className="mt-7 flex items-center gap-2 text-rio-dark">
          <span className="text-2xl text-rio-gold">{feature.icon}</span>
          <span className="text-sm font-semibold uppercase tracking-wider text-rio-dark/70">
            Incluido sin costo extra
          </span>
        </div>
      </div>

      {/* Lightbox / Galería */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-rio-dark/95 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={feature.title}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-[95vh] w-full max-w-[1400px] flex-col overflow-hidden rounded-2xl border border-rio-gold/40 bg-rio-dark shadow-[0_40px_120px_-10px_rgba(0,0,0,0.85)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 bg-rio-dark/80 px-4 py-3 backdrop-blur-md sm:px-6 sm:py-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-rio-gold">
                    {feature.tag} · 0{index + 1}
                  </p>
                  <h4 className="mt-0.5 truncate text-base font-bold text-white sm:text-lg">
                    {feature.title}
                  </h4>
                </div>
                <div className="flex items-center gap-3">
                  {hasGallery && (
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white/80">
                      {lightboxIndex + 1} / {totalImages}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Cerrar"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-rio-dark/70 text-white transition-all hover:scale-105 hover:border-rio-gold hover:bg-rio-gold hover:text-rio-dark"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Imagen con navegación — área principal que ocupa todo el espacio restante */}
              <div className="relative flex-1 overflow-hidden bg-black">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={lightboxIndex}
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -80, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={feature.images[lightboxIndex]}
                      alt={`${feature.title} — imagen ${lightboxIndex + 1}`}
                      fill
                      sizes="(max-width: 1400px) 100vw, 1400px"
                      className="object-contain"
                      placeholder="blur"
                      quality={90}
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Flechas de navegación */}
                {hasGallery && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        prevLightbox();
                      }}
                      aria-label="Imagen anterior"
                      className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-rio-dark/70 text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:scale-110 hover:border-rio-gold hover:bg-rio-gold hover:text-rio-dark sm:left-6 sm:h-14 sm:w-14"
                    >
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextLightbox();
                      }}
                      aria-label="Imagen siguiente"
                      className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-rio-dark/70 text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:scale-110 hover:border-rio-gold hover:bg-rio-gold hover:text-rio-dark sm:right-6 sm:h-14 sm:w-14"
                    >
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Footer: thumbnails + hint de teclado */}
              {hasGallery ? (
                <div className="flex shrink-0 flex-col gap-3 border-t border-white/10 bg-rio-dark/80 px-3 py-3 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <div className="flex items-center justify-center gap-2 overflow-x-auto sm:justify-start">
                    {feature.images.map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setLightboxIndex(i)}
                        aria-label={`Ir a imagen ${i + 1}`}
                        className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-md border-2 transition-all sm:h-14 sm:w-20 ${
                          i === lightboxIndex
                            ? "border-rio-gold shadow-[0_0_14px_rgba(234,189,35,0.55)]"
                            : "border-white/10 opacity-55 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt=""
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-white/55 sm:text-[11px]">
                    <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/80">
                      ←
                    </kbd>
                    <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/80">
                      →
                    </kbd>
                    <span>navegar</span>
                    <span className="text-white/25">·</span>
                    <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/80">
                      ESC
                    </kbd>
                    <span>cerrar</span>
                  </div>
                </div>
              ) : (
                <div className="flex shrink-0 items-center justify-center gap-2 border-t border-white/10 bg-rio-dark/80 px-6 py-3 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-white/55">
                  <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-white/80">
                    ESC
                  </kbd>
                  o hacé click fuera para salir
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
