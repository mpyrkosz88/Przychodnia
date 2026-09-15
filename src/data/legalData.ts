export interface LegalDocumentSection {
  title: Record<'pl' | 'en', string>;
  content: Record<'pl' | 'en', string[]>;
}

export const RODO_PATIENT_CLAUSE: LegalDocumentSection[] = [
  {
    title: {
      pl: '1. Administrator Danych Osobowych (ADO)',
      en: '1. Data Controller',
    },
    content: {
      pl: [
        'Administratorem Państwa danych osobowych jest Spółka Lekarska „BIEGUNOWA” Sp. z o.o. z siedzibą przy ul. Biegunowej 2, 59-220 Legnica, NIP: 6912135572, REGON: 390764100.',
        'Kontakt z Administratorem jest możliwy: pisemnie na adres siedziby, telefonicznie pod numerem +48 76 722 15 50 oraz za pośrednictwem poczty elektronicznej: biegunowa@wp.pl.',
      ],
      en: [
        'The Data Controller of your personal data is Spółka Lekarska „BIEGUNOWA” Sp. z o.o. located at 2 Biegunowa St., 59-220 Legnica, Poland, Tax ID (NIP): 6912135572, REGON: 390764100.',
        'You can contact the Controller: by post to the registered office address, by telephone at +48 76 722 15 50, or via email: biegunowa@wp.pl.',
      ],
    },
  },
  {
    title: {
      pl: '2. Inspektor Ochrony Danych (IOD)',
      en: '2. Data Protection Officer (DPO)',
    },
    content: {
      pl: [
        'W sprawach dotyczących przetwarzania danych osobowych oraz realizacji praw wynikających z RODO mogą Państwo kontaktować się bezpośrednio z Administratorem lub wyznaczonym punktem kontaktowym IOD pod adresem e-mail: biegunowa@wp.pl z dopiskiem „Inspektor Ochrony Danych” lub listownie na adres placówki.',
      ],
      en: [
        'For matters regarding personal data protection and exercising rights under the GDPR, you can contact the Controller or the designated Data Protection contact point via email: biegunowa@wp.pl with the subject "Data Protection Officer" or by mail to our clinic address.',
      ],
    },
  },
  {
    title: {
      pl: '3. Cele i podstawy prawne przetwarzania danych medycznych',
      en: '3. Purposes and Legal Grounds for Processing Health Data',
    },
    content: {
      pl: [
        'Państwa dane osobowe, w tym dane szczególnej kategorii (dane o stanie zdrowia), przetwarzane są w celu:',
        '• Udzielania świadczeń zdrowotnych (diagnoza medyczna, leczenie, profilaktyka, badania laboratoryjne, szczepienia ochronne) – na podstawie art. 9 ust. 2 lit. h RODO w zw. z art. 3 ust. 1 ustawy o działalności leczniczej oraz ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta.',
        '• Prowadzenia, przechowywania i udostępniania dokumentacji medycznej – na podstawie art. 9 ust. 2 lit. h RODO w zw. z art. 24 ustawy o prawach pacjenta i Rzeczniku Praw Pacjenta.',
        '• Rozliczeń finansowych ze świadczeń z Narodowym Funduszem Zdrowia (NFZ) oraz realizacji obowiązków prawnych i księgowo-podatkowych – na podstawie art. 6 ust. 1 lit. c RODO.',
        '• Obrony praw i dochodzenia ewentualnych roszczeń – na podstawie prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO oraz art. 9 ust. 2 lit. f RODO).',
      ],
      en: [
        'Your personal data, including special category data (health-related data), is processed for:',
        '• Provision of healthcare services (medical diagnosis, outpatient treatment, preventive medicine, laboratory diagnostics, protective vaccinations) – pursuant to Article 9(2)(h) GDPR in conjunction with national healthcare legislation and the Patient Rights Act.',
        '• Maintaining, storing, and releasing medical documentation – pursuant to Article 9(2)(h) GDPR in conjunction with Article 24 of the Patient Rights Act.',
        '• Public healthcare reimbursement settlements with the National Health Fund (NFZ) and fulfilling accounting obligations – pursuant to Article 6(1)(c) GDPR.',
        '• Establishment, exercise, or defense of legal claims – based on legitimate interests under Article 6(1)(f) and Article 9(2)(f) GDPR.',
      ],
    },
  },
  {
    title: {
      pl: '4. Odbiorcy danych osobowych',
      en: '4. Data Recipients',
    },
    content: {
      pl: [
        'Odbiorcami Państwa danych osobowych mogą być:',
        '• Narodowy Fundusz Zdrowia (NFZ), Ministerstwo Zdrowia oraz Centrum e-Zdrowia (CeZ) w ramach realizacji systemów P1 (e-recepta, e-skierowanie, e-zwolnienie).',
        '• Podmioty diagnostyczne i laboratoria współpracujące (np. Sieć Laboratoriów Diagnostyka) w zakresie realizacji badań zlecanych przez lekarza POZ.',
        '• Inne podmioty lecznicze w celu zapewnienia ciągłości leczenia.',
        '• Podmioty świadczące usługi serwisowe IT, dostawcy certyfikowanego oprogramowania medycznego oraz uprawnione organy państwowe.',
      ],
      en: [
        'Recipients of your personal data may include:',
        '• The National Health Fund (NFZ), the Ministry of Health, and the Center for e-Health (CeZ) through national e-health systems (e-prescriptions, e-referrals, e-sick notes).',
        '• Cooperating medical diagnostic laboratories (e.g., Diagnostyka Laboratory Network) performing doctor-ordered lab screenings.',
        '• Other healthcare institutions when necessary to guarantee continuity of treatment.',
        '• Certified medical software vendors, IT infrastructure support providers, and legally authorized public entities.',
      ],
    },
  },
  {
    title: {
      pl: '5. Okres przechowywania danych',
      en: '5. Retention Period',
    },
    content: {
      pl: [
        'Dane zawarte w dokumentacji medycznej są przechowywane przez okres wynikający bezpośrednio z przepisów prawa – zgodnie z art. 29 ustawy o prawach pacjenta jest to co do zasady okres 20 lat, licząc od końca roku kalendarzowego, w którym dokonano ostatniego wpisu (z wyjątkami określonymi w ustawie).',
        'Pozostałe dane (np. rozliczeniowe) przechowywane są przez okres wymagany przepisami prawa podatkowego i rachunkowego (5 lat).',
      ],
      en: [
        'Medical records are retained for periods established by mandatory statutory laws – as a rule, 20 years from the end of the calendar year of the last clinical entry, pursuant to Article 29 of the Polish Patient Rights Act.',
        'Accounting and financial records are retained for 5 years in compliance with applicable tax laws.',
      ],
    },
  },
  {
    title: {
      pl: '6. Prawa Pacjenta w związku z RODO',
      en: '6. Patient Rights under GDPR',
    },
    content: {
      pl: [
        'Posiadają Państwo prawo do: dostępu do swoich danych osobowych, ich sprostowania (aktualizacji), ograniczenia przetwarzania, a także uzyskania wyciągu, odpisu lub kopii dokumentacji medycznej.',
        'Uwaga: Prawo do usunięcia danych („prawo do bycia zapomnianym”) nie ma zastosowania wobec danych przetwarzanych na podstawie art. 9 ust. 2 lit. h RODO w celu prowadzenia dokumentacji medycznej przez okres nałożony przepisami prawa.',
        'Mają Państwo prawo wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).',
      ],
      en: [
        'You have the right to: access your personal data, request rectification, request restriction of processing, and obtain excerpts, transcripts, or copies of your medical records.',
        'Notice: The right to erasure ("right to be forgotten") does not apply to health records processed pursuant to Article 9(2)(h) GDPR for mandatory statutory retention terms.',
        'You are entitled to lodge a complaint with the supervisory authority: the President of the Personal Data Protection Office (UODO, 2 Stawki St., 00-193 Warsaw, Poland).',
      ],
    },
  },
  {
    title: {
      pl: '7. Obowiązek podania danych',
      en: '7. Requirement to Provide Personal Data',
    },
    content: {
      pl: [
        'Podanie danych osobowych jest wymogiem ustawowym wynikającym z przepisów prawa medycznego i jest niezbędne do objęcia opieką zdrowotną, rejestracji w POZ oraz prowadzenia dokumentacji medycznej.',
      ],
      en: [
        'Providing personal data is a statutory requirement under medical legislation, necessary for registration in primary healthcare, clinical care delivery, and medical record-keeping.',
      ],
    },
  },
];

