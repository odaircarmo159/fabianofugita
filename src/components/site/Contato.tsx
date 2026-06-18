import doctorLogo from "@/assets/logo.png";
import { googleMapsConsultorioUrl, whatsappAppointmentUrl } from "@/content/links";
import "./Contato.css";

export function Contato() {
  const channels = [
    {
      label: "WhatsApp",
      value: "+55 (67) 99869-5613",
      href: whatsappAppointmentUrl,
      cta: "Agendar consulta",
    },
    {
      label: "E-mail",
      value: "contato@drfabianofugita.com.br",
      href: "mailto:contato@drfabianofugita.com.br",
      cta: "Falar com a equipe",
    },
    {
      label: "Google Maps",
      value: "Ver localização do consultório",
      href: googleMapsConsultorioUrl,
      cta: "Onde nos encontrar",
    },
  ];

  return (
    <section id="contato" className="contato-section">
      <div className="contato-shell">
        <div className="contato-hero">
          <div className="contato-heading">
            <img
              src={doctorLogo}
              alt="Logo Dr. Fabiano Fugita"
              className="contato-logo"
            />
            <p className="eyebrow contato-eyebrow">04 / Contato</p>
            <h2 className="contato-title reveal">
              Agende sua consulta
              <br />
              <em className="contato-title-emphasis">com tranquilidade e atenção.</em>
            </h2>
          </div>
          <div className="contato-copy">
            <p className="contato-body mobile-body-copy">
              A equipe está disponível para orientar sobre horários, primeiras
              informações, local de atendimento e forma de acompanhamento.
              Escolha abaixo o canal que for mais confortável para você.
            </p>
            <div className="contato-highlight">
              <p className="contato-highlight-label">
                Agendamento facilitado
              </p>
              <p className="contato-highlight-text mobile-support-copy">
                Pelo WhatsApp, a equipe pode orientar sobre horários, Clínica Serenus
                e primeiras informações antes da consulta.
              </p>
              <p className="contato-highlight-note mobile-support-copy">
                Contatos adicionais informados no material do consultório:
                {" "}
                (67) 99116-1092.
              </p>
            </div>
            <a
              href={whatsappAppointmentUrl}
              target="_blank"
              rel="noreferrer"
              className="contato-primary-action"
            >
              Marcar agora
              <svg className="contato-primary-action-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>

        <div className="contato-channels">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label !== "E-mail" ? "_blank" : undefined}
              rel={c.label !== "E-mail" ? "noreferrer" : undefined}
              className={`contato-channel contato-channel--${c.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <p className="eyebrow contato-channel-eyebrow">{c.label}</p>
              <p
                className={`contato-channel-value ${
                  c.label === "E-mail" ? "contato-channel-value--email" : ""
                }`}
              >
                {c.value}
              </p>
              <span className="contato-channel-cta">
                {c.cta}
                <svg className="contato-channel-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
