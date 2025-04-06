import { motion } from "framer-motion";
import { Code, SmartphoneIcon, Database, Server } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  
  return (
    <section id="home" className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 min-h-[90vh] sm:min-h-screen flex items-center relative">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0"
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-['Roboto_Mono']">
              <span className="text-white">Создаем</span>
              <span className="text-[#00FF41] block leading-tight"> Цифровые Впечатления</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed font-['Roboto_Mono']">
              ИИ решения и цифровая трансформация для прогрессивных предпринимателей.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#services" 
                className="w-full sm:w-auto text-center border-2 border-[#00FF41] text-[#00FF41] px-5 sm:px-6 py-3 rounded font-bold transition-all hover:bg-[#0D0208] hover:text-white hover:border-white"
              >
                Услуги
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 relative"
            variants={itemVariants}
          >
            <div className="relative rounded-lg overflow-hidden border border-[#00FF41] hover:border-white transition-colors group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#00FF41]/10 via-transparent to-[#00FF41]/10 transition-opacity duration-700"></div>
              <div className="bg-[#0D0208]/75 backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="h-12 sm:h-16 flex items-center justify-center border border-[#00FF41] text-[#00FF41]">
                    <Code className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div className="h-12 sm:h-16 flex items-center justify-center border border-[#00FF41] text-[#00FF41]">
                    <SmartphoneIcon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div className="h-12 sm:h-16 flex items-center justify-center border border-[#00FF41] text-[#00FF41]">
                    <Database className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div className="h-12 sm:h-16 flex items-center justify-center border border-[#00FF41] text-[#00FF41]">
                    <Server className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-white text-xl sm:text-2xl mb-2 sm:mb-4 font-bold font-['Roboto_Mono']">Преимущества <span className="text-[#00FF41]">MONO</span></h3>
                  <ul className="text-gray-300 space-y-2 sm:space-y-3 text-sm sm:text-base">
                    <li className="flex items-start">
                      <span className="text-[#00FF41] mr-2">{'>'}</span> 
                      <span>Передовые технологии</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00FF41] mr-2">{'>'}</span> 
                      <span>Креативный подход</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00FF41] mr-2">{'>'}</span> 
                      <span>Фокус на результат</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00FF41] mr-2">{'>'}</span> 
                      <span>Полный цикл услуг под ключ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
