import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ParentingSection } from './components/ParentingSection';
import { ServicesSection } from './components/ServicesSection';

export default function App() {
  return (
    <div className="min-h-screen bg-crema text-texto-principal">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-primario focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-blanco"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="contenido-principal">
        <Hero />
        <ParentingSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
