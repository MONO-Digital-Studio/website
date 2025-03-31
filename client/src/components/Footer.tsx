import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-10 relative bg-[#0D0208]/75 backdrop-blur-md border-t border-[#008F11]/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white font-['Courier_Prime']">MONO Digital Studio</h3>
            <p className="text-gray-300 mb-6">Создаем инновационные цифровые решения, которые раздвигают границы и превосходят ожидания.</p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-[#00FF41] hover:text-[#00FFFF] transition-colors"
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
            <h4 className="text-lg font-bold mb-4 text-white font-['Courier_Prime']">Навигация</h4>
            <ul className="space-y-2">
              {['Главная', 'О Нас', 'Услуги', 'Портфолио', 'Контакты'].map((link, index) => (
                <li key={link}>
                  <a 
                    href={index === 0 ? '#' : `#${['about', 'services', 'portfolio', 'contact'][index-1]}`} 
                    className="text-gray-300 hover:text-[#00FF41] transition-colors"
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
            <h4 className="text-lg font-bold mb-4 text-white font-['Courier_Prime']">Услуги</h4>
            <ul className="space-y-2">
              {[
                'Веб-разработка', 
                'UI/UX Дизайн', 
                'Мобильные Приложения', 
                'Электронная Коммерция', 
                'Цифровой Маркетинг'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-[#00FF41] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-white font-['Courier_Prime']">Новости</h4>
            <p className="text-gray-300 mb-4">Подпишитесь на нашу рассылку для получения последних обновлений и новостей.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="bg-[#0D0208] border border-[#008F11] focus:border-[#00FF41] rounded-l p-2 text-white flex-grow focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-[#00FF41] text-[#0D0208] px-4 py-2 rounded-r font-bold hover:bg-[#008F11] hover:text-white transition-all"
                aria-label="Подписаться"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-[#008F11] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-gray-300 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} MONO Digital Studio. Все права защищены.</p>
          <div className="flex space-x-4 text-sm">
            {['Политика Конфиденциальности', 'Условия Использования', 'Карта Сайта'].map((link) => (
              <a 
                key={link}
                href="#" 
                className="text-gray-300 hover:text-[#00FF41] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
