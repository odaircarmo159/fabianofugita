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
    <section
      id="especialidades"
      className="bg-[linear-gradient(180deg,#fbf6f2_0%,#f7efe7_100%)]"
    >
      <div className="mx-auto max-w-[1680px] px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-12">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="eyebrow text-[#8f6a58]">02 / Áreas de Atuação</p>
          <h2 className="reveal mt-5 font-serif text-[44px] italic leading-[0.95] text-forest sm:text-[56px] md:text-[78px] lg:text-[92px]">
            Áreas de Atuação
          </h2>
          <p className="reveal mx-auto mt-6 max-w-[760px] text-[17px] leading-relaxed text-foreground/78 sm:text-[19px]">
            Principais áreas de atendimento com leitura rápida e abordagem objetiva.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 xl:grid-cols-3">
          {areas.map((a) => (
            <article
              key={a.title}
              className="reveal group relative flex min-h-[250px] flex-col overflow-hidden border border-[#ead9cc] bg-[#fffaf6] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#caa98f] hover:shadow-[0_28px_60px_-42px_rgba(98,35,38,0.24)] sm:min-h-[270px] sm:p-7"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#b88462_0%,#8f3b37_100%)] opacity-80" />
              <div className="flex items-start justify-between">
                <img
                  src={iconMap[a.title as keyof typeof iconMap]}
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12 object-contain opacity-95 sm:h-14 sm:w-14"
                />
                <span className="font-serif text-[16px] italic text-[#c5ab96]">{a.n}</span>
              </div>

              <h3 className="mt-6 max-w-[16ch] font-sans text-[22px] font-semibold leading-[1.06] text-forest sm:text-[24px]">
                {a.title}
              </h3>
              <p className="mt-3 max-w-[28ch] text-[14px] leading-[1.4] text-foreground/76 sm:text-[15px]">
                {a.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
