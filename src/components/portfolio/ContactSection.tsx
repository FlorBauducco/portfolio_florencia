import { MapPin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { CONTACT_LINKS } from "@/data/portfolio";

const ContactSection = () => (
  <SectionWrapper id="contact">
    <div className="animate-fade-in-up text-center">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gradient">
        Contacto
      </h2>
      <p className="text-muted-foreground text-lg mb-2">
        
      </p>
      <p className="flex items-center justify-center gap-1.5 text-muted-foreground mb-10">
        <MapPin size={16} />
        Madrid, España
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {CONTACT_LINKS.map(({ label, href, icon: Icon, username }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 w-full sm:w-auto"
          >
            <Icon size={20} className="text-primary flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-sm font-medium text-foreground">{username}</p>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-16 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Florencia Bauducco.
      </p>
    </div>
  </SectionWrapper>
);

export default ContactSection;
