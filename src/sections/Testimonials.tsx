"use client";

import { motion } from "framer-motion";
import React from "react";
import { SectionTitle } from "@/components/SectionTitle";

const baseTestimonials = [
  {
    text: ["Siempre de diez, respondiendo dudas al toque. Cada sugerencia es tenida en cuenta y se agradece!"],
    name: "Juampi",
    role: "Tricarios GrowShop",
  },
  {
    text: [
      "La experiencia es muy buena de mi parte, la atención excelente, siempre dispuestos a solucionar y escuchando las sugerencias o pedidos que hemos necesitado... Por supuesto que dentro de lo que se puede el sistema se ha adaptado a nuestras necesidades.",
      "Valoro que se vaya actualizando y brindando nuevas opciones para la gestión de mi negocio.",
      "Lo que destacó del servicio es la buena predisposición y trato excelente.. Además de que en ocasiones con problemas planteados se han solucionado lo antes posible.",
    ],
    name: "Cristina",
    role: "Dietética Sésamo",
  },
  {
    text: ["Nuestra experiencia con Río Gestión ha sido muy buena. Valoramos muchísimo el acompañamiento y la predisposición del equipo. Cada vez que necesitamos ayuda o tenemos alguna consulta, siempre están presentes y nos brindan una respuesta rápida y efectiva. Nos sentimos muy acompañados y realmente destacamos el compromiso y la calidad de la atención. ¡Estamos muy conformes! 😊"],
    name: "María Laura Elizalde",
    role: "YPF Servicompras Buchardo",
  },
];

const testimonials = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{ duration: props.duration || 10, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, name, role }) => (
            <div
              key={`${name}-${role}`}
              className="rounded-2xl border border-rio-dark/[0.08] bg-white p-6 shadow-[0_8px_28px_-12px_rgba(11,12,15,0.14)] transition-all duration-300 hover:border-rio-gold/40 hover:shadow-[0_18px_45px_-12px_rgba(234,189,35,0.30)]"
            >
              <div className="flex gap-0.5 text-rio-gold text-sm">★★★★★</div>
              <div className="mt-3 text-rio-dark/75 leading-7 space-y-3">
                {text.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-5">
                <div className="flex flex-col">
                  <div className="font-semibold leading-5 text-rio-dark">{name}</div>
                  <div className="leading-5 text-rio-dark/50 text-sm">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section id="testimonios" className="relative scroll-mt-[var(--header-height)] overflow-hidden bg-white py-28 text-rio-dark">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mask-radial-fade"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,12,15,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,12,15,0.045) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-rio-gold/[0.15] blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rio-gold/55 to-transparent" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="section-heading"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-rio-gold/40 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rio-dark shadow-[0_8px_24px_-12px_rgba(234,189,35,0.5)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rio-gold" />
              Testimonios
            </div>
          </div>
          <SectionTitle className="mt-5 font-black text-rio-dark">
            Qué dicen nuestros{" "}
            <span className="bg-gradient-to-r from-rio-gold via-yellow-500 to-rio-gold bg-clip-text text-transparent">
              usuarios.
            </span>
          </SectionTitle>
          <p className="mt-5 text-pretty text-lg leading-8 text-rio-dark/60 md:text-xl">
            Empresas que necesitan operación diaria, control financiero y datos
            confiables encuentran en Río Gestión una base moderna para crecer.
          </p>
        </motion.div>

        <div className="mt-14 flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn className="w-full max-w-md md:w-auto" testimonials={firstColumn}  duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn}  className="hidden lg:block" duration={17} />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rio-gold/55 to-transparent" />
    </section>
  );
};
