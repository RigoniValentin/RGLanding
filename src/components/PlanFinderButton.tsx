"use client";

/**
 * Botón "Conocer el mejor plan para mi"
 * Abre WhatsApp con un mensaje contextual al servicio que se está mostrando.
 * Usado en cada sección de servicio (Gestión, Desarrollo, Diseño).
 */

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  service: "gestion" | "desarrollo" | "diseno";
  label?: string;
  variant?: "primary" | "ghost";
};

const PHONE = "5493585009887";

const messageByService: Record<Props["service"], string> = {
  gestion:
    "Hola! Me interesa el software de gestión Río Gestión. Quiero conocer el mejor plan para mi negocio (rubro, condición frente al IVA, sucursales, etc.).",
  desarrollo:
    "Hola! Me interesa el servicio de desarrollo a medida de Río Gestión (app / tienda online vinculada al sistema). Querría conocer el mejor plan para mi proyecto.",
  diseno:
    "Hola! Me interesa el servicio de diseño gráfico (Pachu Design) de Río Gestión. Quiero conocer el mejor plan según mi marca y necesidades.",
};

export const PlanFinderButton = ({
  service,
  label = "Conocer el mejor plan para mí",
  variant = "primary",
}: Props) => {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(messageByService[service])}`;

  const btnRef = useRef<HTMLAnchorElement>(null);
  const [inView, setInView] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = btnRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [prefersReducedMotion]);

  const animateShine = !prefersReducedMotion && inView;

  if (variant === "ghost") {
    return (
      <motion.a
        ref={btnRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="btn btn-ghost gap-2 px-6 py-3 text-base"
      >
        <SparkleIcon />
        {label}
      </motion.a>
    );
  }

  return (
    <motion.a
      ref={btnRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="btn btn-primary shine group gap-2 px-7 py-3.5 text-base"
    >
      {/* Sweep dorado — solo cuando el botón está visible en viewport */}
      {animateShine && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-shine-sweep" />
      )}
      <SparkleIcon className="relative z-10" />
      <span className="relative z-10">{label}</span>
    </motion.a>
  );
};

function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-5 w-5 ${className}`}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4z" />
      <path d="M19 14l.9 2.3L22 17l-2.1.7L19 20l-.9-2.3L16 17l2.1-.7z" />
      <path d="M5 4l.6 1.5L7 6l-1.4.5L5 8l-.6-1.5L3 6l1.4-.5z" />
    </svg>
  );
}
