const fs = require('fs');
const path = require('path');

const icons = {
  Vite: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg',
  Cloudflare: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cloudflare/cloudflare-original.svg',
  Hono: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/hono.svg',
  Drizzle: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/drizzle.svg',
  Zustand: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/zustand/zustand-original.svg',
  Tauri: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tauri/tauri-original.svg',
  Angular: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angular/angular-original.svg',
  Django: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/django.svg'
};

async function download() {
  for (const [name, url] of Object.entries(icons)) {
    console.log(`Fetching ${name}...`);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      let svg = await res.text();
      
      // Inject {...Astro.props} and make sure it has no width/height properties
      svg = svg.replace(/<svg\s+([^>]+)>/i, (match, attrs) => {
        let cleanAttrs = attrs
          .replace(/\bwidth="[^"]*"/gi, '')
          .replace(/\bheight="[^"]*"/gi, '')
          .replace(/\brole="[^"]*"/gi, '');
        return `<svg {...Astro.props} ${cleanAttrs.trim()}>`;
      });
      
      // Inject fill="currentColor" for monochrome icons
      if (name === 'Hono' || name === 'Drizzle' || name === 'Django') {
        svg = svg.replace(/<path\s+/gi, '<path fill="currentColor" ');
      }

      const dest = path.join(__dirname, '..', 'src', 'assets', 'icons', `${name}.astro`);
      fs.writeFileSync(dest, svg);
      console.log(`Saved ${name}.astro`);
    } catch (e) {
      console.error(`Failed to download ${name}:`, e);
    }
  }
  
  // Also create APIsREST.astro icon
  const apisRestSvg = `<svg {...Astro.props} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
  <line x1="6" y1="6" x2="6.01" y2="6" />
  <line x1="6" y1="18" x2="6.01" y2="18" />
  <path d="M20 6H12M20 18H12" />
</svg>`;
  const apisRestDest = path.join(__dirname, '..', 'src', 'assets', 'icons', 'APIsREST.astro');
  fs.writeFileSync(apisRestDest, apisRestSvg);
  console.log(`Saved APIsREST.astro`);
}

download();
