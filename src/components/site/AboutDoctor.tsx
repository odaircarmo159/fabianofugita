import { useEffect, useState } from "react";
import doctorCirurgiaHero from "@/assets/doctor-cirurgia-hero.png";
import careHands from "@/assets/doctor-working.png";
import aboutCarousel3 from "@/assets/about-carousel-3.jpeg";
import aboutCarousel4 from "@/assets/about-carousel-4.png";
import doctorLogo from "@/assets/logo.png";
import "./AboutDoctor.css";

const credentials = [
  { year: "Graduação", title: "Medicina", org: "Universidade Federal da Grande Dourados" },
  { year: "Residência", title: "Cirurgia geral", org: "HRMS Hospital Regional de Mato Grosso do Sul" },
  { year: "Residência", title: "Urologia", org: "HUMAP / Universidade Federal de Mato Grosso do Sul" },
  {
    year: "Fellowship",
    title: "Urologia oncológica minimamente invasiva",
    org: "Hospital de Amor de Barretos",
  },
];

const galleryImages = [
  {
    src: careHands,
    alt: "Dr. Fabiano Fugita realizando cirurgia minimamente invasiva com tecnologia avançada",
  },
  {
    src: doctorCirurgiaHero,
    alt: "Dr. Fabiano Fugita em procedimento cirúrgico com equipe e videolaparoscopia",
  },
  {
    src: aboutCarousel3,
    alt: "Dr. Fabiano Fugita em ambiente cirúrgico acompanhando procedimento urológico com monitorização por vídeo",
  },
  {
    src: aboutCarousel4,
    alt: "Dr. Fabiano Fugita em treinamento e observação técnica de procedimento com equipe médica",
  },
] as const;

export function AboutDoctor() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % galleryImages.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="medico" className="about-doctor-section">
      <div className="about-doctor-top-glow" />
      <div className="about-doctor-shell">
        <div className="about-doctor-card">
          <div className="about-doctor-card-line" />
          <div className="about-doctor-card-glow about-doctor-card-glow--left" />
          <div className="about-doctor-card-glow about-doctor-card-glow--right" />

          <div className="about-doctor-layout">
            <div className="about-doctor-gallery reveal reveal-delay-1" data-reveal="zoom">
              <div className="about-doctor-gallery-frame">
                {galleryImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    width={1080}
                    height={1350}
                    className={`about-doctor-gallery-image ${
                      activeImage === index ? "is-active" : ""
                    }`}
                  />
                ))}
                <div className="about-doctor-gallery-dots">
                  {galleryImages.map((image, index) => (
                    <span
                      key={image.alt}
                      className={`about-doctor-gallery-dot ${
                        activeImage === index ? "is-active" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="about-doctor-copy reveal reveal-delay-2" data-reveal="right">
              <div className="about-doctor-copy-inner">
                <p className="eyebrow about-doctor-eyebrow">01 / O médico</p>
                <h2 className="about-doctor-title">
                  <span className="about-doctor-title-mobile">
                    Técnica, atenção e acompanhamento de <em className="about-doctor-title-emphasis">pós-operatórios.</em>
                  </span>
                  <span className="about-doctor-title-desktop">
                    Técnica, atenção e
                    <br />
                    acompanhamento
                    <br />
                    de <em className="about-doctor-title-emphasis">pós-operatórios.</em>
                  </span>
                </h2>

                <div className="about-doctor-text-block">
                  <p className="about-doctor-body mobile-body-copy">
                    Cada técnica cirúrgica operatória e estratégia terapêutica clínica
                    somam-se no tratamento integral do paciente.
                  </p>
                  <div className="about-doctor-support-card">
                    <p className="about-doctor-support-label">
                      Experiência percebida pelo paciente
                    </p>
                    <p className="about-doctor-support-text mobile-support-copy">
                      Atendimento sem pressa, explicações acessíveis e acompanhamento
                      próximo ajudam a unir tecnologia, precisão e confiança real
                      durante toda a jornada do cuidado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-doctor-credentials reveal">
          <div className="about-doctor-credentials-overlay" />
          <div className="about-doctor-credentials-sheen" />
          <div className="about-doctor-credentials-topline" />
          <div className="about-doctor-credentials-glow about-doctor-credentials-glow--left" />
          <div className="about-doctor-credentials-glow about-doctor-credentials-glow--right" />
          <img
            src={doctorLogo}
            alt=""
            aria-hidden="true"
            className="about-doctor-credentials-logo"
          />

          <div className="about-doctor-credentials-inner">
            <div className="about-doctor-credentials-header">
              <p className="eyebrow about-doctor-credentials-eyebrow">Formação</p>
              <h3 className="about-doctor-credentials-title">
                Formação sólida e trajetória consistente.
              </h3>
            </div>

            <div className="about-doctor-credentials-list">
              {credentials.map((c) => (
                <article
                  key={c.title}
                  className="about-doctor-credential"
                >
                  <span className="about-doctor-credential-year">
                    {c.year}
                  </span>
                  <p className="about-doctor-credential-title">
                    {c.title}
                  </p>
                  <p className="about-doctor-credential-org">
                    {c.org}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
