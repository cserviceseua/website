import Hero from "./components/Hero";
import WorkingProcess from "./components/WorkingProcess";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Included from "./components/Included";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import FinalCta from "./components/FinalCta";

export default function Home() {
  return (
    <>
      {/* Seção Hero com fundo de imagem */}
      <Hero />
      
      {/* Seção Por Que Escolher Nossa Empresa */}
      <section className="fade-in-element">
        <WhyChoose />
      </section>
      
      {/* Seção de Serviços */}
      <section className="fade-in-element bg-background-light">
        <Services />
      </section>
      
      {/* Seção Processo de Trabalho */}
      <section className="fade-in-element">
        <WorkingProcess />
      </section>
      
      {/* Seção de Galeria */}
      <section className="fade-in-element bg-background">
        <Gallery />
      </section>
      
      {/* Seção de Depoimentos */}
      <section className="fade-in-element bg-background-light">
        <Testimonials />
      </section>
      
      {/* Seção O Que Está Incluído */}
      <section className="fade-in-element">
        <Included />
      </section>
      
      {/* Seção Final de Chamada para Ação */}
      <section className="fade-in-element bg-background">
        <FinalCta />
      </section>
    </>
  );
}