'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  Chip,
  Divider,
} from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import CookieIcon from '@mui/icons-material/Cookie';
import { RODO_PATIENT_CLAUSE, PRIVACY_POLICY, COOKIES_POLICY } from '@/data/legalData';
import { useLanguage } from '@/context/LanguageContext';

export default function LegalPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabParam = searchParams.get('tab');
  const { lang } = useLanguage();

  const tabIndex =
    tabParam === 'prywatnosc' || tabParam === 'privacy'
      ? 1
      : tabParam === 'cookies' || tabParam === 'ciasteczka'
      ? 2
      : 0;

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    const param = newValue === 1 ? 'prywatnosc' : newValue === 2 ? 'cookies' : 'rodo';
    router.replace(`/polityka-prywatnosci?tab=${param}`, { scroll: false });
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#f8fafc', minHeight: '80vh' }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            icon={<GavelIcon sx={{ fontSize: 18 }} />}
            label={lang === 'pl' ? 'Informacje Prawne & RODO' : 'Legal & GDPR Compliance'}
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 700, mb: 1.5 }}
          />
          <Typography component="h1" variant="h3" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
            {lang === 'pl' ? 'Klauzule Informacyjne i Polityki' : 'Information Clauses & Policies'}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 750, mx: 'auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {lang === 'pl'
              ? 'Poniżej znajdują się szczegółowe informacje dotyczące przetwarzania danych pacjentów w ramach Podstawowej Opieki Zdrowotnej, polityki prywatności oraz plików cookies.'
              : 'Detailed information regarding the processing of patient medical data under Primary Healthcare (POZ), privacy policy, and cookie management.'}
          </Typography>
        </Box>

        {/* Tab Navigation */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="Dokumenty prawne"
            sx={{
              '& .MuiTab-root': {
                fontWeight: 700,
                fontSize: { xs: '0.88rem', sm: '0.98rem' },
                textTransform: 'none',
                py: 1.5,
              },
            }}
          >
            <Tab
              icon={<SecurityIcon />}
              iconPosition="start"
              label={lang === 'pl' ? 'Klauzula RODO dla Pacjentów' : 'Patient GDPR Clause'}
            />
            <Tab
              icon={<GavelIcon />}
              iconPosition="start"
              label={lang === 'pl' ? 'Polityka Prywatności' : 'Privacy Policy'}
            />
            <Tab
              icon={<CookieIcon />}
              iconPosition="start"
              label={lang === 'pl' ? 'Polityka Cookies' : 'Cookie Policy'}
            />
          </Tabs>
        </Box>

        {/* Tab 1: RODO Pacjenta */}
        {tabIndex === 0 && (
          <Card sx={{ bgcolor: '#ffffff', borderRadius: 3, border: '1px solid #e2e8f0', p: { xs: 1, sm: 2 } }}>
            <CardContent>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight={800} color="#0f172a" sx={{ mb: 1 }}>
                  {lang === 'pl'
                    ? 'Klauzula Informacyjna o Przetwarzaniu Danych Osobowych Pacjenta'
                    : 'Information Clause on Patient Personal Data Processing'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {lang === 'pl'
                    ? 'Zgodnie z art. 13 ust. 1 i 2 oraz art. 14 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz art. 9 ust. 2 lit. h RODO informujemy o zasadach przetwarzania danych medycznych.'
                    : 'In compliance with Articles 13, 14 and Article 9(2)(h) of GDPR (Regulation (EU) 2016/679), we hereby inform you about the principles of medical data processing.'}
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />

              {RODO_PATIENT_CLAUSE.map((sec, idx) => {
                const title = sec.title[lang] || sec.title.pl;
                const paragraphs = sec.content[lang] || sec.content.pl;
                return (
                  <Box key={idx} sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" fontWeight={700} color="#0284c7" sx={{ mb: 1 }}>
                      {title}
                    </Typography>
                    {paragraphs.map((p, pIdx) => (
                      <Typography key={pIdx} variant="body2" color="#334155" sx={{ lineHeight: 1.7, mb: 0.8 }}>
                        {p}
                      </Typography>
                    ))}
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        )}

        {/* Tab 2: Polityka Prywatności */}
        {tabIndex === 1 && (
          <Card sx={{ bgcolor: '#ffffff', borderRadius: 3, border: '1px solid #e2e8f0', p: { xs: 1, sm: 2 } }}>
            <CardContent>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight={800} color="#0f172a" sx={{ mb: 1 }}>
                  {lang === 'pl' ? 'Polityka Prywatności Serwisu Internetowego' : 'Website Privacy Policy'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {lang === 'pl'
                    ? 'Zasady bezpiecznego korzystania z serwisu informacyjnego Przychodni BIEGUNOWA w Legnicy.'
                    : 'Safety and confidentiality standards when browsing the informational website of BIEGUNOWA Clinic.'}
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />

              {PRIVACY_POLICY.map((sec, idx) => {
                const title = sec.title[lang] || sec.title.pl;
                const paragraphs = sec.content[lang] || sec.content.pl;
                return (
                  <Box key={idx} sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" fontWeight={700} color="#0284c7" sx={{ mb: 1 }}>
                      {title}
                    </Typography>
                    {paragraphs.map((p, pIdx) => (
                      <Typography key={pIdx} variant="body2" color="#334155" sx={{ lineHeight: 1.7, mb: 0.8 }}>
                        {p}
                      </Typography>
                    ))}
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        )}

        {/* Tab 3: Polityka Cookies */}
        {tabIndex === 2 && (
          <Card sx={{ bgcolor: '#ffffff', borderRadius: 3, border: '1px solid #e2e8f0', p: { xs: 1, sm: 2 } }}>
            <CardContent>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h5" fontWeight={800} color="#0f172a" sx={{ mb: 1 }}>
                  {lang === 'pl' ? 'Polityka Plików Cookies (Ciasteczek)' : 'Cookie Policy'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {lang === 'pl'
                    ? 'Informacja o rodzajach ciasteczek wykorzystywanych w serwisie oraz możliwościach zarządzania nimi.'
                    : 'Details on cookies utilized by our website and browser management options.'}
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />

              {COOKIES_POLICY.map((sec, idx) => {
                const title = sec.title[lang] || sec.title.pl;
                const paragraphs = sec.content[lang] || sec.content.pl;
                return (
                  <Box key={idx} sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" fontWeight={700} color="#0284c7" sx={{ mb: 1 }}>
                      {title}
                    </Typography>
                    {paragraphs.map((p, pIdx) => (
                      <Typography key={pIdx} variant="body2" color="#334155" sx={{ lineHeight: 1.7, mb: 0.8 }}>
                        {p}
                      </Typography>
                    ))}
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        )}
      </Container>
    </Box>
  );
}
