# Knowledge Base — Sitio Web Profesional de Ibeth Camila Osorio Mora

> **Documento maestro de reglas inmutables.** Todos los agentes (Arquitecto, Copywriter, Diseñador UI/UX y Desarrollador Frontend) deben leer y respetar estrictamente esta guía antes de diseñar, redactar o programar.

---

## 1. Marca Personal e Identidad Profesional

- **Nombre completo:** Ibeth Camila Osorio Mora
- **Título profesional:** Psicóloga Especialista en Infancia y Desarrollo
- **Ubicación:** Bogotá, Colombia
- **Modalidad de atención:** Virtual (desde cualquier lugar) y Presencial en Bogotá, Colombia.

## 2. Formación Académica

1. **Psicóloga** — Universidad Católica de Colombia.
2. **Especialista en Infancia, Cultura y Desarrollo** — Universidad Distrital Francisco José de Caldas.

## 3. Trayectoria Profesional

- **Experiencia actual:** Psicóloga en la **Secretaría de la Mujer** en la **Línea de Atención Púrpura**, brindando escucha activa, orientación psicosocial y acompañamiento en crisis.
- **Trayectoria general:** Más de 10 años de experiencia en acompañamiento a infancia, adolescencia, mujeres y familias, trabajo comunitario, atención en crisis, diseño de procesos pedagógicos y fortalecimiento de vínculos.

## 4. Enfoque y Propuesta de Valor

- **Enfoque:** Crianza respetuosa, desarrollo integral y acompañamiento cercano a niños, adolescentes y sus familias.
- **Propósito:** Ofrecer espacios seguros, humanos y prácticos donde niñas, niños, adolescentes, madres, padres y cuidadores puedan comprender las emociones, fortalecer los vínculos y transitar cada etapa del desarrollo con serenidad y herramientas reales.

## 5. Tono de Comunicación

- **Atributos clave:** Cálido, empático, profesional, claro y sereno.
- **Directriz editorial:** Transmitir confianza, cercanía y seguridad a madres, padres y cuidadores. Evitar tecnicismos clínicos fríos, jerga diagnóstica innecesaria o promesas exageradas. Escribir siempre en español natural y respetuoso.

## 6. Servicios Principales

1. **Acompañamiento Psicológico Infantil y Adolescente:** Espacios seguros de escucha y regulación emocional adaptados a cada etapa.
2. **Asesoría a Padres en Crianza Respetuosa:** Herramientas prácticas para poner límites con afecto, mejorar la comunicación y fortalecer el vínculo familiar.
3. **Acompañamiento en Etapas del Desarrollo:** Orientación en transiciones clave de la infancia y adolescencia (hábitos, escolaridad, cambios emocionales).
4. **Talleres y Procesos Pedagógicos:** Espacios formativos para familias, cuidadores e instituciones.

## 7. Contacto, Agendamiento y Datos Pendientes

- **Canal principal de agendamiento:** WhatsApp `+57 300 262 7281`
- **Enlace prellenado oficial:**
  `https://wa.me/573002627281?text=Hola%20Camila%2C%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita%20o%20conocer%20m%C3%A1s%20sobre%20tus%20acompa%C3%B1amientos.`
- **Regla estricta sobre datos pendientes:**
  - El correo electrónico y las redes sociales (Instagram, LinkedIn) **NO deben inventarse ni mostrarse rotos o vacíos**.
  - Toda la configuración de contacto se centraliza exclusivamente en `src/config/contact.ts`.
  - Los campos `email`, `instagram` y `linkedin` deben permanecer en `undefined` hasta ser suministrados, y la interfaz debe ocultarlos limpiamente cuando no estén definidos.

## 8. Identidad Visual y Tipografía

### Paleta de colores exacta (`src/index.css`)
- `--bg-crema`: `#FAF7F2` — Fondo principal cálido y sereno
- `--bg-blanco`: `#FFFFFF` — Tarjetas y secciones de contraste limpio
- `--color-primario`: `#9C5B46` — Terracota cálido y sobrio para CTAs y acentos principales
- `--color-secundario`: `#4A5D52` — Verde oliva profundo/sereno para confianza y equilibrio
- `--color-acento-suave`: `#EAE2D6` — Arena suave para bordes, divisores y badges
- `--texto-principal`: `#2B2927` — Carbón cálido para alta legibilidad
- `--texto-secundario`: `#5E5A56` — Gris cálido para párrafos secundarios

### Tipografía (Google Fonts)
- **Títulos:** `Lora` (serif cálida, seria y editorial)
- **Cuerpo de texto:** `Plus Jakarta Sans` (sans-serif limpia, moderna y legible)

### Activos reemplazables
- **Logo provisional:** `src/assets/logo.svg`
- **Foto profesional provisional:** `src/assets/foto-perfil-placeholder.svg`

## 9. Reglas de Arquitectura y Calidad Técnica

- **Stack:** Vite + React + TypeScript (modo estricto) + Tailwind CSS + Lucide React.
- **Separación de responsabilidades:**
  - Textos y copy estructurado en `src/data/content.ts`.
  - Configuración de contacto en `src/config/contact.ts`.
  - Tipos compartidos en `src/types/index.ts`.
  - Componentes modulares y accesibles en `src/components/`.
- **Diseño:** Mobile-First 100% responsivo, navegación suave (`smooth scroll`), SEO básico y Open Graph en español en `index.html`.
- **Despliegue:** GitHub Pages vía `.github/workflows/deploy.yml` desde la rama `main`, con `base: '/web-psicologia/'` en `vite.config.ts`.
