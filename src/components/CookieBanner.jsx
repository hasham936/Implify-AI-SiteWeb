import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const CookieBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [hasDecision, setHasDecision] = useState(false);

  useEffect(() => {
    // Show banner after 1 second on every page load
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleConsent = (type) => {
    // We still save it, but we show the banner anyway on next load
    localStorage.setItem('cookie-consent', type);
    setIsVisible(false);
  };

  const toggleBanner = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 left-6 right-6 md:right-auto md:w-[400px] z-[100]"
          >
            <div className="glass-morphism p-6 rounded-[32px] border border-white/10 shadow-2xl bg-primary-soft/90 backdrop-blur-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-accent-gold/10 rounded-xl flex items-center justify-center text-accent-gold flex-shrink-0">
                  <Cookie size={20} />
                </div>
                <p className="text-[13px] text-gray-300 leading-relaxed">
                  {t('cookies.text')}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleConsent('rejected')}
                  className="flex-1 px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors border border-white/5 hover:border-white/20"
                >
                  {t('cookies.reject')}
                </button>
                <button
                  onClick={() => handleConsent('accepted')}
                  className="flex-1 bg-white text-primary-dark px-4 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-accent-gold hover:text-white transition-all duration-300 shadow-lg shadow-white/5"
                >
                  {t('cookies.accept')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieBanner;
