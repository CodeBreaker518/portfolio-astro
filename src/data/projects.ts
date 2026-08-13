export interface ProjectData {
  title: string;
  description: string;
  link?: string;
  github?: string;
  image?: string;
  tags: string[];
}

export const PROJECTS_DATA: Record<'en' | 'es', ProjectData[]> = {
  en: [
    {
      title: "ZendaPro",
      description: "A freemium SaaS platform for appointment and booking management tailored for small businesses.<br /><br />• Designed and developed the complete system architecture, implementing public booking portals and admin dashboards.<br />• Developed real-time customer notification flows via <strong>Server-Sent Events (SSE)</strong>.<br />• Implemented multi-tenant branding customization and customizable schedules.",
      link: "https://zendapro.app",
      tags: ["React", "TypeScript", "TailWindCSS", "Vite", "Cloudflare", "Hono", "Drizzle"],
      image: "/projects/zendapro.png",
    },
    {
      title: "BillExpress",
      description: "A free and open-source personal finance, income, and expense management platform.<br /><br />• Built transaction logs, multi-account ledger balances, and budget threshold tracking.<br />• Generated automatic monthly financial reports and interactive charts using <strong>Recharts</strong>.<br />• Structured a lightweight real-time state database with <strong>Zustand</strong> and Firebase storage.",
      link: "https://billexpress.vercel.app/",
      github: "https://github.com/CodeBreaker518/billexpress",
      image: "/projects/BillExpress.png",
      tags: ["NextJS", "React", "TypeScript", "TailWindCSS", "FireBase", "Zustand", "Bun", "Recharts"],
    },
  ],
  es: [
    {
      title: "ZendaPro",
      description: "Una plataforma SaaS freemium para la gestión de citas y reservaciones, enfocada en pequeños negocios.<br /><br />• Diseñé y desarrollé la arquitectura completa del sistema, implementando portales públicos de reserva y paneles de administración.<br />• Desarrollé flujos de notificación a clientes en tiempo real utilizando <strong>Server-Sent Events (SSE)</strong>.<br />• Implementé personalización de marca multi-inquilino (multi-tenant) y agendas configurables.",
      link: "https://zendapro.app",
      tags: ["React", "TypeScript", "TailWindCSS", "Vite", "Cloudflare", "Hono", "Drizzle"],
      image: "/projects/zendapro.png",
    },
    {
      title: "BillExpress",
      description: "Una aplicación web de código abierto y gratuita para la administración de ingresos, egresos y finanzas personales.<br /><br />• Creé registros de transacciones, saldos contables multi-cuenta y seguimiento de presupuestos mínimos.<br />• Diseñé reportes financieros automáticos y visualizaciones interactivas de datos mediante <strong>Recharts</strong>.<br />• Estructuré una base de datos ligera e integrada con almacenamiento de Firebase y estados en <strong>Zustand</strong>.",
      link: "https://billexpress.vercel.app/",
      github: "https://github.com/CodeBreaker518/billexpress",
      image: "/projects/BillExpress.png",
      tags: ["NextJS", "React", "TypeScript", "TailWindCSS", "FireBase", "Zustand", "Bun", "Recharts"],
    },
  ],
};
