'use client';

import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Typography, Grid2 as Grid, Link as MuiLink, Divider } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import VerifiedIcon from '@mui/icons-material/Verified';
import { CLINIC_INFO } from '@/data/clinicData';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <Box sx={{ bgcolor: '#0f172a', color: '#cbd5e1', pt: 8, pb: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} sx={{ mb: 6 }}>
          {/* Col 1: Clinic Brand & Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderRadius: 2,
                  p: 0.8,
                  display: 'flex',
                }}
              >
                <HealthAndSafetyIcon sx={{ fontSize: 24 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>
                BIEGUNOWA
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.6, mb: 2 }}>
              {CLINIC_INFO.formalName}
              <br />
              {t.footerDesc}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#2dd4bf' }}>
              <VerifiedIcon sx={{ fontSize: 18 }} />
              <Typography variant="caption" sx={{ fontWeight: 600 }}>
                {t.footerNfzBadge}
              </Typography>
            </Box>
          </Grid>

          {/* Col 2: Navigation Links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t.quickNavTitle}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <MuiLink component={NextLink} href="/" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>
                {t.navHome}
              </MuiLink>
              <MuiLink component={NextLink} href="/uslugi" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>
                {t.navServices}
              </MuiLink>
              <MuiLink component={NextLink} href="/lekarze" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>
                {t.navDoctors}
              </MuiLink>
              <MuiLink component={NextLink} href="/strefa-pacjenta" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>
                {t.navPatientZone}
              </MuiLink>
              <MuiLink component={NextLink} href="/kontakt" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>
                {t.navContact}
              </MuiLink>
            </Box>
          </Grid>

          {/* Col 3: Legal & Registration */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t.legalTitle}
            </Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.8 }}>
              <strong>{t.addressLabel}:</strong> {CLINIC_INFO.address.street}, {CLINIC_INFO.address.postalCode} {CLINIC_INFO.address.city}
              <br />
              <strong>NIP:</strong> {CLINIC_INFO.legal.nip}
              <br />
              <strong>REGON:</strong> {CLINIC_INFO.legal.regon}
              <br />
              <strong>{t.phoneDetailsLabel}:</strong> {CLINIC_INFO.contact.phone}
              <br />
              <strong>{t.emailLabel}:</strong> {CLINIC_INFO.contact.email}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: '#334155', mb: 4 }} />

        {/* Bottom Bar: Copyright & Compliance */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography variant="caption" sx={{ color: '#64748b' }}>
            {t.copyright}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5, justifyContent: { xs: 'center', sm: 'flex-end' } }}>
            <MuiLink
              component={NextLink}
              href="/polityka-prywatnosci?tab=rodo"
              underline="hover"
              sx={{ color: '#94a3b8', fontSize: '0.82rem', '&:hover': { color: '#ffffff' } }}
            >
              {t.rodoLink}
            </MuiLink>
            <MuiLink
              component={NextLink}
              href="/polityka-prywatnosci?tab=prywatnosc"
              underline="hover"
              sx={{ color: '#94a3b8', fontSize: '0.82rem', '&:hover': { color: '#ffffff' } }}
            >
              {lang === 'pl' ? 'Polityka Prywatności' : 'Privacy Policy'}
            </MuiLink>
            <MuiLink
              component={NextLink}
              href="/polityka-prywatnosci?tab=cookies"
              underline="hover"
              sx={{ color: '#94a3b8', fontSize: '0.82rem', '&:hover': { color: '#ffffff' } }}
            >
              {lang === 'pl' ? 'Polityka Cookies' : 'Cookie Policy'}
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
