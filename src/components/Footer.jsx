import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-dark border-t border-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter mb-8 block">
              IMPLIFY<span className="text-accent-gold">.AI</span>
            </Link>
            <p className="text-gray-500 max-w-sm mb-10 text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://linkedin.com/company/implify-ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-white transition-colors"
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a 
                href="mailto:implifyai@gmail.com" 
                className="text-gray-600 hover:text-white transition-colors"
              >
                <Mail size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">{t('nav.services')}</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link to="/services" className="hover:text-accent-gold transition-colors">{t('services.whatsapp.title')}</Link></li>
              <li><Link to="/services" className="hover:text-accent-gold transition-colors">{t('services.email.title')}</Link></li>
              <li><Link to="/services" className="hover:text-accent-gold transition-colors">{t('services.social.title')}</Link></li>
              <li><Link to="/services" className="hover:text-accent-gold transition-colors">{t('services.voice.title')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">Links</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link to="/about" className="hover:text-accent-gold transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-accent-gold transition-colors">{t('nav.contact')}</Link></li>
              <li><Link to="/privacy" className="hover:text-accent-gold transition-colors">{t('nav.privacy')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Implify AI. {t('footer.rights')}
          </p>
          <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">
            Made with <span className="text-accent-gold">Precision</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
