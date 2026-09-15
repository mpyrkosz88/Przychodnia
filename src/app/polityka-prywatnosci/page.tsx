import React, { Suspense } from 'react';
import LegalPageContent from '@/components/LegalPageContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RODO i Polityka Prywatności | Przychodnia BIEGUNOWA Legnica',
  description: 'Klauzula informacyjna RODO dla pacjentów placówki medycznej, polityka prywatności oraz polityka plików cookies Przychodni BIEGUNOWA w Legnicy.',
};

export default function PrivacyPolicyPage() {
  return (
    <Suspense fallback={<div style={{ padding: 40, textAlign: 'center' }}>Ładowanie dokumentów...</div>}>
      <LegalPageContent />
    </Suspense>
  );
}
