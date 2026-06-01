import careHands from "@/assets/care-hands.jpg";

const credentials = [
  {
    year: "Graduação",
    title: "Física",
    org: "Universidade Estadual Paulista (UNESP)",
  },
  { year: "Graduação", title: "Medicina", org: "Universidade Federal da Grande Dourados" },
  { year: "Residência", title: "Cirurgia Geral", org: "Hospital Regional de Mato Grosso do Sul" },
  { year: "Residência", title: "Urologia", org: "HUMAP / Universidade Federal de Mato Grosso do Sul" },
  {
    year: "Fellowship",
    title: "Urologia oncológica minimamente invasiva",
    org: "Hospital de Amor de Barretos",
  },
];

export function AboutDoctor() {
  return (
    <section id="medico" className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 md:py-32 lg:px-12">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 sm:gap-y-12">
          <div className="reveal col-span-12 md:col-span-4">
            <div className="mx-auto max-w-[620px] md:mx-0">
              <p className="eyebrow text-forest">01 / O médico</p>
              <h2 className="mt-5 font-serif text-[29px] leading-[1.02] text-balance sm:mt-6 sm:text-[40px] md:text-[56px]">
                Técnica, escuta e <em className="italic text-forest">presença</em> em cada consulta.
              </h2>
            </div>
          </div>

          <div className="reveal col-span-12 md:col-span-4">
            <div className="mx-auto aspect-[4/5] max-w-[620px] overflow-hidden bg-secondary md:mx-0">
              <img
                src={careHands}
                alt="Cuidado e proximidade com o paciente"
                loading="lazy"
                width={1080}
                height={1350}
                className="h-full w-full object-center object-cover transition-transform duration-[1400ms] hover:scale-[1.04]"
              />
            </div>
          </div>

          <div className="reveal col-span-12 md:col-span-4">
            <div className="mx-auto max-w-[620px] md:mx-0">
              <p className="text-[15px] leading-relaxed text-foreground/80 sm:text-[16px]">
                A consulta médica precisa ser um espaço de confiança. Por isso,
                cada atendimento é conduzido com tempo, atenção e linguagem clara,
                para que o paciente compreenda o diagnóstico, saiba quais são as
                possibilidades de tratamento e se sinta seguro ao decidir.
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-foreground/80 sm:text-[16px]">
                A atuação reúne urologia geral, cânceres urológicos, doenças da
                próstata, cálculo urinário e cirurgia minimamente invasiva, com
                experiência em uro-oncologia minimamente invasiva e cuidado individualizado.
              </p>
              <div className="mt-8 border-l border-forest/20 pl-5">
                <p className="text-[13px] uppercase tracking-[0.18em] text-forest/70">
                  Experiência percebida pelo paciente
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground/80 sm:text-[15px]">
                  Atendimento sem pressa, explicações acessíveis e acompanhamento
                  próximo ajudam a transformar competência técnica em confiança
                  real durante toda a jornada do cuidado.
                </p>
              </div>
              <div className="mt-6 border-l border-forest/20 pl-5">
                <p className="text-[13px] uppercase tracking-[0.18em] text-forest/70">
                  Formação e atualização
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground/80 sm:text-[15px]">
                  A trajetória inclui formação em Física, graduação em Medicina,
                  residências em Cirurgia Geral e Urologia, além de fellowship
                  em uro-oncologia minimamente invasiva no Hospital de Amor de Barretos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials table */}
        <div className="reveal mt-20 border-t border-border sm:mt-24">
          {credentials.map((c, i) => (
            <div
              key={c.title}
              className="grid grid-cols-12 items-baseline gap-3 border-b border-border py-5 sm:gap-4 sm:py-7"
            >
              <span className="col-span-2 font-serif text-[22px] text-forest sm:text-[28px] md:col-span-1 md:text-[20px]">
                0{i + 1}
              </span>
              <span className="col-span-10 text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[13px] sm:tracking-[0.16em] md:col-span-3">
                {c.year}
              </span>
              <p className="col-span-12 font-serif text-[21px] leading-tight text-foreground sm:text-[24px] md:col-span-5 md:text-[28px]">
                {c.title}
              </p>
              <p className="col-span-12 text-[13px] leading-relaxed text-muted-foreground md:col-span-3 md:text-right">
                {c.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
