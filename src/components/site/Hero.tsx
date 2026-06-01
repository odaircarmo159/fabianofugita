import doctorHero from "@/assets/doctor-hero.jpg";
import { whatsappAppointmentUrl } from "@/content/links";

const trustPills = [
  "Atendimento em Dourados-MS",
];

export function Hero() {
  return (
    <section id="top" className="relative pt-20 md:pt-28">
      <div className="mx-auto max-w-[1400px] px-4 pb-6 sm:px-6 sm:pb-8 lg:px-12">
        <div className="relative grid grid-cols-12 gap-6 overflow-hidden bg-sage px-5 py-10 sm:px-8 sm:py-14 md:px-14 md:py-20 lg:py-24">
          {/* Subtle grain */}
          <div className="pointer-events-none absolute inset-0 grain opacity-20" />

          {/* Left content */}
          <div className="relative z-10 col-span-12 md:col-span-7">
            <p className="eyebrow text-forest/80">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-forest align-middle animate-blink" />
              CRM 9145 RQE 8667 · Urologia
            </p>

            <h1 className="mt-6 font-serif text-[36px] text-balance leading-[1.02] tracking-tight text-ink sm:mt-8 sm:text-[44px] md:text-[68px] lg:text-[84px]">
              Fabiano Fugita
            </h1>
            <h2 className="mt-2 font-serif text-[22px] italic leading-tight text-forest sm:mt-3 sm:text-[28px] md:text-[38px] lg:text-[44px]">
              Urologia, Uro-Oncologia
              <br />
              e Cirurgia Minimamente Invasiva
            </h2>

            <p className="mt-8 max-w-md text-[14px] leading-relaxed text-ink/75 sm:mt-10 sm:text-[15px] md:text-[16px]">
              Cuidar da saúde urológica exige atenção ao detalhe, escuta verdadeira
              e decisões seguras. O atendimento reúne urologia geral, uro-oncologia
              e procedimentos minimamente invasivos com seriedade e clareza.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustPills.map((pill) => (
                <span
                  key={pill}
                  className="text-[11px] uppercase tracking-[0.18em] text-forest/80"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
              <a
                href={whatsappAppointmentUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 bg-ink px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.16em] text-bone transition-colors hover:bg-forest sm:w-auto sm:px-7 sm:py-4 sm:text-[13px] sm:tracking-[0.18em]"
              >
                Agendar consulta
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
              <a
                href="#medico"
                className="group inline-flex items-center gap-2 text-[14px] text-ink underline decoration-ink/30 underline-offset-[6px] transition-colors hover:decoration-ink"
              >
                Conheça o médico
              </a>
            </div>

          </div>

          {/* Right portrait */}
          <div className="relative z-10 col-span-12 md:col-span-5">
            <div className="absolute right-6 top-8 hidden h-[82%] w-[82%] max-w-[380px] rounded-[28px] bg-ink/14 blur-3xl md:block" />
            <div className="absolute -right-3 bottom-8 hidden h-[55%] w-[40%] rounded-[28px] bg-forest/12 blur-2xl md:block" />

            <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden bg-sage-soft shadow-care sm:max-w-[440px] md:ml-auto">
              <img
                src={doctorHero}
                alt="Dr. Fabiano Roberto Fugita"
                width={1080}
                height={1350}
                className="h-full w-full object-cover transition-transform duration-[1600ms] hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink/55 to-transparent p-4 text-bone sm:p-5">
                <div>
                  <p className="font-serif text-base leading-tight sm:text-lg">Dr. Fabiano R. Fugita</p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-bone/80 sm:text-[11px] sm:tracking-[0.2em]">
                    Urologista · Uro-oncologia
                  </p>
                </div>
                <span className="font-serif text-xs italic text-bone/80 sm:text-sm">2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bar of hero (figma-inspired forest band) */}
        <div className="relative grid grid-cols-12 gap-6 bg-forest px-5 py-8 text-bone sm:px-8 sm:py-10 md:px-14 md:py-14">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow text-bone/60">Compromisso</p>
            <p className="mt-4 font-serif text-[26px] leading-tight sm:text-2xl md:text-3xl">
              Cuidar com ciência,
              <br />
              proteger com presença.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="text-[14px] leading-relaxed text-bone/80 sm:text-[15px] md:text-[16px]">
              Ao longo de mais de uma década de atuação, o compromisso permanece
              o mesmo: oferecer precisão no diagnóstico, responsabilidade na
              conduta e acompanhamento próximo em todas as fases do cuidado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
