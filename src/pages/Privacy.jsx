import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  const sections = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="pt-48 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter">{t('privacy_policy.title')}</h1>
          <p className="text-accent-gold font-bold mb-6">{t('privacy_policy.date')}</p>
          <p className="text-gray-400 text-lg mb-16 leading-relaxed">
            {t('privacy_policy.intro')}
          </p>

          <div className="space-y-16">
            {sections.map((num) => (
              <section key={num} className="border-l border-white/10 pl-10 relative">
                <div className="absolute top-0 left-0 w-px h-10 bg-accent-gold -translate-x-px"></div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  {t(`privacy_policy.s${num}_title`)}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {t(`privacy_policy.s${num}_text`)}
                </p>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
