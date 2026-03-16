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
    title: "Prácticas DAM",
    company: "Zaitec",
    period: "03/2026 - Present",
    description:
      "Desarrollo de un proyecto de Visitas Virtuales en entorno colaborativo y remoto. Creación de experiencias interactivas con Unity y C#, utilizando GitHub para el control de versiones y Jira para la gestión ágil de tareas y seguimiento del proyecto.",
    tags: ["UNITY", "C#", "Jira", "Agile", "GitHub" ],
  },
  {
    title: "Soporte Técnico & Atención al Cliente",
    company: "Apex América",
    period: "07/2019 - 12/2021",
    description:
      "Diagnóstico y resolución de incidencias técnicas de redes, software y dispositivos móviles. Gestión de tickets con Jira, SAP y Remedy; escalamiento estructurado a soporte N2. Desarrollo sólido de habilidades analíticas, resolución de problemas y documentación técnica.",
    tags: ["Gestión de tickets", "Resolución de incidencias", "Jira", "SAP", "Redes"],
  },
] as const;

export const NON_RELEVANT_EXPERIENCES: readonly Experience[] = [
  {
    title: "Administración & Soporte al Paciente",
    company: "Oximesa Nippon Gases",
    period: "11/2024 - Presente",
    description:
      "Gestión integral de la atención al paciente en servicios de terapia respiratoria y del sueño, combinando soporte administrativo y orientación personalizada. Gestión de alto volumen de incidencias, correos y tareas backoffice con herramientas CRM corporativas. Gestión de base de datos de pacientes con AS400 y Dynamics 365, garantizando precisión y trazabilidad.",
    tags: ["Dynamics 365", "AS400", "Resolución de incidencias", "Trabajo bajo Presión", "Gestión Multicanal"],
  },
  {
    title: "Administración - Servicios Generales",
    company: "AVATEL Telecom",
    period: "09/2024 - 11/2024",
    description:
      "Gestión y actualización de bases de datos asegurando precisión y consistencia de la información. Procesamiento de cargas masivas de datos mediante ficheros Excel y corrección de errores. Administración de documentación contractual y revisión de facturas corporativas.",
    tags: ["Base de datos", "Gestión de datos", "Excel", "Organización"],
  },
  {
    title: "Administrativa RRHH",
    company: "Expleo Group",
    period: "09/2023 - 09/2024",
    description:
      "Gestión integral de procesos administrativos en el área de Recursos Humanos, incluyendo control de horarios, vacaciones y documentación de personal. Resolución de incidencias y atención a consultas mediante gestión masiva de comunicaciones corporativas. Proceso de digitalización y archivo documental, optimizando la organización y accesibilidad de la información.",
    tags: ["Comunicación", "Trabajo en equipo", "Resolución de incidencias", "Organización", "Entorno Corporativo"],
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
