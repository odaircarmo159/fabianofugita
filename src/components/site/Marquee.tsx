import "./Marquee.css";

const items = [
  "Escuta atenta",
  "Cirurgia minimamente invasiva",
  "Uro-oncologia personalizada",
  "Decisão compartilhada",
  "Medicina baseada em evidência",
  "Acompanhamento contínuo",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="site-marquee">
      <div className="site-marquee-track">
        {row.map((t, i) => (
          <span key={i} className="site-marquee-item">
            <span className="site-marquee-text">{t}</span>
            <span className="site-marquee-separator">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
