import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  /** "dark" para títulos sobre fondo claro (texto principal casi negro).
   *  "light" para títulos sobre fondo oscuro (texto principal blanco).
   *  Default: "dark". */
  tone?: "dark" | "light";
  /** Aplica text-balance (Tailwind 3.4+) para mejor wrapping en mobile. */
  balance?: boolean;
  className?: string;
};

/**
 * Título canónico de sección.
 * Reemplaza el patrón duplicado `text-4xl md:text-[56px] md:leading-[1.05]`
 * que estaba inline en 5 secciones.
 *
 * Mobile-first: arranca en `text-3xl` (320-374px) y crece a `text-4xl` (sm+)
 * para evitar overflow en pantallas pequeñas.
 */
export const SectionTitle = ({
  children,
  tone = "dark",
  balance = true,
  className,
}: Props) => {
  const toneClasses =
    tone === "dark"
      ? "text-rio-dark"
      : "bg-gradient-to-br from-white via-white to-white/55 bg-clip-text text-transparent";

  return (
    <h2
      className={twMerge(
        "section-title",
        balance && "text-balance",
        tone === "light" && toneClasses,
        tone === "dark" && "text-rio-dark",
        className,
      )}
    >
      {children}
    </h2>
  );
};
