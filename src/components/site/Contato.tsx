import doctorLogo from "@/assets/logo.png";
import { googleMapsConsultorioUrl, whatsappAppointmentUrl } from "@/content/links";

export function Contato() {
  const channels = [
    {
      label: "WhatsApp",
      value: "+55 (67) 99869-5613",
      href: whatsappAppointmentUrl,
    },
    {
      label: "E-mail",
      value: "contato@drfabianofugita.com.br",
      href: "mailto:contato@drfabianofugita.com.br",
    },
    {
      label: "Google Maps",
      value: "Ver localização do consultório",
      href: googleMapsConsultorioUrl,
    },
  ];

  return (
    <section id="contato" className="bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 md:py-32 lg:px-12">
        <div className="grid grid-cols-12 gap-8 border-b hairline-light pb-12 sm:pb-16">
          <div className="col-span-12 md:col-span-7">
            <img
              src={doctorLogo}
              alt="Logo Dr. Fabiano Roberto Fugita"
              className="mb-5 h-12 w-auto object-contain opacity-90 sm:h-14"
            />
            <p className="eyebrow text-bone/60">04 / Contato</p>
            <h2 className="reveal mt-5 font-serif text-[34px] leading-[1.02] text-balance sm:mt-6 sm:text-[48px] md:text-[80px] lg:text-[96px]">
              Agende sua consulta
              <br />
              <em className="italic text-sage">com tranquilidade e atenção.</em>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-[14px] leading-relaxed text-bone/75 sm:text-[15px]">
              A equipe está disponível para orientar sobre horários, primeiras
              informações, local de atendimento e forma de acompanhamento.
              Escolha abaixo o canal que for mais confortável para você.
            </p>
            <div className="mt-8 border-l border-sage/30 pl-5">
              <p className="text-[13px] uppercase tracking-[0.18em] text-sage/70">
                Agendamento facilitado
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-bone/75 sm:text-[14px]">
                Pelo WhatsApp, a equipe pode orientar sobre horários, Clínica Serenus,
                atuação no Hospital Regional de Dourados e primeiras informações antes da consulta.
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-bone/60">
                Contatos adicionais informados no material do consultório:
                {" "}
                (67) 99314-8040 e (67) 99116-1092.
              </p>
            </div>
            <a
              href={whatsappAppointmentUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-bone px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-sage sm:w-auto sm:px-7 sm:py-4 sm:text-[13px] sm:tracking-[0.18em]"
            >
              Marcar agora
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-px bg-bone/10">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label !== "E-mail" ? "_blank" : undefined}
              rel={c.label !== "E-mail" ? "noreferrer" : undefined}
              className="group col-span-12 bg-ink p-6 transition-colors hover:bg-forest sm:p-8 md:col-span-4"
            >
              <p className="eyebrow text-bone/55">{c.label}</p>
              <p
                className={`mt-5 font-serif leading-tight text-bone sm:mt-6 ${
                  c.label === "E-mail"
                    ? "break-all text-[16px] sm:text-[20px] md:text-[22px]"
                    : "text-[18px] sm:text-[22px] md:text-[24px]"
                }`}
              >
                {c.value}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-sage sm:mt-8 sm:text-[12px] sm:tracking-[0.2em]">
                Falar com a equipe
                <svg className="h-3 w-3 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
