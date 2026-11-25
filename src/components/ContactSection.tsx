import { Mail, MapPin, MessageCircle, Phone, Video } from 'lucide-react';
import { contactConfig } from '../config/contact';
import { siteContent } from '../data/content';

export function ContactSection() {
  const { contact } = siteContent;

  return (
    <section id="contacto" className="bg-crema py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-primario uppercase">
            {contact.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight text-texto-principal sm:text-3xl lg:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-texto-secundario sm:text-lg">
            {contact.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Pasos para agendar */}
          <ol className="space-y-4 lg:col-span-7">
            {contact.steps.map((step) => (
              <li
                key={step.number}
                className="flex gap-4 rounded-2xl border border-acento-suave bg-blanco p-6 shadow-2xs sm:gap-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-crema font-serif text-base font-semibold text-primario ring-1 ring-acento-suave">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-texto-principal sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-texto-secundario sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Tarjeta destacada de contacto */}
          <div className="rounded-3xl bg-secundario p-7 text-blanco shadow-md sm:p-9 lg:col-span-5">
            <h3 className="font-serif text-2xl font-semibold text-blanco">
              {contact.cardTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-crema/90 sm:text-base">
              {contact.cardDescription}
            </p>

            <div className="mt-6 space-y-3 rounded-2xl bg-blanco/10 p-4 text-sm text-crema">
              <p className="text-xs font-semibold tracking-wider text-acento-suave uppercase">
                {contact.modalitiesHeading}
              </p>
              <div className="flex items-start gap-2.5">
                <Video className="mt-0.5 h-4 w-4 shrink-0 text-acento-suave" aria-hidden="true" />
                <span>{contact.virtualLabel}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-acento-suave" aria-hidden="true" />
                <span>{contact.inPersonLabel}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={contactConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-primario px-6 py-3.5 text-sm font-semibold text-blanco shadow-sm transition-colors duration-200 hover:bg-primario-hover sm:text-base"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>{contact.primaryCta}</span>
              </a>

              <div className="flex flex-col items-center gap-2 pt-2 text-sm text-crema/90">
                <a
                  href={contactConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-blanco transition-opacity hover:opacity-85"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>WhatsApp: {contactConfig.whatsappDisplay}</span>
                </a>

                {contactConfig.email && (
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="inline-flex items-center gap-2 font-medium text-crema transition-opacity hover:opacity-85"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>{contactConfig.email}</span>
                  </a>
                )}
              </div>
            </div>

            <p className="mt-6 border-t border-blanco/15 pt-4 text-center text-xs text-crema/80">
              {contact.responseNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
