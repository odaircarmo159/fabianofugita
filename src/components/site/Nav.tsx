import { useEffect, useState } from "react";
import doctorLogo from "@/assets/logo.png";
import { whatsappAppointmentUrl } from "@/content/links";

const links = [
  { href: "#medico", label: "O médico" },
  { href: "#especialidades", label: "Áreas de Atuação" },
  { href: "#consultorio", label: "Consultório" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#5a1f23]/[0.97] shadow-[0_14px_34px_rgba(35,10,14,0.14)] backdrop-blur-[2px]"
          : "bg-[#612326] shadow-none"
      }`}
      style={{ marginTop: 0 }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 lg:px-12">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={doctorLogo}
            alt="Logo Dr. Fabiano Roberto Fugita"
            className="h-9 w-auto shrink-0 object-contain sm:h-11"
          />
          <span className="min-w-0 truncate font-serif text-[11px] leading-none tracking-tight text-bone sm:text-[22px]">
            <span className="sm:hidden">Dr. Fabiano Fugita</span>
            <span className="hidden sm:inline">Dr. Fabiano Roberto Fugita</span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-normal text-[#f1e4d6] transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappAppointmentUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 border border-[#d7b183] px-5 py-2.5 text-[13px] font-medium tracking-wide text-[#e7c598] transition-colors hover:bg-[#d7b183] hover:text-forest md:inline-flex"
          style={{ borderRadius: "999px" }}
        >
          Agendar consulta
        </a>
      </div>
    </header>
  );
}
