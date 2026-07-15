import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import CountryCard from './CountryCard';

export const CountryModal = ({ isOpen, onClose, countries, onViewDetails }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-navy-900/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden
        />
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="All destinations"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed inset-x-4 top-[5vh] z-50 mx-auto max-h-[90vh] max-w-6xl overflow-hidden rounded-3xl border border-line bg-white shadow-brand-lg md:inset-x-8"
        >
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-secondary">All Destinations</p>
              <h2 className="text-xl font-semibold text-navy-900">Explore {countries.length} Countries</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl p-2 text-navy-900 hover:bg-sky-100"
              aria-label="Close destinations modal"
            >
              <IoClose className="text-2xl" />
            </button>
          </div>
          <div className="overflow-y-auto p-6 max-h-[calc(90vh-80px)]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {countries.map((country) => (
                <CountryCard key={country.id} country={country} onViewDetails={onViewDetails} />
              ))}
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export const useCountryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
};

export default CountryModal;
