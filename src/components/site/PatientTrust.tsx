import { CountUp } from "@/components/site/CountUp";

const trustMetrics = [
  {
    value: 5,
    prefix: "",
    suffix: " Mil",
    decimals: 0,
    label: "pacientes acompanhados",
  },
  {
    value: 10,
    prefix: "+",
    suffix: " anos",
    decimals: 0,
    label: "de medicina",
  },
];

export function PatientTrust() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-6 sm:py-20 lg:px-12">
        <div className="reveal mx-auto grid max-w-[900px] grid-cols-1 divide-y divide-border border border-border bg-card md:grid-cols-2 md:divide-x md:divide-y-0">
          {trustMetrics.map((item) => (
            <article
              key={item.label}
              className="flex min-h-[180px] flex-col items-center justify-center px-5 py-8 text-center sm:min-h-[220px] sm:px-8 sm:py-10"
            >
              <p className="font-serif text-[38px] leading-none text-ink sm:text-[44px] md:text-[56px]">
                <CountUp
                  end={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  decimals={item.decimals}
                />
              </p>
              <p className="mt-3 max-w-[240px] text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:mt-4 sm:text-[13px] sm:tracking-[0.14em]">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
