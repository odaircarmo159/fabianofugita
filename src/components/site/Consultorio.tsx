import clinicRoom from "@/assets/clinic-room.jpg";
import {
  consultorioAddress,
  googleMapsConsultorioEmbedUrl,
  googleMapsConsultorioUrl,
} from "@/content/links";
import "./Consultorio.css";

const features = [
  "Clínica Serenus para consultas e acompanhamentos",
  "Estrutura organizada para consultas, retornos e seguimento",
  "Ambientes voltados ao acolhimento e à orientação do paciente",
];

const places = [
  {
    name: "Clínica Serenus",
    description: "Atendimento em consultório para avaliação, acompanhamento e seguimento urológico.",
    details: consultorioAddress,
  },
];

export function Consultorio() {
  return (
    <section id="consultorio" className="consultorio-section">
      <div className="consultorio-shell">
        <div className="consultorio-layout">
          <div className="consultorio-media reveal">
            <div className="consultorio-image-frame">
              <img
                src={clinicRoom}
                alt="Interior do consultório"
                loading="lazy"
                width={1600}
                height={1000}
                className="consultorio-image"
              />
            </div>

            <a
              href={googleMapsConsultorioUrl}
              target="_blank"
              rel="noreferrer"
              className="consultorio-map-card"
            >
              <div className="consultorio-map-card-header">
                <div className="consultorio-map-card-copy">
                  <p className="eyebrow consultorio-eyebrow">Clínica Serenus</p>
                  <p className="consultorio-map-card-label">
                    Ver rota no Google Maps
                  </p>
                </div>
                <span className="consultorio-map-card-action">
                  Abrir mapa
                  <svg
                    viewBox="0 0 24 24"
                    className="consultorio-map-card-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>

              <div className="consultorio-map-frame">
                <iframe
                  title="Mapa da Clínica Serenus"
                  src={googleMapsConsultorioEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="consultorio-map-embed"
                />
                <div className="consultorio-map-overlay" />
              </div>
            </a>
          </div>

          <div className="consultorio-content reveal">
            <p className="eyebrow consultorio-eyebrow">03 / Locais de atendimento</p>
            <h2 className="consultorio-title">
              Um espaço pensado para <em className="consultorio-title-emphasis">acolhimento e discrição</em>.
            </h2>
            <p className="consultorio-body mobile-body-copy">
              O atendimento está concentrado na Clínica Serenus, com ambiente
              voltado para consultas, acompanhamento e orientação individualizada.
            </p>
            <p className="consultorio-support mobile-support-copy">
              A imagem atual segue como apoio visual da seção. Quando houver
              fotos reais dos locais de atendimento, esta parte pode ficar ainda
              mais precisa e confiável.
            </p>

            <ul className="consultorio-features">
              {features.map((f) => (
                <li key={f} className="consultorio-feature">
                  <span className="consultorio-feature-text mobile-support-copy">{f}</span>
                </li>
              ))}
            </ul>

            <div className="consultorio-places">
              {places.map((place) => (
                <div key={place.name} className="consultorio-place">
                  <p className="eyebrow consultorio-place-eyebrow">{place.name}</p>
                  <p className="consultorio-place-description mobile-support-copy">
                    {place.description}
                  </p>
                  <p className="consultorio-place-details mobile-support-copy">
                    {place.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
