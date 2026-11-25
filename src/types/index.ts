export type ServiceIconName = 'heart-handshake' | 'sprout' | 'compass' | 'book-open';

export type PillarIconName = 'shield-check' | 'sun' | 'users';

export interface ContactConfig {
  readonly professionalName: string;
  readonly shortName: string;
  readonly specialty: string;
  readonly city: string;
  readonly modalities: string;
  readonly whatsappNumber: string;
  readonly whatsappDisplay: string;
  readonly whatsappDefaultMessage: string;
  readonly whatsappUrl: string;
  /**
   * Campos opcionales: mantener en `undefined` mientras no existan
   * para que la interfaz los oculte de forma limpia.
   */
  readonly email?: string;
  readonly instagram?: string;
  readonly linkedin?: string;
}

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export type HeroPhotoKey = 'familia' | 'crecimiento' | 'apoyo';

export interface HeroGalleryPhoto {
  readonly key: HeroPhotoKey;
  readonly label: string;
  readonly alt: string;
}

export interface HeroContent {
  readonly badge: string;
  readonly title: string;
  readonly titleHighlight: string;
  readonly subtitle: string;
  readonly modalitiesLabel: string;
  readonly primaryCta: string;
  readonly secondaryCta: string;
  readonly trustNotes: readonly string[];
  readonly galleryPhotos: readonly HeroGalleryPhoto[];
}

export interface PillarItem {
  readonly id: string;
  readonly icon: PillarIconName;
  readonly title: string;
  readonly description: string;
}

export interface ParentingSectionContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly intro: string;
  readonly quote: string;
  readonly pillars: readonly PillarItem[];
}

export interface ServiceItem {
  readonly id: string;
  readonly icon: ServiceIconName;
  readonly tag: string;
  readonly title: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly whatsappPrompt: string;
}

export interface ServicesSectionContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly cardCtaLabel: string;
  readonly items: readonly ServiceItem[];
}

export interface EducationItem {
  readonly degree: string;
  readonly institution: string;
}

export interface AboutSectionContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly roleSubtitle: string;
  readonly paragraphs: readonly string[];
  readonly currentRoleLabel: string;
  readonly currentRoleTitle: string;
  readonly currentRoleDescription: string;
  readonly educationTitle: string;
  readonly education: readonly EducationItem[];
  readonly experienceBadgeValue: string;
  readonly experienceBadgeLabel: string;
  readonly photoAlt: string;
}

export interface BookingStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface ContactSectionContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly steps: readonly BookingStep[];
  readonly cardTitle: string;
  readonly cardDescription: string;
  readonly modalitiesHeading: string;
  readonly virtualLabel: string;
  readonly inPersonLabel: string;
  readonly primaryCta: string;
  readonly responseNote: string;
}

export interface FooterContent {
  readonly tagline: string;
  readonly quickLinksTitle: string;
  readonly contactTitle: string;
  readonly copyrightNote: string;
}

export interface FloatingWhatsAppContent {
  readonly ariaLabel: string;
  readonly tooltip: string;
}

export interface SiteContent {
  readonly brandName: string;
  readonly brandSubtitle: string;
  readonly navCtaLabel: string;
  readonly navItems: readonly NavItem[];
  readonly hero: HeroContent;
  readonly parenting: ParentingSectionContent;
  readonly services: ServicesSectionContent;
  readonly about: AboutSectionContent;
  readonly contact: ContactSectionContent;
  readonly footer: FooterContent;
  readonly floatingWhatsApp: FloatingWhatsAppContent;
}
