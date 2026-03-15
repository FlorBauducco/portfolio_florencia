import { Download } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import profileImg from "@/assets/me.jpg";

const HeroSection = () => (
  <SectionWrapper id="home">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl flex-shrink-0 animate-fade-in">
        <img
          src={profileImg}
          alt="Florencia Bauducco"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center md:text-left animate-fade-in-up">
        <p className="text-muted-foreground font-medium mb-2">¡Hola! Soy</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-gradient">
          Florencia Bauducco
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
          Desarrolladora de software en formación, apasionada por crear
          aplicaciones que marquen la diferencia. Actualmente finalizando mis
          estudios como Técnica en Desarrollo de Aplicaciones Multiplataforma en
          Madrid.
        </p>
        <a
          href="/cv-florencia-bauducco.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-lg"
        >
          <Download size={18} />
          Descargar CV
        </a>
      </div>
    </div>
  </SectionWrapper>
);

export default HeroSection;
