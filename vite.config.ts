import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  /**
   * Configuración de ruta base para GitHub Pages.
   *
   * Mientras el sitio viva en https://sebeermudez.github.io/web-psicologia/,
   * mantener: base: '/web-psicologia/'
   *
   * IMPORTANTE — Migración a dominio propio:
   * Cuando conectes un dominio personalizado (ej. https://camilaosorio.com),
   * cambia la línea siguiente a:
   *   base: '/',
   * y agrega tu archivo public/CNAME con el dominio.
   */
  base: '/web-psicologia/',
});
