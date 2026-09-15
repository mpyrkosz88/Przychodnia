export interface Doctor {
  id: string;
  name: string;
  title: Record<'pl' | 'en', string>;
  specialties: Record<'pl' | 'en', string[]>;
  description: Record<'pl' | 'en', string>;
  availableDays?: Record<'pl' | 'en', string>;
  image?: string;
}

export interface ClinicService {
  id: string;
  title: Record<'pl' | 'en', string>;
  category: 'POZ' | 'Specjalistyka' | 'Diagnostyka' | 'Pielęgniarstwo';
  description: Record<'pl' | 'en', string>;
  nfzOnly: boolean;
  iconName: string;
  features: Record<'pl' | 'en', string[]>;
}

export interface PatientGuideItem {
  title: Record<'pl' | 'en', string>;
  content: Record<'pl' | 'en', string>;
  linkText?: Record<'pl' | 'en', string>;
  linkHref?: string;
}

export interface Announcement {
  id: string;
  date: string;
  title: Record<'pl' | 'en', string>;
  content: Record<'pl' | 'en', string>;
  type: 'info' | 'warning' | 'success';
}

export const CLINIC_INFO = {
  name: 'Przychodnia BIEGUNOWA',
  formalName: 'Spółka Lekarska „BIEGUNOWA” Sp. z o.o.',
  type: 'NZOZ / Przychodnia Podstawowej Opieki Zdrowotnej i Poradnie Specjalistyczne',
  address: {
    street: 'ul. Biegunowa 2',
    postalCode: '59-220',
    city: 'Legnica',
    voivodeship: 'Dolnośląskie',
    country: 'Polska',
  },
  geo: {
    latitude: 51.2138,
    longitude: 16.1472,
  },
  contact: {
    phone: '+48 76 722 15 50',
    phoneRaw: '+48767221550',
    email: 'biegunowa@wp.pl',
  },
  hours: {
    monday: '08:00 – 18:00',
    tuesday: '08:00 – 18:00',
    wednesday: '08:00 – 18:00',
    thursday: '08:00 – 18:00',
    friday: '08:00 – 18:00',
    saturday: 'Zamknięte (Nocna i Świąteczna Opieka Zdrowotna)',
    sunday: 'Zamknięte (Nocna i Świąteczna Opieka Zdrowotna)',
  },
  legal: {
    nip: '6912135572',
    regon: '390764100',
  },
  nfzAgreement: {
    status: 'Świadczenia w 100% bezpłatne w ramach Narodowego Funduszu Zdrowia (NFZ)',
    description: 'Wszystkie wizyty u lekarzy POZ, specjalistów, badania diagnostyczne oraz opieka pielęgniarska są finansowane ze środków publicznych NFZ dla osób ubezpieczonych.',
  },
  emergencyNightCare: {
    title: {
      pl: 'Nocna i Świąteczna Opieka Zdrowotna w Legnicy',
      en: 'Night and Holiday Healthcare in Legnica',
    },
    description: {
      pl: 'Po godzinie 18:00 w dni powszednie oraz całodobowo w soboty, niedziele i święta świadczenia POZ realizuje Wojewódzki Szpital Specjalistyczny w Legnicy (ul. Iwaszkiewicza 5, telefon: +48 76 721 11 00 lub ogólnopolska infolinia NFZ: 800 137 200).',
      en: 'After 6:00 PM on weekdays and 24/7 on weekends and public holidays, primary healthcare is provided by the Regional Specialist Hospital in Legnica (5 Iwaszkiewicza St., phone: +48 76 721 11 00 or nationwide NFZ hotline: 800 137 200).',
    },
  },
};

