import { motion } from "framer-motion";
import { 
  MonitorIcon, PaletteIcon, SmartphoneIcon, 
  ShoppingCartIcon, TrendingUpIcon, SettingsIcon, 
  ChevronRightIcon 
} from "lucide-react";

const services = [
  {
    title: "Веб-разработка",
    icon: <MonitorIcon className="w-9 h-9" />,
    description: "Индивидуальные веб-сайты и веб-приложения, созданные с использованием новейших технологий и оптимизированные для высокой производительности.",
    features: [
      "Фронтенд-разработка",
      "Бэкенд-разработка",
      "Интеграция API",
      "Прогрессивные веб-приложения",
    ]
  },
  {
    title: "UI/UX Дизайн",
    icon: <PaletteIcon className="w-9 h-9" />,
    description: "Пользовательско-ориентированный дизайн, создающий интуитивно понятный, привлекательный и доступный цифровой опыт.",
    features: [
      "Дизайн пользовательского интерфейса",
      "Исследование пользовательского опыта",
      "Прототипирование и макетирование",
      "Тестирование удобства использования",
    ]
  },
  {
    title: "Мобильные приложения",
    icon: <SmartphoneIcon className="w-9 h-9" />,
    description: "Нативные и кроссплатформенные мобильные приложения, обеспечивающие плавный пользовательский опыт на всех устройствах.",
    features: [
      "Разработка для iOS",
      "Разработка для Android",
      "Кроссплатформенные решения",
      "Публикация приложений",
    ]
  },
  {
    title: "Решения для электронной коммерции",
    icon: <ShoppingCartIcon className="w-9 h-9" />,
    description: "Индивидуальные интернет-магазины и платформы электронной коммерции, которые увеличивают продажи и улучшают опыт клиентов.",
    features: [
      "Индивидуальные сайты E-commerce",
      "Интеграция платежных систем",
      "Управление инвентарем",
      "Аналитика клиентов",
    ]
  },
  {
    title: "Цифровой маркетинг",
    icon: <TrendingUpIcon className="w-9 h-9" />,
    description: "Стратегические услуги цифрового маркетинга для повышения видимости, вовлеченности и конверсии.",
    features: [
      "SEO оптимизация",
      "Контент-маркетинг",
      "Стратегия в социальных сетях",
      "Аналитика и отчетность",
    ]
  },
  {
    title: "Обслуживание и поддержка",
    icon: <SettingsIcon className="w-9 h-9" />,
    description: "Постоянная техническая поддержка, обновления и обслуживание для бесперебойной работы ваших цифровых продуктов.",
    features: [
      "Техническая поддержка 24/7",
      "Регулярные обновления",
      "Мониторинг безопасности",
      "Оптимизация производительности",
    ]
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Courier_Prime']">
            Наши <span className="text-[#00FF41]">Услуги</span>
          </h2>
          <div className="w-16 h-1 bg-[#00FF41] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-[#0D0208]/75 backdrop-blur-md rounded-lg overflow-hidden border border-[#00FF41] hover:border-[#00FFFF] transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="p-6">
                <div className="text-[#00FF41] text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#00FF41] mr-2 text-sm">{'>'}</span> 
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-flex items-center text-[#00FF41] hover:text-[#00FFFF] transition-colors">
                  Узнать больше <ChevronRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
