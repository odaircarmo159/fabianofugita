import doctorHeroLandscape from "@/assets/doctor-hero-paisagem.png";
import { whatsappAppointmentUrl } from "@/content/links";


export function Hero() {
  return (
    <section id="top" className="relative bg-forest pt-[84px] md:pt-[96px]">
      <div className="mx-auto max-w-[1920px] px-0 pb-0">
        <div className="relative overflow-hidden bg-forest text-bone">
          <div className="absolute inset-0">
            <img
              src={doctorHeroLandscape}
              alt="Dr. Fabiano Roberto Fugita"
              width={1536}
              height={1024}
              className="absolute inset-y-0 right-0 h-full w-full object-cover object-[76%_center] md:object-right"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(var(--forest))_0%,oklch(var(--forest)/0.98)_34%,oklch(var(--forest)/0.92)_46%,oklch(var(--forest)/0.72)_58%,oklch(var(--forest)/0.34)_72%,transparent_88%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,oklch(var(--sage)/0.08),transparent_22%),linear-gradient(180deg,oklch(var(--ink)/0.12)_0%,transparent_34%,oklch(var(--ink)/0.14)_100%)]" />
          </div>

          <div className="pointer-events-none absolute inset-0 grain opacity-[0.08]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_top_left,oklch(var(--sage)/0.08),transparent_28%)] md:w-[55%]" />

          <div className="relative z-10 grid min-h-[540px] grid-cols-12 md:min-h-[620px] lg:min-h-[680px]">
            <div className="col-span-12 px-6 py-10 sm:px-8 sm:py-14 md:col-span-8 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <p className="eyebrow text-bone/68">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#d7b183] align-middle animate-blink" />
                CRM 9145 RQE 8667
              </p>

              <h1 className="mt-8 max-w-[13ch] font-serif text-[36px] leading-[0.96] tracking-tight text-bone sm:text-[44px] md:mt-9 md:text-[56px] lg:max-w-[14ch] lg:text-[72px]">
                Cuidado urológico com precisão e presença em cada etapa
              </h1>
              <h2 className="mt-4 max-w-[20ch] font-serif text-[21px] italic leading-[1.08] text-[#d7b183] sm:text-[25px] md:mt-5 md:text-[30px] lg:max-w-[22ch] lg:text-[38px]">
                Urologia, uro-oncologia e cirurgia minimamente invasiva com condução clara e individualizada
              </h2>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
                <a
                  href={whatsappAppointmentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 bg-[#d7b183] px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-forest transition-colors hover:bg-[#e3c49d] sm:w-auto sm:px-7"
                  style={{ borderRadius: "12px" }}
                >
                  Agendar consulta
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </a>
                <a
                  href="#medico"
                  className="group inline-flex items-center gap-2 text-[14px] text-bone/84 underline decoration-bone/26 underline-offset-[6px] transition-colors hover:text-bone hover:decoration-bone"
                >
                  Conheça o médico
                </a>
              </div>

              <div className="mt-10 max-w-[620px] pl-5 sm:pl-6">
                <p className="font-serif text-[19px] italic leading-tight text-bone sm:text-[21px] md:text-[24px]">
                  Decisões seguras, linguagem clara e acompanhamento próximo do diagnóstico ao seguimento.
                </p>
                <p className="mt-4 text-[12px] uppercase tracking-[0.16em] text-bone/68 sm:text-[13px]">
                  Atendimento em Dourados-MS
                </p>
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
