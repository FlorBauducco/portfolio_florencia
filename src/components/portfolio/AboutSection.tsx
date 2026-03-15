import SectionWrapper from "./SectionWrapper";

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-gradient">
        Sobre mí
      </h2>
      <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
        <p>
          Soy Florencia, una desarrolladora de software en formación con base en
          Madrid, España. Originaria de Argentina, me mudé con la ilusión de
          crecer profesionalmente en el sector tecnológico europeo.
        </p>
        <p>
          Actualmente estoy finalizando el ciclo superior de Desarrollo de
          Aplicaciones Multiplataforma (DAM), donde he adquirido conocimientos
          sólidos en Java, Kotlin, bases de datos y desarrollo web con React y
          TypeScript.
        </p>
        <p>
          Mi objetivo es incorporarme a un equipo donde pueda seguir aprendiendo,
          aportar valor desde el primer día y desarrollar soluciones que mejoren
          la vida de las personas. Valoro el código limpio, la colaboración y la
          mejora continua.
        </p>
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
