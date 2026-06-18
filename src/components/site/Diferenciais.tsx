import "./Diferenciais.css";

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
    <section className="diferenciais-section">
      <div className="diferenciais-shell">
        <div className="diferenciais-layout">
          <div className="diferenciais-header reveal">
            <p className="eyebrow diferenciais-eyebrow">Por que escolher</p>
            <h2 className="diferenciais-title">
              Um atendimento mais <em className="diferenciais-title-emphasis">próximo e claro</em>.
            </h2>
            <p className="diferenciais-intro mobile-support-copy">
              Mais do que listar áreas de atuação, o importante aqui é mostrar como a consulta
              acontece na prática e o que o paciente pode esperar do atendimento.
            </p>
          </div>

          <div className="diferenciais-list">
            {differentiators.map((item, index) => (
              <article
                key={item.title}
                className="diferenciais-item reveal"
              >
                <p className="diferenciais-number">
                  0{index + 1}
                </p>
                <div
                  className={`diferenciais-item-content ${
                    index === differentiators.length - 1 ? "" : "diferenciais-item-content--bordered"
                  }`}
                >
                  <h3 className="diferenciais-item-title">
                    {item.title}
                  </h3>
                  <p className="diferenciais-item-text mobile-support-copy">
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
