"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dashboardBg from "@/assets/dashboard-principal-2.png";

const WHATSAPP_HREF =
  "https://wa.me/5493585009887?text=Hola%2C%20quiero%20potenciar%20mi%20marca%20con%20R%C3%ADo%20Gesti%C3%B3n";

export const Marketing = () => {
  return (
    <section
      id="marketing"
      className="relative scroll-mt-[var(--header-height)] overflow-hidden bg-white py-20 text-rio-dark md:py-24"
    >
      {/* Imagen de fondo del software, integrada con overlay claro */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.10] [mask-image:linear-gradient(to_bottom,white_0%,white_70%,transparent_100%)]">
        <Image
          src={dashboardBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rio-gold/45 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rio-gold/35 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-1/2 hidden h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-rio-gold/[0.08] blur-[120px] md:block" />
      <div className="pointer-events-none absolute -right-24 top-1/4 hidden h-[300px] w-[300px] rounded-full bg-rio-gold/[0.06] blur-[110px] md:block" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-rio-gold/40 bg-rio-gold/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-rio-dark shadow-[0_8px_22px_-12px_rgba(234,189,35,0.55)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rio-gold opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rio-gold" />
              </span>
              RÍO GESTIÓN
            </div>
          </div>

          <h2 className="section-title mt-5 text-rio-dark">
            Gestionamos con vos,{" "}
            <span className="bg-gradient-to-r from-rio-gold via-yellow-500 to-rio-gold bg-clip-text text-transparent">
              crecemos juntos.
            </span>
          </h2>

          <p className="section-description mt-5 text-rio-dark/55">
            Una conversación puede cambiar todo. Estamos a un mensaje — y
            listos para arrancar.
          </p>
        </motion.div>

       
      </div>
    </section>
  );
};
