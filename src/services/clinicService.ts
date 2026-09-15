import { CLINIC_INFO, DOCTORS, SERVICES } from '@/data/clinicData';

/**
 * Warstwa dostępu do danych (Data Access Layer).
 * Przygotowana jako furtka architektoniczna:
 * W obecnej wersji zwraca ustrukturyzowane dane lokalne,
 * a po wdrożeniu zewnętrznego backendu w Nest.js wystarczy
 * zamienić metody na wywołania fetch(`${process.env.BACKEND_API_URL}/...`).
 */
export const ClinicServiceApi = {
  async getClinicInfo() {
    return CLINIC_INFO;
  },

  async getDoctors() {
    return DOCTORS;
  },

  async getServices() {
    return SERVICES;
  },

  async getDoctorById(id: string) {
    return DOCTORS.find((d) => d.id === id) || null;
  },
};
