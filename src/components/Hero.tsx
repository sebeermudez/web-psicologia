import {
  ArrowRight,
  Check,
  Heart,
  MapPin,
  MessageCircle,
  Sparkles,
  Video,
} from 'lucide-react';
import { contactConfig } from '../config/contact';
import { siteContent } from '../data/content';

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-crema pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      {/* Acentos orgánicos sutiles de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-acento-suave/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-secundario/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Columna principal de propuesta de valor */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-acento-suave bg-blanco px-4 py-1.5 text-xs font-semibold tracking-wide text-secundario shadow-2xs sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-primario" aria-hidden="true" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="mt-6 font-serif text-3xl font-semibold leading-[1.2] text-texto-principal sm:text-4xl lg:text-5xl">
              {hero.title}{' '}
              <span className="text-primario">{hero.titleHighlight}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-texto-secundario sm:text-lg">
              {hero.subtitle}
            </p>

            {/* Indicador de modalidades */}
            <div className="mt-6 inline-flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border border-acento-suave bg-blanco/85 px-4 py-3 text-sm font-medium text-texto-principal">
              <span className="inline-flex items-center gap-2">
                <Video className="h-4 w-4 text-secundario" aria-hidden="true" />
                <span>Modalidad Virtual</span>
              </span>
              <span className="hidden h-4 w-px bg-acento-suave sm:inline-block" aria-hidden="true" />
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primario" aria-hidden="true" />
                <span>Presencial en {contactConfig.city}</span>
              </span>
            </div>

            {/* Acciones principales */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href={contactConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primario px-7 py-3.5 text-sm font-semibold text-blanco shadow-sm transition-all duration-200 hover:bg-primario-hover hover:shadow-md sm:text-base"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>{hero.primaryCta}</span>
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-secundario/35 bg-blanco px-7 py-3.5 text-sm font-semibold text-secundario transition-all duration-200 hover:border-secundario hover:bg-secundario hover:text-blanco sm:text-base"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Puntos clave de confianza */}
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-acento-suave pt-6">
              {hero.trustNotes.map((note) => (
                <li
                  key={note}
                  className="inline-flex items-center gap-2 text-sm text-texto-secundario"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secundario/12 text-secundario">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tarjeta editorial de bienvenida */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-acento-suave bg-blanco p-7 shadow-sm sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-crema text-primario">
                <Heart className="h-6 w-6" aria-hidden="true" />
              </div>

              <p className="mt-5 font-serif text-xl font-medium leading-snug text-texto-principal sm:text-2xl">
                Un espacio sereno para escuchar, comprender y acompañar cada etapa del crecimiento.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-texto-secundario sm:text-base">
                Trabajamos juntos desde la cercanía y el respeto por la historia de cada familia,
                sin juicios ni fórmulas rígidas.
              </p>

              <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-acento-suave pt-6">
                <div className="rounded-2xl bg-crema p-4">
                  <dt className="text-xs font-medium text-texto-secundario">Trayectoria</dt>
                  <dd className="mt-1 font-serif text-xl font-semibold text-secundario">
                    +10 años
                  </dd>
                </div>
                <div className="rounded-2xl bg-crema p-4">
                  <dt className="text-xs font-medium text-texto-secundario">Atención</dt>
                  <dd className="mt-1 font-serif text-lg font-semibold text-primario">
                    Virtual y Bogotá
                  </dd>
                </div>
              </dl>

              <p className="mt-5 text-xs leading-relaxed text-texto-secundario">
                {hero.modalitiesLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
