import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const isEmailJsConfigured = () =>
  Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export const sendConsultationEmail = async (formData) => {
  if (!isEmailJsConfigured()) {
    throw new Error('EmailJS is not configured. Set VITE_EMAILJS_* environment variables.');
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: formData.name,
      phone: formData.phone,
      destination: formData.destination,
      education: formData.education,
      message: formData.message,
      to_name: 'APJ Consultancy',
    },
    PUBLIC_KEY,
  );
};
