import { useEffect, useState } from "react";
import doctorLogo from "@/assets/logo.png";
import { cfmSearchUrl, instagramProfileUrl, lattesProfileUrl } from "@/content/links";

type ModalType = "privacy" | "terms" | null;

export function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  useEffect(() => {
    if (!activeModal) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveModal(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeModal]);

  return (
    <>
      <footer className="bg-ink text-bone">
        <div className="mx-auto max-w-[1400px] border-t hairline-light px-6 pb-28 pt-10 sm:pb-10 lg:px-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
            <div className="flex items-center gap-4">
              <img
                src={doctorLogo}
                alt="Logo Dr. Fabiano Roberto Fugita"
                className="h-12 w-auto object-contain opacity-95"
              />
              <p className="font-serif text-xl">Dr. Fabiano Roberto Fugita</p>
            </div>
            <p className="mt-1 text-[12px] text-bone/55">
              CRM 9145 RQE 8667 · Urologia &amp; Uro-Oncologia · © {new Date().getFullYear()}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-bone/65 transition-colors hover:text-bone"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline-light">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                Instagram
              </a>
              <a
                href={cfmSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border hairline-light px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-bone/65 transition-colors hover:text-bone"
              >
                CRM 9145
              </a>
              <a
                href={cfmSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border hairline-light px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-bone/65 transition-colors hover:text-bone"
              >
                RQE 8667
              </a>
              <a
                href={lattesProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border hairline-light px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-bone/65 transition-colors hover:text-bone"
              >
                Currículo Lattes
              </a>
            </div>
            </div>
            <div className="col-span-12 max-w-md text-[12px] text-bone/55 md:col-span-6 md:ml-auto md:text-right">
              <p>
                Este site tem finalidade informativa. A avaliação médica individual é essencial para
                diagnóstico e definição do tratamento mais adequado.
              </p>
              <div className="mt-5 flex flex-wrap justify-start gap-4 md:justify-end">
                <button
                  type="button"
                  onClick={() => setActiveModal("privacy")}
                  className="transition-colors hover:text-bone"
                >
                  Política de Privacidade
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal("terms")}
                  className="transition-colors hover:text-bone"
                >
                  Termos de Uso
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/8 pt-5 text-[11px] text-bone/35">
            <p>© {new Date().getFullYear()} Dr. Fabiano Roberto Fugita. Todos os direitos reservados.</p>
            <p className="mt-1">Desenvolvido por YouSystem.</p>
          </div>
        </div>
      </footer>

      {activeModal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 px-4 py-6"
          onClick={() => setActiveModal(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={activeModal === "privacy" ? "privacy-modal-title" : "terms-modal-title"}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-border bg-background p-6 text-foreground shadow-2xl md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="eyebrow text-forest">
                  {activeModal === "privacy" ? "Privacidade" : "Termos de uso"}
                </p>
                <h2
                  id={activeModal === "privacy" ? "privacy-modal-title" : "terms-modal-title"}
                  className="mt-4 font-serif text-[34px] leading-none md:text-[42px]"
                >
                  {activeModal === "privacy" ? "Política de Privacidade" : "Termos de Uso"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Fechar
              </button>
            </div>

            {activeModal === "privacy" ? (
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  Esta Política de Privacidade explica de forma simples como os dados enviados por
                  pacientes e visitantes podem ser utilizados neste site.
                </p>
                <p>
                  As informações preenchidas nos canais de contato, como nome, telefone, e-mail e
                  mensagem, são usadas apenas para retorno da equipe, orientação inicial e
                  organização do atendimento.
                </p>
                <p>
                  Os dados não são vendidos, compartilhados ou utilizados para finalidades
                  incompatíveis com o contato realizado pelo paciente.
                </p>
                <p>
                  Caso o visitante deseje solicitar atualização, correção ou exclusão de dados
                  enviados por meio do site, poderá fazer esse pedido pelos canais oficiais de
                  contato informados nesta página.
                </p>
                <p>
                  Este site pode passar por atualizações para refletir ajustes operacionais,
                  melhorias de segurança e adequações legais aplicáveis.
                </p>
              </div>
            ) : (
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  Este site tem caráter institucional e informativo, com o objetivo de apresentar
                  a atuação médica, formas de contato e informações gerais sobre o atendimento.
                </p>
                <p>
                  O conteúdo disponibilizado não substitui consulta médica, exame físico,
                  diagnóstico individualizado ou definição de tratamento.
                </p>
                <p>
                  Toda decisão relacionada à saúde deve ser tomada após avaliação médica adequada,
                  considerando o quadro clínico, histórico do paciente e exames complementares.
                </p>
                <p>
                  O uso deste site não estabelece, por si só, relação médico-paciente. O vínculo
                  assistencial acontece apenas durante atendimento profissional apropriado.
                </p>
                <p>
                  As informações apresentadas podem ser revisadas e atualizadas a qualquer momento,
                  sempre que houver necessidade de ajuste de conteúdo ou adequação institucional.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
