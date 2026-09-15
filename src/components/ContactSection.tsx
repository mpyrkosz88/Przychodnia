'use client';

import React from 'react';
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
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { CLINIC_INFO } from '@/data/clinicData';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <Box id="kontakt" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Chip label={t.contactBadge} color="secondary" sx={{ fontWeight: 700, mb: 1.5 }} />
          <Typography component="h2" variant="h3" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
            {t.contactTitle}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            {t.contactSubtitle}
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {/* Contact Details & Info */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
              <Card sx={{ p: 1, height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#0f172a' }}>
                    {t.contactDetailsTitle}
                  </Typography>

                  <List disablePadding>
                    {/* Address */}
                    <ListItem disableGutters sx={{ alignItems: 'flex-start', mb: 2 }}>
                      <ListItemIcon sx={{ minWidth: 44, mt: 0.5 }}>
                        <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'rgba(2, 132, 199, 0.1)', color: 'primary.main' }}>
                          <LocationOnIcon />
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={t.addressLabel}
                        secondary={`${CLINIC_INFO.name}, ${CLINIC_INFO.address.street}, ${CLINIC_INFO.address.postalCode} ${CLINIC_INFO.address.city}`}
                        primaryTypographyProps={{ variant: 'caption', color: 'text.secondary', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'body1', color: '#0f172a', fontWeight: 600, mt: 0.5 }}
                      />
                    </ListItem>

                    {/* Phone */}
                    <ListItem disableGutters sx={{ alignItems: 'flex-start', mb: 2 }}>
                      <ListItemIcon sx={{ minWidth: 44, mt: 0.5 }}>
                        <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'rgba(13, 148, 136, 0.1)', color: 'secondary.main' }}>
                          <PhoneInTalkIcon />
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={t.phoneDetailsLabel}
                        secondary={CLINIC_INFO.contact.phone}
                        primaryTypographyProps={{ variant: 'caption', color: 'text.secondary', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'h6', color: 'primary.main', fontWeight: 800, mt: 0.2 }}
                      />
                    </ListItem>

                    {/* Email */}
                    <ListItem disableGutters sx={{ alignItems: 'flex-start', mb: 2 }}>
                      <ListItemIcon sx={{ minWidth: 44, mt: 0.5 }}>
                        <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'rgba(2, 132, 199, 0.1)', color: 'primary.main' }}>
                          <EmailIcon />
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={t.emailLabel}
                        secondary={CLINIC_INFO.contact.email}
                        primaryTypographyProps={{ variant: 'caption', color: 'text.secondary', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'body1', color: '#0f172a', fontWeight: 600, mt: 0.5 }}
                      />
                    </ListItem>

                    {/* Opening Hours */}
                    <ListItem disableGutters sx={{ alignItems: 'flex-start' }}>
                      <ListItemIcon sx={{ minWidth: 44, mt: 0.5 }}>
                        <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'rgba(13, 148, 136, 0.1)', color: 'secondary.main' }}>
                          <AccessTimeIcon />
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={t.hoursLabel}
                        secondary={t.hoursValue}
                        primaryTypographyProps={{ variant: 'caption', color: 'text.secondary', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'body1', color: '#0f172a', fontWeight: 600, mt: 0.5 }}
                      />
                    </ListItem>
                  </List>

                  <Box sx={{ mt: 4 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="large"
                      startIcon={<PhoneInTalkIcon />}
                      href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
                      sx={{
                        py: 1.6,
                        fontWeight: 800,
                        fontSize: '1rem',
                        borderRadius: 2.5,
                        background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                      }}
                    >
                      {t.heroCallBtn}
                    </Button>
                  </Box>

                  {/* Accessibility & Parking tips */}
                  <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid', borderColor: 'divider', display: 'flex', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocalParkingIcon color="action" fontSize="small" />
                      <Typography variant="caption" color="text.secondary">
                        {t.parkingLabel}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <DirectionsBusIcon color="action" fontSize="small" />
                      <Typography variant="caption" color="text.secondary">
                        {t.mpkLabel}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Google Maps Embed */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Card sx={{ height: '100%', minHeight: { xs: 350, lg: '100%' }, overflow: 'hidden' }}>
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.4116819921473!2d16.1450113!3d51.2138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f12a32c2a7925%3A0xb35a0bf64beea92!2sBiegunowa%202%2C%2059-220%20Legnica!5e0!3m2!1spl!2spl!4v1710000000000!5m2!1spl!2spl"
                title="Lokalizacja Przychodni BIEGUNOWA w Legnicy"
                width="100%"
                height="100%"
                sx={{
                  border: 0,
                  minHeight: { xs: 380, md: 450, lg: '100%' },
                  display: 'block',
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
