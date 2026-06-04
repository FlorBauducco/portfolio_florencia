import { Moon, Sun , Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/portfolio";
import type { SectionId } from "@/types/portfolio";
import { useState } from "react";


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
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState (false);

  return (
  <>

    {/* Botón dark mode fijo arriba a la derecha */}
    <button
      onClick={onToggleTheme}
      className="fixed top-5 right-5 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-card text-muted-foreground hover:bg-secondary hover:text-foreground shadow-md transition-all duration-300"
      aria-label="Cambiar tema"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>

    {/* Desktop: navegación vertical derecha*/}
    <nav className="desktop-nav hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
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
      
    </nav>

    {/* Mobile: speed dial */}
    <div className="mobile-nav md:hidden fixed bottom-6 right-6 z-50 flex flex-col-reverse items-center gap-3">

      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-card text-muted-foreground shadow-md transition-all duration-300"
        aria-label="Menú"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Fondo borroso al abrir */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[-1] bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Items que aparecen hacia abajo */}
      {NAV_ITEMS.map(({ id, label, icon: Icon }, index) => (
        <button
          key={id}
          onClick={() => { onNavigate(id); setIsOpen(false); }}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          } ${
            activeSection === id
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-card text-muted-foreground shadow-md"
          }`}
          style={{
            transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
          }}
          aria-label={label}
        >
          <Icon size={18} />
        </button>
      ))}
    </div>
  </>
  );
};

export default Navigation;
