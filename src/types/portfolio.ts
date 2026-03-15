import type { LucideIcon } from "lucide-react";

export interface NavItem {
  readonly id: SectionId;
  readonly label: string;
  readonly icon: LucideIcon;
}

export type SectionId = "home" | "about" | "skills" | "experience" | "contact";

export interface Skill {
  readonly name: string;
  readonly category: SkillCategory;
}

export type SkillCategory = "frontend" | "backend" | "tools" | "learning";

export interface Study {
  readonly title: string;
  readonly institution: string;
  readonly period: string;
  readonly description: string;
}

export interface Experience {
  readonly title: string;
  readonly company: string;
  readonly period: string;
  readonly description: string;
  readonly tags: readonly string[];
}

export interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly icon: LucideIcon;
  readonly username: string;
}
