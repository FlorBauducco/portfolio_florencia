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
  { name: "HTML5 & CSS3", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Java", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "ORM", category: "backend" },
  { name: "Git & GitHub", category: "tools" },
  { name: "AI Tools", category: "tools" },
  { name: "Android Studio", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Node.js", category: "learning" },
  { name: "C#", category: "learning" },
  { name: "Unity", category: "learning" },
  { name: "Typescript", category: "learning" },
  { name: "Agile", category: "learning" },
  { name: "Clean Code", category: "learning" },
  { name: "Inglés", category: "learning" },
] as const;

export const SKILL_CATEGORIES: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Herramientas",
  learning: "Aprendiendo",
};

export const STUDIES: readonly Study[] = [
  {
    title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
    institution: "MEDAC - Davante",
    period: "2024 — Presente",
    description:
      "Formación integral en desarrollo de software multiplataforma, incluyendo Java, Spring Boot, Bases de Datos, y Desarrollo web.",
  },

  {
    title: "Curso Desarrollo Web Full Stack",
    institution: "Udemy",
    period: "2026 — Presente",
    description:
      "Formación en desarrollo web full stack orientada al mundo laboral, con proyectos reales que integran frontend, backend, bases de datos relacionales y pagos online.",
  },
  {
    title: "Curso React & Typescript",
    institution: "Udemy",
    period: "2026 — Presente",
    description:
      "Formación completa en React y TypeScript orientada a proyectos del mundo real, con dominio del ecosistema React: hooks avanzados, estado global, autenticación, testing y desarrollo full stack con Node.js, Express y bases de datos relacionales y no relacionales.",
  },

] as const;

export const RELEVANT_EXPERIENCES: readonly Experience[] = [
  {
    title: "Prácticas — App de gestión",
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
    href: "https://github.com/FlorBauducco",
    icon: Github,
    username: "FlorBauducco",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/florencia-bauducco",
    icon: Linkedin,
    username: "Florencia Bauducco",
  },
  {
    label: "Email",
    href: "mailto:florazul.fb@gmail.com",
    icon: Mail,
    username: "florazul.fb@gmail.com",
  },
] as const;
