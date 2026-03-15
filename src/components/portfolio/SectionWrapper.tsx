import type { ReactNode } from "react";
import type { SectionId } from "@/types/portfolio";

interface SectionWrapperProps {
  readonly id: SectionId;
  readonly children: ReactNode;
  readonly className?: string;
}

const SectionWrapper = ({ id, children, className = "" }: SectionWrapperProps) => (
  <section
    id={id}
    className={`min-h-screen flex items-center justify-center py-20 px-6 md:px-12 lg:px-24 pb-24 md:pb-20 ${className}`}
  >
    <div className="w-full max-w-4xl mx-auto">{children}</div>
  </section>
);

export default SectionWrapper;
