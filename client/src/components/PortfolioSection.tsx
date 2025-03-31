import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2Icon, SearchIcon } from "lucide-react";

type FilterCategory = "all" | "web" | "mobile" | "ecommerce" | "branding";

const projects = [
  {
    id: 1,
    title: "TechVision Dashboard",
    category: "web",
    tag: "Web App",
    description: "Interactive analytics dashboard with real-time data visualization and reporting capabilities.",
    technologies: ["React", "D3.js", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "HealthTrack App",
    category: "mobile",
    tag: "Mobile App",
    description: "Health monitoring mobile application with AI-driven insights and personalized recommendations.",
    technologies: ["React Native", "Firebase", "TensorFlow"],
    imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "LuxeMarket",
    category: "ecommerce",
    tag: "E-commerce",
    description: "Premium e-commerce platform with advanced product filtering, AR previews, and personalized recommendations.",
    technologies: ["Shopify", "Next.js", "GraphQL"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "NeoTech Rebrand",
    category: "branding",
    tag: "Branding",
    description: "Complete brand identity overhaul for a tech startup, including logo design, brand guidelines, and digital assets.",
    technologies: ["Brand Identity", "UI Design", "Marketing"],
    imageUrl: "https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "EduConnect Platform",
    category: "web",
    tag: "Web Platform",
    description: "Educational platform connecting students with tutors, featuring video conferencing and interactive learning tools.",
    technologies: ["Vue.js", "WebRTC", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "NeonRush Game",
    category: "mobile",
    tag: "Mobile Game",
    description: "Cyberpunk-themed mobile game with advanced 3D graphics, multiplayer capabilities, and innovative gameplay mechanics.",
    technologies: ["Unity", "C#", "AR"],
    imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

const filterButtons = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "branding", label: "Branding" }
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
          <div className="text-[#00FF41] text-sm mb-2 font-['Roboto_Mono']">// OUR WORK</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Courier_Prime']">
            Featured <span className="text-[#00FF41]">Projects</span>
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
            <span className="relative z-10">Start Your Project</span>
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 transition-all duration-700 hover:left-[100%]"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
