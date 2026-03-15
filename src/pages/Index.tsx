import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const { activeSection, scrollToSection } = useActiveSection();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="gradient-bg-animated min-h-screen">
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
