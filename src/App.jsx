import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import CookieBanner from './components/CookieBanner';
import './i18n/config';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <div className="bg-primary-dark text-base-offwhite min-h-screen selection:bg-accent-gold/30 selection:text-white">
        <Helmet>
          <title>Implify AI | Expert en Intelligence Artificielle & Automatisation</title>
          <meta name="description" content="Implify AI accompagne les entreprises dans leur transformation digitale grâce à des solutions d'IA sur mesure." />
        </Helmet>

        <Header />
        
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <CookieBanner />
      </div>
    </HelmetProvider>
  );
}

export default App;
