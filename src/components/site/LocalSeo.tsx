import { consultorioAddress, googleMapsConsultorioUrl } from "@/content/links";
import "./LocalSeo.css";

export function LocalSeo() {
  return (
    <section className="local-seo-section">
      <div className="local-seo-shell">
        <div className="local-seo-header reveal">
          <div className="local-seo-header-inner">
            <p className="eyebrow local-seo-eyebrow">Atendimento em Dourados-MS</p>
            <h2 className="local-seo-title">
            Urologista em Dourados com foco em <em className="local-seo-title-emphasis">uro-oncologia e cirurgia minimamente invasiva</em>.
            </h2>
          </div>
        </div>

        <div className="local-seo-content reveal">
          <div className="local-seo-content-inner">
            <p className="local-seo-body mobile-body-copy">
              O atendimento em Dourados-MS é voltado a pacientes que buscam avaliação urológica
              especializada, acompanhamento de doenças do trato urinário, investigação de sintomas
              prostáticos, segunda opinião e cuidado oncológico com escuta individualizada.
            </p>
            <p className="local-seo-body local-seo-body--secondary mobile-body-copy">
              O atendimento acontece na Clínica Serenus, unindo consulta
              especializada, seguimento clínico e orientação individualizada.
            </p>

            <div className="local-seo-cards">
              <a
                href={googleMapsConsultorioUrl}
                target="_blank"
                rel="noreferrer"
                className="local-seo-card"
              >
                <p className="eyebrow local-seo-card-eyebrow">Clínica Serenus</p>
                <p className="local-seo-card-text mobile-support-copy">{consultorioAddress}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
