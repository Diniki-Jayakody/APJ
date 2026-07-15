import { IoLogoWhatsapp } from 'react-icons/io5';
import { contact } from '../../constants/contact';

export const WhatsAppFloat = () => (
  <a
    href={contact.whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-brand-lg transition-transform duration-200 hover:-translate-y-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:h-16 sm:w-16"
    aria-label="Chat with APJ on WhatsApp"
  >
    <IoLogoWhatsapp className="text-3xl sm:text-4xl" aria-hidden />
  </a>
);

export default WhatsAppFloat;
