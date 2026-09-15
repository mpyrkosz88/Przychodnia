import { CLINIC_INFO, DOCTORS } from '@/data/clinicData';

export function generateClinicJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['MedicalClinic', 'MedicalOrganization', 'LocalBusiness'],
    '@id': 'https://przychodnia-biegunowa.legnica.pl/#clinic',
    name: CLINIC_INFO.name,
    legalName: CLINIC_INFO.formalName,
    description:
      'Przychodnia BIEGUNOWA w Legnicy przy ul. Biegunowej 2 świadczy w 100% bezpłatne usługi medyczne w ramach kontraktu z NFZ (Podstawowa Opieka Zdrowotna, pediatria, poradnie specjalistyczne, punkt pobrań krwi).',
    url: 'https://przychodnia-biegunowa.legnica.pl',
    telephone: CLINIC_INFO.contact.phone,
    email: CLINIC_INFO.contact.email,
    taxID: CLINIC_INFO.legal.nip,
    vatID: CLINIC_INFO.legal.nip,
    isicV4: '8621',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CLINIC_INFO.address.street,
      addressLocality: CLINIC_INFO.address.city,
      postalCode: CLINIC_INFO.address.postalCode,
      addressRegion: CLINIC_INFO.address.voivodeship,
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: CLINIC_INFO.geo.latitude,
      longitude: CLINIC_INFO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '0 PLN (Umowa z NFZ - bezpłatne dla ubezpieczonych)',
    paymentAccepted: 'NFZ (Narodowy Fundusz Zdrowia)',
    currenciesAccepted: 'PLN',
    medicalSpecialty: [
      'https://schema.org/PrimaryCare',
      'https://schema.org/Pediatric',
      'https://schema.org/CommunityHealth',
    ],
    availableService: [
      {
        '@type': 'MedicalTherapy',
        name: 'Podstawowa Opieka Zdrowotna (POZ) NFZ',
      },
      {
        '@type': 'MedicalTest',
        name: 'Punkt Pobrań Badań Laboratoryjnych Diagnostyka',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Szczepienia ochronne dzieci i dorosłych',
      },
    ],
    physician: DOCTORS.map((doc) => ({
      '@type': 'Physician',
      name: doc.name,
      jobTitle: doc.specialties.pl.join(', '),
      description: doc.description.pl,
      worksFor: {
        '@type': 'MedicalClinic',
        name: CLINIC_INFO.name,
      },
    })),
  };

  return JSON.stringify(schema);
}
