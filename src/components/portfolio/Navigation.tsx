import { Moon, Sun } from "lucide-react";
import { NAV_ITEMS } from "@/data/portfolio";
import type { SectionId } from "@/types/portfolio";

interface NavigationProps {
  readonly activeSection: SectionId;
  readonly onNavigate: (id: SectionId) => void;
  readonly theme: "light" | "dark";
  readonly onToggleTheme: () => void;
}

const Navigation = ({
  activeSection,
  onNavigate,
  theme,
  onToggleTheme,
}: NavigationProps) => (
  <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
    {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
      <button
        key={id}
        onClick={() => onNavigate(id)}
        className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
          activeSection === id
            ? "bg-primary text-primary-foreground shadow-lg"
            : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground shadow-md"
        }`}
        aria-label={label}
        title={label}
      >
        <Icon size={18} />
        <span className="absolute right-14 px-3 py-1 rounded-md bg-card text-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md pointer-events-none">
          {label}
        </span>
      </button>
    ))}
    <div className="w-px h-4 bg-border mx-auto" />
    <button
      onClick={onToggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-card text-muted-foreground hover:bg-secondary hover:text-foreground shadow-md transition-all duration-300"
      aria-label="Cambiar tema"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  </nav>
);

export default Navigation;
