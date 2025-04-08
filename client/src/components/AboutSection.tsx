import { motion } from "framer-motion";
import { LightbulbIcon, PencilRulerIcon, CodeIcon, RocketIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-['Courier_Prime']">
            <span className="text-[#00FF41]">MONO</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#00FF41] mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="bg-[#0D0208]/75 backdrop-blur-md rounded-lg p-4 sm:p-6 md:p-8 mb-10 sm:mb-16 border border-[#00FF41] hover:border-white transition-colors group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            <div>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                В MONO Digital Studio мы объединили технологии и креативность для реализации проектов, раздвигающих границы возможного и приносящие измеримые результаты.
              </p>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Наш подход сочетает техническую экспертизу с творческим видением, позволяя нам трансформировать сложные идеи в элегантные цифровые решения, которые привлекают, вдохновляют и работают.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                <span className="px-2 sm:px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">Веб-разработка</span>
                <span className="px-2 sm:px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">UI/UX Дизайн</span>
                <span className="px-2 sm:px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">Digital маркетинг</span>
                <span className="px-2 sm:px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">Цифровые экосистемы</span>
                <span className="px-2 sm:px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">Разработка приложений</span>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 md:mt-0">
                <div className="bg-[#0D0208] p-3 sm:p-4 md:p-6 rounded-lg border border-[#008F11] hover:border-[#00FF41] transition-all">
                  <div className="text-2xl sm:text-3xl md:text-4xl text-[#00FF41] mb-1 sm:mb-2">35+</div>
                  <div className="text-white font-bold mb-1 text-sm sm:text-base">Совокупный опыт команды</div>
                </div>
                <div className="bg-[#0D0208] p-3 sm:p-4 md:p-6 rounded-lg border border-[#008F11] hover:border-[#00FF41] transition-all">
                  <div className="text-2xl sm:text-3xl md:text-4xl text-[#00FF41] mb-1 sm:mb-2">100+</div>
                  <div className="text-white font-bold mb-1 text-sm sm:text-base">Реализованных проектов</div>
                </div>
                <div className="bg-[#0D0208] p-3 sm:p-4 md:p-6 rounded-lg border border-[#008F11] hover:border-[#00FF41] transition-all">
                  <div className="text-2xl sm:text-3xl md:text-4xl text-[#00FF41] mb-1 sm:mb-2">98%</div>
                  <div className="text-white font-bold mb-1 text-sm sm:text-base">Довольных клиентов</div>
                </div>
                <div className="bg-[#0D0208] p-3 sm:p-4 md:p-6 rounded-lg border border-[#008F11] hover:border-[#00FF41] transition-all">
                  <div className="text-2xl sm:text-3xl md:text-4xl text-[#00FF41] mb-1 sm:mb-2">24/7</div>
                  <div className="text-white font-bold mb-1 text-sm sm:text-base">Техподдержка</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-16 sm:mt-24 md:mt-36 lg:mt-48"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-['Roboto_Mono']">
            <span className="text-[#00FF41]">Рабочий</span> Процесс
          </h3>
          <div className="w-12 sm:w-16 h-1 bg-[#00FF41] mx-auto mb-6 sm:mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-[#0D0208]/75 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-[#00FF41] hover:border-white transition-colors group">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#008F11] flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <LightbulbIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#0D0208]" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Исследование</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Делаем бесплатный аудит, определяем цели и задачи для выбора оптимального решения.</p>
            </div>
            <div className="bg-[#0D0208]/75 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-[#00FF41] hover:border-white transition-colors group">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#008F11] flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <PencilRulerIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#0D0208]" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Дизайн</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Создаем интуитивно понятные и удобные для пользователя интерфейсы.</p>
            </div>
            <div className="bg-[#0D0208]/75 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-[#00FF41] hover:border-white transition-colors group">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#008F11] flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CodeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#0D0208]" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Разработка</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Разрабатываем надежные, масштабируемые и технологичные решения.</p>
            </div>
            <div className="bg-[#0D0208]/75 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-[#00FF41] hover:border-white transition-colors group">
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#008F11] flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <RocketIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#0D0208]" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">Внедрение</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Запускаем проект с комплексным тестированием, гарантией и сопровождением.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
