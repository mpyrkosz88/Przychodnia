'use client';

import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Typography, Button, Grid2 as Grid, Card, CardContent, Chip } from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CLINIC_INFO } from '@/data/clinicData';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 50%, #ffffff 100%)',
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ mb: 2 }}>
              <Chip
                icon={<AssignmentTurnedInIcon />}
                label={t.heroBadge}
                color="secondary"
                sx={{
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  py: 0.6,
                  px: 1,
                  boxShadow: '0 2px 8px rgba(13, 148, 136, 0.15)',
                }}
              />
            </Box>

            <Typography
              component="h1"
              variant="h2"
              sx={{
                color: '#0f172a',
                fontSize: { xs: '2.2rem', sm: '3rem', md: '3.4rem' },
                lineHeight: 1.15,
                mb: 2.5,
              }}
            >
              {t.heroTitle}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1.05rem', md: '1.2rem' },
                lineHeight: 1.6,
                mb: 4,
                maxWidth: 600,
              }}
            >
              {t.heroSubtitle}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<PhoneInTalkIcon />}
                href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
                sx={{
                  py: 1.6,
                  px: 3.5,
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  borderRadius: 2.5,
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  boxShadow: '0 6px 20px rgba(2, 132, 199, 0.35)',
                }}
              >
                {t.heroCallBtn}
              </Button>

              <Button
                component={NextLink}
                variant="outlined"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                href="/strefa-pacjenta"
                sx={{
                  py: 1.6,
                  px: 3,
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: 2.5,
                  bgcolor: 'rgba(255, 255, 255, 0.85)',
                  borderColor: '#cbd5e1',
                  color: '#0f172a',
                  '&:hover': {
                    borderColor: '#0284c7',
                    bgcolor: '#ffffff',
                  },
                }}
              >
                {t.heroHowToJoinBtn}
              </Button>
            </Box>

            {/* Micro badges */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <AccessTimeIcon color="primary" />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155' }}>
                    {t.hoursShort}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <LocationOnIcon color="primary" />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155' }}>
                    {t.addressShort}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Cards Showcase */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  p: 1.5,
                  borderRadius: 3.5,
                }}
              >
                <CardContent>
                  <Typography variant="overline" color="secondary.main" sx={{ fontWeight: 800 }}>
                    PODSTAWOWA OPIEKA ZDROWOTNA (NFZ)
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800, mt: 0.5, mb: 1, color: '#0f172a' }}>
                    {t.cardPozTitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6 }}>
                    {t.cardPozDesc}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    startIcon={<PhoneInTalkIcon />}
                    href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
                    sx={{ py: 1.3, fontWeight: 700, borderRadius: 2 }}
                  >
                    {t.cardPozBtn}
                  </Button>
                </CardContent>
              </Card>

              {/* Lab Point Highlight */}
              <Card
                sx={{
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  color: 'white',
                  p: 1.5,
                  borderRadius: 3.5,
                  boxShadow: '0 8px 24px -4px rgba(2, 132, 199, 0.35)',
                }}
              >
                <CardContent>
                  <Typography variant="overline" sx={{ color: '#bae6fd', fontWeight: 800 }}>
                    {t.cardLabBadge}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 800, mt: 0.5, mb: 1, color: 'white' }}>
                    {t.cardLabTitle}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#e0f2fe', mb: 1.5, lineHeight: 1.6 }}>
                    {t.cardLabDesc}
                  </Typography>
                  <Typography variant="caption" sx={{ display: 'block', color: '#bae6fd', fontWeight: 600 }}>
                    {t.cardLabBullets}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
