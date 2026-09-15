'use client';

import React from 'react';
import NextLink from 'next/link';
import {
  Box,
  Container,
  Typography,
  Grid2 as Grid,
  Card,
  CardContent,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { CLINIC_INFO, SERVICES, DOCTORS } from '@/data/clinicData';
import { useLanguage } from '@/context/LanguageContext';

export default function HomeHighlights() {
  const { lang, t } = useLanguage();

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Chip
            label={lang === 'pl' ? 'Poznaj naszą przychodnię' : 'About our clinic'}
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 700, mb: 1.5 }}
          />
          <Typography component="h2" variant="h3" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
            {lang === 'pl' ? 'Kompleksowa Opieka Medyczna w Legnicy' : 'Comprehensive Medical Care in Legnica'}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            {lang === 'pl'
              ? 'Wszystkie świadczenia realizujemy bezpłatnie w ramach powszechnego ubezpieczenia zdrowotnego (NFZ). Wybierz interesujący Cię obszar:'
              : 'All medical healthcare services are provided free of charge under the National Health Fund (NFZ). Choose an area to explore:'}
          </Typography>
        </Box>

        {/* 4 Feature Columns Linking to Dedicated Subpages */}
        <Grid container spacing={3.5} sx={{ mb: 7 }}>
          {/* Card 1: Services */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: 1,
                bgcolor: '#ffffff',
                border: '1px solid #e2e8f0',
              }}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2.5,
                    bgcolor: 'rgba(2, 132, 199, 0.1)',
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <LocalHospitalIcon sx={{ fontSize: 28 }} />
                </Box>
                <Typography variant="h6" fontWeight={800} sx={{ mb: 1, color: '#0f172a' }}>
                  {t.navServices}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6, flexGrow: 1 }}>
                  {lang === 'pl'
                    ? 'POZ dla dorosłych i dzieci, punkt szczepień, gabinet zabiegowy, laboratorium Diagnostyka oraz poradnie specjalistyczne.'
                    : 'Primary care for all ages, vaccinations, treatment room, on-site laboratory, and outpatient clinics.'}
                </Typography>
                <Button
                  component={NextLink}
                  href="/uslugi"
                  variant="text"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ fontWeight: 700, p: 0, justifyContent: 'flex-start' }}
                >
                  {lang === 'pl' ? 'Zobacz poradnie' : 'Explore services'}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2: Doctors */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: 1,
                bgcolor: '#ffffff',
                border: '1px solid #e2e8f0',
              }}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2.5,
                    bgcolor: 'rgba(13, 148, 136, 0.1)',
                    color: '#0f766e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <PeopleIcon sx={{ fontSize: 28 }} />
                </Box>
                <Typography variant="h6" fontWeight={800} sx={{ mb: 1, color: '#0f172a' }}>
                  {t.navDoctors}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6, flexGrow: 1 }}>
                  {lang === 'pl'
                    ? `Poznaj ${DOCTORS.length} lekarzy specjalistów i medycyny rodzinnej (m.in. lek. Grażyna Pyrkosz) przyjmujących w naszej przychodni.`
                    : `Meet our ${DOCTORS.length} family doctors and specialists providing dedicated patient care.`}
                </Typography>
                <Button
                  component={NextLink}
                  href="/lekarze"
                  variant="text"
                  color="secondary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ fontWeight: 700, p: 0, justifyContent: 'flex-start' }}
                >
                  {lang === 'pl' ? 'Lista lekarzy' : 'View physicians'}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3: Patient Zone */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: 1,
                bgcolor: '#ffffff',
                border: '1px solid #e2e8f0',
              }}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2.5,
                    bgcolor: 'rgba(2, 132, 199, 0.1)',
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <HelpOutlineIcon sx={{ fontSize: 28 }} />
                </Box>
                <Typography variant="h6" fontWeight={800} sx={{ mb: 1, color: '#0f172a' }}>
                  {t.navPatientZone}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6, flexGrow: 1 }}>
                  {lang === 'pl'
                    ? 'Deklaracja wyboru lekarza POZ, zamawianie e-recept na telefon, przygotowanie do badań krwi oraz pomoc nocna i świąteczna.'
                    : 'Patient registration, repeat e-prescriptions, blood test preparation, and 24/7 night healthcare info.'}
                </Typography>
                <Button
                  component={NextLink}
                  href="/strefa-pacjenta"
                  variant="text"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ fontWeight: 700, p: 0, justifyContent: 'flex-start' }}
                >
                  {lang === 'pl' ? 'Przejdź do strefy' : 'Patient guide'}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 4: Contact & Hours */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: 1,
                bgcolor: '#ffffff',
                border: '1px solid #e2e8f0',
              }}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 2.5,
                    bgcolor: 'rgba(13, 148, 136, 0.1)',
                    color: '#0f766e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: 28 }} />
                </Box>
                <Typography variant="h6" fontWeight={800} sx={{ mb: 1, color: '#0f172a' }}>
                  {t.navContact}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6, flexGrow: 1 }}>
                  {lang === 'pl'
                    ? 'Legnica, ul. Biegunowa 2. Poniedziałek – Piątek w godz. 8:00 – 18:00. Sprawdź mapę dojazdu i parking.'
                    : '2 Biegunowa St., Legnica. Open Mon–Fri 8:00 AM – 6:00 PM. Check Google Maps and parking details.'}
                </Typography>
                <Button
                  component={NextLink}
                  href="/kontakt"
                  variant="text"
                  color="secondary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ fontWeight: 700, p: 0, justifyContent: 'flex-start' }}
                >
                  {lang === 'pl' ? 'Mapa i kontakt' : 'Map & details'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Quick Registration & NFZ Assurance Banner */}
        <Card
          sx={{
            background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
            color: 'white',
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            boxShadow: '0 10px 25px -5px rgba(2, 132, 199, 0.4)',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="overline" sx={{ color: '#bae6fd', fontWeight: 800, letterSpacing: '0.05em' }}>
                {lang === 'pl' ? 'NARODOWY FUNDUSZ ZDROWIA' : 'NATIONAL HEALTH FUND (NFZ)'}
              </Typography>
              <Typography variant="h4" fontWeight={800} sx={{ mb: 1.5, color: 'white' }}>
                {lang === 'pl'
                  ? 'Zapisz się do Przychodni BIEGUNOWA w Legnicy'
                  : 'Register as a Patient at BIEGUNOWA Clinic'}
              </Typography>
              <Typography variant="body1" sx={{ color: '#e0f2fe', lineHeight: 1.6, maxWidth: 650 }}>
                {lang === 'pl'
                  ? 'Wybór lekarza POZ i pielęgniarki jest całkowicie bezpłatny. Wystarczy dowód tożsamości w rejestracji lub chwila na portalu pacjent.gov.pl.'
                  : 'Choosing our clinic for primary healthcare is completely free. Register at reception with ID or online via pacjent.gov.pl.'}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<PhoneInTalkIcon />}
                href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
                sx={{
                  bgcolor: '#ffffff',
                  color: '#0369a1',
                  fontWeight: 800,
                  py: 1.5,
                  borderRadius: 2.5,
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    bgcolor: '#f0f9ff',
                  },
                }}
              >
                {t.heroCallBtn}
              </Button>
              <Button
                component={NextLink}
                href="/strefa-pacjenta"
                variant="outlined"
                size="large"
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  fontWeight: 700,
                  py: 1.3,
                  borderRadius: 2.5,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {t.heroHowToJoinBtn}
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
