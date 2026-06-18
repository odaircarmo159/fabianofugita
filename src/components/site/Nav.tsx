import { useEffect, useState } from "react";
import doctorLogo from "@/assets/logo.png";
import { whatsappAppointmentUrl } from "@/content/links";
import "./Nav.css";

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
      className={`site-nav ${pastHero ? "is-past-hero" : ""}`}
    >
      <div className="site-nav-inner">
        <a href="#top" className="site-nav-brand">
          <img
            src={doctorLogo}
            alt="Logo Dr. Fabiano Fugita"
            className="site-nav-logo"
          />
          <span className="site-nav-brand-copy">
            <span className="site-nav-brand-name">
              Dr. Fabiano Fugita
            </span>
            <span className="site-nav-brand-meta">
              CRM 9145 • RQE 8667
            </span>
          </span>
        </a>

        <nav className="site-nav-links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="site-nav-link"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappAppointmentUrl}
          target="_blank"
          rel="noreferrer"
          className="site-nav-cta"
        >
          Agendar consulta
        </a>
      </div>
    </header>
  );
}