export const PRIVACY_POLICY: LegalDocumentSection[] = [
  {
    title: {
      pl: '1. Postanowienia Ogólne',
      en: '1. General Provisions',
    },
    content: {
      pl: [
        'Niniejsza Polityka Prywatności określa zasady przetwarzania danych użytkowników odwiedzających serwis internetowy Przychodni BIEGUNOWA w Legnicy.',
        'Szanujemy prawo do prywatności wszystkich osób odwiedzających nasz serwis i stosujemy odpowiednie środki techniczne chroniące dane.',
      ],
      en: [
        'This Privacy Policy defines the rules for processing information of users visiting the website of BIEGUNOWA Clinic in Legnica.',
        'We respect the privacy of every visitor and implement appropriate technical and organizational safeguards.',
      ],
    },
  },
  {
    title: {
      pl: '2. Gromadzenie danych podczas przeglądania serwisu',
      en: '2. Data Collection During Browsing',
    },
    content: {
      pl: [
        'Podczas wizyty na stronie automatycznie zapisywane są standardowe dane w logach serwera (np. adres IP, data i czas zapytania, typ przeglądarki). Dane te służą wyłącznie do zapewnienia stabilności i bezpieczeństwa działania serwisu.',
      ],
      en: [
        'Standard server log entries (such as IP address, date and timestamp, browser type) are automatically recorded to ensure system reliability and security.',
      ],
    },
  },
  {
    title: {
      pl: '3. Bezpieczeństwo i szyfrowanie (SSL/TLS)',
      en: '3. Security and SSL/TLS Encryption',
    },
    content: {
      pl: [
        'Wszelka komunikacja pomiędzy Państwa przeglądarką a naszym serwerem jest w pełni szyfrowana przy użyciu protokołu HTTPS oraz certyfikatu SSL/TLS.',
      ],
      en: [
        'All communications between your web browser and our server are fully encrypted using modern HTTPS protocols and SSL/TLS certificates.',
      ],
    },
  },
];

