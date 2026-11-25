import {
  ArrowRight,
  Check,
  MapPin,
  MessageCircle,
  Sparkles,
  Video,
} from 'lucide-react';
import heroApoyoImg from '../assets/images/hero-apoyo.jpg';
import heroCrecimientoImg from '../assets/images/hero-crecimiento.jpg';
import heroFamiliaImg from '../assets/images/hero-familia.jpg';
import { contactConfig } from '../config/contact';
import { siteContent } from '../data/content';
import type { HeroPhotoKey } from '../types';

const heroImageMap: Record<HeroPhotoKey, string> = {
  familia: heroFamiliaImg,
  crecimiento: heroCrecimientoImg,
  apoyo: heroApoyoImg,
};

export function Hero() {
  const { hero } = siteContent;
  const [featuredPhoto, ...secondaryPhotos] = hero.galleryPhotos;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-crema pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-24"
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
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Columna principal de propuesta de valor */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-acento-suave bg-blanco px-4 py-1.5 text-xs font-semibold tracking-wide text-secundario shadow-2xs sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-primario" aria-hidden="true" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="mt-6 font-serif text-3xl font-semibold leading-[1.2] text-texto-principal sm:text-4xl lg:text-[2.85rem]">
              {hero.title}{' '}
              <span className="text-primario">{hero.titleHighlight}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-texto-secundario sm:text-lg">
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
            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:items-center">
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

          {/* Composición fotográfica editorial con tonos suaves y serenos */}
          <div className="lg:col-span-6">
            <div className="space-y-3.5 sm:space-y-4">
              {featuredPhoto && (
                <figure className="group relative overflow-hidden rounded-3xl border border-acento-suave bg-blanco shadow-sm">
                  <img
                    src={heroImageMap[featuredPhoto.key]}
                    alt={featuredPhoto.alt}
                    className="aspect-[16/10] w-full object-cover object-center saturate-[0.78] contrast-[0.96] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Velo cálido sutil para armonizar con la paleta crema */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-texto-principal/25 via-crema/8 to-transparent"
                  />
                  <figcaption className="absolute bottom-3.5 left-3.5 rounded-full border border-blanco/40 bg-crema/90 px-3.5 py-1 text-xs font-semibold tracking-wide text-texto-principal backdrop-blur-xs">
                    {featuredPhoto.label}
                  </figcaption>
                </figure>
              )}

              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                {secondaryPhotos.map((photo) => (
                  <figure
                    key={photo.key}
                    className="group relative overflow-hidden rounded-2xl border border-acento-suave bg-blanco shadow-sm sm:rounded-3xl"
                  >
                    <img
                      src={heroImageMap[photo.key]}
                      alt={photo.alt}
                      loading="lazy"
                      className="aspect-[4/4.3] w-full object-cover object-center saturate-[0.78] contrast-[0.96] transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-texto-principal/25 via-crema/8 to-transparent"
                    />
                    <figcaption className="absolute bottom-3 left-3 rounded-full border border-blanco/40 bg-crema/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-texto-principal backdrop-blur-xs sm:text-xs">
                      {photo.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
