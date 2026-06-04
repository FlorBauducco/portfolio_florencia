import { MapPin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { CONTACT_LINKS } from "@/data/portfolio";
import { useScrollProgress } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, progress } = useScrollProgress();

  return (
    <SectionWrapper id="contact">
      <div
        ref={ref}
        className="text-center"
        style={{
          opacity: progress,
          transform: `scale(${0.88 + 0.12 * progress})`,
          willChange: "opacity, transform",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
          Contacto
        </h2>
        <p className="flex items-center justify-center gap-1.5 text-muted-foreground mb-10">
          <MapPin size={16} />
          Madrid, España
        </p>

        <div className="flex flex-row items-center justify-center gap-6">
          {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-card border border-border shadow-sm hover:shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              aria-label={label}
            >
              <Icon size={24} />
              {/* Tooltip al hover */}
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-card text-foreground text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-border">
                {label}
              </span>
            </a>
          ))}
        </div>

        <p className="mt-16 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Florencia Bauducco.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
