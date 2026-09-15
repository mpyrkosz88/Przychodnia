import PatientZone from '@/components/PatientZone';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strefa Pacjenta | Przychodnia BIEGUNOWA Legnica',
  description: 'Zapisy do lekarza POZ, deklaracja IKP, zamawianie recept na leki stałe przez telefon/SMS, przygotowanie do badań krwi i pomoc po 18:00.',
};

export default function PatientZonePage() {
  return <PatientZone />;
}
