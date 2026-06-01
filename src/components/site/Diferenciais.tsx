const differentiators = [
  {
    title: "Consulta feita com calma",
    description:
      "A consulta acontece sem correria, com espaço para ouvir, explicar os exames e conversar sobre o que realmente faz sentido para o seu caso.",
  },
  {
    title: "Explicação clara",
    description:
      "O objetivo é que o paciente saia entendendo o diagnóstico, os próximos passos e as opções de tratamento, sem linguagem difícil.",
  },
  {
    title: "Acompanhamento de verdade",
    description:
      "Quando há cirurgia ou necessidade de seguimento, o cuidado continua no pós-operatório e nas revisões, com orientação em cada etapa.",
  },
  {
    title: "Experiência em casos oncológicos",
    description:
      "Nos casos de câncer urológico, a condução busca unir precisão técnica, seriedade nas decisões e conversa franca com o paciente e a família.",
  },
];

export function Diferenciais() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="reveal col-span-12 md:col-span-4">
            <p className="eyebrow text-forest">Por que escolher</p>
            <h2 className="mt-5 font-serif text-[32px] leading-[1.02] sm:mt-6 sm:text-[40px] md:text-[56px]">
              Um atendimento mais <em className="italic text-forest">próximo e claro</em>.
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-foreground/75 sm:mt-6 sm:text-[16px]">
              Mais do que listar áreas de atuação, o importante aqui é mostrar como a consulta
              acontece na prática e o que o paciente pode esperar do atendimento.
            </p>
          </div>

          <div className="col-span-12 grid grid-cols-1 gap-px bg-border md:col-span-8 md:grid-cols-2">
            {differentiators.map((item, index) => (
              <article
                key={item.title}
                className="reveal group bg-background p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-8"
              >
                <p className="eyebrow text-forest/70">0{index + 1}</p>
                <h3 className="mt-6 font-serif text-[23px] leading-tight text-foreground sm:mt-8 sm:text-[28px]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-foreground/78 sm:text-[15px]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
