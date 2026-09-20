"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import logoArcoiris        from "@/assets/clients/Arcoiris.png";
import logoDonCorleone     from "@/assets/clients/DonCorleone.jpeg";
import logoGenoPsico       from "@/assets/clients/GenoPsico.png";
import logoLaSede          from "@/assets/clients/LaSede.png";
import logoNehilak         from "@/assets/clients/Nehilak.png";
import logoOrigen          from "@/assets/clients/Origen.png";
import logoPachu           from "@/assets/clients/Pachu.png";
import logoPuntoSaludable  from "@/assets/clients/PuntoSaludable.png";
import logoRenatango       from "@/assets/clients/Renatango.png";
import logoSanCayetano     from "@/assets/clients/SanCayetano.png";
import logoSarah           from "@/assets/clients/Sarah.png";
import logoSesamo          from "@/assets/clients/Sesamo.png";
import logoTricarios       from "@/assets/clients/Tricarios.png";
import logoVestisEvolucion from "@/assets/clients/VestisEvolucion.png";
import logoSolkia          from "@/assets/clients/Solkia.png";
import logoSuperBuhoos     from "@/assets/clients/SuperBuhoos.png";
import logoYpf             from "@/assets/clients/Ypf.jpg";
import logoMasaro          from "@/assets/clients/Masaro.png";

type Client = {
  name: string;
  city: string;
  sector: string;
  logo: StaticImageData | null;
  square?: boolean;
  darkBg?: boolean;
};

const clients: Client[] = [
  { name: "Tricarios Grow Shop",     city: "Río Cuarto, Córdoba",    sector: "Grow Shops",       logo: logoTricarios,       square: false, darkBg: false },
  { name: "Super Buhoos",            city: "Buchardo, Córdoba",      sector: "Supermercados",    logo: logoSuperBuhoos,     square: false, darkBg: false },
  { name: "YPF Servicompras",        city: "Buchardo, Córdoba",      sector: "Est. de Servicio", logo: logoYpf,             square: false, darkBg: false },
  { name: "Sésamo",                  city: "Río Cuarto, Córdoba",    sector: "Dietéticas",       logo: logoSesamo,          square: true,  darkBg: false },
  { name: "Expreso mi Arte",         city: "Posadas, Misiones",      sector: "Educación",        logo: logoNehilak,         square: true,  darkBg: false },
  { name: "Punto Saludable",         city: "Río Cuarto, Córdoba",    sector: "Dietéticas",       logo: logoPuntoSaludable,  square: false, darkBg: false },
  { name: "Solkia Pilates",          city: "Mar del Plata, Bs. As.", sector: "Pilates",          logo: logoSolkia,          square: true,  darkBg: false },
  { name: "Renatango",               city: "San Cristóbal, CABA",    sector: "Educación",        logo: logoRenatango,       square: true,  darkBg: false },
  { name: "San Cayetano S.R.L.",     city: "Río Cuarto, Córdoba",    sector: "Fiambrerías",      logo: logoSanCayetano,     square: true,  darkBg: false },
  { name: "Masaro",                  city: "Río Cuarto, Córdoba",    sector: "Limpieza",         logo: logoMasaro,          square: false, darkBg: true  },
  { name: "Pilates Transmission",    city: "Río Cuarto, Córdoba",    sector: "Pilates",          logo: logoSarah,           square: true,  darkBg: false },
  { name: "Vestís Evolución",        city: "Río Cuarto, Córdoba",    sector: "Indumentaria",     logo: logoVestisEvolucion, square: true,  darkBg: false },
  { name: "Arcoiris Joyería",        city: "Belgrano, Bs. As.",      sector: "Joyerías",         logo: logoArcoiris,        square: true,  darkBg: false },
  { name: "Don Corleone",            city: "Río Cuarto, Córdoba",    sector: "Casa de Comidas",  logo: logoDonCorleone,     square: true,  darkBg: false },
  { name: "GenoPsicoSomática",       city: "Montevideo, Uruguay",    sector: "Educación",        logo: logoGenoPsico,       square: true,  darkBg: false },
  { name: "Pachu Design",            city: "Buchardo, Córdoba",      sector: "Diseño Gráfico",   logo: logoPachu,           square: true,  darkBg: true  },
  { name: "Origen Drinks",           city: "Río Cuarto, Córdoba",    sector: "Vinotecas",        logo: logoOrigen,          square: false, darkBg: false },
  { name: "Club Náutico Fitz Simons",city: "Embalse, Córdoba",       sector: "Gastronomía",      logo: logoLaSede,          square: false, darkBg: true  },
];

