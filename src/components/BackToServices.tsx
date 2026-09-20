"use client";

import { AnimatePresence, motion } from "framer-motion";

export const BackToServices = () => {
  return (
    <AnimatePresence>
      <motion.a
        key="back-to-services"
        href="#servicios"
        initial={{ opacity: 0, x: -16, y: -8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -16 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ x: -3 }}
        aria-label="Volver al selector de servicios"
        className="group fixed left-4 top-28 z-40 flex min-h-[44px] items-center gap-2 rounded-full border border-rio-gold/40 bg-rio-dark/90 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md transition-colors hover:border-rio-gold hover:bg-rio-gold hover:text-rio-dark md:left-8 md:top-32"
      >
        <span aria-hidden className="text-base leading-none transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>
        <span className="sm:inline">Volver a servicios</span>
        <span className="sm:hidden">Servicios</span>
      </motion.a>
    </AnimatePresence>
  );
};
