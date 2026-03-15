import { Download } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import profileImg from "@/assets/me.jpg";
import { useEffect, useState } from "react";

const TYPEWRITER_TEXT = "Desarrolladora Junior en crecimiento...";

const HeroSection = () => {
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayed("");
      setCharIndex(0);
      setCycle((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (charIndex < TYPEWRITER_TEXT.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + TYPEWRITER_TEXT[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timer);
    }
  }, [charIndex, cycle]);

  return (
    <SectionWrapper id="home" className="relative">
      <div className="absolute top-8 left-0 right-0 flex justify-center pointer-events-none">
        <span className="text-gradient font-mono text-2xl md:text-3xl font-semibold tracking-wide">
          {displayed}
          <span className="animate-pulse">|</span>
        </span>
      </div>

      <div
        className="flex flex-col md:flex-row items-center gap-12 transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(-60px)",
        }}
      >
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl flex-shrink-0">
          <img
            src={profileImg}
            alt="Florencia Bauducco"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-muted-foreground font-medium mb-2">¡Hola! Soy</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-gradient">
            Florencia Bauducco
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Desarrolladora junior con mentalidad de crecimiento constante y
            gran capacidad de adaptación. Me apasiona resolver problemas y
            convertir ideas en soluciones reales. Busco un equipo donde seguir
            aprendiendo y aportar desde el primer día.
          </p>
          <a
            href="/files/cv.fb1.pdf"
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
};

export default HeroSection;