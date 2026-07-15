import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const FormContext = createContext(null);

export const FormProvider = ({ children }) => {
  const [selectedDestination, setSelectedDestination] = useState('');

  const selectDestination = useCallback((destination) => {
    setSelectedDestination(destination);
    const applyEl = document.getElementById('apply');
    if (applyEl) applyEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const value = useMemo(
    () => ({ selectedDestination, selectDestination, setSelectedDestination }),
    [selectedDestination, selectDestination],
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error('useFormContext must be used within FormProvider');
  return ctx;
};
