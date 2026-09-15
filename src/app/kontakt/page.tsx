import ContactSection from '@/components/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt i Lokalizacja | Przychodnia BIEGUNOWA Legnica',
  description: 'Kontakt telefoniczny: 76 722 15 50. Przychodnia Biegunowa, ul. Biegunowa 2, Legnica. Godziny przyjęć, mapa dojazdu, parking.',
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}
