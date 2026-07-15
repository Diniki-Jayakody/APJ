import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { FormProvider } from './context/FormContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';

const HomePage = lazy(() => import('./pages/HomePage'));
const CountryDetailPage = lazy(() => import('./pages/CountryDetailPage'));

const PageLoader = () => (
  <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
    <img
      src="/apj_logo.png"
      alt="APJ Consultancy"
      className="h-16 w-16 rounded-2xl object-contain shadow-brand-sm"
    />
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-sky-200 border-t-sky-500" />
  </div>
);

const App = () => (
  <HelmetProvider>
    <FormProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/countries/:slug" element={<CountryDetailPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </FormProvider>
  </HelmetProvider>
);

export default App;
