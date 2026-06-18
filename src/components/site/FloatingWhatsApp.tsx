import { whatsappAppointmentUrl } from "@/content/links";
import "./FloatingWhatsApp.css";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappAppointmentUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="floating-whatsapp"
    >
      <span className="floating-whatsapp-icon-wrap">
        <svg viewBox="0 0 24 24" className="floating-whatsapp-icon" aria-hidden="true">
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12.14 0C5.44 0 .02 5.4 0 12.08a12 12 0 0 0 1.64 6.03L0 24l6.08-1.59a12.1 12.1 0 0 0 6.04 1.55h.02c6.7 0 12.12-5.4 12.14-12.08a11.98 11.98 0 0 0-3.76-8.4Zm-8.38 18.44h-.01a10.03 10.03 0 0 1-5.12-1.41l-.37-.22-3.6.94.96-3.5-.24-.36a9.93 9.93 0 0 1-1.56-5.3C2.22 6.56 6.67 2.2 12.14 2.2a9.88 9.88 0 0 1 7.02 2.91 9.8 9.8 0 0 1 3 6.98c-.03 5.51-4.5 9.83-10.02 9.83Zm5.5-7.53c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.34.22-.64.08-.3-.15-1.24-.45-2.37-1.43-.88-.77-1.48-1.72-1.65-2.01-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.66-1.58-.9-2.16-.24-.56-.48-.49-.66-.5h-.56c-.2 0-.52.08-.8.37-.27.3-1.03 1-1.03 2.42s1.05 2.8 1.2 3c.14.2 2.04 3.1 4.95 4.34.7.3 1.25.47 1.67.6.7.22 1.33.19 1.83.11.56-.08 1.77-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.11-.28-.18-.58-.33Z" />
        </svg>
      </span>
      <span className="floating-whatsapp-label">WhatsApp</span>
    </a>
  );
}
