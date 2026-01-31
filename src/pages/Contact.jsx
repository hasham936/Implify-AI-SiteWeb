import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
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
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-medium">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1 space-y-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-accent-blue border border-white/5">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Email</h4>
                <p className="text-xl font-bold">implifyai@gmail.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-accent-blue border border-white/5">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Location</h4>
                <p className="text-xl font-bold">Paris, France</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
