import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

const PLACEHOLDER_VALUES = new Set([
  'your_service_id',
  'your_template_id',
  'your_public_key',
]);

const isValidCredential = (value) =>
  Boolean(value) && !PLACEHOLDER_VALUES.has(value);

export const isEmailJsConfigured = () =>
  isValidCredential(SERVICE_ID) &&
  isValidCredential(TEMPLATE_ID) &&
  isValidCredential(PUBLIC_KEY);

if (isEmailJsConfigured()) {
  emailjs.init({ publicKey: PUBLIC_KEY });
} else if (import.meta.env.DEV) {
  console.warn(
    '[EmailJS] Missing or placeholder credentials. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env',
  );
}

const formatEmailJsError = (error) => {
  if (error?.status && error?.text) {
    return `EmailJS request failed (${error.status}): ${error.text}`;
  }
  if (error instanceof Error) return error.message;
  return String(error);
};

export const sendConsultation = async (data) => {
  if (!isEmailJsConfigured()) {
    throw new Error(
      'EmailJS is not configured. Set VITE_EMAILJS_* environment variables in .env',
    );
  }

  const templateParams = {
    from_name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email.trim(),
    reply_to: data.email.trim(),
    destination: data.destination,
    education: data.education,
    message: data.message.trim() || 'Not provided',
    to_name: 'APJ Consultancy',
    time: new Date().toLocaleString(),
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

    if (import.meta.env.DEV) {
      console.info('[EmailJS] Email sent successfully', {
        status: response.status,
        text: response.text,
      });
    }

    return response;
  } catch (error) {
    const message = formatEmailJsError(error);
    if (import.meta.env.DEV) {
      console.error('[EmailJS]', message, error);
    }
    throw new Error(message);
  }
};
