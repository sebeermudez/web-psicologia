# Sitio Web Profesional — Ibeth Camila Osorio Mora

Página web profesional de **Ibeth Camila Osorio Mora**, Psicóloga Especialista en Infancia y Desarrollo.  
Construida con **Vite + React + TypeScript (modo estricto) + Tailwind CSS + Lucide React**, lista para despliegue automático en **GitHub Pages**.

---

## Desarrollo local

```bash
npm install
npm run dev
npm run build
```

> En Windows con PowerShell restringido, utiliza `npm.cmd` en lugar de `npm` (por ejemplo, `npm.cmd run build`).

---

## 1. Cómo reemplazar el logo y la foto profesional

### Reemplazar el logo provisional
- El logo actual vive en `src/assets/logo.svg` y se importa automáticamente en `src/components/Navbar.tsx`, `src/components/Footer.tsx` y como favicon en `index.html`.
- **Opción recomendada (sin tocar código):** sustituye el archivo `src/assets/logo.svg` por tu nuevo logo en formato `.svg` conservando el mismo nombre.
- **Si el logo nuevo es `.png` o `.webp`:** guárdalo en `src/assets/` (por ejemplo `src/assets/logo.png`) y actualiza la línea de importación en `src/components/Navbar.tsx`, `src/components/Footer.tsx` y la etiqueta `<link rel="icon" ...>` en `index.html`.

### Reemplazar la fotografía profesional ("Sobre Mí")
- El espacio reservado actual está en `src/assets/foto-perfil-placeholder.svg` (relación de aspecto `4:5`, bordes redondeados) y se muestra en `src/components/AboutSection.tsx`.
- Para colocar la foto real:
  1. Copia tu fotografía optimizada (idealmente proporción `4:5`, ej. `960x1200 px`, en `.webp` o `.jpg`) en `src/assets/foto-perfil.webp` (o `.jpg`).
  2. Abre `src/components/AboutSection.tsx` y cambia la línea:
     ```ts
     import profilePlaceholderSvg from '../assets/foto-perfil-placeholder.svg';
     ```
     por:
     ```ts
     import profilePhoto from '../assets/foto-perfil.webp';
     ```
     y actualiza `src={profilePhoto}` en la etiqueta `<img>`.

---

## 2. Cómo agregar correo electrónico y redes sociales

Toda la información de contacto está centralizada en `src/config/contact.ts`.  
Los campos `email`, `instagram` y `linkedin` son opcionales y están en `undefined` para ocultarse limpiamente mientras no existan.

Para habilitarlos, edita `src/config/contact.ts`:

```ts
export const contactConfig: ContactConfig = {
  // ...
  email: 'contacto@tudominio.com',
  instagram: 'https://instagram.com/tu_usuario',
  linkedin: 'https://linkedin.com/in/tu_perfil',
};
```

Al guardar y desplegar, la sección de Contacto y el Footer mostrarán automáticamente los nuevos enlaces sin modificar ningún componente.

---

## 3. Cómo activar un dominio propio en el futuro

Actualmente el sitio está configurado para publicarse en `https://sebeermudez.github.io/web-psicologia/`. Cuando adquieras y conectes un dominio propio (por ejemplo `https://camilaosorio.com`):

1. **Actualiza la ruta base en `vite.config.ts`:**
   Cambia:
   ```ts
   base: '/web-psicologia/',
   ```
   por:
   ```ts
   base: '/',
   ```
2. **Agrega el archivo `public/CNAME`:**
   Crea un archivo llamado `CNAME` dentro de la carpeta `public/` que contenga únicamente tu dominio (sin `https://`), por ejemplo:
   ```text
   camilaosorio.com
   ```
3. **Configura GitHub Pages y tu proveedor DNS:**
   - En GitHub: **Settings → Pages → Custom domain**, escribe tu dominio y activa **Enforce HTTPS**.
   - En tu registrador de dominio: apunta los registros `A` / `CNAME` según la documentación oficial de GitHub Pages.
4. Haz commit y `git push origin main`; GitHub Actions (`.github/workflows/deploy.yml`) recompilará y desplegará el sitio automáticamente.

---

## Estructura del proyecto

- `docs/KNOWLEDGE_BASE.md` — Reglas editoriales, identidad visual y marca personal.
- `src/config/contact.ts` — Datos centralizados de WhatsApp, ubicación y canales opcionales.
- `src/data/content.ts` — Todo el copy del sitio web en español tipado con TypeScript.
- `src/types/index.ts` — Interfaces y tipos compartidos.
- `src/components/` — Componentes modulares de cada sección de la landing page.
- `src/assets/` — Logo SVG y placeholder de fotografía profesional.
- `.github/workflows/deploy.yml` — Flujo de despliegue automático a GitHub Pages.
