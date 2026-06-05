import { AboutDoctor } from "@/components/site/AboutDoctor";
import { Atuacao } from "@/components/site/Atuacao";
import { Consultorio } from "@/components/site/Consultorio";
import { Contato } from "@/components/site/Contato";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Hero } from "@/components/site/Hero";
import { LocalSeo } from "@/components/site/LocalSeo";
import { Nav } from "@/components/site/Nav";
import { PatientTrust } from "@/components/site/PatientTrust";
import { useReveal } from "@/hooks/use-reveal";

export default function App() {
  useReveal();

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] bg-page-glow" />
      <Nav />
      <main>
        <Hero />
        <AboutDoctor />
        <PatientTrust />
        <Atuacao />
        <Diferenciais />
        <Consultorio />
        <LocalSeo />
        <Contato />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
