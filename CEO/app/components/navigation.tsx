import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "backdrop-blur-2xl bg-slate-900/95 border-b border-emerald-400/30 shadow-2xl" 
        : "backdrop-blur-xl bg-slate-900/70"
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Name */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg font-display">TH</span>
            </div>
            <div>
              <div className="text-xl font-bold text-white tracking-tight font-display">
                Dr. Tofazzal Hossain
              </div>
              <div className="text-emerald-400 text-sm font-medium">
                CEO, Servier Operations Bangladesh
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "expertise", label: "Expertise" },
              { id: "experience", label: "Experience" },
              { id: "achievements", label: "Achievements" },
              { id: "publications", label: "Publications" },
              { id: "vision", label: "Vision" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-3 text-white/80 hover:text-white transition-all duration-300 group font-display font-medium"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={() => scrollToSection("contact")}
              className="relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-display"
            >
              <span className="relative z-10">Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-700 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 text-white/80 hover:text-white transition-colors"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 top-2.5" : ""
              }`}></span>
              <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}></span>
              <span className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 top-2.5" : ""
              }`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}>
          <div className="pt-4 space-y-2">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "expertise", label: "Expertise" },
              { id: "experience", label: "Experience" },
              { id: "achievements", label: "Achievements" },
              { id: "publications", label: "Publications" },
              { id: "vision", label: "Vision" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-emerald-500/20 rounded-xl transition-all duration-300 font-display"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection("contact")}
              className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-medium shadow-lg transition-all duration-300 font-display"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
