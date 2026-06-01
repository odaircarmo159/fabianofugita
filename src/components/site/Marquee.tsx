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
    <div className="relative overflow-hidden border-y border-border bg-background py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-serif text-2xl text-foreground/70 md:text-3xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{t}</span>
            <span className="text-forest">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
