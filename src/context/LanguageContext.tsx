'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'pl' | 'en';

export interface Translations {
  // Top bar
  nfzNotice: string;
  hoursShort: string;
  addressShort: string;

  // Nav
  navHome: string;
  navServices: string;
  navDoctors: string;
  navPatientZone: string;
  navContact: string;

  // Header Call Button
  callRegistration: string;
  phoneLabel: string;

  // Hero
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCallBtn: string;
  heroHowToJoinBtn: string;
  cardPozTitle: string;
  cardPozDesc: string;
  cardPozBtn: string;
  cardLabBadge: string;
  cardLabTitle: string;
  cardLabDesc: string;
  cardLabBullets: string;

  // Services
  servicesBadge: string;
  servicesTitle: string;
  servicesSubtitle: string;
  freeNfzBadge: string;

  // Doctors
  doctorsBadge: string;
  doctorsTitle: string;
  doctorsSubtitle: string;
  doctorsSearchPlaceholder: string;

  // Patient Zone
  patientBadge: string;
  patientTitle: string;
  patientSubtitle: string;
  erecipeTitle: string;
  erecipeDesc: string;
  erecipeBtn: string;
  nightCareBadge: string;
  nightCareDesc: string;
  nightCarePhone: string;

  // Contact
  contactBadge: string;
  contactTitle: string;
  contactSubtitle: string;
  contactDetailsTitle: string;
  addressLabel: string;
  phoneDetailsLabel: string;
  emailLabel: string;
  hoursLabel: string;
  hoursValue: string;
  parkingLabel: string;
  mpkLabel: string;

  // Footer
  footerDesc: string;
  footerNfzBadge: string;
  quickNavTitle: string;
  legalTitle: string;
  copyright: string;
  rodoLink: string;
  patientRightsLink: string;
}

