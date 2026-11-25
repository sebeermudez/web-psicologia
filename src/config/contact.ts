import type { ContactConfig } from '../types';

const WHATSAPP_NUMBER = '573002627281';
const DEFAULT_WHATSAPP_MESSAGE =
  'Hola Camila, vi tu página web y me gustaría agendar una cita o conocer más sobre tus acompañamientos.';

/**
 * Configuración centralizada de contacto y canales digitales.
 *
 * Para habilitar correo electrónico o redes sociales en el futuro,
 * reemplaza `undefined` por el valor real (por ejemplo:
 *   email: 'contacto@dominio.com',
 *   instagram: 'https://instagram.com/tu_usuario',
 *   linkedin: 'https://linkedin.com/in/tu_perfil',
 * ).
 * Mientras permanezcan en `undefined`, la interfaz los ocultará limpiamente.
 */
export const contactConfig: ContactConfig = {
  professionalName: 'Ibeth Camila Osorio Mora',
  shortName: 'Camila Osorio',
  specialty: 'Psicóloga Especialista en Infancia y Desarrollo',
  city: 'Bogotá, Colombia',
  modalities: 'Atención Virtual y Presencial en Bogotá',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplay: '+57 300 262 7281',
  whatsappDefaultMessage: DEFAULT_WHATSAPP_MESSAGE,
  whatsappUrl:
    'https://wa.me/573002627281?text=Hola%20Camila%2C%20vi%20tu%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita%20o%20conocer%20m%C3%A1s%20sobre%20tus%20acompa%C3%B1amientos.',
  email: undefined,
  instagram: undefined,
  linkedin: undefined,
};

/**
 * Construye un enlace de WhatsApp con un mensaje personalizado opcional.
 * Si no se pasa un mensaje, devuelve exactamente el enlace oficial prellenado.
 */
export function buildWhatsAppUrl(customMessage?: string): string {
  if (!customMessage) {
    return contactConfig.whatsappUrl;
  }

  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(customMessage)}`;
}
