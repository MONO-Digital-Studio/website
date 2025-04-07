import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 md:py-12 relative bg-[#0D0208]/75 backdrop-blur-md border-t border-[#008F11]/30">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-['Courier_Prime']">
              <span className="text-[#00FF41]">MONO</span>{" "}
              <span className="text-white">Digital Studio</span>
            </h3>
            <p className="text-gray-300 mb-2 sm:mb-3 text-sm sm:text-base">
              Создаем комплексные решения, которые превосходят ожидания
            </p>
            <p className="text-[#00FF41] mb-4 sm:mb-5 text-sm sm:text-base font-bold">
              Create Your Future In MONO
            </p>
            <div className="flex justify-center space-x-5 sm:space-x-6 mb-4">
              <a 
                href="https://t.me/MONO_LeadsBot" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00FF41] hover:text-white transition-colors text-xl sm:text-2xl"
                aria-label="Написать в Telegram бот @MONO_LeadsBot"
              >
                <FaTelegramPlane />
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-[#008F11] pt-4 sm:pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-gray-300 text-xs sm:text-sm">&copy; {new Date().getFullYear()} <span className="text-[#00FF41]">MONO</span> <span className="text-white">Digital Studio</span>. Все права защищены.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;