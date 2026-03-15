import { useState, useEffect, useCallback } from "react";
import type { SectionId } from "@/types/portfolio";

export const useActiveSection = (): {
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
} => {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const scrollToSection = useCallback((id: SectionId) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const sectionIds: readonly SectionId[] = [
      "home",
      "about",
      "skills",
      "experience",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id as SectionId);
        }
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return { activeSection, scrollToSection };
};
