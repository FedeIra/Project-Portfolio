import axiosInstance from '../../../lib/axios/axiosInstance';
import type { EmailForm } from '../../../utils/types';

export const sendEmailRequest = (form: EmailForm) => axiosInstance.post('/sendEmail', form);