export const COOKIES_POLICY: LegalDocumentSection[] = [
  {
    title: {
      pl: '1. Czym są pliki cookies (ciasteczka)?',
      en: '1. What Are Cookies?',
    },
    content: {
      pl: [
        'Pliki cookies to niewielkie pliki tekstowe wysyłane przez serwer www i zapisywane na urządzeniu końcowym użytkownika. Służą do prawidłowego wyświetlania i funkcjonowania serwisu.',
      ],
      en: [
        'Cookies are small text files sent by a web server and stored on your device. They are used to ensure proper rendering and operation of web pages.',
      ],
    },
  },
  {
    title: {
      pl: '2. Jakie pliki cookies stosujemy?',
      en: '2. Which Cookies Do We Use?',
    },
    content: {
      pl: [
        '• Niezbędne (Techniczne): Pliki konieczne do prawidłowego funkcjonowania witryny, bezpiecznego ładowania zasobów oraz zapamiętania statusu zgody.',
        '• Funkcjonalne / Preferencyjne: Umożliwiają zapamiętanie wybranego języka (PL/EN) w pamięci przeglądarki (LocalStorage).',
        '• Zewnętrzne (Google Maps): Na podstronie kontaktowej osadzona jest mapa Google Maps, która może wykorzystywać pliki cookies dostawcy (Google LLC).',
      ],
      en: [
        '• Essential (Technical): Required for core website operations, secure asset loading, and recording consent state.',
        '• Functional / Preference: Used to store chosen interface language (PL/EN) in browser LocalStorage.',
        '• Third-Party (Google Maps): An interactive Google Map on our contact page may deploy cookies by Google LLC for navigation rendering.',
      ],
    },
  },
  {
    title: {
      pl: '3. Zarządzanie plikami cookies w przeglądarce',
      en: '3. Managing Cookies in Browser',
    },
    content: {
      pl: [
        'Użytkownik może w każdej chwili samodzielnie zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej, w tym zablokować ich zapisywanie lub usunąć dotychczas zapisane ciasteczka.',
      ],
      en: [
        'Users may configure or delete cookies at any time via web browser privacy settings.',
      ],
    },
  },
];
