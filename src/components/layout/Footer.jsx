import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { strings } from '../../constants/strings';
import { contact } from '../../constants/contact';
import { navigation } from '../../constants/navigation';
import { brandLogo } from '../../data/assets';
import Container from './Container';

const footerMapUrl = contact.branches[0]?.mapUrl;
const footerMapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  contact.branches[0]?.mapEmbedQuery || 'Kuliyapitiya Sri Lanka',
)}&z=15&output=embed`;

export const Footer = () => (
  <footer className="bg-navy-950 pt-12 pb-8 text-sky-100/80">
    <Container>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="mb-4 inline-flex items-center gap-3">
            <img
              src={brandLogo}
              alt={strings.brand.name}
              className="h-12 w-12 rounded-xl bg-white object-contain p-0.5"
            />
            <h3 className="text-lg font-semibold text-white">{strings.brand.name}</h3>
          </Link>
          <p className="text-sm font-normal leading-relaxed">
            Professional student visa and travel consultancy support for Sri Lankan students planning to study abroad.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm">
            {navigation.slice(1, 5).map((item) => (
              <a key={item.id} href={item.href} className="hover:text-white">{item.label}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Contact</h3>
          <div className="flex flex-col gap-2 text-sm">
            {contact.branches.map((b) => (
              <div key={b.id}>
                <span className="text-white/90">{b.name}</span>
                <br />
                <a href={b.phoneLink} className="hover:text-white">{b.phone}</a>
              </div>
            ))}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              WhatsApp: {contact.whatsappDisplay}
            </a>
            <a href={`mailto:${contact.mailtoEmail}`} className="hover:text-white">{contact.email}</a>
            <a
              href={contact.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {contact.website}
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Find Us</h3>
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy-900 shadow-brand-sm">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <iframe
                title="APJ Consultancy Kuliyapitiya location"
                src={footerMapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
              />
            </div>
            <a
              href={footerMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 flex items-end justify-center bg-gradient-to-t from-navy-950/85 via-transparent to-transparent px-3 pb-0 pt-16 transition-colors hover:from-secondary/90"
              aria-label="Open Kuliyapitiya branch on Google Maps"
            >
              <span className="mb-3 inline-flex items-center gap-2 rounded-xl bg-navy-950/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                <IoLocationOutline aria-hidden />
                Open in Google Maps
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-6 text-xs">
        <span>{strings.footer.copyright}</span>
      </div>
    </Container>
  </footer>
);

export default Footer;
