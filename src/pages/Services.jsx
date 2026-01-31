import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AISection from '../components/AISection';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-48 pb-32"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-32">
          <h1 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-medium">
            {t('services.subtitle')}
          </p>
        </div>

        <AISection />

        <div className="mt-32 p-12 md:p-24 bg-primary-soft rounded-[60px] border border-white/5 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">{t('services.custom_note')}</h2>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-dark hover:text-primary-dark px-12 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-4 mx-auto transition-all duration-300"
            >
              <span>{t('contact.send')}</span>
              <ArrowUpRight size={20} className="text-primary-dark" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