export const translations: Record<Language, Translations> = {
  pl: {
    nfzNotice: 'Świadczenia bezpłatne w ramach kontraktu z Narodowym Funduszem Zdrowia (NFZ)',
    hoursShort: 'Pn–Pt: 8:00–18:00',
    addressShort: 'ul. Biegunowa 2, Legnica',

    navHome: 'Strona Główna',
    navServices: 'Usługi NFZ',
    navDoctors: 'Lekarze',
    navPatientZone: 'Strefa Pacjenta',
    navContact: 'Kontakt i Dojazd',

    callRegistration: 'Rejestracja',
    phoneLabel: '76 722 15 50',

    heroBadge: 'Świadczenia w 100% bezpłatne w ramach NFZ',
    heroTitle: 'Profesjonalna opieka zdrowotna dla Ciebie i Twojej rodziny',
    heroSubtitle:
      'Przychodnia BIEGUNOWA w Legnicy zapewnia kompleksowe leczenie w ramach Podstawowej Opieki Zdrowotnej, pediatrię, poradnie specjalistyczne oraz dostęp do punktu badań laboratoryjnych Diagnostyka na miejscu.',
    heroCallBtn: 'Zadzwoń do rejestracji: 76 722 15 50',
    heroHowToJoinBtn: 'Jak zapisać się do POZ',
    cardPozTitle: 'Rejestracja telefoniczna',
    cardPozDesc:
      'Umów wizytę u lekarza pierwszego kontaktu, pediatry lub zamów e-receptę na leki stałe bez wychodzenia z domu.',
    cardPozBtn: 'Wybierz numer: 76 722 15 50',
    cardLabBadge: 'PUNKT BADAŃ NA MIEJSCU',
    cardLabTitle: 'Laboratorium Diagnostyka',
    cardLabDesc:
      'Pobieranie materiału do badań zleconych przez lekarza POZ odbywa się bezpośrednio w budynku przychodni.',
    cardLabBullets: '✓ Szybki odbiór wyników online • Bezpłatnie ze skierowaniem NFZ',

    servicesBadge: 'Bezpłatna opieka NFZ',
    servicesTitle: 'Poradnie i Zakres Świadczeń Medycznych',
    servicesSubtitle:
      'Wszystkie poradnie i gabinety w Przychodni BIEGUNOWA funkcjonują w ramach umowy z Narodowym Funduszem Zdrowia. Nie pobieramy żadnych opłat za wizyty ani badania od osób ubezpieczonych.',
    freeNfzBadge: '100% NFZ (Bezpłatnie)',

    doctorsBadge: 'Doświadczona Kadra',
    doctorsTitle: 'Nasi Lekarze i Specjaliści',
    doctorsSubtitle:
      'Nasz zespół tworzą doświadczeni lekarze medycyny rodzinnej, interniści, pediatrzy oraz specjaliści. Zapewniamy ciągłość opieki medycznej i indywidualne podejście do pacjenta.',
    doctorsSearchPlaceholder: 'Szukaj lekarza lub specjalizacji (np. pediatra, internista)...',

    patientBadge: 'Dla Pacjenta',
    patientTitle: 'Strefa Pacjenta & Informator',
    patientSubtitle:
      'Wszystko o zapisach do przychodni, zamawianiu e-recept, przygotowaniu do badań oraz opiece nocnej w Legnicy.',
    erecipeTitle: 'Zamówienie e-recepty',
    erecipeDesc:
      'Potrzebujesz przedłużenia recepty na stale przyjmowane leki? Zgłoś zapotrzebowanie telefonicznie w rejestracji. Kod recepty otrzymasz SMS-em.',
    erecipeBtn: 'Zamów przez telefon: 76 722 15 50',
    nightCareBadge: 'POMOC PO GODZINIE 18:00 I W ŚWIĘTA',
    nightCareDesc:
      'Po godzinie 18:00 w dni powszednie oraz całodobowo w weekendy i święta opiekę POZ realizuje Wojewódzki Szpital Specjalistyczny w Legnicy (ul. Iwaszkiewicza 5, telefon: 76 721 11 00).',
    nightCarePhone: 'Infolinia NFZ / Teleplatforma Pierwszego Kontaktu: 800 137 200 (całodobowo, bezpłatnie)',

    contactBadge: 'Lokalizacja & Dojazd',
    contactTitle: 'Kontakt i Godziny Przyjęć',
    contactSubtitle:
      'Przychodnia mieści się w Legnicy przy ul. Biegunowej 2. Zapraszamy do kontaktu telefonicznego w celu rejestracji wizyt i uzyskania informacji.',
    contactDetailsTitle: 'Dane Teleadresowe',
    addressLabel: 'Adres placówki',
    phoneDetailsLabel: 'Rejestracja telefoniczna',
    emailLabel: 'Adres e-mail',
    hoursLabel: 'Godziny otwarcia przychodni',
    hoursValue: 'Poniedziałek – Piątek: 08:00 – 18:00 (w weekendy nieczynne)',
    parkingLabel: 'Parking dla pacjentów przy obiekcie',
    mpkLabel: 'Dojazd liniami MPK Legnica',

    footerDesc: 'NZOZ Przychodnia Podstawowej Opieki Zdrowotnej i Poradnie Specjalistyczne w Legnicy.',
    footerNfzBadge: 'Świadczenia finansowane w 100% przez NFZ',
    quickNavTitle: 'Nawigacja',
    legalTitle: 'Dane Rejestrowe',
    copyright: '© 2026 Przychodnia BIEGUNOWA Legnica. Wszelkie prawa zastrzeżone. Świadczenia w ramach NFZ.',
    rodoLink: 'Klauzula informacyjna RODO',
    patientRightsLink: 'Prawa Pacjenta',
  },
  en: {
    nfzNotice: 'Healthcare services 100% covered under the National Health Fund (NFZ)',
    hoursShort: 'Mon–Fri: 8:00 AM – 6:00 PM',
    addressShort: '2 Biegunowa St., Legnica',

    navHome: 'Home',
    navServices: 'NFZ Services',
    navDoctors: 'Our Doctors',
    navPatientZone: 'Patient Zone',
    navContact: 'Contact & Map',

    callRegistration: 'Call Reception',
    phoneLabel: '+48 76 722 15 50',

    heroBadge: '100% Free Public Healthcare (NFZ)',
    heroTitle: 'Professional Healthcare for You and Your Family',
    heroSubtitle:
      'BIEGUNOWA Clinic in Legnica provides comprehensive primary healthcare, pediatrics, outpatient specialist clinics, and on-site Diagnostyka laboratory testing.',
    heroCallBtn: 'Call Reception: +48 76 722 15 50',
    heroHowToJoinBtn: 'How to register as a patient',
    cardPozTitle: 'Telephone Appointment Booking',
    cardPozDesc:
      'Schedule a visit with your family physician, pediatrician, or order repeat e-prescriptions by phone.',
    cardPozBtn: 'Call now: +48 76 722 15 50',
    cardLabBadge: 'ON-SITE LAB TESTING',
    cardLabTitle: 'Diagnostyka Blood Collection Point',
    cardLabDesc:
      'Sample collection for lab tests ordered by primary care physicians takes place directly inside our clinic.',
    cardLabBullets: '✓ Quick online results access • Covered by public health insurance (NFZ)',

    servicesBadge: 'Free Public Care (NFZ)',
    servicesTitle: 'Clinics and Medical Services',
    servicesSubtitle:
      'All clinics and diagnostic procedures at BIEGUNOWA Clinic operate under contract with the National Health Fund (NFZ). No fees are charged to insured patients.',
    freeNfzBadge: '100% NFZ (Free)',

    doctorsBadge: 'Experienced Medical Staff',
    doctorsTitle: 'Our Physicians and Specialists',
    doctorsSubtitle:
      'Our team comprises experienced family physicians, internists, pediatricians, and specialists providing continuous and compassionate care.',
    doctorsSearchPlaceholder: 'Search doctor by name or specialty (e.g., pediatrician, internist)...',

    patientBadge: 'For Patients',
    patientTitle: 'Patient Zone & Guide',
    patientSubtitle:
      'Learn how to register at our clinic, order repeat e-prescriptions, prepare for blood tests, and access after-hours care in Legnica.',
    erecipeTitle: 'Order Repeat E-Prescription',
    erecipeDesc:
      'Need a prescription renewal for chronic medication? Request it by phone at reception. Your e-prescription code will be delivered via SMS.',
    erecipeBtn: 'Order by phone: +48 76 722 15 50',
    nightCareBadge: 'NIGHT & HOLIDAY MEDICAL CARE',
    nightCareDesc:
      'After 6:00 PM on weekdays and 24/7 on weekends and public holidays, primary emergency healthcare is provided by the Regional Specialist Hospital in Legnica (5 Iwaszkiewicza St., phone: +48 76 721 11 00).',
    nightCarePhone: 'National Health Fund 24/7 Free Hotline: 800 137 200',

    contactBadge: 'Location & Access',
    contactTitle: 'Contact & Opening Hours',
    contactSubtitle:
      'Our medical clinic is located at 2 Biegunowa St. in Legnica. Please contact our reception by phone to schedule an appointment or obtain information.',
    contactDetailsTitle: 'Contact Information',
    addressLabel: 'Clinic Address',
    phoneDetailsLabel: 'Telephone Reception',
    emailLabel: 'Email Address',
    hoursLabel: 'Opening Hours',
    hoursValue: 'Monday – Friday: 08:00 AM – 06:00 PM (Closed on weekends)',
    parkingLabel: 'Patient parking available on site',
    mpkLabel: 'Accessible via Legnica MPK city buses',

    footerDesc: 'Non-public primary and specialist medical healthcare clinic in Legnica.',
    footerNfzBadge: '100% funded by the National Health Fund (NFZ)',
    quickNavTitle: 'Quick Navigation',
    legalTitle: 'Legal Information',
    copyright: '© 2026 BIEGUNOWA Clinic Legnica. All rights reserved. Public healthcare contract with NFZ.',
    rodoLink: 'GDPR / Privacy Policy',
    patientRightsLink: 'Patient Rights',
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'pl',
  setLang: () => {},
  t: translations.pl,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('pl');

  useEffect(() => {
    const saved = localStorage.getItem('przychodnia_lang') as Language;
    if (saved === 'pl' || saved === 'en') {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('przychodnia_lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
