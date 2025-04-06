import { motion } from "framer-motion";
import { LightbulbIcon, PencilRulerIcon, CodeIcon, RocketIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Courier_Prime']">
            <span className="text-[#00FF41]">MONO</span>
          </h2>
          <div className="w-16 h-1 bg-[#00FF41] mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="bg-[#0D0208]/75 backdrop-blur-md rounded-lg p-8 mb-16 border border-[#00FF41] hover:border-[#00FFFF] transition-colors group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                В MONO Digital Studio мы соединяем технологии и креативность. Основанная в 2018 году, наша команда цифровых мастеров создает иммерсивные цифровые проекты, раздвигающие границы возможного и приносящие измеримые результаты.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Наш подход сочетает техническую экспертизу с творческим видением, позволяя нам трансформировать сложные идеи в элегантные цифровые решения, которые привлекают, вдохновляют и работают.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">Веб-разработка</span>
                <span className="px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">UI/UX Дизайн</span>
                <span className="px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">Digital маркетинг</span>
                <span className="px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">Цифровая экосистема</span>
                <span className="px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">Разработка приложений</span>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#0D0208] p-6 rounded-lg border border-[#008F11] hover:border-[#00FF41] transition-all">
                  <div className="text-4xl text-[#00FF41] mb-2">7+</div>
                  <div className="text-white font-bold mb-1">Лет опыта</div>
                  <div className="text-gray-400 text-sm">Совокумный опыт в Digital</div>
                </div>
                <div className="bg-[#0D0208] p-6 rounded-lg border border-[#008F11] hover:border-[#00FF41] transition-all">
                  <div className="text-4xl text-[#00FF41] mb-2">100+</div>
                  <div className="text-white font-bold mb-1">Реализованных проектов</div>
                  <div className="text-gray-400 text-sm">В разных отраслях</div>
                </div>
                <div className="bg-[#0D0208] p-6 rounded-lg border border-[#008F11] hover:border-[#00FF41] transition-all">
                  <div className="text-4xl text-[#00FF41] mb-2">98%</div>
                  <div className="text-white font-bold mb-1">Довольных клиентов</div>
                  <div className="text-gray-400 text-sm">Среди наших партнеров</div>
                </div>
                <div className="bg-[#0D0208] p-6 rounded-lg border border-[#008F11] hover:border-[#00FF41] transition-all">
                  <div className="text-4xl text-[#00FF41] mb-2">24/7</div>
                  <div className="text-white font-bold mb-1">Техподдержка</div>
                  <div className="text-gray-400 text-sm">Для всех клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-48"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 font-['Courier_Prime']">
            <span className="text-[#00FF41]">Рабочий</span> Процесс
          </h3>
          <div className="w-16 h-1 bg-[#00FF41] mx-auto mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0D0208]/75 backdrop-blur-md p-6 rounded-lg border border-[#00FF41] hover:border-[#00FFFF] transition-colors group">
              <div className="h-16 w-16 rounded-full bg-[#008F11] flex items-center justify-center mx-auto mb-4">
                <LightbulbIcon className="h-6 w-6 text-[#0D0208]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Исследование</h4>
              <p className="text-gray-300 text-sm">Делаем бесплатный аудит, определяем цели и задачи для выбора оптимального решения.</p>
            </div>
            <div className="bg-[#0D0208]/75 backdrop-blur-md p-6 rounded-lg border border-[#00FF41] hover:border-[#00FFFF] transition-colors group">
              <div className="h-16 w-16 rounded-full bg-[#008F11] flex items-center justify-center mx-auto mb-4">
                <PencilRulerIcon className="h-6 w-6 text-[#0D0208]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Дизайн</h4>
              <p className="text-gray-300 text-sm">Создаем интуитивно понятные и удобные для пользователя интерфейсы.</p>
            </div>
            <div className="bg-[#0D0208]/75 backdrop-blur-md p-6 rounded-lg border border-[#00FF41] hover:border-[#00FFFF] transition-colors group">
              <div className="h-16 w-16 rounded-full bg-[#008F11] flex items-center justify-center mx-auto mb-4">
                <CodeIcon className="h-6 w-6 text-[#0D0208]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Разработка</h4>
              <p className="text-gray-300 text-sm">Разрабатываем надежные, масштабируемые и технологичные решения.</p>
            </div>
            <div className="bg-[#0D0208]/75 backdrop-blur-md p-6 rounded-lg border border-[#00FF41] hover:border-[#00FFFF] transition-colors group">
              <div className="h-16 w-16 rounded-full bg-[#008F11] flex items-center justify-center mx-auto mb-4">
                <RocketIcon className="h-6 w-6 text-[#0D0208]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Внедрение</h4>
              <p className="text-gray-300 text-sm">Запускаем проект с комплексным тестированием, гарантией и сопровождением.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
