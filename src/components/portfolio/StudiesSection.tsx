import SectionWrapper from "./SectionWrapper";
import { STUDIES } from "@/data/portfolio";
import { useScrollProgress } from "@/hooks/useScrollAnimation";
import type { Study } from "@/types/portfolio";

// Cada card de formación tiene su propia animación independiente
const StudyCard = ({ study }: { study: Study }) => {
  const { ref, progress } = useScrollProgress();

  return (
    <div
      ref={ref}
      style={{
        opacity: progress,
        transform: `scale(${0.9 + 0.1 * progress})`,
        willChange: "opacity, transform",
      }}
      className="bg-card rounded-xl p-6 shadow-sm border border-border"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h4 className="font-semibold text-foreground">{study.title}</h4>
        <span className="text-sm text-primary font-medium">{study.period}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-1">{study.institution}</p>
      <p className="text-muted-foreground">{study.description}</p>
    </div>
  );
};

const StudiesSection = () => {
  const { ref, progress } = useScrollProgress();

  return (
    <SectionWrapper id="studies">
      {/* Título con su propia animación */}
      <div
        ref={ref}
        style={{
          opacity: progress,
          transform: `scale(${0.9 + 0.1 * progress})`,
          willChange: "opacity, transform",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-gradient">
          Formación
        </h2>
      </div>

      {/* Cada card se anima por separado */}
      <div className="space-y-4">
        {STUDIES.map((study) => (
          <StudyCard key={study.title} study={study} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default StudiesSection;
