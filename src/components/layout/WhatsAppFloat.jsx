import { contact } from '../../constants/contact';

export const WhatsAppFloat = () => (
  <a
    href={contact.whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-success px-5 py-3.5 text-sm font-semibold text-white shadow-brand-lg transition-transform hover:-translate-y-1"
    aria-label="Chat on WhatsApp"
  >
    <span aria-hidden>🟢</span> WhatsApp APJ
  </a>
);

export default WhatsAppFloat;
