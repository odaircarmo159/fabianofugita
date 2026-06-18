import { consultorioAddress, googleMapsConsultorioUrl } from "@/content/links";

export function LocalSeo() {
  return (
    <section className="border-t border-border bg-secondary/35">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-7 py-20 sm:px-6 sm:py-24 lg:px-12">
        <div className="reveal col-span-12 min-w-0 md:col-span-5">
          <div className="mx-auto max-w-[620px] md:mx-0">
            <p className="eyebrow text-forest">Atendimento em Dourados-MS</p>
            <h2 className="mt-5 max-w-[11ch] text-pretty font-serif text-[28px] leading-[1.04] sm:mt-6 sm:max-w-full sm:text-[40px] md:text-[56px]">
            Urologista em Dourados com foco em <em className="italic text-forest">uro-oncologia e cirurgia minimamente invasiva</em>.
            </h2>
          </div>
        </div>

        <div className="reveal col-span-12 min-w-0 md:col-span-7">
          <div className="mx-auto max-w-[620px] md:mx-0">
            <p className="max-w-full text-[15px] leading-relaxed text-foreground/80 sm:max-w-none sm:text-[16px]">
              O atendimento em Dourados-MS é voltado a pacientes que buscam avaliação urológica
              especializada, acompanhamento de doenças do trato urinário, investigação de sintomas
              prostáticos, segunda opinião e cuidado oncológico com escuta individualizada.
            </p>
            <p className="mt-5 max-w-full text-[15px] leading-relaxed text-foreground/80 sm:max-w-none sm:text-[16px]">
              O atendimento acontece na Clínica Serenus, unindo consulta
              especializada, seguimento clínico e orientação individualizada.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4">
              <a
                href={googleMapsConsultorioUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-border bg-background px-5 py-5 transition-transform duration-300 hover:-translate-y-1 sm:px-6"
              >
                <p className="eyebrow text-muted-foreground">Clínica Serenus</p>
                <p className="mt-3 max-w-full text-[14px] leading-relaxed text-foreground sm:max-w-none sm:text-[15px]">{consultorioAddress}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
