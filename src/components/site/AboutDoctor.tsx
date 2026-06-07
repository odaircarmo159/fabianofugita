import { useEffect, useState } from "react";
import doctorCirurgiaHero from "@/assets/doctor-cirurgia-hero.png";
import careHands from "@/assets/doctor-working.png";
import doctorLogo from "@/assets/logo.png";

const credentials = [
  { year: "Graduação", title: "Medicina", org: "Universidade Federal da Grande Dourados" },
  { year: "Residência", title: "Cirurgia Geral", org: "Hospital de referência em alta complexidade" },
  { year: "Residência", title: "Urologia", org: "HUMAP / Universidade Federal de Mato Grosso do Sul" },
  {
    year: "Fellowship",
    title: "Urologia oncológica minimamente invasiva",
    org: "Hospital de Amor de Barretos",
  },
];

const galleryImages = [
  {
    src: careHands,
    alt: "Dr. Fabiano Fugita realizando cirurgia minimamente invasiva com tecnologia avançada",
  },
  {
    src: doctorCirurgiaHero,
    alt: "Dr. Fabiano Fugita em procedimento cirúrgico com equipe e videolaparoscopia",
  },
] as const;

export function AboutDoctor() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % galleryImages.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="medico" className="relative -mt-6 pb-4 sm:-mt-10 md:-mt-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(122,44,45,0.08),transparent_68%)]" />
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-12">
        <div className="relative overflow-hidden rounded-[28px] border border-[#e6ddd6] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,251,247,0.98))] px-5 py-10 shadow-[0_30px_80px_rgba(73,24,32,0.08)] backdrop-blur-sm sm:px-8 sm:py-12 md:px-10 md:py-14">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7a2c2d]/25 to-transparent" />
          <div className="pointer-events-none absolute -left-10 top-8 h-28 w-28 rounded-full bg-[#d7b183]/15 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-40 bg-[radial-gradient(circle_at_top_right,rgba(122,44,45,0.08),transparent_70%)]" />

          <div className="grid grid-cols-12 gap-x-8 gap-y-10 sm:gap-y-12">
            <div className="reveal col-span-12 md:col-span-4" data-reveal="left">
              <div className="mx-auto max-w-[620px] md:mx-0">
                <p className="eyebrow text-forest">01 / O médico</p>
                <h2 className="mt-5 font-serif text-[29px] leading-[1.02] text-balance sm:mt-6 sm:text-[40px] md:text-[56px]">
                  Técnica, escuta e <em className="italic text-forest">presença</em> em cada consulta.
                </h2>
              </div>
            </div>

            <div className="reveal col-span-12 md:col-span-4" data-reveal="zoom" style={{ transitionDelay: "120ms" }}>
              <div className="group relative mx-auto aspect-[4/5] max-w-[620px] overflow-hidden rounded-[24px] bg-secondary shadow-[0_24px_60px_rgba(73,24,32,0.12)] md:mx-0">
                {galleryImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    width={1080}
                    height={1350}
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-[1400ms] group-hover:scale-[1.05] ${
                      activeImage === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/20 px-3 py-2 backdrop-blur-sm">
                  {galleryImages.map((image, index) => (
                    <span
                      key={image.alt}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        activeImage === index ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal col-span-12 md:col-span-4" data-reveal="right" style={{ transitionDelay: "220ms" }}>
              <div className="mx-auto max-w-[620px] md:mx-0">
                <p className="text-[15px] leading-relaxed text-foreground/80 sm:text-[16px]">
                  A consulta médica precisa ser um espaço de confiança, mas também
                  de preparo técnico para indicar, no momento certo, a melhor
                  estratégia de tratamento. Cada atendimento é conduzido com tempo,
                  atenção e linguagem clara, para que o paciente compreenda o
                  diagnóstico e se sinta seguro em cada decisão.
                </p>
                <p className="mt-5 text-[15px] leading-relaxed text-foreground/80 sm:text-[16px]">
                  A atuação reúne urologia geral, cânceres urológicos, doenças da
                  próstata, cálculo urinário e cirurgia minimamente invasiva, com
                  experiência em técnicas avançadas e recursos tecnológicos que
                  ampliam a precisão cirúrgica, favorecem abordagens menos invasivas
                  e tornam o cuidado mais individualizado.
                </p>
                <div className="mt-8 border-l border-forest/20 pl-5">
                  <p className="text-[13px] uppercase tracking-[0.18em] text-forest/70">
                    Experiência percebida pelo paciente
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-foreground/80 sm:text-[15px]">
                    Atendimento sem pressa, explicações acessíveis e acompanhamento
                    próximo ajudam a unir tecnologia, precisão e confiança real
                    durante toda a jornada do cuidado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal relative mt-20 overflow-hidden rounded-[32px] bg-[linear-gradient(180deg,#7a2c2d_0%,#632123_100%)] text-bone shadow-[0_34px_90px_rgba(73,24,32,0.18)] sm:mt-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(217,184,151,0.16),transparent_24%),radial-gradient(circle_at_84%_22%,rgba(255,255,255,0.06),transparent_22%),radial-gradient(circle_at_78%_82%,rgba(217,184,151,0.09),transparent_20%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),transparent_38%,rgba(255,255,255,0.02)_62%,transparent_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/7 to-transparent" />
          <div className="pointer-events-none absolute -left-16 top-12 h-40 w-40 rounded-full bg-[#d9b897]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-6 right-8 h-32 w-32 rounded-full bg-black/10 blur-3xl" />
          <img
            src={doctorLogo}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 h-16 w-auto opacity-[0.16] mix-blend-screen sm:h-20 md:right-10 md:top-8"
          />

          <div className="relative px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="max-w-[720px]">
              <p className="eyebrow text-[#d9b897]">Formação</p>
              <h3 className="mt-4 font-serif text-[34px] leading-[0.98] sm:text-[42px] md:text-[48px]">
                Formação sólida e trajetória consistente.
              </h3>
            </div>

            <div className="mt-10 border-t border-white/12">
              {credentials.map((c) => (
                <article
                  key={c.title}
                  className="grid grid-cols-12 gap-3 border-b border-white/12 py-5 transition-colors duration-300 hover:bg-white/[0.03] sm:gap-4 sm:py-6"
                >
                  <span className="col-span-12 text-[11px] uppercase tracking-[0.18em] text-[#d9b897] md:col-span-2 md:self-center">
                    {c.year}
                  </span>
                  <p className="col-span-12 font-serif text-[25px] leading-[1.02] text-bone md:col-span-5 md:text-[32px]">
                    {c.title}
                  </p>
                  <p className="col-span-12 text-[14px] leading-relaxed text-bone/76 md:col-span-5 md:text-right">
                    {c.org}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
