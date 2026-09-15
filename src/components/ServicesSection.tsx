'use client';

import React from 'react';
import { Box, Container, Typography, Grid2 as Grid, Card, CardContent, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ScienceIcon from '@mui/icons-material/Science';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { SERVICES } from '@/data/clinicData';
import { useLanguage } from '@/context/LanguageContext';

const iconMap: Record<string, React.ReactNode> = {
  LocalHospital: <LocalHospitalIcon fontSize="large" color="primary" />,
  ChildCare: <ChildCareIcon fontSize="large" color="secondary" />,
  Vaccines: <VaccinesIcon fontSize="large" color="primary" />,
  Science: <ScienceIcon fontSize="large" color="secondary" />,
  MedicalServices: <MedicalServicesIcon fontSize="large" color="primary" />,
};

export default function ServicesSection() {
  const { lang, t } = useLanguage();

  return (
    <Box id="uslugi" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Chip
            label={t.servicesBadge}
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 700, mb: 1.5 }}
          />
          <Typography component="h2" variant="h3" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
            {t.servicesTitle}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            {t.servicesSubtitle}
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {SERVICES.map((service) => {
            const title = service.title[lang] || service.title.pl;
            const description = service.description[lang] || service.description.pl;
            const features = service.features[lang] || service.features.pl;

            return (
              <Grid key={service.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#ffffff',
                  }}
                >
                  <CardContent sx={{ p: 3.5, flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 3,
                          bgcolor: 'rgba(2, 132, 199, 0.08)',
                          display: 'inline-flex',
                        }}
                      >
                        {iconMap[service.iconName] || <LocalHospitalIcon fontSize="large" />}
                      </Box>
                      <Chip label={t.freeNfzBadge} size="small" color="success" sx={{ fontWeight: 700 }} />
                    </Box>

                    <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1.5, color: '#0f172a' }}>
                      {title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6 }}>
                      {description}
                    </Typography>

                    <List disablePadding sx={{ mt: 'auto' }}>
                      {features.map((feat, idx) => (
                        <ListItem key={idx} disableGutters sx={{ py: 0.4 }}>
                          <ListItemIcon sx={{ minWidth: 28 }}>
                            <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: 'secondary.main' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={feat}
                            primaryTypographyProps={{ variant: 'body2', color: 'text.primary', fontWeight: 500 }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
