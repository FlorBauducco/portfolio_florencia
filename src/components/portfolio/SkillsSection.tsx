import SectionWrapper from "./SectionWrapper";
import { SKILLS, SKILL_CATEGORIES, STUDIES } from "@/data/portfolio";
import type { SkillCategory } from "@/types/portfolio";

const CATEGORY_ORDER: readonly SkillCategory[] = [
  "frontend",
  "backend",
  "tools",
  "learning",
];

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <div className="animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 text-gradient">
        Skills & Estudios
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {CATEGORY_ORDER.map((category) => (
          <div key={category} className="bg-card rounded-xl p-6 shadow-sm border border-border">
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
        ))}
      </div>

      <div>
        <h3 className="text-2xl font-display font-semibold mb-6 text-foreground">
          Formación
        </h3>
        {STUDIES.map((study) => (
          <div
            key={study.title}
            className="bg-card rounded-xl p-6 shadow-sm border border-border"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h4 className="font-semibold text-foreground">{study.title}</h4>
              <span className="text-sm text-primary font-medium">
                {study.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">
              {study.institution}
            </p>
            <p className="text-muted-foreground">{study.description}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default SkillsSection;
