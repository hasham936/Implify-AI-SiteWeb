import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, RefreshCcw } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Final configured EmailJS credentials
    emailjs.sendForm(
      'service_vls3myg', 
      'template_nusfv2e', 
      form.current, 
      'w3X_rQ6AjGaggXl7f'
    )
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
      }, (error) => {
          console.error('FAILED...', error.text);
          setStatus('error');
      });
  };

  return (
    <div className="bg-primary-soft p-10 md:p-16 rounded-[40px] border border-white/5 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-accent-gold/20">
              <CheckCircle2 className="text-accent-gold" size={48} />
            </div>
            <h3 className="text-4xl font-bold mb-6">{t('contact.success_title')}</h3>
            <p className="text-gray-400 text-lg">{t('contact.success_desc')}</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-12 text-accent-gold text-sm font-black uppercase tracking-widest hover:underline flex items-center justify-center mx-auto gap-2"
            >
              <RefreshCcw size={16} />
              {t('contact.other_msg')}
            </button>
          </motion.div>
        ) : status === 'error' ? (
          <motion.div 
            key="error"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-red-500/20">
              <AlertCircle className="text-red-500" size={48} />
            </div>
            <h3 className="text-4xl font-bold mb-6 text-white">{t('contact.error_title')}</h3>
            <p className="text-gray-400 text-lg mb-10">{t('contact.error_desc')}</p>
            <button 
              onClick={() => setStatus('idle')}
              className="bg-white text-primary-dark px-8 py-4 rounded-2xl font-black uppercase tracking-widest transition-colors hover:bg-gray-100"
            >
              Réessayer
            </button>
          </motion.div>
        ) : (
          <form key="form" ref={form} onSubmit={handleSubmit} className="space-y-8">
            <input type="hidden" name="subject" value="Nouveau message depuis Implify AI" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">{t('contact.name')}</label>
                <input 
                  required
                  name="from_name" // Updated to match template {{from_name}}
                  type="text" 
                  className="w-full bg-primary-dark border border-white/5 rounded-2xl px-8 py-5 outline-none focus:border-accent-gold/50 transition-colors text-white font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">{t('contact.email')}</label>
                <input 
                  required
                  name="from_email" // Updated to match template {{from_email}}
                  type="email" 
                  className="w-full bg-primary-dark border border-white/5 rounded-2xl px-8 py-5 outline-none focus:border-accent-gold/50 transition-colors text-white font-medium"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-2">{t('contact.message')}</label>
              <textarea 
                required
                name="content" // Updated to match template {{content}}
                rows="6"
                className="w-full bg-primary-dark border border-white/5 rounded-2xl px-8 py-5 outline-none focus:border-accent-gold/50 transition-colors text-white font-medium resize-none"
                placeholder="..."
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={status === 'sending'}
              type="submit"
              className="w-full bg-white text-primary-dark hover:text-primary-dark font-black uppercase tracking-widest py-6 rounded-2xl flex items-center justify-center space-x-3 disabled:opacity-50 transition-all duration-300"
            >
              <span className="text-primary-dark">{status === 'sending' ? 'Envoi en cours...' : t('contact.send')}</span>
              <Send size={18} className="text-primary-dark" />
            </motion.button>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
