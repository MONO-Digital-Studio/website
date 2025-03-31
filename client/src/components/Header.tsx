import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Link } from "wouter";

const navLinks = [
  { name: "Главная", href: "#home" },
  { name: "О нас", href: "#about" },
  { name: "Услуги", href: "#services" },
  { name: "Портфолио", href: "#portfolio" },
  { name: "Контакты", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0D0208]/75 backdrop-blur-md' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.h1 
              className="text-[#00FF41] text-xl md:text-3xl font-bold font-['Courier_Prime']"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative inline-block">
                MONO
                <span className="absolute top-0 left-0 text-white opacity-10 blur-[1px]">
                  MONO
                </span>
              </span>{" "}
              <span className="text-white">Digital Studio</span>
            </motion.h1>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#00FF41] hover:text-[#00FFFF] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="relative text-white hover:text-[#00FF41] transition-colors after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#00FF41] after:transition-width after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="relative bg-[#008F11] overflow-hidden text-white px-4 py-2 rounded hover:bg-[#00FF41] hover:text-[#0D0208] transition-all"
            >
              <span className="relative z-10">Начать работу</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 transition-all duration-700 hover:left-[100%]"></span>
            </a>
          </nav>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-[#0D0208]/90 backdrop-blur-md py-4 border-t border-[#008F11]/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#00FF41] transition-colors py-2"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#008F11] text-white px-4 py-2 rounded text-center hover:bg-[#00FF41] hover:text-[#0D0208] transition-all"
                onClick={handleLinkClick}
              >
                Начать работу
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
