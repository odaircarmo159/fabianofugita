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
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      if (!hero) {
        setPastHero(window.scrollY > 12);
        return;
      }

      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const headerOffset = 96;
      setPastHero(window.scrollY + headerOffset >= heroBottom);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        pastHero
          ? "bg-[#5f2328]/[0.94] shadow-[0_14px_34px_rgba(42,11,16,0.24)] backdrop-blur-xl"
          : "bg-[rgba(18,13,13,0.28)] shadow-none backdrop-blur-[6px]"
      }`}
      style={{ marginTop: 0 }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-6 sm:py-5 lg:px-12">
        <a href="#top" className="flex min-w-0 items-center gap-3 sm:gap-4">
          <img
            src={doctorLogo}
            alt="Logo Dr. Fabiano Fugita"
            className="h-11 w-auto shrink-0 object-contain sm:h-14"
          />
          <span className="min-w-0">
            <span className="block truncate font-serif text-[11px] leading-none tracking-tight text-bone sm:text-[22px]">
              Dr. Fabiano Fugita
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.16em] text-[#ead8ca] sm:text-[11px]">
              CRM 9145 • RQE 8667
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-normal text-[#f3e8dc] transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappAppointmentUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#8f3038] px-5 py-2.5 text-[13px] font-medium tracking-wide text-white transition-colors hover:bg-[#a43a44] md:inline-flex"
        >
          Agendar consulta
        </a>
      </div>
    </header>
  );
}
