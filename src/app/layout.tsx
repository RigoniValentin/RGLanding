import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Río Gestión | Software de gestión, desarrollo a medida y diseño",
  description:
    "Software ERP con app mobile + IA, desarrollo de apps y tiendas online vinculadas, y diseño gráfico — todo bajo un mismo techo.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} relative`}>
      <body className={twMerge(dmSans.className, "antialiased bg-rio-dark text-white")}>
        {children}
      </body>
    </html>
  );
}
