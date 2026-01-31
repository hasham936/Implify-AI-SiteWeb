import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Mail, Share2, Mic2, Plus } from 'lucide-react';

const AISection = () => {
  const { t } = useTranslation();
  
  const agents = [
    { key: "whatsapp", icon: <MessageSquare size={24} strokeWidth={1.5} /> },
    { key: "email", icon: <Mail size={24} strokeWidth={1.5} /> },
    { key: "social", icon: <Share2 size={24} strokeWidth={1.5} /> },
    { key: "voice", icon: <Mic2 size={24} strokeWidth={1.5} /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {agents.map((agent, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -12 }}
          className="bg-primary-soft p-10 rounded-[40px] border border-white/5 group cursor-pointer relative flex flex-col min-h-[400px]"
        >
          <div className="w-16 h-16 bg-primary-dark rounded-3xl mb-10 flex items-center justify-center text-accent-gold border border-white/5 group-hover:border-accent-gold/30 transition-all duration-500">
            {agent.icon}
          </div>
          
          <h3 className="text-2xl font-bold mb-6 tracking-tight group-hover:text-white transition-colors">
            {t(`services.${agent.key}.title`)}
          </h3>
          
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            {t(`services.${agent.key}.desc`)}
          </p>

          <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
            <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border ${
              t(`services.${agent.key}.status`) === 'Live' ? 'border-green-500/20 text-green-500 bg-green-500/5' : 'border-accent-gold/20 text-accent-gold bg-accent-gold/5'
            }`}>
              {t(`services.${agent.key}.status`)}
            </span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary-dark transition-all duration-500">
               <Plus size={16} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AISection;