export const DOCTORS: Doctor[] = [
  {
    id: 'pyrkosz-grazyna',
    name: 'lek. Grażyna Pyrkosz',
    title: {
      pl: 'Lekarz Medycyny',
      en: 'Medical Doctor (MD)',
    },
    specialties: {
      pl: ['Specjalista Medycyny Rodzinnej', 'Pediatra'],
      en: ['Family Medicine Specialist', 'Pediatrician'],
    },
    description: {
      pl: 'Wieloletnie doświadczenie w diagnozowaniu i leczeniu dzieci oraz dorosłych. Kompleksowa opieka nad całymi rodzinami w ramach POZ.',
      en: 'Extensive clinical experience in diagnosing and treating children and adults. Comprehensive healthcare for entire families under primary care.',
    },
    availableDays: {
      pl: 'Poniedziałek – Piątek (zgodnie z grafikiem rejestracji)',
      en: 'Monday – Friday (according to reception schedule)',
    },
  },
  {
    id: 'cybulski-krzysztof',
    name: 'lek. Krzysztof Cybulski',
    title: {
      pl: 'Lekarz Medycyny',
      en: 'Medical Doctor (MD)',
    },
    specialties: {
      pl: ['Choroby Wewnętrzne (Internista)', 'Nefrologia'],
      en: ['Internal Medicine (Internist)', 'Nephrology'],
    },
    description: {
      pl: 'Doświadczony internista i specjalista chorób nerek. Prowadzi pacjentów z przewlekłymi schorzeniami metabolicznymi i nefrologicznymi.',
      en: 'Experienced internist and kidney disease specialist. Manages patients with chronic metabolic and nephrological conditions.',
    },
    availableDays: {
      pl: 'Poniedziałek – Piątek',
      en: 'Monday – Friday',
    },
  },
  {
    id: 'gorska-glowacka-violetta',
    name: 'lek. Violetta Górska-Głowacka',
    title: {
      pl: 'Lekarz Medycyny',
      en: 'Medical Doctor (MD)',
    },
    specialties: {
      pl: ['Choroby Wewnętrzne', 'Medycyna Rodzinna', 'Medycyna Paliatywna'],
      en: ['Internal Medicine', 'Family Medicine', 'Palliative Medicine'],
    },
    description: {
      pl: 'Opieka internistyczna i rodzinna ze szczególnym uwzględnieniem leczenia wspomagającego i kompleksowego podejścia do pacjenta.',
      en: 'Internal and family medical care with particular emphasis on supportive care and holistic approach to patients.',
    },
    availableDays: {
      pl: 'Poniedziałek – Piątek',
      en: 'Monday – Friday',
    },
  },
  {
    id: 'kupec-franciszek',
    name: 'lek. Franciszek Kupeć',
    title: {
      pl: 'Lekarz Medycyny',
      en: 'Medical Doctor (MD)',
    },
    specialties: {
      pl: ['Chirurgia Ogólna', 'Lekarz POZ'],
      en: ['General Surgery', 'Primary Care Physician'],
    },
    description: {
      pl: 'Doświadczenie w zakresie diagnostyki chirurgicznej, drobnych zabiegów ambulatoryjnych oraz opieki podstawowej.',
      en: 'Experience in surgical diagnostics, outpatient minor surgical procedures, and primary healthcare.',
    },
    availableDays: {
      pl: 'Wybrane dni tygodnia',
      en: 'Selected weekdays',
    },
  },
  {
    id: 'malek-drozdowicz-wieslawa',
    name: 'lek. Wiesława Małek-Drozdowicz',
    title: {
      pl: 'Lekarz Medycyny',
      en: 'Medical Doctor (MD)',
    },
    specialties: {
      pl: ['Pediatria'],
      en: ['Pediatrics'],
    },
    description: {
      pl: 'Specjalistyczna opieka nad najmłodszymi pacjentami, bilanse zdrowia dziecka, kwalifikacje do szczepień ochronnych.',
      en: 'Specialized healthcare for infants and children, periodic developmental health checks, and vaccination qualifications.',
    },
    availableDays: {
      pl: 'Poniedziałek – Piątek',
      en: 'Monday – Friday',
    },
  },
  {
    id: 'podsiadla-stricker-katarzyna',
    name: 'lek. Katarzyna Podsiadła-Stricker',
    title: {
      pl: 'Lekarz Medycyny',
      en: 'Medical Doctor (MD)',
    },
    specialties: {
      pl: ['Choroby Wewnętrzne', 'Medycyna Rodzinna'],
      en: ['Internal Medicine', 'Family Medicine'],
    },
    description: {
      pl: 'Doświadczony lekarz rodzinny i internista, diagnostyka układu krążenia, profilaktyka chorób cywilizacyjnych.',
      en: 'Experienced family physician and internist, cardiovascular diagnostics, and prevention of chronic lifestyle diseases.',
    },
    availableDays: {
      pl: 'Poniedziałek – Piątek',
      en: 'Monday – Friday',
    },
  },
  {
    id: 'serafin-jaroslaw',
    name: 'lek. Jarosław Serafin',
    title: {
      pl: 'Lekarz Medycyny',
      en: 'Medical Doctor (MD)',
    },
    specialties: {
      pl: ['Choroby Płuc (Pulmonologia)', 'Choroby Wewnętrzne'],
      en: ['Pulmonology (Respiratory Diseases)', 'Internal Medicine'],
    },
    description: {
      pl: 'Specjalistyczna diagnostyka i terapia schorzeń układu oddechowego (astma, POChP, powikłania infekcyjne).',
      en: 'Specialist diagnostics and treatment of respiratory disorders (asthma, COPD, post-infection complications).',
    },
    availableDays: {
      pl: 'Zgodnie z grafikiem przyjęć',
      en: 'According to consultation schedule',
    },
  },
  {
    id: 'swiatkowska-krystyna',
    name: 'lek. Krystyna Świątkowska',
    title: {
      pl: 'Lekarz Medycyny',
      en: 'Medical Doctor (MD)',
    },
    specialties: {
      pl: ['Pediatria'],
      en: ['Pediatrics'],
    },
    description: {
      pl: 'Wieloletnia praktyka pediatryczna, leczenie infekcji dziecięcych, porady laktacyjne i rozwojowe.',
      en: 'Long-standing pediatric practice, pediatric infection treatment, lactation and child developmental counseling.',
    },
    availableDays: {
      pl: 'Poniedziałek – Piątek',
      en: 'Monday – Friday',
    },
  },
  {
    id: 'wolak-anna',
    name: 'lek. Anna Wolak',
    title: {
      pl: 'Lekarz Medycyny',
      en: 'Medical Doctor (MD)',
    },
    specialties: {
      pl: ['Medycyna Rodzinna', 'Choroby Wewnętrzne'],
      en: ['Family Medicine', 'Internal Medicine'],
    },
    description: {
      pl: 'Prowadzenie pacjentów z chorobami przewlekłymi, orzecznictwo lekarskie i opieka profilaktyczna.',
      en: 'Management of patients with chronic diseases, medical certification, and preventive healthcare.',
    },
    availableDays: {
      pl: 'Poniedziałek – Piątek',
      en: 'Monday – Friday',
    },
  },
  {
    id: 'zieba-artur',
    name: 'lek. Artur Zięba',
    title: {
      pl: 'Lekarz Medycyny',
      en: 'Medical Doctor (MD)',
    },
    specialties: {
      pl: ['Medycyna Rodzinna'],
      en: ['Family Medicine'],
    },
    description: {
      pl: 'Kompleksowa opieka nad dorosłymi i młodzieżą, diagnostyka wstępna oraz kierowanie na badania specjalistyczne.',
      en: 'Comprehensive medical care for adults and youth, initial diagnosis, and referrals to specialized care.',
    },
    availableDays: {
      pl: 'Poniedziałek – Piątek',
      en: 'Monday – Friday',
    },
  },
  {
    id: 'zieba-marta',
    name: 'lek. Marta Zięba',
    title: {
      pl: 'Lekarz Medycyny',
      en: 'Medical Doctor (MD)',
    },
    specialties: {
      pl: ['Choroby Wewnętrzne (Internista)'],
      en: ['Internal Medicine (Internist)'],
    },
    description: {
      pl: 'Leczenie chorób układu krążenia, nadciśnienia tętniczego, cukrzycy i schorzeń metabolicznych.',
      en: 'Treatment of cardiovascular diseases, arterial hypertension, diabetes, and metabolic disorders.',
    },
    availableDays: {
      pl: 'Poniedziałek – Piątek',
      en: 'Monday – Friday',
    },
  },
];

