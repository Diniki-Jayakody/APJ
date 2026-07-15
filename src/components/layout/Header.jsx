import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenu, IoClose } from 'react-icons/io5';
import { strings } from '../../constants/strings';
import { contact } from '../../constants/contact';
import { navigation } from '../../constants/navigation';
import { brandLogo } from '../../data/assets';
import Container from './Container';
import Button from '../ui/Button';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <div className="hidden border-b border-line bg-white lg:block">
        <Container className="flex items-center justify-between gap-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={brandLogo}
              alt={strings.brand.name}
              className="h-14 w-14 rounded-2xl object-contain shadow-brand-sm"
            />
            <div>
              <p className="text-lg font-semibold text-navy-900">{strings.brand.name}</p>
              <p className="text-xs font-normal text-muted">{strings.brand.tagline}</p>
            </div>
          </Link>
          <div className="flex items-center gap-4 text-xs font-medium text-ink">
            {contact.branches.map((b) => (
              <a key={b.id} href={b.phoneLink} className="flex items-center gap-2 hover:text-secondary">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-secondary">☎</span>
                <span className="font-medium">{b.name}<br /><span className="font-normal">{b.phone}</span></span>
              </a>
            ))}
            <Button href={contact.whatsappUrl} variant="secondary" size="sm">
              Book Consultation
            </Button>
          </div>
        </Container>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-navy-950/95 shadow-brand-md backdrop-blur-xl' : 'bg-navy-900'
        }`}
      >
        <Container className="flex items-center justify-between py-0">
          <Link to="/" className="flex items-center gap-2 py-3 lg:hidden">
            <img
              src={brandLogo}
              alt={strings.brand.name}
              className="h-9 w-9 rounded-lg bg-white object-contain p-0.5"
            />
            <span className="text-lg font-semibold text-white">APJ</span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="px-3 py-4 text-sm font-medium text-white/90 transition-colors hover:text-secondary-light"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Button href="/#apply" variant="secondary" size="sm">Apply Now ✈</Button>
          </div>
          <button
            type="button"
            className="p-3 text-white lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <IoClose className="text-2xl" /> : <IoMenu className="text-2xl" />}
          </button>
        </Container>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col px-5 py-4">
                {navigation.map((item) => (
                  <a key={item.id} href={item.href} className="border-b border-white/10 py-3 text-sm font-medium text-white">
                    {item.label}
                  </a>
                ))}
                <Button href="/#apply" variant="secondary" size="md" className="mt-4 w-full">
                  Apply Now
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
