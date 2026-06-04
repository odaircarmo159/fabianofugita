import checkupIcon from "@/assets/checkup.png";
import consultaIcon from "@/assets/consulta.png";
import investigacaoIcon from "@/assets/investigacao.png";
import segundaOpiniaoIcon from "@/assets/segunda-opiniao.png";
import tumoresUrologicosIcon from "@/assets/tumores-urologicos.png";
import { siteContent } from "@/content/site";

const iconMap = {
  "Consulta urológica": consultaIcon,
  "Câncer de próstata": investigacaoIcon,
  "Tumores urológicos": tumoresUrologicosIcon,
  "Segunda opinião": segundaOpiniaoIcon,
  "Seguimento e vigilância": investigacaoIcon,
  "Prevenção e check-up": checkupIcon,
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
          <p className="eyebrow text-[#8f6a58]">02 / Especialidades</p>
          <h2 className="reveal mt-5 font-serif text-[44px] italic leading-[0.95] text-forest sm:text-[56px] md:text-[78px] lg:text-[92px]">
            Especialidades
          </h2>
          <p className="reveal mx-auto mt-6 max-w-[820px] text-[18px] leading-relaxed text-foreground/78 sm:text-[20px]">
            Tratamento urológico com diagnóstico preciso, condução técnica e
            acompanhamento próximo em cada etapa do cuidado.
          </p>
        </div>

        <div className="scrollbar-elegant mt-14 overflow-x-auto pb-3 sm:mt-16">
          <div className="flex min-w-max gap-5 lg:gap-7">
          {areas.map((a) => (
            <article
              key={a.title}
              className="reveal group relative flex min-h-[430px] w-[320px] shrink-0 flex-col overflow-hidden border border-[#ead9cc] bg-[#fffaf6] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#caa98f] hover:shadow-[0_28px_60px_-42px_rgba(98,35,38,0.24)] sm:min-h-[460px] sm:w-[340px] sm:p-10"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#b88462_0%,#8f3b37_100%)] opacity-80" />
              <div className="flex items-start justify-between">
                <img
                  src={iconMap[a.title as keyof typeof iconMap]}
                  alt=""
                  aria-hidden="true"
                  className="h-16 w-16 object-contain opacity-95"
                />
                <span className="font-serif text-[18px] italic text-[#c5ab96]">{a.n}</span>
              </div>

              <h3 className="mt-10 max-w-[12ch] font-sans text-[28px] font-semibold leading-[1.02] text-forest">
                {a.title}
              </h3>
              <p className="mt-5 max-w-[26ch] text-[17px] leading-[1.32] text-foreground/76">
                {a.desc}
              </p>

              <a
                href="#contato"
                className="mt-auto inline-flex items-center justify-center gap-3 self-start border border-[#d8b392] bg-transparent px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-forest transition-colors duration-300 hover:border-[#8f3b37] hover:bg-[#8f3b37] hover:text-white"
                style={{ borderRadius: "999px" }}
              >
                Saiba mais
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 12h8" />
                  <path d="M13 7l5 5-5 5" />
                </svg>
              </a>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
