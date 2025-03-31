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
          <div className="text-[#00FF41] text-sm mb-2 font-['Roboto_Mono']">// WHO WE ARE</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Courier_Prime']">
            About <span className="text-[#00FF41]">MONO</span>
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
                At MONO Digital Studio, we bridge the gap between technology and creativity. Founded in 2018, our team of digital artisans crafts immersive digital experiences that push boundaries while delivering measurable results.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our approach combines technical expertise with creative vision, allowing us to transform complex ideas into elegant digital solutions that engage, inspire, and perform.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">Web Development</span>
                <span className="px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">UI/UX Design</span>
                <span className="px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">Digital Strategy</span>
                <span className="px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">E-commerce</span>
                <span className="px-3 py-1 rounded bg-[#0D0208] border border-[#00FF41] text-[#00FF41]">App Development</span>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0D0208] p-6 rounded-lg border border-[#008F11] hover:border-[#00FF41] transition-all">
                  <div className="text-4xl text-[#00FF41] mb-2">12+</div>
                  <div className="text-white font-bold mb-1">Years Experience</div>
                  <div className="text-gray-400 text-sm">Combined expertise</div>
                </div>
                <div className="bg-[#0D0208] p-6 rounded-lg border border-[#008F11] hover:border-[#00FF41] transition-all">
                  <div className="text-4xl text-[#00FF41] mb-2">200+</div>
                  <div className="text-white font-bold mb-1">Projects Completed</div>
                  <div className="text-gray-400 text-sm">Across industries</div>
                </div>
                <div className="bg-[#0D0208] p-6 rounded-lg border border-[#008F11] hover:border-[#00FF41] transition-all">
                  <div className="text-4xl text-[#00FF41] mb-2">98%</div>
                  <div className="text-white font-bold mb-1">Client Satisfaction</div>
                  <div className="text-gray-400 text-sm">From our partners</div>
                </div>
                <div className="bg-[#0D0208] p-6 rounded-lg border border-[#008F11] hover:border-[#00FF41] transition-all">
                  <div className="text-4xl text-[#00FF41] mb-2">24/7</div>
                  <div className="text-white font-bold mb-1">Support Available</div>
                  <div className="text-gray-400 text-sm">For all clients</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-10 font-['Courier_Prime']">
            Our <span className="text-[#00FF41]">Process</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0D0208]/75 backdrop-blur-md p-6 rounded-lg border border-[#00FF41] hover:border-[#00FFFF] transition-colors group">
              <div className="h-16 w-16 rounded-full bg-[#008F11] flex items-center justify-center mx-auto mb-4">
                <LightbulbIcon className="h-6 w-6 text-[#0D0208]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Discovery</h4>
              <p className="text-gray-300 text-sm">We learn about your business, goals, and requirements to chart the optimal path forward.</p>
            </div>
            <div className="bg-[#0D0208]/75 backdrop-blur-md p-6 rounded-lg border border-[#00FF41] hover:border-[#00FFFF] transition-colors group">
              <div className="h-16 w-16 rounded-full bg-[#008F11] flex items-center justify-center mx-auto mb-4">
                <PencilRulerIcon className="h-6 w-6 text-[#0D0208]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Design</h4>
              <p className="text-gray-300 text-sm">Our designers craft intuitive user experiences and visually striking interfaces.</p>
            </div>
            <div className="bg-[#0D0208]/75 backdrop-blur-md p-6 rounded-lg border border-[#00FF41] hover:border-[#00FFFF] transition-colors group">
              <div className="h-16 w-16 rounded-full bg-[#008F11] flex items-center justify-center mx-auto mb-4">
                <CodeIcon className="h-6 w-6 text-[#0D0208]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Development</h4>
              <p className="text-gray-300 text-sm">We build robust, scalable solutions using cutting-edge technologies and best practices.</p>
            </div>
            <div className="bg-[#0D0208]/75 backdrop-blur-md p-6 rounded-lg border border-[#00FF41] hover:border-[#00FFFF] transition-colors group">
              <div className="h-16 w-16 rounded-full bg-[#008F11] flex items-center justify-center mx-auto mb-4">
                <RocketIcon className="h-6 w-6 text-[#0D0208]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Deployment</h4>
              <p className="text-gray-300 text-sm">We launch your project with comprehensive testing and ongoing support.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
