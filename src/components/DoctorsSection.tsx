'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Box,
  Container,
  Typography,
  Grid2 as Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { DOCTORS } from '@/data/clinicData';
import { useLanguage } from '@/context/LanguageContext';

export default function DoctorsSection() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [search, setSearch] = useState(initialQuery);
  const { lang, t } = useLanguage();

  const filteredDoctors = DOCTORS.filter((doc) => {
    const q = search.toLowerCase();
    const specialtiesList = doc.specialties[lang] || doc.specialties.pl;
    const desc = doc.description[lang] || doc.description.pl;
    const titleText = doc.title[lang] || doc.title.pl;
    return (
      doc.name.toLowerCase().includes(q) ||
      titleText.toLowerCase().includes(q) ||
      specialtiesList.some((s) => s.toLowerCase().includes(q)) ||
      desc.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    const qParam = searchParams.get('q');
    if (qParam !== null) {
      setSearch(qParam);
    }
  }, [searchParams]);

  return (
    <Box id="lekarze" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Chip label={t.doctorsBadge} color="secondary" sx={{ fontWeight: 700, mb: 1.5 }} />
          <Typography component="h2" variant="h3" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
            {t.doctorsTitle}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            {t.doctorsSubtitle}
          </Typography>
        </Box>

        {/* Search bar */}
        <Box sx={{ maxWidth: 480, mx: 'auto', mb: 6 }}>
          <TextField
            fullWidth
            placeholder={t.doctorsSearchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              bgcolor: '#f8fafc',
              borderRadius: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
              },
            }}
          />
        </Box>

        <Grid container spacing={3}>
          {filteredDoctors.map((doc) => {
            const specialties = doc.specialties[lang] || doc.specialties.pl;
            const description = doc.description[lang] || doc.description.pl;
            const title = doc.title[lang] || doc.title.pl;
            const days = doc.availableDays ? (doc.availableDays[lang] || doc.availableDays.pl) : null;

            return (
              <Grid key={doc.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#ffffff',
                    p: 1,
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          bgcolor: 'rgba(2, 132, 199, 0.1)',
                          color: 'primary.main',
                          fontWeight: 700,
                          fontSize: '1.2rem',
                        }}
                      >
                        <PersonIcon sx={{ fontSize: 36 }} />
                      </Avatar>
                      <Box>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 700, lineHeight: 1.2, color: '#0f172a' }}>
                          {doc.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                          {title}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2 }}>
                      {specialties.map((spec, i) => (
                        <Chip
                          key={i}
                          label={spec}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(13, 148, 136, 0.08)',
                            color: '#0f766e',
                            fontWeight: 600,
                            fontSize: '0.78rem',
                          }}
                        />
                      ))}
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.6 }}>
                      {description}
                    </Typography>

                    {days && (
                      <Box
                        sx={{
                          mt: 'auto',
                          pt: 1.5,
                          borderTop: '1px solid',
                          borderColor: 'divider',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          color: 'text.secondary',
                        }}
                      >
                        <AccessTimeFilledIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                          {days}
                        </Typography>
                      </Box>
                    )}
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
