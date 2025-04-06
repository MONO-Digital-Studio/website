import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2Icon, SearchIcon } from "lucide-react";

type FilterCategory = "all" | "web" | "mobile" | "ecommerce" | "branding";

const projects = [
  {
    id: 1,
    title: "ТехВижн Дашборд",
    category: "web",
    tag: "Веб-приложение",
    description: "Интерактивная аналитическая панель с визуализацией данных в реальном времени и возможностями отчетности.",
    technologies: ["React", "D3.js", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "ХелсТрек Приложение",
    category: "mobile",
    tag: "Мобильное приложение",
    description: "Мобильное приложение для мониторинга здоровья с аналитикой на основе ИИ и персонализированными рекомендациями.",
    technologies: ["React Native", "Firebase", "TensorFlow"],
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "ЛюксМаркет",
    category: "ecommerce",
    tag: "Электронная коммерция",
    description: "Премиальная платформа электронной коммерции с расширенной фильтрацией товаров, AR-предпросмотром и персонализированными рекомендациями.",
    technologies: ["Shopify", "Next.js", "GraphQL"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "НеоТек Ребрендинг",
    category: "branding",
    tag: "Брендинг",
    description: "Полное обновление фирменного стиля для технологического стартапа, включая дизайн логотипа, руководство по бренду и цифровые активы.",
    technologies: ["Brand Identity", "UI Design", "Marketing"],
    imageUrl: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "ЭдуКоннект Платформа",
    category: "web",
    tag: "Веб-платформа",
    description: "Образовательная платформа, соединяющая студентов с преподавателями, с функциями видеоконференций и интерактивными учебными инструментами.",
    technologies: ["Vue.js", "WebRTC", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "НеонРаш Игра",
    category: "mobile",
    tag: "Мобильная игра",
    description: "Мобильная игра в киберпанк-стиле с продвинутой 3D-графикой, возможностями многопользовательской игры и инновационной механикой.",
    technologies: ["Unity", "C#", "AR"],
    imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

const filterButtons = [
  { id: "all", label: "Все" },
  { id: "web", label: "Веб" },
  { id: "mobile", label: "Мобильные" },
  { id: "ecommerce", label: "Э-коммерция" },
  { id: "branding", label: "Брендинг" }
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  
  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );
  
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Courier_Prime']">
            Избранные <span className="text-[#00FF41]">Проекты</span>
          </h2>
          <div className="w-16 h-1 bg-[#00FF41] mx-auto"></div>
        </motion.div>
        
        {/* Portfolio Filter */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {filterButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveFilter(button.id as FilterCategory)}
              className={`px-4 py-2 rounded-md border transition-all ${
                activeFilter === button.id
                  ? "bg-[#00FF41] text-[#0D0208] border-[#00FF41]"
                  : "bg-[#0D0208] text-white border-[#008F11] hover:bg-[#00FF41] hover:text-[#0D0208] hover:border-[#00FF41]"
              }`}
            >
              {button.label}
            </button>
          ))}
        </motion.div>
        
        {/* Portfolio Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="border border-[#00FF41] hover:border-[#00FFFF] transition-colors rounded-lg overflow-hidden transform hover:-translate-y-2 duration-300"
              >
                <div className="bg-[#0D0208]/75 backdrop-blur-md rounded-lg overflow-hidden">
                  <div className="relative group">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0D0208] bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href="#" className="text-[#00FF41] border border-[#00FF41] rounded-full p-2 mx-2 hover:bg-[#00FF41] hover:text-[#0D0208] transition-all">
                        <Link2Icon className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-[#00FF41] border border-[#00FF41] rounded-full p-2 mx-2 hover:bg-[#00FF41] hover:text-[#0D0208] transition-all">
                        <SearchIcon className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <span className="text-xs bg-[#008F11] text-white px-2 py-1 rounded">{project.tag}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs px-2 py-1 bg-[#0D0208] border border-[#008F11] text-white rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <a
            href="#contact"
            className="relative overflow-hidden inline-block bg-[#00FF41] text-[#0D0208] px-6 py-3 rounded font-bold transition-all hover:bg-[#008F11] hover:text-white"
          >
            <span className="relative z-10">Начать Ваш Проект</span>
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 transition-all duration-700 hover:left-[100%]"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