export const SERVICES: ClinicService[] = [
  {
    id: 'poz-dorosli-dzieci',
    title: {
      pl: 'Podstawowa Opieka Zdrowotna (POZ)',
      en: 'Primary Healthcare (POZ)',
    },
    category: 'POZ',
    description: {
      pl: 'Bezpłatne konsultacje lekarskie dla dzieci i dorosłych ubezpieczonych w NFZ. Badania profilaktyczne, leczenie chorób ostrych i przewlekłych.',
      en: 'Free medical consultations for children and adults insured under NFZ. Preventive screenings, treatment of acute and chronic diseases.',
    },
    nfzOnly: true,
    iconName: 'LocalHospital',
    features: {
      pl: [
        'Wizyty stacjonarne i teleporady',
        'Kierowanie na badania laboratoryjne i obrazowe',
        'Wystawianie e-recept, e-zwolnień i e-skierowań',
        'Orzekanie o stanie zdrowia',
      ],
      en: [
        'In-person consultations & telemedicine appointments',
        'Referrals for laboratory and imaging diagnostics',
        'Issuance of e-prescriptions, sick leaves, and referrals',
        'Medical health certifications',
      ],
    },
  },
  {
    id: 'pediatria-szczepienia',
    title: {
      pl: 'Poradnia Dziecięca i Punkt Szczepień',
      en: 'Pediatric Clinic & Vaccination Center',
    },
    category: 'POZ',
    description: {
      pl: 'Dedykowany gabinet dla dzieci zdrowych i chorych. Profesjonalne szczepienia ochronne obowiązkowe oraz zalecane.',
      en: 'Dedicated consulting rooms for healthy and unwell children. Professional mandatory and recommended vaccinations.',
    },
    nfzOnly: true,
    iconName: 'ChildCare',
    features: {
      pl: [
        'Bilanse zdrowia dziecka (w każdym wieku rozwojowym)',
        'Szczepienia ochronne według Kalendarza Szczepień',
        'Kwalifikacja lekarska bezpośrednio przed iniekcją',
        'Przyjazna i spokojna atmosfera dla najmłodszych',
      ],
      en: [
        'Child developmental health checks at all stages',
        'Immunizations in accordance with the National Immunization Schedule',
        'Physician qualification directly prior to injection',
        'Calm and friendly atmosphere for our youngest patients',
      ],
    },
  },
  {
    id: 'gabinet-zabiegowy-pielegniarstwo',
    title: {
      pl: 'Gabinet Zabiegowy i Pielęgniarki POZ',
      en: 'Treatment Room & Primary Care Nurses',
    },
    category: 'Pielęgniarstwo',
    description: {
      pl: 'Wykwalifikowany zespół pielęgniarek środowiskowo-rodzinnych realizujący zlecenia lekarskie oraz opiekę domową.',
      en: 'Qualified team of community and family health nurses executing medical orders and home care visits.',
    },
    nfzOnly: true,
    iconName: 'Vaccines',
    features: {
      pl: [
        'Iniekcje domięśniowe, dożylne i podskórne',
        'Pomiary ciśnienia tętniczego, glikemii, EKG',
        'Opatrywanie ran i zdejmowanie szwów',
        'Wizyty patronażowe i opieka w domu pacjenta',
      ],
      en: [
        'Intramuscular, intravenous, and subcutaneous injections',
        'Blood pressure measurement, glucose testing, ECG',
        'Wound dressing and surgical suture removal',
        'Community nursing visits and home medical care',
      ],
    },
  },
  {
    id: 'punkt-pobran-diagnostyka',
    title: {
      pl: 'Punkt Pobrań Badań Laboratoryjnych',
      en: 'Laboratory Blood Collection Point',
    },
    category: 'Diagnostyka',
    description: {
      pl: 'Punkt pobrań sieci Diagnostyka na miejscu w przychodni przy ul. Biegunowej 2. Szybka realizacja zleconych badań NFZ.',
      en: 'On-site Diagnostyka laboratory collection center at 2 Biegunowa St. Fast turnaround for physician-ordered public health tests.',
    },
    nfzOnly: true,
    iconName: 'Science',
    features: {
      pl: [
        'Pobieranie krwi u dorosłych i dzieci',
        'Badania biochemiczne, morfologia, mocz, hormony',
        'Odbiór wyników online lub w rejestracji',
        'Pobrania w godzinach porannych',
      ],
      en: [
        'Blood drawing for adults and pediatric patients',
        'Biochemistry, complete blood count, urine analysis, hormones',
        'Online results access or in-person pickup at reception',
        'Sample collection in morning hours',
      ],
    },
  },
  {
    id: 'poradnie-specjalistyczne',
    title: {
      pl: 'Poradnie Specjalistyczne (AOS)',
      en: 'Outpatient Specialist Clinics (AOS)',
    },
    category: 'Specjalistyka',
    description: {
      pl: 'Konsultacje lekarzy specjalistów w ramach kontraktu z NFZ na podstawie skierowania od lekarza POZ.',
      en: 'Medical specialist consultations covered by NFZ upon referral from a primary care physician.',
    },
    nfzOnly: true,
    iconName: 'MedicalServices',
    features: {
      pl: [
        'Poradnia Alergologiczna',
        'Poradnia Okulistyczna',
        'Poradnia Dermatologiczna i Laryngologiczna',
        'Konsultacje nefrologiczne i pulmonologiczne',
      ],
      en: [
        'Allergology Clinic',
        'Ophthalmology Clinic',
        'Dermatology and ENT (Otolaryngology) Clinics',
        'Nephrology and Pulmonology consultations',
      ],
    },
  },
];

