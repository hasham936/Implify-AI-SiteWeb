import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ProcessSection = () => {
  const { t } = useTranslation();
  
  const steps = [
  { number: '01', key: '1' },
  { number: '02', key: '2' },
  { number: '03', key: '3' },
  { number: '04', key: '4' },
];

  return (
    <section className="py-32 bg-primary-soft/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 tracking-tight"
          >
            {t('process.title')}
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/5 -z-10"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {/* Hover effect limited to this circle container */}
              <div className="w-24 h-24 rounded-full bg-primary-dark border border-white/5 flex items-center justify-center mx-auto mb-8 group hover:border-accent-gold/50 transition-all duration-500 relative">
                 <span className="text-2xl font-black text-white group-hover:text-accent-gold transition-colors">{step.number}</span>
                 {/* Pulse effect */}
                 <div className="absolute inset-0 rounded-full bg-accent-gold/5 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 {/* Glow effect on hover */}
                 <div className="absolute inset-0 rounded-full bg-accent-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white"> {t(`process.steps.${step.key}.title`)} </h3>
              <p className="text-sm text-gray-500 leading-relaxed"> {t(`process.steps.${step.key}.desc`)} </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
