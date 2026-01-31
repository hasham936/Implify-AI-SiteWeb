import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      
      {/* Featured Solution Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="bg-primary-soft border border-white/5 rounded-[60px] p-12 md:p-24 flex flex-col md:flex-row items-center gap-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 blur-[120px] -z-10"></div>
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight">{t('contact.title')}</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              {t('contact.subtitle')}
            </p>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-dark hover:text-primary-dark font-black uppercase tracking-widest px-12 py-5 rounded-full transition-all duration-300"
              >
                {t('contact.send')}
              </motion.button>
            </Link>
          </div>
          <div className="flex-1 relative hidden md:block">
             <div className="w-full aspect-video glass-morphism rounded-3xl border border-white/10 p-2 overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-primary-dark rounded-2xl flex items-center justify-center">
                   <div className="text-accent-gold animate-pulse">
                      <div className="w-20 h-1 bg-current rounded-full mb-2"></div>
                      <div className="w-12 h-1 bg-current rounded-full opacity-50"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
