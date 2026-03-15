import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import type {
  NavItem,
  Skill,
  Study,
  Experience,
  ContactLink,
} from "@/types/portfolio";

export const NAV_ITEMS: readonly NavItem[] = [
  { id: "home", label: "Inicio", icon: Home },
  { id: "about", label: "Sobre mí", icon: User },
  { id: "skills", label: "Skills", icon: GraduationCap },
  { id: "experience", label: "Experiencia", icon: Briefcase },
  { id: "contact", label: "Contacto", icon: Mail },
] as const;

export const SKILLS: readonly Skill[] = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML5 & CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Java", category: "backend" },
  { name: "Kotlin", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "Git & GitHub", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Node.js", category: "learning" },
  { name: "Docker", category: "learning" },
] as const;

export const SKILL_CATEGORIES: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Herramientas",
  learning: "Aprendiendo",
};

export const STUDIES: readonly Study[] = [
  {
    title: "Técnica Superior en Desarrollo de Aplicaciones Multiplataforma",
    institution: "Centro de estudios — Madrid",
    period: "2023 — Presente",
    description:
      "Formación integral en desarrollo de software multiplataforma, incluyendo Java, Kotlin, bases de datos, y desarrollo web.",
  },
] as const;

export const RELEVANT_EXPERIENCES: readonly Experience[] = [
  {
    title: "Proyecto académico — App de gestión",
    company: "Proyecto DAM",
    period: "2024",
    description:
      "Desarrollo de una aplicación multiplataforma de gestión utilizando Kotlin y bases de datos SQL.",
    tags: ["Kotlin", "SQL", "Android"],
  },
] as const;

export const NON_RELEVANT_EXPERIENCES: readonly Experience[] = [
  {
    title: "Atención al cliente",
    company: "Sector retail",
    period: "2020 — 2023",
    description:
      "Gestión de atención al público, resolución de incidencias y trabajo en equipo bajo presión. Desarrollé habilidades de comunicación y responsabilidad.",
    tags: ["Comunicación", "Trabajo en equipo", "Resolución de problemas"],
  },
] as const;

export const CONTACT_LINKS: readonly ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/florenciabauducco",
    icon: Github,
    username: "florenciabauducco",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/florenciabauducco",
    icon: Linkedin,
    username: "Florencia Bauducco",
  },
  {
    label: "Email",
    href: "mailto:florencia.bauducco@email.com",
    icon: Mail,
    username: "florencia.bauducco@email.com",
  },
] as const;
