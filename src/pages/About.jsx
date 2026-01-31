import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-48 pb-32"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter"
            >
              {t('about.title')}
            </motion.h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed font-medium">
              {t('about.p1')}
            </p>
            <p className="text-gray-500 mb-12 leading-relaxed">
              {t('about.p2')}
            </p>
            
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-2">
                <h4 className="text-5xl font-bold text-white tracking-tighter">100%</h4>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{t('about.stat_automated')}</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-5xl font-bold text-white tracking-tighter">24/7</h4>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{t('about.stat_available')}</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/5] bg-primary-soft rounded-[60px] border border-white/5 relative overflow-hidden group shadow-2xl shadow-accent-gold/5"
            >
               <img 
                 src="https://as2.ftcdn.net/jpg/03/18/03/17/1000_F_318031756_ruNOqFVFL3kkyRCQU38odOqdCv5xec8M.jpg" 
                 alt="AI Automation" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2000ms]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
               <div className="absolute bottom-16 left-12 right-12">
                 <h3 className="text-4xl font-bold mb-4 tracking-tight leading-tight">{t('about.pillar_title')}</h3>
                 <div className="w-12 h-1 bg-accent-gold rounded-full"></div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
