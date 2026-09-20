const WHATSAPP_MESSAGE =
  "Hola, quiero coordinar una demo de Río Gestión.";
const WHATSAPP_HREF = `https://wa.me/5493585009887?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed right-5 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_40px_-5px_rgba(37,211,102,0.8)]"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-50" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-9 w-9 fill-white transition-transform duration-300 group-hover:scale-110"
      >
        <path d="M16.003 0C7.169 0 0 7.169 0 16.003c0 2.823.74 5.512 2.078 7.866L0 32l8.288-2.078A15.93 15.93 0 0 0 16.003 32C24.837 32 32 24.837 32 16.003 32 7.169 24.837 0 16.003 0zm0 28.834a12.79 12.79 0 0 1-6.526-1.785l-.468-.279-4.918 1.234 1.314-4.793-.305-.494A12.83 12.83 0 0 1 3.166 16C3.166 8.937 8.937 3.166 16 3.166 23.063 3.166 28.834 8.937 28.834 16c0 7.063-5.771 12.834-12.834 12.834zm7.046-9.616c-.387-.193-2.285-1.127-2.638-1.255-.353-.128-.61-.193-.867.193-.257.386-.995 1.255-1.219 1.513-.224.257-.448.29-.835.097-.387-.193-1.633-.602-3.11-1.92-1.15-1.026-1.927-2.293-2.151-2.68-.224-.386-.024-.594.169-.787.173-.173.386-.45.579-.676.193-.224.257-.386.386-.643.128-.257.064-.482-.032-.676-.097-.193-.867-2.09-1.188-2.863-.313-.75-.63-.65-.867-.66-.224-.012-.482-.012-.74-.012a1.42 1.42 0 0 0-1.029.482c-.354.386-1.35 1.32-1.35 3.22 0 1.9 1.382 3.734 1.575 3.992.193.257 2.721 4.156 6.6 5.832.923.4 1.643.638 2.205.816.926.295 1.768.253 2.434.154.743-.111 2.285-.934 2.607-1.834.322-.9.322-1.672.225-1.834-.097-.16-.354-.257-.74-.45z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#25D366] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 translate-x-2">
        Hablemos por WhatsApp
      </span>
    </a>
  );
};