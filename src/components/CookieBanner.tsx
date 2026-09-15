'use client';

import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Slide,
  IconButton,
} from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';
import CloseIcon from '@mui/icons-material/Close';
import { useLanguage } from '@/context/LanguageContext';

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('przychodnia_cookies_consent');
    if (!consent) {
      // Krótkie opóźnienie, aby nie zakłócać pierwszego renderowania LCP
      const timer = setTimeout(() => {
        setOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('przychodnia_cookies_consent', 'accepted');
    setOpen(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('przychodnia_cookies_consent', 'essential');
    setOpen(false);
  };

  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Paper
        elevation={8}
        sx={{
          position: 'fixed',
          bottom: { xs: 12, sm: 20 },
          left: { xs: 12, sm: 20 },
          right: { xs: 12, sm: 20 },
          maxWidth: 900,
          mx: 'auto',
          zIndex: 1400,
          p: { xs: 2.5, sm: 3 },
          borderRadius: 3.5,
          bgcolor: '#ffffff',
          border: '1px solid #cbd5e1',
          boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.25)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              p: 1.2,
              borderRadius: 2.5,
              bgcolor: 'rgba(2, 132, 199, 0.1)',
              color: '#0284c7',
            }}
          >
            <CookieIcon sx={{ fontSize: 32 }} />
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle1" fontWeight={800} sx={{ color: '#0f172a' }}>
                {lang === 'pl' ? 'Informacja o plikach cookies' : 'Information about Cookies'}
              </Typography>
              <IconButton size="small" onClick={handleEssentialOnly} aria-label="Zamknij">
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>

            <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.6, mb: 2.5, fontSize: '0.88rem' }}>
              {lang === 'pl' ? (
                <>
                  Nasz serwis wykorzystuje pliki cookies (niezbędne technicznie oraz funkcjonalne do zapamiętania preferencji językowych i wyświetlania mapy dojazdu Google). Nie prowadzimy profilowania marketingowego. Więcej informacji znajdziesz w naszej{' '}
                  <NextLink href="/polityka-prywatnosci" style={{ color: '#0284c7', fontWeight: 700, textDecoration: 'underline' }}>
                    Polityce Prywatności i Cookies
                  </NextLink>
                  .
                </>
              ) : (
                <>
                  Our website uses cookies (essential and functional to remember language preferences and display Google Maps). We do not conduct commercial marketing profiling. Learn more in our{' '}
                  <NextLink href="/polityka-prywatnosci" style={{ color: '#0284c7', fontWeight: 700, textDecoration: 'underline' }}>
                    Privacy & Cookie Policy
                  </NextLink>
                  .
                </>
              )}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                onClick={handleEssentialOnly}
                sx={{
                  fontWeight: 600,
                  borderRadius: 2,
                  borderColor: '#cbd5e1',
                  color: '#475569',
                  '&:hover': { bgcolor: '#f1f5f9' },
                }}
              >
                {lang === 'pl' ? 'Tylko niezbędne' : 'Essential only'}
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleAccept}
                sx={{
                  fontWeight: 700,
                  borderRadius: 2,
                  px: 2.5,
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                }}
              >
                {lang === 'pl' ? 'Akceptuję wszystkie' : 'Accept all'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Slide>
  );
}
