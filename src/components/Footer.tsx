import { Instagram, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import logoSvg from '../assets/logo.svg';
import { contactConfig } from '../config/contact';
import { siteContent } from '../data/content';

export function Footer() {
  const { footer, navItems } = siteContent;
  const currentYear = new Date().getFullYear();
  const hasSocialLinks = Boolean(contactConfig.instagram || contactConfig.linkedin);

  return (
    <footer className="border-t border-acento-suave bg-blanco">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Identidad profesional */}
          <div className="md:col-span-5">
            <a href="#inicio" className="inline-flex items-center gap-3">
              <img
                src={logoSvg}
                alt={`Logo de ${contactConfig.professionalName}`}
                width={42}
                height={42}
                className="h-10 w-10 shrink-0"
              />
              <div>
                <p className="font-serif text-base font-semibold text-texto-principal">
                  {contactConfig.professionalName}
                </p>
                <p className="text-xs font-medium text-texto-secundario">
                  {contactConfig.specialty}
                </p>
              </div>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-texto-secundario">
              {footer.tagline}
            </p>

            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-secundario">
              <MapPin className="h-4 w-4 text-primario" aria-hidden="true" />
              <span>{contactConfig.city} · Atención Virtual y Presencial</span>
            </p>
          </div>

          {/* Navegación rápida */}
          <div className="md:col-span-3">
            <h2 className="font-serif text-base font-semibold text-texto-principal">
              {footer.quickLinksTitle}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-texto-secundario transition-colors hover:text-primario"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Canales de contacto (renderizado condicional de correo y redes) */}
          <div className="md:col-span-4">
            <h2 className="font-serif text-base font-semibold text-texto-principal">
              {footer.contactTitle}
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-texto-secundario">
              <li>
                <a
                  href={contactConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-medium text-texto-principal transition-colors hover:text-primario"
                >
                  <MessageCircle className="h-4 w-4 text-primario" aria-hidden="true" />
                  <span>WhatsApp: {contactConfig.whatsappDisplay}</span>
                </a>
              </li>

              {contactConfig.email && (
                <li>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-primario"
                  >
                    <Mail className="h-4 w-4 text-primario" aria-hidden="true" />
                    <span>{contactConfig.email}</span>
                  </a>
                </li>
              )}
            </ul>

            {hasSocialLinks && (
              <div className="mt-5 flex items-center gap-3">
                {contactConfig.instagram && (
                  <a
                    href={contactConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Ibeth Camila Osorio Mora"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-acento-suave bg-crema text-texto-principal transition-colors hover:border-primario hover:text-primario"
                  >
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}

                {contactConfig.linkedin && (
                  <a
                    href={contactConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Ibeth Camila Osorio Mora"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-acento-suave bg-crema text-texto-principal transition-colors hover:border-primario hover:text-primario"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-acento-suave pt-6 text-center text-xs text-texto-secundario sm:flex-row sm:text-left">
          <p>
            © {currentYear} {contactConfig.professionalName}. {footer.copyrightNote}
          </p>
          <p>{contactConfig.city}</p>
        </div>
      </div>
    </footer>
  );
}
