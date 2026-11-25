import { MessageCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';
import { siteContent } from '../data/content';

export function FloatingWhatsApp() {
  const { floatingWhatsApp } = siteContent;

  return (
    <a
      href={contactConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={floatingWhatsApp.ariaLabel}
      title={floatingWhatsApp.tooltip}
      className="group fixed right-5 bottom-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-secundario px-4 py-3.5 text-sm font-semibold text-blanco shadow-lg ring-1 ring-blanco/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-secundario-hover hover:shadow-xl sm:right-6 sm:bottom-6 sm:px-5"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">{floatingWhatsApp.tooltip}</span>
    </a>
  );
}
