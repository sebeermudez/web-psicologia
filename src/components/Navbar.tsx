import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import logoSvg from '../assets/logo.svg';
import { contactConfig } from '../config/contact';
import { siteContent } from '../data/content';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-acento-suave/90 bg-crema/95 backdrop-blur-md">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          onClick={handleNavClick}
          className="group flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primario"
        >
          <img
            src={logoSvg}
            alt={`Logo de ${siteContent.brandName}`}
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 transition-transform duration-200 group-hover:scale-[1.03]"
          />
          <div className="min-w-0">
            <span className="block truncate font-serif text-base font-semibold leading-tight text-texto-principal sm:text-lg">
              {siteContent.brandName}
            </span>
            <span className="block truncate text-xs font-medium text-texto-secundario">
              {siteContent.brandSubtitle}
            </span>
          </div>
        </a>

        {/* Navegación escritorio */}
        <div className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-6">
            {siteContent.navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-texto-secundario transition-colors duration-200 hover:text-primario"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={contactConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primario px-5 py-2.5 text-sm font-semibold text-blanco shadow-xs transition-all duration-200 hover:bg-primario-hover hover:shadow-sm"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span>{siteContent.navCtaLabel}</span>
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-acento-suave bg-blanco text-texto-principal transition-colors hover:border-primario/40 hover:text-primario lg:hidden"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-acento-suave bg-blanco px-4 pt-3 pb-5 shadow-sm lg:hidden"
        >
          <ul className="space-y-1">
            {siteContent.navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block rounded-xl px-3.5 py-2.5 text-base font-medium text-texto-principal transition-colors hover:bg-crema hover:text-primario"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-acento-suave pt-4">
            <a
              href={contactConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primario px-5 py-3 text-sm font-semibold text-blanco transition-colors hover:bg-primario-hover"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>{siteContent.navCtaLabel}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
