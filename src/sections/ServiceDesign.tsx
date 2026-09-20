"use client";

import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { PlanFinderButton } from "@/components/PlanFinderButton";
import { SectionTitle } from "@/components/SectionTitle";

import logoPachu from "@/assets/clients/Pachu.png";

/* ─── Branding ─────────────────────────────────────────────── */
import TodoVS1 from "@/assets/BrandingTV1.jpg";
import TodoVS2 from "@/assets/BrandingTV2.jpg";
import TodoVS3 from "@/assets/BrandingTV3.jpg";

import logoPuntoSaludable from "@/assets/clients/PuntoSaludable.png";
import Mango1 from "@/assets/BrandingM1.jpg";
import Mango2 from "@/assets/BrandingM2.jpg";
import Mango3 from "@/assets/BrandingM3.jpg";

import PuntoSaludable1 from "@/assets/BrandingPS1.jpg";
import PuntoSaludable2 from "@/assets/BrandingPS2.jpg";
import PuntoSaludable3 from "@/assets/BrandingPS3.jpg";
import PuntoSaludable4 from "@/assets/BrandingPS4.jpg";

/* ─── Packaging ────────────────────────────────────────────── */
import Packaging1 from "@/assets/Packaging1.png";
import Packaging2 from "@/assets/Packaging2.png";
import Packaging3 from "@/assets/Packaging3.png";

/* ─── Social Media ────────────────────────────────────────── */
import SocialMedia1 from "@/assets/SocialMedia1.png";
import SocialMedia2 from "@/assets/SocialMedia2.jpg";

/* ─── Tipos ────────────────────────────────────────────────── */

type Aspect = "square" | "portrait" | "landscape";

type PlaceholderData = {
  name: string;
  palette: [string, string, string];
};

type GalleryImage = {
  src: StaticImageData | null;
  alt: string;
  aspect: Aspect;
  caption?: string;
  placeholder?: PlaceholderData;
};

type BrandBlock = {
  id: string;
  name: string;
  tagline: string;
  letter: string;
  palette: [string, string, string];
  images: GalleryImage[];
};

type Category =
  | {
      id: string;
      label: string;
      title: string;
      description: string;
      badge: string;
      accent: string;
      kind: "branding";
      brands: BrandBlock[];
    }
  | {
      id: string;
      label: string;
      title: string;
      description: string;
      badge: string;
      accent: string;
      kind: "flat";
      images: GalleryImage[];
    };

const stats = [
  { value: "+80",  label: "Identidades creadas"  },
  { value: "+300", label: "Piezas para redes"     },
  { value: "+10",  label: "Packagings entregados" },
  { value: "100%", label: "Diseño in-house"       },
];

/* ─── Datos de portfolio ───────────────────────────────────── */

