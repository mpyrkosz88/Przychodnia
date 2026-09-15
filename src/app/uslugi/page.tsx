import ServicesSection from '@/components/ServicesSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Poradnie i Usługi NFZ | Przychodnia BIEGUNOWA Legnica',
  description: 'Bezpłatne usługi Podstawowej Opieki Zdrowotnej (POZ), pediatria, punkt szczepień, badania Diagnostyka i poradnie specjalistyczne w ramach NFZ.',
};

export default function ServicesPage() {
  return <ServicesSection />;
}
