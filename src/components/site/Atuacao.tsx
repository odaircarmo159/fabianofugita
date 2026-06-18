import cancerProstataIcon from "@/assets/cancer-prostata.png";
import checkupIcon from "@/assets/checkup.png";
import consultaIcon from "@/assets/consulta.png";
import desfuncaoEretilIcon from "@/assets/desfuncao-eretil.png";
import desordemSexualIcon from "@/assets/desordem-sexual.png";
import ejaculacaoPrecoceIcon from "@/assets/ejaculacao-precoce.png";
import ejaculacaoRetardadaIcon from "@/assets/ejaculacao-retardada.png";
import investigacaoIcon from "@/assets/investigacao.png";
import novembroAzulIcon from "@/assets/novembro-azul.png";
import patologiaSexualIcon from "@/assets/patologia-sexual.png";
import segundaOpiniaoIcon from "@/assets/segunda-opiniao.png";
import tumoresUrologicosIcon from "@/assets/tumores-urologicos.png";
import { siteContent } from "@/content/site";
import "./Atuacao.css";

const iconMap = {
  "Consulta urológica": consultaIcon,
  "Câncer de próstata": cancerProstataIcon,
  "Tumores urológicos": tumoresUrologicosIcon,
  "Disfunção erétil": desfuncaoEretilIcon,
  "Ejaculação precoce": ejaculacaoPrecoceIcon,
  "Ejaculação retardada": ejaculacaoRetardadaIcon,
  "Desordens sexuais": desordemSexualIcon,
  "Patologias sexuais": patologiaSexualIcon,
  "Segunda opinião": segundaOpiniaoIcon,
  "Seguimento e vigilância": investigacaoIcon,
  "Prevenção e check-up": checkupIcon,
  "Conscientização da importância da saúde masculina": novembroAzulIcon,
} as const;

const areas = siteContent.specialties.areas.map((area, index) => ({
  ...area,
  n: `0${index + 1}`,
}));

export function Atuacao() {
  return (
    <section id="especialidades" className="atuacao-section">
      <div className="atuacao-shell">
        <div className="atuacao-header">
          <p className="eyebrow atuacao-eyebrow">02 / Áreas de Atuação</p>
          <h2 className="atuacao-title reveal">
            Áreas de Atuação
          </h2>
        </div>

        <div className="atuacao-grid">
          {areas.map((a) => (
            <article
              key={a.title}
              className="atuacao-card reveal"
            >
              <div className="atuacao-card-topline" />
              <div className="atuacao-card-header">
                <img
                  src={iconMap[a.title as keyof typeof iconMap]}
                  alt=""
                  aria-hidden="true"
                  className="atuacao-card-icon"
                />
                <span className="atuacao-card-number">{a.n}</span>
              </div>

              <h3 className="atuacao-card-title">
                {a.title}
              </h3>
              <p className="atuacao-card-description">
                {a.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
