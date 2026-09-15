'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid2 as Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import { PATIENT_GUIDES, CLINIC_INFO } from '@/data/clinicData';
import { useLanguage } from '@/context/LanguageContext';

export default function PatientZone() {
  const { lang, t } = useLanguage();

  return (
    <Box id="strefa-pacjenta" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f1f5f9' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Chip label={t.patientBadge} color="primary" sx={{ fontWeight: 700, mb: 1.5 }} />
          <Typography component="h2" variant="h3" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
            {t.patientTitle}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            {t.patientSubtitle}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* FAQ Accordion */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {PATIENT_GUIDES.map((guide, idx) => {
                const title = guide.title[lang] || guide.title.pl;
                const content = guide.content[lang] || guide.content.pl;
                const linkText = guide.linkText ? (guide.linkText[lang] || guide.linkText.pl) : null;

                return (
                  <Accordion
                    key={idx}
                    defaultExpanded={idx === 0}
                    sx={{
                      borderRadius: '12px !important',
                      boxShadow: '0 2px 12px rgba(15, 23, 42, 0.05)',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      '&:before': { display: 'none' },
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <HelpOutlineOutlinedIcon color="secondary" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0f172a' }}>
                          {title}
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ pt: 0, pb: 2.5, px: 3 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: guide.linkHref ? 2 : 0 }}>
                        {content}
                      </Typography>
                      {guide.linkHref && linkText && (
                        <Button
                          variant="outlined"
                          size="small"
                          color="primary"
                          endIcon={<OpenInNewIcon />}
                          href={guide.linkHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ mt: 1, fontWeight: 600 }}
                        >
                          {linkText}
                        </Button>
                      )}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Box>
          </Grid>

          {/* Quick Support Cards */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* E-recepta Card */}
              <Card sx={{ p: 1, borderLeft: '5px solid #0284c7' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <MedicalInformationIcon color="primary" sx={{ fontSize: 28 }} />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {t.erecipeTitle}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                    {t.erecipeDesc}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<PhoneInTalkIcon />}
                    href={`tel:${CLINIC_INFO.contact.phoneRaw}`}
                    fullWidth
                    sx={{ py: 1.3, fontWeight: 700, borderRadius: 2 }}
                  >
                    {t.erecipeBtn}
                  </Button>
                </CardContent>
              </Card>

              {/* Night & Holiday Care */}
              <Card sx={{ p: 1, bgcolor: '#fef2f2', border: '1px solid #fecaca' }}>
                <CardContent>
                  <Typography variant="subtitle2" sx={{ color: '#b91c1c', fontWeight: 800, textTransform: 'uppercase', mb: 1 }}>
                    {t.nightCareBadge}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#7f1d1d', lineHeight: 1.6, mb: 1.5 }}>
                    {t.nightCareDesc}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#991b1b', fontWeight: 700, display: 'block' }}>
                    {t.nightCarePhone}
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