const categories: Category[] = [
  {
    id: "branding",
    label: "Branding",
    title: "Identidades que perduran.",
    description:
      "Logos, sistemas visuales y piezas clave que construyen marcas reconocibles desde el primer vistazo.",
    badge: "01",
    accent: "from-rio-gold via-yellow-400 to-rio-gold",
    kind: "branding",
    brands: [
      {
        id: "todo-versus",
        name: "Todo Versus",
        tagline: "Competencia, adrenalina y deporte.",
        letter: "T",
        palette: ["#DC2626", "#1F2937", "#F5F5F5"],
        images: [
          {
            src: TodoVS1,
            alt: "Todo Versus — Logo principal",
            aspect: "square",
            caption: "Logo principal",
          },
          {
            src: TodoVS2,
            alt: "Todo Versus — Sistema visual",
            aspect: "portrait",
            caption: "Sistema visual",
          },
          {
            src: TodoVS3,
            alt: "Todo Versus — Aplicaciones",
            aspect: "landscape",
            caption: "Aplicaciones",
          },
        ],
      },
      {
        id: "mango",
        name: "Mango",
        tagline: "Identidad tropical, fresca y jugosa.",
        letter: "M",
        palette: ["#FFB300", "#FF6F00", "#FFE082"],
        images: [
          {
            src: Mango1,
            alt: "Mango — Logo principal",
            aspect: "square",
            caption: "Logo principal",
          },
          {
            src: Mango2,
            alt: "Mango — Sistema visual",
            aspect: "portrait",
            caption: "Sistema visual",
          },
          {
            src: Mango3,
            alt: "Mango — Aplicaciones",
            aspect: "landscape",
            caption: "Aplicaciones",
          },
        ],
      },
      {
        id: "punto-saludable",
        name: "Punto Saludable",
        tagline: "Bienestar, frescura y vida sana.",
        letter: "P",
        palette: ["#10B981", "#34D399", "#D1FAE5"],
        images: [
          {
            src: logoPuntoSaludable,
            alt: "Punto Saludable — Logo",
            aspect: "landscape",
            caption: "Logo principal",
          },
          {
            src: PuntoSaludable1,
            alt: "Punto Saludable — Sistema visual",
            aspect: "square",
            caption: "Sistema visual",
          },
          {
            src: PuntoSaludable2,
            alt: "Punto Saludable — Aplicación 1",
            aspect: "landscape",
            caption: "Aplicación",
          },
          {
            src: PuntoSaludable3,
            alt: "Punto Saludable — Aplicación 2",
            aspect: "portrait",
            caption: "Aplicación",
          },
          {
            src: PuntoSaludable4,
            alt: "Punto Saludable — Pieza adicional",
            aspect: "square",
            caption: "Pieza adicional",
          },
        ],
      },
    ],
  },
  {
    id: "packaging",
    label: "Packaging",
    title: "Packaging que se recuerda.",
    description:
      "Cajas, etiquetas y presentaciones premium. Cada empaque, una experiencia de marca.",
    badge: "02",
    accent: "from-fuchsia-500 via-violet-500 to-fuchsia-500",
    kind: "flat",
    images: [
      { src: Packaging1, alt: "Packaging — Pieza 1", aspect: "portrait",  caption: "Pieza 1" },
      { src: Packaging2, alt: "Packaging — Pieza 2", aspect: "landscape", caption: "Pieza 2" },
      { src: Packaging3, alt: "Packaging — Pieza 3", aspect: "square",    caption: "Pieza 3" },
    ],
  },
  {
    id: "social-media",
    label: "Social Media",
    title: "Contenido que conecta.",
    description:
      "Posts, mockups y piezas para redes sociales. Diseño listo para escalar tu presencia.",
    badge: "03",
    accent: "from-emerald-400 via-sky-500 to-pink-400",
    kind: "flat",
    images: [
      { src: SocialMedia1, alt: "Social Media — Pieza 1", aspect: "landscape", caption: "Pieza 1" },
      { src: SocialMedia2, alt: "Social Media — Pieza 2", aspect: "portrait",  caption: "Pieza 2" },
    ],
  },
];

/* ─── Sección ──────────────────────────────────────────────── */

