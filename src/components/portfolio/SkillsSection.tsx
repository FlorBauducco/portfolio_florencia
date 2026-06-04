import SectionWrapper from "./SectionWrapper";
import { SKILLS, SKILL_CATEGORIES } from "@/data/portfolio";
import { useScrollProgress } from "@/hooks/useScrollAnimation";
import type { SkillCategory } from "@/types/portfolio";

const CATEGORY_ORDER: readonly SkillCategory[] = [
  "frontend",
  "backend",
  "tools",
  "learning",
];

// Cada card de categoría tiene su propia animación independiente
const SkillCard = ({ category }: { category: SkillCategory }) => {
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
      <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
        {SKILL_CATEGORIES[category]}
      </h3>
      <div className="flex flex-wrap gap-2">
        {SKILLS.filter((s) => s.category === category).map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground font-medium"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, progress } = useScrollProgress();

  return (
    <SectionWrapper id="skills">
      {/* El título tiene su propia animación */}
      <div
        ref={ref}
        style={{
          opacity: progress,
          transform: `scale(${0.9 + 0.1 * progress})`,
          willChange: "opacity, transform",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-gradient">
          Skills
        </h2>
      </div>

      {/* Cada card se anima por separado */}
      <div className="grid md:grid-cols-2 gap-6">
        {CATEGORY_ORDER.map((category) => (
          <SkillCard key={category} category={category} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
