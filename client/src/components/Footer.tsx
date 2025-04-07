import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 md:py-10 relative bg-[#0D0208]/75 backdrop-blur-md border-t border-[#008F11]/30">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-['Courier_Prime']">
              <span className="text-[#00FF41]">MONO</span>{" "}
              <span className="text-white">Digital Studio</span>
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Создаем цифровые решения, которые превосходят ожидания.</p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-[#00FF41] hover:text-white transition-colors text-sm sm:text-base"
                  aria-label={`Подписаться на ${social}`}
                >
                  <i className={`fab fa-${social}${social === 'facebook' ? '-f' : social === 'linkedin' ? '-in' : ''}`}></i>
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-[#00FF41] font-['Courier_Prime']">Навигация</h4>
            <ul className="space-y-1 sm:space-y-2">
              {['Главная', 'О Нас', 'Услуги', 'Контакты'].map((link, index) => (
                <li key={link}>
                  <a 
                    href={index === 0 ? '#' : `#${['about', 'services', 'contact'][index-1]}`} 
                    className="text-gray-300 hover:text-[#00FF41] transition-colors text-sm sm:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-[#00FF41] font-['Courier_Prime']">Услуги</h4>
            <ul className="space-y-1 sm:space-y-2">
              {[
                'Веб-разработка', 
                'UI/UX Дизайн', 
                'Мобильные Приложения', 
                'Digital маркетинг', 
                'Комплексные решения'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-[#00FF41] transition-colors text-sm sm:text-base"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-[#008F11] mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-4 md:mb-0">&copy; {new Date().getFullYear()} <span className="text-[#00FF41]">MONO</span> <span className="text-white">Digital Studio</span>. Все права защищены.</p>
          <p className="text-gray-300 text-xs sm:text-sm text-center md:text-right">ИП Шинкаренко Андрей Александрович<br className="sm:hidden" /> ОГРНИП: 315595800025579</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
