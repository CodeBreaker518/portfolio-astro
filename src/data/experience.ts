export interface ExperienceItemData {
  date: string;
  title: string;
  description: string;
  link?: string;
  tags?: string[];
}

export const EXPERIENCE_DATA: Record<'en' | 'es', ExperienceItemData[]> = {
  en: [
    {
      date: "2026 (Contract)",
      title: "Fullstack Developer - Goat Tool",
      description: "Collaborated in a team of 3 developers, working closely with the tool's owner/CEO to build and optimize <strong>Goat Tool</strong>, a native desktop application for mobile device technicians.<br /><br />• Contributed to building and polishing the high-fidelity user interface using <strong>Tauri, React, and TypeScript</strong>.<br />• Integrated UI modules with <strong>low-level repair processes</strong> and hardware utilities used daily by support technicians.",
      tags: ["Tauri", "React", "TypeScript", "Low-Level APIs"]
    },
    {
      date: "January 2024 - November 2024",
      title: "Fullstack Web Developer - Keep Vending USA / NitroBean USA",
      description: "Led the architecture migration of a legacy Angular/Django platform to a modern tech stack.<br /><br />• Collaborated directly with the <strong>CTO</strong> in planning, researching, architecture decision-making, and migration strategy execution.<br />• Designed and implemented new frontend modules using <strong>Next.js, React, TypeScript, and ElysiaJS</strong>, improving overall scalability and UI performance.",
      tags: ["Next.js", "ElysiaJS", "React", "TypeScript", "Angular", "Django"]
    },
    {
      date: "June 2024 - September 2024",
      title: "Frontend Web Developer - Jalo",
      description: "Developed an <strong>internal dashboard</strong> to manage and display promotional content and social links, working closely with the CTO.<br /><br />• Optimized core frontend modules focused on improving usability and user engagement.<br />• Developed <strong>two browser-based games</strong> (Tetris and a racing game) using React, implementing scoring systems and real-time mechanics.",
      tags: ["React", "JavaScript", "HTML5", "CSS3", "Game Dev"]
    },
    {
      date: "March 2024 - July 2024",
      title: "Frontend Web Developer - Tramet (Freelance)",
      description: "Developed core modules for a custom <strong>ERP platform</strong> focused on operational efficiency.<br /><br />• Collaborated with backend developers to define <strong>API contracts</strong>, database workflows, and functional requirements.<br />• Created reusable UI components and frontend architecture patterns to accelerate future feature development.",
      tags: ["React", "TypeScript", "REST APIs", "ERP Layouts"]
    },
  ],
  es: [
    {
      date: "2026 (Contrato)",
      title: "Desarrollador FullStack - Goat Tool",
      description: "Colaboré en un equipo de 3 desarrolladores, trabajando estrechamente con el creador/CEO de la herramienta para construir y optimizar <strong>Goat Tool</strong>, una aplicación de escritorio nativa para técnicos de dispositivos móviles.<br /><br />• Participé en el desarrollo y pulido de la interfaz de usuario de alta interacción utilizando <strong>Tauri, React y TypeScript</strong>.<br />• Integré la UI con <strong>procesos de bajo nivel</strong> y utilidades de reparación utilizadas a diario por técnicos de soporte.",
      tags: ["Tauri", "React", "TypeScript", "APIs de Bajo Nivel"]
    },
    {
      date: "Enero 2024 – Noviembre 2024",
      title: "Desarrollador Web FullStack - Keep Vending USA / NitroBean USA",
      description: "Lideré la migración de la plataforma heredada (desarrollada en Angular/Django) hacia una infraestructura moderna.<br /><br />• Colaboré directamente con el <strong>CTO</strong> en la planeación, investigación, toma de decisiones de arquitectura y estrategia de migración.<br />• Diseñé e implementé nuevos módulos frontend utilizando <strong>Next.js, React, TypeScript y ElysiaJS</strong>, mejorando la mantenibilidad y escalabilidad.",
      tags: ["Next.js", "ElysiaJS", "React", "TypeScript", "Angular", "Django"]
    },
    {
      date: "Junio 2024 – Septiembre 2024",
      title: "Desarrollador Web Frontend - Jalo",
      description: "Desarrollé un <strong>dashboard interno</strong> para administrar contenido promocional y enlaces sociales de la plataforma, trabajando directo con el CTO.<br /><br />• Diseñé y optimicé módulos frontend enfocados en mejorar la usabilidad y el nivel de interacción de los usuarios.<br />• Desarrollé <strong>dos videojuegos para navegador</strong> (Tetris y un juego de carreras semi-3D) utilizando React y tiempo real.",
      tags: ["React", "JavaScript", "HTML5", "CSS3", "Videojuegos"]
    },
    {
      date: "Marzo 2024 – Julio 2024",
      title: "Desarrollador Web Frontend - Tramet (Freelance)",
      description: "Desarrollé módulos principales para una plataforma <strong>ERP personalizada</strong> enfocada en la eficiencia operativa.<br /><br />• Colaboré con desarrolladores backend para definir <strong>contratos de API</strong>, flujos de trabajo y requerimientos funcionales.<br />• Creé componentes reutilizables y patrones de arquitectura frontend para acelerar el desarrollo futuro.",
      tags: ["React", "TypeScript", "APIs REST", "Módulos ERP"]
    },
  ],
};
