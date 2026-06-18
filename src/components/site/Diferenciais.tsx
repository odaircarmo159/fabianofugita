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
    title: "Acompanhamento de perto",
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
    <section className="overflow-x-hidden border-t border-[#8d4642] bg-[linear-gradient(180deg,#7a2c2d_0%,#642224_100%)] text-bone">
      <div className="mx-auto max-w-[1600px] overflow-x-hidden px-7 py-20 sm:px-6 sm:py-24 lg:px-12">
        <div className="grid grid-cols-12 gap-10 lg:gap-14">
          <div className="reveal col-span-12 min-w-0 md:col-span-4">
            <p className="eyebrow text-[#d9b897]">Por que escolher</p>
            <h2 className="mt-5 max-w-[12ch] break-words text-pretty [overflow-wrap:anywhere] font-serif text-[19px] leading-[1.08] sm:mt-6 sm:max-w-full sm:text-[42px] md:text-[60px]">
              Um atendimento mais <em className="italic text-[#e0bb8d]">próximo e claro</em>.
            </h2>
            <p className="mt-5 max-w-full text-[13px] leading-[1.6] text-bone/78 sm:mt-6 sm:max-w-md sm:text-[17px] sm:leading-relaxed">
              Mais do que listar áreas de atuação, o importante aqui é mostrar como a consulta
              acontece na prática e o que o paciente pode esperar do atendimento.
            </p>
          </div>

          <div className="col-span-12 min-w-0 md:col-span-8">
            {differentiators.map((item, index) => (
              <article
                key={item.title}
                className="reveal flex w-full max-w-full min-w-0 flex-col gap-3 overflow-hidden py-6 last:border-b-0 sm:border-b sm:border-white/12 sm:py-7 sm:flex-row sm:gap-6"
              >
                <p className="w-auto shrink-0 pt-1 font-serif text-[22px] italic leading-none text-[#d9b897]/78 sm:w-10">
                  0{index + 1}
                </p>
                <div
                  className={`min-w-0 w-full max-w-full pb-6 sm:max-w-[760px] sm:pb-0 ${
                    index === differentiators.length - 1 ? "" : "border-b border-white/12 sm:border-b-0"
                  }`}
                >
                  <h3 className="max-w-[18ch] break-words text-pretty [overflow-wrap:anywhere] font-serif text-[17px] leading-[1.18] text-bone sm:max-w-[18ch] sm:text-[28px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-full text-[13px] leading-[1.6] text-bone/78 sm:max-w-[42ch] sm:text-[16px] sm:leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
