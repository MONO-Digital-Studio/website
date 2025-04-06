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
    <section id="home" className="pt-32 pb-20 min-h-screen flex items-center relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col lg:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="lg:w-1/2 mb-10 lg:mb-0"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Courier_Prime']">
              <span className="text-white">Создаем</span>
              <span className="text-[#00FF41] block leading-tight"> Цифровые Впечатления</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed font-['Roboto_Mono']">
              Передовые решения и цифровая трансформация для прогрессивных компаний.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#services" 
                className="relative overflow-hidden bg-[#00FF41] text-[#0D0208] px-6 py-3 rounded font-bold transition-all hover:bg-[#008F11] hover:text-white"
              >
                <span className="relative z-10">Услуги</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 transition-all duration-700 hover:left-[100%]"></span>
              </a>
              <a 
                href="#portfolio" 
                className="border-2 border-[#00FF41] text-[#00FF41] px-6 py-3 rounded font-bold transition-all hover:bg-[#0D0208] hover:text-[#00FFFF] hover:border-[#00FFFF]"
              >
                Кейсы
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            variants={itemVariants}
          >
            <div className="relative rounded-lg overflow-hidden border border-[#00FF41] hover:border-[#00FFFF] transition-colors group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#00FF41]/10 via-transparent to-[#00FF41]/10 transition-opacity duration-700"></div>
              <div className="bg-[#0D0208]/75 backdrop-blur-md rounded-lg p-6 md:p-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  <div className="h-16 flex items-center justify-center border border-[#00FF41] text-[#00FF41]">
                    <Code className="h-8 w-8" />
                  </div>
                  <div className="h-16 flex items-center justify-center border border-[#00FF41] text-[#00FF41]">
                    <SmartphoneIcon className="h-8 w-8" />
                  </div>
                  <div className="h-16 flex items-center justify-center border border-[#00FF41] text-[#00FF41]">
                    <Database className="h-8 w-8" />
                  </div>
                  <div className="h-16 flex items-center justify-center border border-[#00FF41] text-[#00FF41]">
                    <Server className="h-8 w-8" />
                  </div>
                </div>
                <div className="relative">
                  <div className="text-[#00FF41] text-sm mb-2 font-['Roboto_Mono']">// РЕШЕНИЯ НА БАЗЕ ИИ</div>
                  <h3 className="text-white text-2xl mb-4 font-bold font-['Courier_Prime']">Преимущества <span className="text-[#00FF41]">MONO</span></h3>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#00FF41] mr-2">{'>'}</span> 
                      <span>Интеграция передовых технологий</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00FF41] mr-2">{'>'}</span> 
                      <span>Креативный подход к дизайну</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00FF41] mr-2">{'>'}</span> 
                      <span>Разработка с фокусом на решение задач</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00FF41] mr-2">{'>'}</span> 
                      <span>Экспертиза в цифровой трансформации</span>
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