export const PATIENT_GUIDES: PatientGuideItem[] = [
  {
    title: {
      pl: 'Jak zapisać się do Przychodni BIEGUNOWA?',
      en: 'How to register at BIEGUNOWA Clinic?',
    },
    content: {
      pl: 'Złożenie deklaracji wyboru lekarza, pielęgniarki i położnej POZ jest całkowicie bezpłatne. Możesz to zrobić na dwa sposoby: osobiście w rejestracji przy ul. Biegunowej 2 (z dowodem tożsamości) lub przez Internetowe Konto Pacjenta (IKP) na portalu pacjent.gov.pl.',
      en: 'Submitting a primary healthcare declaration (choosing a doctor, nurse, and midwife) is completely free of charge. You can register in two ways: in person at our reception at 2 Biegunowa St. with an ID card, or online via the Patient Online Account (IKP) on pacjent.gov.pl.',
    },
    linkText: {
      pl: 'Przejdź do pacjent.gov.pl',
      en: 'Visit pacjent.gov.pl',
    },
    linkHref: 'https://pacjent.gov.pl',
  },
  {
    title: {
      pl: 'Zamawianie recept na leki stałe',
      en: 'Ordering repeat e-prescriptions for chronic medication',
    },
    content: {
      pl: 'Pacjenci z chorobami przewlekłymi mogą zamawiać e-recepty na kontynuację leczenia telefonicznie pod numerem 76 722 15 50 lub poprzez formularz zgłoszeniowy w rejestracji. Kod e-recepty zostanie przesłany SMS-em na Twój numer telefonu.',
      en: 'Patients with chronic conditions can request repeat e-prescriptions by calling our reception at +48 76 722 15 50 or by submitting a written request at reception. Your 4-digit prescription PIN will be sent directly via SMS.',
    },
  },
  {
    title: {
      pl: 'Jak przygotować się do badań krwi?',
      en: 'How to prepare for blood diagnostic tests?',
    },
    content: {
      pl: 'Na pobranie krwi należy zgłosić się na czczo (ostatni lekki posiłek zjedz min. 10-12 godzin wcześniej). Rano przed badaniem wypij szklankę niegazowanej wody. Jeśli przyjmujesz leki na stałe, skonsultuj z lekarzem, czy zażyć je przed czy po badaniu.',
      en: 'Please arrive for blood collection fasting (have your last light meal at least 10–12 hours before). Drink a glass of still water in the morning. If you take regular medications, consult your doctor beforehand whether to take them before or after the blood draw.',
    },
  },
  {
    title: {
      pl: 'Nocna i Świąteczna Opieka Zdrowotna w Legnicy',
      en: 'Night and Holiday Emergency Healthcare in Legnica',
    },
    content: {
      pl: 'W dni powszednie w godzinach 18:00 – 08:00 rano oraz całodobowo w weekendy i dni ustawowo wolne od pracy opiekę medyczną zapewnia punkt Nocnej i Świątecznej Opieki Zdrowotnej przy Wojewódzkim Szpitalu Specjalistycznym w Legnicy (ul. Iwaszkiewicza 5, tel. 76 721 11 00).',
      en: 'On weekdays between 6:00 PM and 8:00 AM, and 24 hours a day on weekends and public holidays, urgent medical care is provided by the Regional Specialist Hospital in Legnica (5 Iwaszkiewicza St., phone: +48 76 721 11 00).',
    },
  },
];
