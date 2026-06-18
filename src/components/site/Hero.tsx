import doctorHeroLandscape from "@/assets/doctor-hero-paisagem.png";
import { whatsappAppointmentUrl } from "@/content/links";
import "./Hero.css";


export function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-shell">
        <div className="hero-main">
          <div className="hero-background">
            <img
              src={doctorHeroLandscape}
              alt="Dr. Fabiano Fugita"
              width={1536}
              height={1024}
              className="hero-background-image"
            />
            <div className="hero-background-overlay hero-background-overlay--primary" />
            <div className="hero-background-overlay hero-background-overlay--secondary" />
            <div className="hero-background-overlay hero-background-overlay--accent" />
          </div>

          <div className="hero-grain" />
          <div className="hero-glow" />
          <div className="hero-ring hero-ring--large" />
          <div className="hero-ring hero-ring--small" />

          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-content-inner">
                <div className="hero-badge">
                  <p className="hero-badge-label">
                    Dr. Fabiano Fugita
                  </p>
                  <p className="hero-badge-title">
                    Urologia
                  </p>
                </div>

                <h1 className="hero-title">
                  Urologia com precisão e presença.
                </h1>
                <h2 className="hero-subtitle mobile-body-copy">
                  Uro-oncologia e cirurgia minimamente invasiva.
                </h2>

                <div className="hero-divider" />

                <div className="hero-actions">
                  <a
                    href={whatsappAppointmentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-primary-action"
                  >
                    Agendar consulta
                    <svg className="hero-primary-action-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </a>
                  <a
                    href="#medico"
                    className="hero-secondary-action"
                  >
                    Conheça o médico
                  </a>
                </div>

                <div className="hero-commitment-note">
                  <p className="hero-commitment-quote">
                    Decisões seguras e acompanhamento próximo do diagnóstico ao seguimento.
                  </p>
                  <p className="hero-commitment-location">
                    Atendimento em Dourados-MS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-commitment">
          <div className="hero-commitment-overlay" />
          <div className="hero-commitment-glow" />
          <div className="hero-commitment-layout">
            <div className="hero-commitment-heading">
              <p className="eyebrow hero-commitment-eyebrow">Compromisso</p>
              <p className="hero-commitment-title">
                Cuidar com ciência,
                <br />
                proteger com presença.
              </p>
            </div>
            <div className="hero-commitment-body-wrap">
              <p className="hero-commitment-body">
                Ao longo de mais de uma década de atuação, o compromisso permanece
                o mesmo: oferecer precisão no diagnóstico, responsabilidade na
                conduta e acompanhamento próximo em todas as fases do cuidado.
              </p>
            </div>
          </div>

          <div className="hero-wave">
            <div className="hero-wave-top-glow" />
            <div className="hero-wave-bottom-glow" />
            <svg
              viewBox="0 0 1440 180"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="hero-wave-svg"
            >
              <path
                fill="currentColor"
                d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,90.7C960,75,1056,53,1152,53.3C1248,53,1344,75,1392,85.3L1440,96L1440,181L1392,181C1344,181,1248,181,1152,181C1056,181,960,181,864,181C768,181,672,181,576,181C480,181,384,181,288,181C192,181,96,181,48,181L0,181Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
