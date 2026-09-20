"use client";

import { useEffect, useLayoutEffect, useState } from "react";

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ServicesHub } from "@/sections/ServicesHub";
import { ServiceManagement } from "@/sections/ServiceManagement";
import { ServiceCustomDev } from "@/sections/ServiceCustomDev";
import { ServiceDesign } from "@/sections/ServiceDesign";
import { ClientsTicker } from "@/sections/ClientsTicker";
import { Testimonials } from "@/sections/Testimonials";
import { Contacto } from "@/sections/Contacto";
import { Marketing } from "@/sections/Marketing";
import { Footer } from "@/sections/Footer";
import { FloatingWhatsApp } from "@/sections/FloatingWhatsApp";
import { BackToServices } from "@/components/BackToServices";

type ServiceKey = "software-gestion" | "desarrollo" | "diseno";

const SERVICE_IDS = ["software-gestion", "desarrollo", "diseno"] as const;

function isServiceKey(value: string): value is ServiceKey {
  return (SERVICE_IDS as readonly string[]).includes(value);
}

function readSelectedFromHash(): ServiceKey | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace(/^#/, "");
  return isServiceKey(hash) ? hash : null;
}

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Home() {
  const [selected, setSelected] = useState<ServiceKey | null>(null);

  useIsoLayoutEffect(() => {
    const syncHeaderHeight = () => {
      const header = document.getElementById("site-header");
      if (header) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${header.offsetHeight}px`,
        );
      }
    };
    syncHeaderHeight();
    window.addEventListener("resize", syncHeaderHeight);

    return () => window.removeEventListener("resize", syncHeaderHeight);
  }, []);

  useEffect(() => {
    const initial = readSelectedFromHash();
    if (initial) {
      setSelected(initial);
      window.scrollTo({ top: 0 });
    } else {
      const initialHash = window.location.hash.replace(/^#/, "");
      if (initialHash) {
        window.setTimeout(() => {
          const el = document.getElementById(initialHash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }

    const onHashChange = () => {
      const newHash = window.location.hash.replace(/^#/, "");

      if (isServiceKey(newHash)) {
        setSelected(newHash);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (newHash === "inicio") {
        setSelected(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      setSelected(null);

      if (newHash) {
        window.setTimeout(() => {
          const el = document.getElementById(newHash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      <Header />
      {selected !== null && <BackToServices />}
      <main>
        {selected === null ? (
          <>
            <Hero />
            <ServicesHub />
            <ClientsTicker />
            <Testimonials />
            <Contacto />
            <Marketing />
          </>
        ) : (
          <>
            {selected === "software-gestion" && <ServiceManagement />}
            {selected === "desarrollo" && <ServiceCustomDev />}
            {selected === "diseno" && <ServiceDesign />}
          </>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
