import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AISection from './AISection';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter"
          >
            {t('services.title')}
          </motion.h2>
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl">
            {t('services.subtitle')}
          </p>
        </div>

        <AISection />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-[40px] bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <p className="text-gray-400 font-medium">
            {t('services.custom_note')}
          </p>
          <Link to="/contact">
            <button className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white group">
              {t('contact.send')}
              <div className="w-12 h-12 rounded-full bg-white text-primary-dark flex items-center justify-center transition-all duration-300">
                <ArrowUpRight size={20} />
              </div>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
