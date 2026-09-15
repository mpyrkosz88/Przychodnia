import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { generateClinicJsonLd } from '@/lib/seo';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://przychodnia-biegunowa.legnica.pl'),
  title: 'Przychodnia BIEGUNOWA Legnica | Lekarz Rodzinny POZ, Pediatra, NFZ',
  description:
    'Przychodnia lekarska Biegunowa w Legnicy (ul. Biegunowa 2). Bezpłatna Podstawowa Opieka Zdrowotna (POZ) w ramach NFZ, pediatria, punkt pobrań krwi Diagnostyka, lekarze specjaliści. Rejestracja: 76 722 15 50.',
  keywords: [
    'przychodnia legnica',
    'przychodnia biegunowa legnica',
    'biegunowa 2 legnica',
    'lekarz rodzinny legnica',
    'pediatra legnica',
    'poz nfz legnica',
    'punkt pobrań diagnostyka legnica biegunowa',
    'grażyna pyrkosz lekarz',
    'przychodnia nfz legnica',
  ],
  authors: [{ name: 'Spółka Lekarska BIEGUNOWA' }],
  openGraph: {
    title: 'Przychodnia BIEGUNOWA Legnica | Bezpłatna Opieka NFZ',
    description:
      'Kompleksowa opieka medyczna w ramach NFZ w Legnicy przy ul. Biegunowej 2. Lekarz POZ, badania laboratoryjne, punkt szczepień. Tel: 76 722 15 50.',
    url: 'https://przychodnia-biegunowa.legnica.pl',
    siteName: 'Przychodnia BIEGUNOWA Legnica',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://przychodnia-biegunowa.legnica.pl',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generateClinicJsonLd();

  return (
    <html lang="pl" className={jakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </head>
      <body>
        <ThemeRegistry>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <CookieBanner />
          </LanguageProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
