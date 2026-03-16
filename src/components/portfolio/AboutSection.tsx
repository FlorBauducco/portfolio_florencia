import SectionWrapper from "./SectionWrapper";

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-gradient flex items-center gap-2">
        ... Sobre mí ...
      </h2>
      <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
        <p>
          👩‍💻 Soy Florencia, <span className="font-bold italic">Desarrolladora de software junior</span> finalizando el Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM), con bases en 
          Java, Spring Boot, bases de datos y buenas prácticas de desarrollo. 
          Mi formación me ha dado una visión completa del ciclo de vida del 
          software, desde el diseño hasta el despliegue.
        </p>
        <p>
            🚀 Mi entusiasmo por la tecnología me ha llevado a ir más allá, formándome de manera autodidacta en tecnologías web modernas como React, TypeScript, Node.js y desarrollo full stack, con proyectos reales que reflejan mi compromiso con el aprendizaje 
            continuo. Creo firmemente que el mejor código siempre se puede mejorar. ✨
        </p>
        <p>
            🌱 Soy una persona proactiva, con gran capacidad de adaptación y siempre 
            dispuesta a absorber nuevos conocimientos. Busco incorporarme a un 
            equipo donde pueda aportar valor desde el primer día, seguir creciendo 
            como profesional y contribuir a proyectos que tengan impacto real. 💡
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
