const areas = [
  {
    n: "01",
    title: "Urologia geral",
    desc: "Avaliação de sintomas urinários, infecções, dor, alterações urológicas e queixas do dia a dia com investigação cuidadosa.",
  },
  {
    n: "02",
    title: "Cânceres urológicos",
    desc: "Acompanhamento de casos de próstata, rim, bexiga e testículo com definição terapêutica responsável e orientação clara em cada etapa.",
  },
  {
    n: "03",
    title: "Cálculo urinário",
    desc: "Investigação e tratamento de cálculos urinários com foco em aliviar sintomas, prevenir recorrências e definir a melhor conduta.",
  },
  {
    n: "04",
    title: "Doenças da próstata",
    desc: "Avaliação prostática, rastreamento, acompanhamento clínico e orientação individualizada para cada fase do tratamento.",
  },
  {
    n: "05",
    title: "Infertilidade e vasectomia",
    desc: "Atendimento voltado à saúde reprodutiva masculina, investigação de infertilidade e orientação para vasectomia com segurança.",
  },
  {
    n: "06",
    title: "Tratamentos minimamente invasivos",
    desc: "Procedimentos e cirurgias videolaparoscópicas planejados com rigor técnico, recuperação adequada e acompanhamento pós-operatório.",
  },
];

export function Atuacao() {
  return (
    <section id="especialidades" className="bg-forest text-bone">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 md:py-32 lg:px-12">
        <div className="grid grid-cols-12 gap-8 border-b hairline-light pb-12 sm:pb-16">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow text-bone/60">02 / Especialidades</p>
            <h2 className="reveal mt-5 font-serif text-[32px] leading-[1.02] text-balance sm:mt-6 sm:text-[40px] md:text-[60px]">
              Atuação ampla, com <em className="italic text-sage">olhar individual</em> para cada caso.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="reveal text-[15px] leading-relaxed text-bone/75 sm:text-[16px]">
              A atuação contempla desde urologia geral até casos oncológicos e
              procedimentos minimamente invasivos, sempre com indicação precisa,
              explicação clara e acompanhamento consistente.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-px bg-bone/10 sm:mt-16">
          {areas.map((a) => (
            <article
              key={a.title}
              className="reveal group relative col-span-12 bg-forest p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-ink sm:p-8 md:col-span-6 lg:col-span-4 lg:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-[15px] tracking-wider text-sage">{a.n}</span>
                <svg
                  className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </div>
              <h3 className="mt-8 font-serif text-[22px] leading-tight sm:mt-10 sm:text-[26px] md:mt-12 md:text-[30px]">
                {a.title}
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-bone/70">{a.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
