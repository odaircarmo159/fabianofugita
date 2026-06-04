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
    <section className="border-t border-[#8d4642] bg-[linear-gradient(180deg,#7a2c2d_0%,#642224_100%)] text-bone">
      <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 sm:py-24 lg:px-12">
        <div className="grid grid-cols-12 gap-10 lg:gap-14">
          <div className="reveal col-span-12 md:col-span-4">
            <p className="eyebrow text-[#d9b897]">Por que escolher</p>
            <h2 className="mt-5 font-serif text-[34px] leading-[1.02] sm:mt-6 sm:text-[42px] md:text-[60px]">
              Um atendimento mais <em className="italic text-[#e0bb8d]">próximo e claro</em>.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-bone/78 sm:mt-6 sm:text-[17px]">
              Mais do que listar áreas de atuação, o importante aqui é mostrar como a consulta
              acontece na prática e o que o paciente pode esperar do atendimento.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8">
            {differentiators.map((item, index) => (
              <article
                key={item.title}
                className="reveal flex gap-5 border-b border-white/12 py-6 last:border-b-0 sm:gap-6 sm:py-7"
              >
                <p className="w-10 shrink-0 pt-1 font-serif text-[22px] italic leading-none text-[#d9b897]/78">
                  0{index + 1}
                </p>
                <div className="max-w-[760px]">
                  <h3 className="max-w-[18ch] font-serif text-[24px] leading-[1.02] text-bone sm:text-[28px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-bone/78 sm:text-[16px]">
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
