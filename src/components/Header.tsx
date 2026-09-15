'use client';

import React, { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  InputAdornment,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CLINIC_INFO } from '@/data/clinicData';
import { useLanguage, Language } from '@/context/LanguageContext';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();
  const { lang, setLang, t } = useLanguage();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: t.navHome, href: '/' },
    { label: t.navServices, href: '/uslugi' },
    { label: t.navDoctors, href: '/lekarze' },
    { label: t.navPatientZone, href: '/strefa-pacjenta' },
    { label: t.navContact, href: '/kontakt' },
  ];

  const handleLanguageChange = (
    _event: React.MouseEvent<HTMLElement>,
    newLang: Language | null
  ) => {
    if (newLang !== null) {
      setLang(newLang);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/lekarze?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/lekarze');
    }
  };

  return (
    <Box component="header" sx={{ width: '100%', zIndex: 1100 }}>
      {/* 1. TOP UTILITY STRIP (NFZ Badge + Hours + Address) */}
      <Box
        sx={{
          bgcolor: '#0f766e',
          color: 'white',
          py: 0.6,
          px: 2,
          fontSize: '0.82rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1.5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <VerifiedUserIcon sx={{ fontSize: 18, color: '#5eead4' }} />
            <Typography variant="body2" sx={{ fontWeight: 600, fontSize: { xs: '0.75rem', sm: '0.82rem' } }}>
              {t.nfzNotice}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTimeIcon sx={{ fontSize: 15, color: '#99f6e4' }} />
              <Typography variant="caption" sx={{ color: '#ccfbf1', fontWeight: 600 }}>
                {t.hoursShort}
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ color: '#99f6e4' }}>•</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationOnIcon sx={{ fontSize: 15, color: '#99f6e4' }} />
              <Typography variant="caption" sx={{ color: '#ccfbf1', fontWeight: 600 }}>
                {t.addressShort}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 2. MAIN HEADER BAR (Brand Logo + Global Search + Single-line Phone Button + Lang Switcher) */}
      <Box
        sx={{
          bgcolor: '#ffffff',
          py: 1.5,
          borderBottom: '1px solid #edf2f7',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 2, md: 3 },
            }}
          >
            {/* Logo and Brand */}
            <Box
              component={NextLink}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                color: 'inherit',
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  bgcolor: '#0284c7',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  color: 'white',
                  borderRadius: 2.5,
                  p: 1.1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)',
                }}
              >
                <HealthAndSafetyIcon sx={{ fontSize: 28 }} />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 900,
                    lineHeight: 1.05,
                    color: '#0f172a',
                    letterSpacing: '-0.03em',
                    fontSize: { xs: '1.2rem', sm: '1.4rem' },
                  }}
                >
                  BIEGUNOWA
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#64748b',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    display: 'block',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Przychodnia Lekarska Legnica
                </Typography>
              </Box>
            </Box>

            {/* Global Search Bar (Desktop) */}
            <Box
              component="form"
              onSubmit={handleSearchSubmit}
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                maxWidth: 420,
                mx: 2,
              }}
            >
              <TextField
                fullWidth
                size="small"
                placeholder={lang === 'pl' ? 'Szukaj lekarza, badania, poradni...' : 'Search doctor, clinic, test...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: '#0284c7', fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  bgcolor: '#f8fafc',
                  borderRadius: 2.5,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2.5,
                    fontSize: '0.88rem',
                    '& fieldset': { borderColor: '#e2e8f0' },
                    '&:hover fieldset': { borderColor: '#0284c7' },
                  },
                }}
              />
            </Box>

            {/* Right Action Elements: Phone & Language Switcher */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
              {/* Language Switcher */}
              <ToggleButtonGroup
                value={lang}
                exclusive
                onChange={handleLanguageChange}
                size="small"
                aria-label="Language selection"
                sx={{
                  bgcolor: '#f1f5f9',
                  borderRadius: 2,
                  p: 0.3,
                  '& .MuiToggleButton-root': {
                    border: 'none',
                    borderRadius: 1.8,
                    px: 1.2,
                    py: 0.4,
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#64748b',
                    '&.Mui-selected': {
                      bgcolor: '#ffffff',
                      color: '#0284c7',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                    },
                  },
                }}
              >
                <ToggleButton value="pl">PL</ToggleButton>
                <ToggleButton value="en">EN</ToggleButton>
              </ToggleButtonGroup>

              {/* Single-Line, Unwrapped Phone Widget */}
              <Button
                variant="contained"
                color="primary"
                href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
                startIcon={<PhoneInTalkIcon sx={{ fontSize: 20 }} />}
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  whiteSpace: 'nowrap',
                  bgcolor: '#0284c7',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  color: '#ffffff',
                  px: 2.5,
                  py: 1.1,
                  borderRadius: 2.5,
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  letterSpacing: '0.01em',
                  boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
                    boxShadow: '0 6px 18px rgba(2, 132, 199, 0.45)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                {CLINIC_INFO.contact.phone}
              </Button>

              {/* Mobile hamburger button */}
              <IconButton
                color="inherit"
                aria-label="open menu"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  display: { md: 'none' },
                  border: '1px solid #e2e8f0',
                  borderRadius: 2,
                  p: 0.9,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 3. DEDICATED NAVIGATION BAR (Full Width Row Under Header) */}
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          bgcolor: '#ffffff',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.08)',
          borderBottom: '1px solid #e2e8f0',
          borderTop: '1px solid #f1f5f9',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters variant="dense" sx={{ minHeight: 48, py: 0.3 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                flexGrow: 1,
              }}
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Button
                    key={item.href}
                    component={NextLink}
                    href={item.href}
                    sx={{
                      px: 2.2,
                      py: 0.9,
                      borderRadius: 2,
                      fontWeight: isActive ? 800 : 600,
                      fontSize: '0.94rem',
                      color: isActive ? '#0284c7' : '#334155',
                      bgcolor: isActive ? 'rgba(2, 132, 199, 0.08)' : 'transparent',
                      borderBottom: isActive ? '3px solid #0284c7' : '3px solid transparent',
                      transition: 'all 0.15s ease-in-out',
                      '&:hover': {
                        bgcolor: 'rgba(2, 132, 199, 0.1)',
                        color: '#0284c7',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            {/* Quick mini-notice in nav row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip
                label={lang === 'pl' ? 'NFZ bez opłat' : 'Free under NFZ'}
                size="small"
                color="success"
                variant="outlined"
                sx={{ fontWeight: 700, fontSize: '0.75rem', height: 24 }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 320,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                bgcolor: '#0284c7',
                color: 'white',
                borderRadius: 2,
                p: 0.8,
                display: 'flex',
              }}
            >
              <HealthAndSafetyIcon />
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight={800}>
                BIEGUNOWA
              </Typography>
              <Chip size="small" label="100% NFZ" color="secondary" sx={{ fontWeight: 700, height: 20 }} />
            </Box>
          </Box>
          <IconButton onClick={handleDrawerToggle} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Mobile Search */}
        <Box component="form" onSubmit={handleSearchSubmit} sx={{ mb: 2.5 }}>
          <TextField
            fullWidth
            size="small"
            placeholder={lang === 'pl' ? 'Szukaj na stronie...' : 'Search...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ bgcolor: '#f8fafc', borderRadius: 2 }}
          />
        </Box>

        {/* Mobile Language Switcher */}
        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: '#f8fafc', p: 1.5, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#475569' }}>
            <LanguageIcon fontSize="small" />
            <Typography variant="body2" fontWeight={600}>
              Język / Language:
            </Typography>
          </Box>
          <ToggleButtonGroup
            value={lang}
            exclusive
            onChange={handleLanguageChange}
            size="small"
            sx={{
              bgcolor: '#ffffff',
              borderRadius: 1.5,
              '& .MuiToggleButton-root': {
                px: 1.5,
                py: 0.3,
                fontWeight: 700,
              },
            }}
          >
            <ToggleButton value="pl">PL</ToggleButton>
            <ToggleButton value="en">EN</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Navigation links */}
        <List sx={{ mb: 'auto' }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <ListItem key={item.href} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component={NextLink}
                  href={item.href}
                  onClick={handleDrawerToggle}
                  sx={{
                    borderRadius: 2,
                    py: 1.2,
                    px: 2,
                    bgcolor: isActive ? 'rgba(2, 132, 199, 0.08)' : 'transparent',
                    borderLeft: isActive ? '4px solid #0284c7' : '4px solid transparent',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 800 : 600,
                      color: isActive ? '#0284c7' : '#1e293b',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        {/* Mobile bottom call button */}
        <Box sx={{ pt: 2, borderTop: '1px solid #e2e8f0' }}>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1, fontWeight: 600 }}>
            Rejestracja telefoniczna POZ:
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<PhoneInTalkIcon />}
            href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
            sx={{
              py: 1.5,
              fontWeight: 800,
              fontSize: '1rem',
              borderRadius: 2.5,
              whiteSpace: 'nowrap',
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
            }}
          >
            {CLINIC_INFO.contact.phone}
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
