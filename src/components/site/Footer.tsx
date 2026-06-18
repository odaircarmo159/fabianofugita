import { useEffect, useState } from "react";
import doctorLogo from "@/assets/logo.png";
import { cfmSearchUrl, instagramProfileUrl, lattesProfileUrl } from "@/content/links";
import "./Footer.css";

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
      <footer className="site-footer">
        <div className="site-footer-main">
          <div className="site-footer-layout">
            <div className="site-footer-brand-block">
            <div className="site-footer-brand">
              <img
                src={doctorLogo}
                alt="Logo Dr. Fabiano Fugita"
                className="site-footer-logo"
              />
              <p className="site-footer-name">Dr. Fabiano Fugita</p>
            </div>
            <p className="site-footer-credentials">
              CRM 9145 RQE 8667 · Urologia &amp; Uro-Oncologia · © {new Date().getFullYear()}
            </p>
            <div className="site-footer-links">
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="site-footer-link site-footer-link--instagram"
              >
                <span className="site-footer-link-icon-wrap">
                  <svg
                    viewBox="0 0 24 24"
                    className="site-footer-link-icon"
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
                className="site-footer-link-pill"
              >
                CRM 9145
              </a>
              <a
                href={cfmSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="site-footer-link-pill"
              >
                RQE 8667
              </a>
              <a
                href={lattesProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="site-footer-link-pill"
              >
                Currículo Lattes
              </a>
            </div>
            </div>
            <div className="site-footer-legal">
              <p className="site-footer-legal-copy">
                Este site tem finalidade informativa. A avaliação médica individual é essencial para
                diagnóstico e definição do tratamento mais adequado.
              </p>
              <div className="site-footer-legal-actions">
                <button
                  type="button"
                  onClick={() => setActiveModal("privacy")}
                  className="site-footer-legal-button"
                >
                  Política de Privacidade
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal("terms")}
                  className="site-footer-legal-button"
                >
                  Termos de Uso
                </button>
              </div>
            </div>
          </div>

          <div className="site-footer-meta">
            <p>© {new Date().getFullYear()} Dr. Fabiano Fugita. Todos os direitos reservados.</p>
            <p className="site-footer-meta-secondary">Desenvolvido por YouSystem.</p>
          </div>
        </div>
      </footer>

      {activeModal && (
        <div
          className="site-footer-modal-backdrop"
          onClick={() => setActiveModal(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={activeModal === "privacy" ? "privacy-modal-title" : "terms-modal-title"}
            className="site-footer-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="site-footer-modal-header">
              <div>
                <p className="eyebrow site-footer-modal-eyebrow">
                  {activeModal === "privacy" ? "Privacidade" : "Termos de uso"}
                </p>
                <h2
                  id={activeModal === "privacy" ? "privacy-modal-title" : "terms-modal-title"}
                  className="site-footer-modal-title"
                >
                  {activeModal === "privacy" ? "Política de Privacidade" : "Termos de Uso"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="site-footer-modal-close"
              >
                Fechar
              </button>
            </div>

            {activeModal === "privacy" ? (
              <div className="site-footer-modal-body">
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
              <div className="site-footer-modal-body">
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
