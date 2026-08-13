export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'title': 'Diego Perez Perez portfolio - Frontend/Fullstack Developer - 2+ years of experience',
    'description': 'Software Developer with 2+ years of experience building SaaS platforms, dashboards, ERP systems, and interactive web applications. Specialized in React, Next.js, and TypeScript.',
    'nav.about': 'About me',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.badge': 'Available for hire',
    'hero.title': "Hey, I'm Diego",
    'hero.exp': '2+ years of experience. ',
    'hero.role': 'Web Frontend & Fullstack Developer. ',
    'hero.loc': 'Based in Guanajuato, México.',
    'hero.desc': ' I specialize in building <strong>SaaS platforms</strong>, <strong>dashboards</strong>, <strong>ERP systems</strong>, and <strong>interactive web applications</strong>.',
    'hero.download_cv': 'Download Resume',
    'hero.cv_filename': '[EN]CV_Diego-Perez-Perez.pdf',
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.name_placeholder': 'Enter your name',
    'contact.email': 'Email',
    'contact.email_placeholder': 'Enter your email',
    'contact.subject': 'Subject',
    'contact.subject_placeholder': 'Subject',
    'contact.message': 'Message',
    'contact.message_placeholder': 'Enter your message',
    'contact.send': 'Send Message',
    'projects.title': 'Projects',
    'projects.demo_unavailable': 'Demo Unavailable',
    'projects.demo': 'Demo',
    'projects.github': 'GitHub',
    'projects.private': 'Private Code',
    'experience.title': 'Experience',
    'footer.rights': 'Almost all rights reserved',
    'linkedin.url': 'https://linkedin.com/in/codebreakerr',
    'github.url': 'https://github.com/CodeBreaker518',
  },
  es: {
    'title': 'Portafolio de Diego Perez Perez - Desarrollador Frontend/Fullstack - Más de 2 años de experiencia',
    'description': 'Desarrollador de Software con más de 2 años de experiencia desarrollando plataformas SaaS, dashboards, sistemas ERP y aplicaciones web interactivas. Especializado en React, Next.js y TypeScript.',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.badge': 'Disponible para trabajar',
    'hero.title': 'Hola, soy Diego',
    'hero.exp': 'Más de 2 años de experiencia. ',
    'hero.role': 'Desarrollador Web Frontend y Fullstack. ',
    'hero.loc': 'De Guanajuato, México.',
    'hero.desc': ' Especializado en el desarrollo de <strong>plataformas SaaS</strong>, <strong>dashboards</strong>, <strong>ERPs</strong> y <strong>aplicaciones web interactivas</strong>.',
    'hero.download_cv': 'Descargar CV',
    'hero.cv_filename': '[ES]CV_Diego-Perez-Perez.pdf',
    'contact.title': 'Contacto',
    'contact.name': 'Nombre',
    'contact.name_placeholder': 'Ingresa tu nombre',
    'contact.email': 'Correo electrónico',
    'contact.email_placeholder': 'Ingresa tu correo electrónico',
    'contact.subject': 'Asunto',
    'contact.subject_placeholder': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.message_placeholder': 'Escribe tu mensaje',
    'contact.send': 'Enviar mensaje',
    'projects.title': 'Proyectos',
    'projects.demo_unavailable': 'Demo no disponible',
    'projects.demo': 'Demo',
    'projects.github': 'GitHub',
    'projects.private': 'Código privado',
    'experience.title': 'Experiencia',
    'footer.rights': 'Casi todos los derechos reservados',
    'linkedin.url': 'https://linkedin.com/in/codebreakerr',
    'github.url': 'https://github.com/CodeBreaker518',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