function getInitials(name: string): string {
  const words = name.replace(/S\.R\.L\.|S\.A\.|S\.A\.S\./gi, "").trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="group mx-3 flex w-[200px] shrink-0 flex-col overflow-hidden rounded-2xl border border-rio-dark/15 bg-rio-light shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-rio-gold/55 hover:shadow-[0_24px_60px_-15px_rgba(234,189,35,0.4)] sm:w-[230px] md:w-[260px]">
      <div
        className={[
          "relative flex h-[120px] w-full items-center justify-center px-5 py-4 transition-colors duration-300 sm:h-[136px] md:h-[152px]",
          client.darkBg ? "bg-rio-panel" : "bg-white",
        ].join(" ")}
      >
        {client.logo ? (
          <div
            className={[
              "relative transition-transform duration-500 group-hover:scale-[1.06]",
              client.square
                ? "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px] md:h-[96px] md:w-[96px]"
                : "h-[64px] w-full sm:h-[72px] md:h-[80px]",
            ].join(" ")}
          >
            <Image
              src={client.logo}
              alt={`Logo ${client.name}`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 200px, (max-width: 768px) 230px, 260px"
            />
          </div>
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-rio-dark transition-transform duration-300 group-hover:scale-105">
            <span className="select-none text-2xl font-black tracking-tight text-rio-gold">
              {getInitials(client.name)}
            </span>
          </div>
        )}
      </div>

      <div className="mx-5 h-px bg-gradient-to-r from-transparent via-rio-dark/15 to-transparent transition-colors duration-300 group-hover:via-rio-gold/70" />

      <div className="flex flex-col px-5 pb-5 pt-3.5">
        <p className="truncate text-[13px] font-bold leading-tight text-rio-dark sm:text-sm">{client.name}</p>
        <p className="mt-1 truncate text-[11px] font-medium text-rio-dark/55 sm:text-xs">{client.city}</p>
        <span className="mt-2.5 inline-flex items-center gap-1.5 self-start rounded-full border border-rio-gold/40 bg-rio-gold/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-rio-dark transition-all duration-300 group-hover:border-rio-gold group-hover:bg-rio-gold group-hover:shadow-[0_0_14px_rgba(234,189,35,0.45)] sm:text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-rio-gold transition-colors duration-300 group-hover:bg-rio-dark" />
          {client.sector}
        </span>
      </div>
    </div>
  );
}

const track = [...clients, ...clients, ...clients];

export const ClientsTicker = () => {
  return (
    <section id="clientes" className="relative scroll-mt-[var(--header-height)] overflow-hidden bg-gradient-to-b from-rio-soft via-rio-dark to-rio-dark py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-25 mask-radial-fade" />
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-rio-gold/[0.06] blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rio-gold/40 to-transparent" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-heading"
        >
          <div className="flex justify-center">
            <div className="tag">Confían en nosotros</div>
          </div>
          <h2 className="section-title mt-5">
            Empresas que ya operan con Río Gestión
          </h2>
          <p className="section-description mt-5">
            Negocios de todo el país unificaron su operación, caja y
            facturación electrónica en una sola plataforma.
          </p>
        </motion.div>
      </div>

      <div className="marquee-fade-in mt-12 md:mt-16">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="marquee-track items-stretch py-4">
            {track.map((client, i) => (
              <ClientCard key={i} client={client} />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container relative mt-12 md:mt-16"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-12">
          {[
            { value: "18+",     label: "Empresas activas"      },
            { value: "100%",    label: "Integración ARCA/AFIP" },
            { value: "4 prov.", label: "Cobertura nacional"    },
            { value: "24/7",    label: "Operación continua"    },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              {i > 0 && <span className="hidden h-5 w-px bg-white/15 md:block" />}
              <div className="text-center">
                <p className="text-2xl font-black text-rio-gold md:text-3xl">{stat.value}</p>
                <p className="mt-0.5 text-xs text-white/45 md:text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rio-gold/40 to-transparent" />
    </section>
  );
};
