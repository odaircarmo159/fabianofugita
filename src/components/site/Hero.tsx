import doctorHeroLandscape from "@/assets/doctor-hero-paisagem.png";
import { whatsappAppointmentUrl } from "@/content/links";


export function Hero() {
  return (
    <section id="top" className="relative bg-forest">
      <div className="mx-auto max-w-[1920px] px-0 pb-0">
        <div className="relative overflow-hidden bg-forest text-bone">
          <div className="absolute inset-x-0 bottom-0 top-0">
            <img
              src={doctorHeroLandscape}
              alt="Dr. Fabiano Fugita"
              width={1536}
              height={1024}
              className="absolute inset-y-0 right-0 h-full w-full object-cover object-[74%_0%] md:object-[78%_10%] lg:object-[80%_12%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,12,0.08)_0%,rgba(14,11,12,0.02)_26%,rgba(14,11,12,0.14)_48%,rgba(14,11,12,0.64)_72%,rgba(14,11,12,0.92)_100%)] md:bg-[linear-gradient(90deg,rgba(18,13,13,0.96)_0%,rgba(18,13,13,0.92)_22%,rgba(47,23,25,0.82)_38%,rgba(47,23,25,0.56)_52%,rgba(47,23,25,0.14)_66%,rgba(47,23,25,0.04)_74%,transparent_82%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,10,11,0.44)_0%,rgba(13,10,11,0.16)_22%,rgba(13,10,11,0.08)_44%,rgba(13,10,11,0.28)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.1)_30%,rgba(0,0,0,0.42)_100%)] md:inset-y-0 md:left-0 md:h-auto md:w-[56%] md:bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_28%,transparent_28%),linear-gradient(135deg,rgba(0,0,0,0.44)_0%,rgba(0,0,0,0.44)_18%,transparent_18%)]" />
          </div>

          <div className="pointer-events-none absolute inset-0 grain opacity-[0.08]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_top_left,oklch(var(--sage)/0.07),transparent_24%)] md:w-[55%]" />
          <div className="pointer-events-none absolute left-[42%] top-1/2 hidden h-[720px] w-[720px] -translate-y-1/2 rounded-full border border-white/10 md:block" />
          <div className="pointer-events-none absolute left-[48%] top-[54%] hidden h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 md:block" />

          <div className="relative z-10 grid min-h-[620px] grid-cols-12 pt-[88px] sm:min-h-[680px] sm:pt-[108px] md:min-h-[760px] lg:min-h-[820px] lg:pt-[118px]">
            <div className="col-span-12 flex items-end px-6 pb-10 pt-[240px] sm:px-8 sm:py-14 md:col-span-7 md:items-center md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="max-w-[720px]">
                <div className="hidden w-fit border border-white/12 bg-white/4 px-4 py-3 backdrop-blur-[1px] sm:block sm:px-5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-bone/60 sm:text-[11px]">
                    Dr. Fabiano Fugita
                  </p>
                  <p className="mt-2 font-serif text-[28px] leading-none text-bone sm:text-[34px] lg:text-[44px]">
                    Urologia
                  </p>
                </div>

                <h1 className="mt-0 max-w-[10ch] font-serif text-[38px] leading-[0.94] tracking-tight text-bone sm:mt-8 sm:max-w-[11ch] sm:text-[54px] md:text-[68px] lg:text-[82px]">
                  Urologia com precisão e presença.
                </h1>
                <h2 className="mt-4 max-w-[22ch] text-[15px] leading-relaxed text-bone/82 sm:mt-5 sm:text-[20px] md:max-w-[30ch] md:text-[22px] lg:text-[24px]">
                  Uro-oncologia e cirurgia minimamente invasiva.
                </h2>

                <div className="mt-6 h-px w-full max-w-[520px] bg-white/30 sm:mt-8" />

                <div className="mt-6 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:gap-x-8">
                  <a
                    href={whatsappAppointmentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[rgba(143,48,56,0.88)] px-7 py-4 text-[13px] font-semibold tracking-[0.01em] text-white shadow-[0_12px_28px_rgba(66,18,24,0.32)] transition-colors hover:bg-[rgba(164,58,68,0.96)] sm:w-auto sm:min-w-[220px]"
                  >
                    Agendar consulta
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                  </a>
                  <a
                    href="#medico"
                    className="group inline-flex items-center gap-2 text-[14px] text-bone/84 underline decoration-bone/26 underline-offset-[6px] transition-colors hover:text-bone hover:decoration-bone"
                  >
                    Conheça o médico
                  </a>
                </div>

                <div className="mt-7 max-w-[620px] border-l border-white/20 pl-4 sm:mt-10 sm:pl-6">
                  <p className="font-serif text-[17px] italic leading-tight text-bone sm:text-[22px] md:text-[26px]">
                    Decisões seguras e acompanhamento próximo do diagnóstico ao seguimento.
                  </p>
                  <p className="mt-4 text-[12px] uppercase tracking-[0.16em] text-bone/68 sm:text-[13px]">
                    Atendimento em Dourados-MS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden bg-[#4b1820] text-bone">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(215,177,131,0.14),transparent_28%),linear-gradient(120deg,rgba(255,255,255,0.03),transparent_44%)]" />
          <div className="pointer-events-none absolute -bottom-16 left-[12%] h-32 w-32 rounded-full bg-[#d7b183]/10 blur-3xl" />
          <div className="relative grid grid-cols-12 gap-6 px-5 py-7 sm:px-8 sm:py-8 md:px-14 md:py-10">
            <div className="col-span-12 md:col-span-5">
              <p className="eyebrow text-bone/58">Compromisso</p>
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

          <div className="pointer-events-none relative h-20 overflow-hidden sm:h-24 md:h-28">
            <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-transparent via-[#6b2730]/40 to-transparent blur-2xl" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(ellipse_at_center,rgba(215,177,131,0.18),transparent_62%)] opacity-70" />
            <svg
              viewBox="0 0 1440 180"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-x-0 bottom-[-1px] h-full w-full text-background"
            >
              <path
                fill="currentColor"
                d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,90.7C960,75,1056,53,1152,53.3C1248,53,1344,75,1392,85.3L1440,96L1440,181L1392,181C1344,181,1248,181,1152,181C1056,181,960,181,864,181C768,181,672,181,576,181C480,181,384,181,288,181C192,181,96,181,48,181L0,181Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
