import emailjs from '@emailjs/browser';

export const isEmailJsConfigured = () => {
  return (
    !!import.meta.env.VITE_EMAILJS_SERVICE_ID &&
    !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
    !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};

export const sendConsultation = async (data) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: data.name,
      phone: data.phone,
      reply_to: data.email,
      destination: data.destination,
      education: data.education,
      message: data.message || 'Not provided',
      time: new Date().toLocaleString(),
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};