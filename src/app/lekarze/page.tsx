import React, { Suspense } from 'react';
import DoctorsSection from '@/components/DoctorsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nasi Lekarze i Specjaliści | Przychodnia BIEGUNOWA Legnica',
  description: 'Poznaj zespół lekarzy POZ i specjalistów Przychodni Biegunowa w Legnicy (lek. Grażyna Pyrkosz, internistka, nefrolog, pediatrzy).',
};

export default function DoctorsPage() {
  return (
    <Suspense fallback={<div style={{ padding: 40, textAlign: 'center' }}>Ładowanie...</div>}>
      <DoctorsSection />
    </Suspense>
  );
}
