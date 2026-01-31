import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-gold/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 py-2 px-6 rounded-full border border-white/5 bg-white/[0.02] text-[10px] font-black tracking-[0.2em] uppercase mb-10 text-gray-400"
          >
            <Layers size={14} className="text-accent-gold" />
            <span>{t('hero.badge')}</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-10 tracking-tight leading-[0.9] max-w-5xl mx-auto">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary-dark px-10 py-5 rounded-full font-bold text-sm tracking-tight flex items-center group transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                {t('hero.cta_primary')}
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>
            </Link>
            
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="glass-morphism px-10 py-5 rounded-full font-bold text-sm tracking-tight text-white border border-white/10 hover:bg-white/5 transition-colors"
              >
                {t('hero.cta_secondary')}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
