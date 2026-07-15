import { Link } from 'react-router-dom';
import { strings } from '../../constants/strings';
import { contact } from '../../constants/contact';
import { navigation } from '../../constants/navigation';
import Container from './Container';

export const Footer = () => (
  <footer className="bg-navy-950 pt-12 pb-6 text-sky-100/80">
    <Container>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">{strings.brand.name}</h3>
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
              <span key={b.id}>{b.name}: {b.phone}</span>
            ))}
            <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-white">Important</h3>
          <div className="flex flex-col gap-2 text-sm">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Visa Disclaimer</span>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs md:flex-row md:justify-between">
        <span>{strings.footer.copyright}</span>
        <span>{strings.footer.disclaimer}</span>
      </div>
    </Container>
  </footer>
);

export default Footer;
