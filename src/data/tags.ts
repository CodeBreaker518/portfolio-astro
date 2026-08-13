import HTML5 from "../assets/icons/HTML5.astro";
import CSS3 from "../assets/icons/CSS3.astro";
import JavaScript from "../assets/icons/JavaScript.astro";
import ReactJS from "../assets/icons/ReactJS.astro";
import TailwindCSS from "../assets/icons/TailwindCSS.astro";
import Bootstrap from "../assets/icons/Bootstrap.astro";
import NextJS from "../assets/icons/NextJS.astro";
import FireBaseIcon from "../assets/icons/FireBaseIcon.astro";
import TypeScript from "../assets/icons/TypeScript.astro";
import Bun from "../assets/icons/Bun.astro";
import Vite from "../assets/icons/Vite.astro";
import Cloudflare from "../assets/icons/Cloudflare.astro";
import Hono from "../assets/icons/Hono.astro";
import Drizzle from "../assets/icons/Drizzle.astro";
import Zustand from "../assets/icons/Zustand.astro";
import APIsREST from "../assets/icons/APIsREST.astro";
import Tauri from "../assets/icons/Tauri.astro";
import Angular from "../assets/icons/Angular.astro";
import Django from "../assets/icons/Django.astro";

export interface TagInfo {
  name: string;
  class: string;
  icon: any;
}

export const TAGS: Record<string, TagInfo> = {
  HTML5: {
    name: "HTML5",
    class: "bg-orange-500/10 text-orange-200 border border-orange-500/20",
    icon: HTML5,
  },
  CSS: {
    name: "CSS3",
    class: "bg-indigo-500/10 text-indigo-200 border border-indigo-500/20",
    icon: CSS3,
  },
  Bootstrap: {
    name: "Bootstrap",
    class: "bg-purple-500/10 text-purple-200 border border-purple-500/20",
    icon: Bootstrap,
  },
  TailWindCSS: {
    name: "TailwindCSS",
    class: "bg-sky-500/10 text-sky-200 border border-sky-500/20",
    icon: TailwindCSS,
  },
  JavaScript: {
    name: "JavaScript",
    class: "bg-yellow-500/10 text-yellow-200 border border-yellow-500/20",
    icon: JavaScript,
  },
  React: {
    name: "React.js",
    class: "bg-cyan-500/10 text-cyan-200 border border-cyan-500/20",
    icon: ReactJS,
  },
  NextJS: {
    name: "Next.js",
    class: "bg-neutral-500/10 text-neutral-200 border border-neutral-500/20",
    icon: NextJS,
  },
  FireBase: {
    name: "Firebase",
    class: "bg-orange-600/10 text-orange-200 border border-orange-600/20",
    icon: FireBaseIcon,
  },
  TypeScript: {
    name: "TypeScript",
    class: "bg-blue-600/10 text-blue-200 border border-blue-600/20",
    icon: TypeScript,
  },
  Zustand: {
    name: "Zustand",
    class: "bg-amber-600/10 text-amber-200 border border-amber-500/20",
    icon: Zustand,
  },
  Bun: {
    name: "Bun",
    class: "bg-yellow-500/10 text-yellow-100 border border-yellow-500/20",
    icon: Bun,
  },
  Recharts: {
    name: "Recharts",
    class: "bg-red-500/10 text-red-200 border border-red-500/20",
    icon: null,
  },
  Vite: {
    name: "Vite",
    class: "bg-purple-500/10 text-purple-200 border border-purple-500/20",
    icon: Vite,
  },
  Cloudflare: {
    name: "Cloudflare",
    class: "bg-orange-500/10 text-orange-200 border border-orange-500/20",
    icon: Cloudflare,
  },
  Hono: {
    name: "Hono",
    class: "bg-yellow-500/10 text-yellow-200 border border-yellow-500/20",
    icon: Hono,
  },
  Drizzle: {
    name: "Drizzle ORM",
    class: "bg-lime-500/10 text-lime-200 border border-lime-500/20",
    icon: Drizzle,
  },
  APIsREST: {
    name: "APIs REST",
    class: "bg-blue-500/10 text-blue-200 border border-blue-500/20",
    icon: APIsREST,
  },
  // Job stack specific tags:
  Tauri: {
    name: "Tauri",
    class: "bg-blue-500/10 text-blue-200 border border-blue-500/20",
    icon: Tauri,
  },
  Angular: {
    name: "Angular",
    class: "bg-red-600/10 text-red-200 border border-red-600/20",
    icon: Angular,
  },
  Django: {
    name: "Django",
    class: "bg-emerald-600/10 text-emerald-200 border border-emerald-600/20",
    icon: Django,
  },
  ElysiaJS: {
    name: "ElysiaJS",
    class: "bg-purple-500/10 text-purple-200 border border-purple-500/20",
    icon: null, // Elysia is missing icon, will render text-only
  },
  "Low-Level APIs": {
    name: "Low-Level APIs",
    class: "bg-zinc-500/10 text-zinc-200 border border-zinc-500/20",
    icon: APIsREST,
  },
  "APIs de Bajo Nivel": {
    name: "APIs de Bajo Nivel",
    class: "bg-zinc-500/10 text-zinc-200 border border-zinc-500/20",
    icon: APIsREST,
  },
  "Game Dev": {
    name: "Game Dev",
    class: "bg-pink-500/10 text-pink-200 border border-pink-500/20",
    icon: null,
  },
  "Videojuegos": {
    name: "Videojuegos",
    class: "bg-pink-500/10 text-pink-200 border border-pink-500/20",
    icon: null,
  },
  "REST APIs": {
    name: "REST APIs",
    class: "bg-blue-500/10 text-blue-200 border border-blue-500/20",
    icon: APIsREST,
  },
  "APIs REST": {
    name: "APIs REST",
    class: "bg-blue-500/10 text-blue-200 border border-blue-500/20",
    icon: APIsREST,
  },
  "ERP Layouts": {
    name: "ERP Layouts",
    class: "bg-teal-500/10 text-teal-200 border border-teal-500/20",
    icon: null,
  },
  "Módulos ERP": {
    name: "Módulos ERP",
    class: "bg-teal-500/10 text-teal-200 border border-teal-500/20",
    icon: null,
  }
};
