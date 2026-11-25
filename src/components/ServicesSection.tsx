import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Compass,
  HeartHandshake,
  Sprout,
} from 'lucide-react';
import { buildWhatsAppUrl } from '../config/contact';
import { siteContent } from '../data/content';
import type { ServiceIconName } from '../types';

const serviceIconMap = {
  'heart-handshake': HeartHandshake,
  sprout: Sprout,
  compass: Compass,
  'book-open': BookOpen,
} as const;

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const Icon = serviceIconMap[name];
  return <Icon className="h-6 w-6" aria-hidden="true" />;
}

export function ServicesSection() {
  const { services } = siteContent;

  return (
    <section id="servicios" className="bg-crema py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-primario uppercase">
            {services.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-texto-principal sm:text-3xl lg:text-4xl">
            {services.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-texto-secundario sm:text-lg">
            {services.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.items.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between rounded-3xl border border-acento-suave bg-blanco p-7 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primario/35 hover:shadow-md sm:p-8"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-crema text-primario">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <span className="rounded-full bg-acento-suave/70 px-3.5 py-1 text-xs font-semibold text-secundario">
                    {service.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold leading-snug text-texto-principal sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-texto-secundario sm:text-base">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-acento-suave/80 pt-5">
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm text-texto-principal"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-secundario"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-2">
                <a
                  href={buildWhatsAppUrl(service.whatsappPrompt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primario transition-colors hover:text-primario-hover"
                >
                  <span>{services.cardCtaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