export const ServiceDesign = () => {
  const [lightbox, setLightbox] = useState<{
    images: GalleryImage[];
    index: number;
  } | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const go = useCallback(
    (dir: 1 | -1) => {
      setLightbox((curr) => {
        if (!curr) return curr;
        const len = curr.images.length;
        return {
          images: curr.images,
          index: (curr.index + dir + len) % len,
        };
      });
    },
    [],
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, go]);

  return (
    <section
      id="diseno"
      className="relative scroll-mt-[var(--header-height)] overflow-hidden bg-rio-light py-28 text-rio-dark"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mask-radial-fade"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,12,15,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,12,15,0.045) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 -top-32 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-pink-400/[0.12] blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-rio-gold/[0.15] blur-[120px]" />
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
              03 · Diseño gráfico
            </div>
          </div>
          <SectionTitle className="mt-5 font-black text-rio-dark">
            Marcas que{" "}
            <span className="bg-gradient-to-r from-rio-gold via-yellow-500 to-rio-gold bg-clip-text text-transparent">
              venden.
            </span>
          </SectionTitle>
          <p className="mt-5 text-pretty text-center text-lg leading-8 text-rio-dark/60 md:text-xl">
            Branding, packaging y contenido para redes sociales — todo el
            apartado visual de tu marca, llevado al siguiente nivel.
          </p>
        </motion.div>

        {/* Bloque partner Pachu Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-rio-dark/[0.08] bg-white p-8 shadow-[0_28px_70px_-25px_rgba(234,189,35,0.35)] md:p-12"
        >
          <div className="pointer-events-none absolute inset-0 rounded-3xl border-gold-glow opacity-40" />
          <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-pink-400/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-rio-gold/15 blur-[100px]" />

          <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr]">
            {/* Logo Pachu */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.65, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-6 rounded-full bg-rio-gold/25 blur-2xl"
                />
                <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-2xl border border-rio-gold/30 bg-rio-dark p-4 ring-1 ring-rio-dark/5 shadow-[0_18px_50px_-15px_rgba(234,189,35,0.5)]">
                  <Image
                    src={logoPachu}
                    alt="Pachu Design"
                    width={96}
                    height={96}
                    className="h-auto w-auto object-contain"
                  />
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-rio-dark/45">
                Partner creativo
              </span>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-rio-gold/40 bg-rio-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rio-dark">
                ✦ Equipo tercerizado
              </div>
              <h3 className="mt-4 text-3xl font-bold leading-tight text-rio-dark md:text-[36px] md:leading-[1.15]">
                A cargo del equipo de{" "}
                <span className="bg-gradient-to-r from-rio-gold via-pink-400 to-rio-gold bg-clip-text text-transparent">
                  Pachu Design
                </span>
              </h3>
              <p className="mt-4 text-lg leading-8 text-rio-dark/65">
                Nuestro partner creativo se encarga de todo el apartado de
                diseño gráfico de Río Gestión: branding, packaging, piezas para
                redes y producción audiovisual. Diseño profesional, integrado a
                tu proyecto sin coordinar con otro estudio.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Portfolio header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-24 text-center"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-rio-dark/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-rio-dark/70 shadow-sm">
              Portfolio
            </div>
          </div>
          <h3 className="mt-4 text-3xl font-bold text-rio-dark md:text-4xl">
            Algunos ejemplos del{" "}
            <span className="bg-gradient-to-r from-rio-gold via-yellow-500 to-rio-gold bg-clip-text text-transparent">
              trabajo.
            </span>
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-base text-rio-dark/55">
            Tres líneas de diseño, una sola firma. Hacé click en cualquier
            imagen para verla en detalle.
          </p>
        </motion.div>

        {/* Categorías */}
        <div className="mt-14 flex flex-col gap-20 md:gap-28">
          {categories.map((cat, ci) => (
            <CategoryBlock
              key={cat.id}
              category={cat}
              index={ci}
              onOpen={(images, index) => setLightbox({ images, index })}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 rounded-2xl border border-rio-dark/[0.08] bg-white px-8 py-8 shadow-[0_10px_35px_-15px_rgba(11,12,15,0.12)] md:gap-x-16"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-6">
              {i > 0 && <span className="hidden h-8 w-px bg-rio-dark/15 md:block" />}
              <div className="text-center">
                <p className="text-3xl font-black text-rio-dark md:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-rio-dark/45">{s.label}</p>
              </div>
            </div>
          ))}
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
            Llevemos tu marca al siguiente nivel.
          </h3>
          <p className="relative mx-auto mt-3 max-w-xl text-rio-dark/60">
            Cada marca tiene su personalidad. Te ayudamos a encontrar el plan
            ideal según el alcance: identidad, packaging o redes.
          </p>
          <div className="relative mt-7 flex justify-center">
            <PlanFinderButton service="diseno" />
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rio-gold/55 to-transparent" />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            index={lightbox.index}
            onClose={close}
            onPrev={() => go(-1)}
            onNext={() => go(1)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

/* ─── Bloque de categoría ─────────────────────────────────── */

function CategoryBlock({
  category,
  index,
  onOpen,
}: {
  category: Category;
  index: number;
  onOpen: (images: GalleryImage[], imageIndex: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex items-center gap-4">
          <span
            className={`bg-gradient-to-br ${category.accent} bg-clip-text text-5xl font-black leading-none text-transparent md:text-6xl`}
          >
            {category.badge}
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-rio-gold">
              {category.label}
            </p>
            <h4 className="mt-1 text-2xl font-bold text-rio-dark md:text-3xl">
              {category.title}
            </h4>
          </div>
        </div>
        <p className="max-w-md text-sm leading-6 text-rio-dark/60 md:text-right">
          {category.description}
        </p>
      </div>

      {category.kind === "branding" ? (
        <div className="flex flex-col gap-14 md:gap-20">
          {category.brands.map((brand, bi) => (
            <BrandBlock
              key={brand.id}
              brand={brand}
              categoryIndex={index}
              brandIndex={bi}
              onOpen={(imageIndex) => onOpen(brand.images, imageIndex)}
            />
          ))}
        </div>
      ) : (
        <MasonryGallery
          images={category.images}
          categoryIndex={index}
          onOpen={(imageIndex) => onOpen(category.images, imageIndex)}
        />
      )}
    </motion.div>
  );
}

/* ─── Sub-bloque por marca (Branding) ──────────────────────── */

function BrandBlock({
  brand,
  categoryIndex,
  brandIndex,
  onOpen,
}: {
  brand: BrandBlock;
  categoryIndex: number;
  brandIndex: number;
  onOpen: (imageIndex: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h5 className="text-xl font-bold text-rio-dark md:text-2xl">
            {brand.name}
          </h5>
          <p className="text-sm text-rio-dark/55">{brand.tagline}</p>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-rio-dark/40">
          Branding · {brand.images.length} {brand.images.length === 1 ? "pieza" : "piezas"}
        </span>
      </div>

      <MasonryGallery
        images={brand.images}
        categoryIndex={categoryIndex + brandIndex * 0.1}
        onOpen={onOpen}
      />
    </motion.div>
  );
}

/* ─── Masonry compartido ──────────────────────────────────── */

function MasonryGallery({
  images,
  categoryIndex,
  onOpen,
}: {
  images: GalleryImage[];
  categoryIndex: number;
  onOpen: (imageIndex: number) => void;
}) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {images.map((img, i) => (
        <GalleryTile
          key={img.alt + i}
          image={img}
          index={i}
          categoryIndex={categoryIndex}
          onClick={() => onOpen(i)}
        />
      ))}
    </div>
  );
}

/* ─── Tile de galería (real o placeholder) ─────────────────── */

function GalleryTile({
  image,
  index,
  categoryIndex,
  onClick,
}: {
  image: GalleryImage;
  index: number;
  categoryIndex: number;
  onClick: () => void;
}) {
  const aspectClass =
    image.aspect === "square"
      ? "aspect-square"
      : image.aspect === "portrait"
      ? "aspect-[3/4]"
      : "aspect-[4/3]";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: categoryIndex * 0.05 + index * 0.04,
      }}
      whileHover={{ y: -4 }}
      className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-rio-dark/[0.08] bg-white shadow-[0_8px_28px_-12px_rgba(11,12,15,0.18)] break-inside-avoid transition-shadow duration-300 hover:border-rio-gold/45 hover:shadow-[0_22px_50px_-15px_rgba(234,189,35,0.40)]"
    >
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-rio-dark/[0.04]`}>
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />
        ) : image.placeholder ? (
          <PlaceholderFill data={image.placeholder} />
        ) : null}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-start justify-end gap-1 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-rio-gold/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-rio-dark">
            {image.alt}
          </span>
          {image.caption && (
            <span className="text-sm font-semibold text-white drop-shadow">
              {image.caption}
            </span>
          )}
        </div>
        <div className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white/90 text-rio-dark opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ExpandIcon />
        </div>
      </div>
    </motion.button>
  );
}

/* ─── Placeholder con gradiente y nombre ───────────────────── */

function PlaceholderFill({ data }: { data: PlaceholderData }) {
  const [c1, c2, c3] = data.palette;
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${c1} 0%, ${c2} 55%, ${c3} 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.25),transparent_50%)]" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <span
          className="text-center text-3xl font-black leading-none tracking-tight text-white/90 mix-blend-overlay md:text-5xl"
          style={{ textShadow: "0 6px 24px rgba(0,0,0,0.35)" }}
        >
          {data.name}
        </span>
      </div>
      <div className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/25 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
        Placeholder
      </div>
    </>
  );
}

/* ─── Lightbox ─────────────────────────────────────────────── */

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const current = images[index];
  const placeholderKey = current.alt + index;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-10 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Cerrar"
      >
        <CloseIcon />
      </button>

      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Anterior"
        >
          <ChevronLeftIcon />
        </button>
      )}

      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Siguiente"
        >
          <ChevronRightIcon />
        </button>
      )}

      <motion.figure
        key={current.src ? current.src.src : placeholderKey}
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[85vh] max-w-[90vw] flex-col items-center"
      >
        <div className="relative max-h-[80vh] overflow-hidden rounded-2xl shadow-[0_30px_90px_-20px_rgba(0,0,0,0.7)]">
          {current.src ? (
            <Image
              src={current.src}
              alt={current.alt}
              width={1600}
              height={1200}
              className="block max-h-[80vh] w-auto max-w-[90vw] object-contain"
            />
          ) : current.placeholder ? (
            <div className="flex h-[60vh] w-[80vw] max-w-[900px] items-center justify-center">
              <PlaceholderFill data={current.placeholder} />
            </div>
          ) : null}
        </div>
        <figcaption className="mt-4 flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white backdrop-blur">
          <span className="font-semibold">{current.alt}</span>
          {current.caption && (
            <>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="text-white/70">{current.caption}</span>
            </>
          )}
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="text-white/60">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}

/* ─── Iconos inline ────────────────────────────────────────── */

function ExpandIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l6-6" />
      <path d="M21 3l-6 6" />
      <path d="M21 3h-7" />
      <path d="M21 3v7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
