import clinicRoom from "@/assets/clinic-room.jpg";
import {
  consultorioAddress,
  googleMapsConsultorioEmbedUrl,
  googleMapsConsultorioUrl,
} from "@/content/links";

const features = [
  "Clínica Serenus para consultas e acompanhamentos",
  "Estrutura organizada para consultas, retornos e seguimento",
  "Ambientes voltados ao acolhimento e à orientação do paciente",
];

const places = [
  {
    name: "Clínica Serenus",
    description: "Atendimento em consultório para avaliação, acompanhamento e seguimento urológico.",
    details: consultorioAddress,
  },
];

export function Consultorio() {
  return (
    <section id="consultorio" className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 md:py-32 lg:px-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="reveal col-span-12 md:col-span-7">
            <div className="aspect-[16/10] overflow-hidden bg-secondary">
              <img
                src={clinicRoom}
                alt="Interior do consultório"
                loading="lazy"
                width={1600}
                height={1000}
                className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.03]"
              />
            </div>

            <a
              href={googleMapsConsultorioUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 block overflow-hidden border border-border bg-card transition-shadow hover:shadow-care sm:mt-8"
            >
              <div className="flex flex-col items-start justify-between gap-3 border-b border-border px-4 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-5">
                <div>
                  <p className="eyebrow text-forest">Clínica Serenus</p>
                  <p className="mt-2 text-[14px] text-foreground/80">
                    Ver rota no Google Maps
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-forest">
                  Abrir mapa
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>

              <div className="relative h-[220px] w-full overflow-hidden bg-secondary">
                <iframe
                  title="Mapa da Clínica Serenus"
                  src={googleMapsConsultorioEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="pointer-events-none h-full w-full border-0 grayscale-[0.1] contrast-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
              </div>
            </a>
          </div>

          <div className="reveal col-span-12 md:col-span-5">
            <p className="eyebrow text-forest">03 / Locais de atendimento</p>
            <h2 className="mt-5 font-serif text-[32px] leading-[1.02] text-balance sm:mt-6 sm:text-[40px] md:text-[52px]">
              Um espaço pensado para <em className="italic text-forest">acolhimento e discrição</em>.
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-foreground/80 sm:mt-6 sm:text-[15px]">
              O atendimento está concentrado na Clínica Serenus, com ambiente
              voltado para consultas, acompanhamento e orientação individualizada.
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
              A imagem atual segue como apoio visual da seção. Quando houver
              fotos reais dos locais de atendimento, esta parte pode ficar ainda
              mais precisa e confiável.
            </p>

            <ul className="mt-8 divide-y divide-border border-y border-border">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-4 py-4">
                  <span className="text-[15px] text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-8">
              {places.map((place) => (
                <div key={place.name} className="border border-border bg-card px-5 py-5">
                  <p className="eyebrow text-muted-foreground">{place.name}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-foreground/85">
                    {place.description}
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-foreground">
                    {place.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
