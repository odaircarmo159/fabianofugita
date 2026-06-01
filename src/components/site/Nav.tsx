import { useEffect, useState } from "react";
import { whatsappAppointmentUrl } from "@/content/links";

const links = [
  { href: "#medico", label: "O médico" },
  { href: "#especialidades", label: "Especialidades" },
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:px-12">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-[16px] leading-none tracking-tight text-foreground sm:text-[22px]">
            Dr. Fabiano Roberto Fugita
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-normal text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappAppointmentUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 border border-foreground px-5 py-2.5 text-[13px] font-medium tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background md:inline-flex"
          style={{ borderRadius: "999px" }}
        >
          Agendar consulta
        </a>
      </div>
    </header>
  );
}
