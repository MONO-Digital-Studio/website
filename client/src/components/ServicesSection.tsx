import { motion } from "framer-motion";
import { 
  MonitorIcon, PaletteIcon, SmartphoneIcon, 
  ShoppingCartIcon, TrendingUpIcon, SettingsIcon, 
  ChevronRightIcon 
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: <MonitorIcon className="w-9 h-9" />,
    description: "Custom websites and web applications built with the latest technologies and optimized for performance.",
    features: [
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Progressive Web Apps",
    ]
  },
  {
    title: "UI/UX Design",
    icon: <PaletteIcon className="w-9 h-9" />,
    description: "User-centered design that creates intuitive, engaging, and accessible digital experiences.",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Prototyping & Wireframing",
      "Usability Testing",
    ]
  },
  {
    title: "Mobile App Development",
    icon: <SmartphoneIcon className="w-9 h-9" />,
    description: "Native and cross-platform mobile applications that provide seamless experiences across devices.",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Solutions",
      "App Store Optimization",
    ]
  },
  {
    title: "E-commerce Solutions",
    icon: <ShoppingCartIcon className="w-9 h-9" />,
    description: "Custom online stores and e-commerce platforms that drive sales and enhance customer experience.",
    features: [
      "Custom E-commerce Sites",
      "Payment Gateway Integration",
      "Inventory Management",
      "Customer Analytics",
    ]
  },
  {
    title: "Digital Marketing",
    icon: <TrendingUpIcon className="w-9 h-9" />,
    description: "Strategic digital marketing services to increase visibility, engagement, and conversion.",
    features: [
      "SEO Optimization",
      "Content Marketing",
      "Social Media Strategy",
      "Analytics & Reporting",
    ]
  },
  {
    title: "Maintenance & Support",
    icon: <SettingsIcon className="w-9 h-9" />,
    description: "Ongoing technical support, updates, and maintenance to keep your digital products running smoothly.",
    features: [
      "24/7 Technical Support",
      "Regular Updates",
      "Security Monitoring",
      "Performance Optimization",
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
          <div className="text-[#00FF41] text-sm mb-2 font-['Roboto_Mono']">// WHAT WE DO</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Courier_Prime']">
            Our <span className="text-[#00FF41]">Services</span>
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
                  Learn more <ChevronRightIcon className="ml-1 h-4 w-4" />
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
