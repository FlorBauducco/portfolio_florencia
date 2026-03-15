import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import {
  RELEVANT_EXPERIENCES,
  NON_RELEVANT_EXPERIENCES,
} from "@/data/portfolio";
import type { Experience } from "@/types/portfolio";

type TabKey = "relevant" | "non-relevant";

interface TabConfig {
  readonly key: TabKey;
  readonly label: string;
  readonly data: readonly Experience[];
}

const TABS: readonly TabConfig[] = [
  { key: "relevant", label: "Experiencia relevante", data: RELEVANT_EXPERIENCES },
  {
    key: "non-relevant",
    label: "Otras experiencias",
    data: NON_RELEVANT_EXPERIENCES,
  },
] as const;

const ExperienceCard = ({ experience }: { readonly experience: Experience }) => (
  <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
      <h4 className="font-semibold text-foreground">{experience.title}</h4>
      <span className="text-sm text-primary font-medium">
        {experience.period}
      </span>
    </div>
    <p className="text-sm text-muted-foreground mb-3">{experience.company}</p>
    <p className="text-muted-foreground mb-4">{experience.description}</p>
    <div className="flex flex-wrap gap-2">
      {experience.tags.map((tag) => (
        <span
          key={tag}
          className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const NonRelevantBanner = () => (
  <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 mb-6 text-sm text-muted-foreground leading-relaxed italic">
    💼 Estas experiencias no están directamente relacionadas con mi camino en el
    desarrollo de software, pero han sido fundamentales para forjarme como
    profesional. Me han enseñado a comunicarme, adaptarme, trabajar bajo presión
    y desenvolverme con soltura en entornos corporativos exigentes — habilidades
    que hoy complementan mi perfil técnico.
  </div>
);

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("relevant");
  const currentTab = TABS.find((t) => t.key === activeTab) ?? TABS[0];

  return (
    <SectionWrapper id="experience">
      <div className="animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-gradient">
          Experiencia
        </h2>

        <div className="flex gap-2 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-secondary border border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Banner solo visible en "Otras experiencias" */}
        {activeTab === "non-relevant" && <NonRelevantBanner />}

        <div className="space-y-4">
          {currentTab.data.map((exp) => (
            <ExperienceCard key={`${exp.title}-${exp.company}`} experience={exp} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;