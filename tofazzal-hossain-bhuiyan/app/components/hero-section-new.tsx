import { useState, useEffect, useRef } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const [typedText, setTypedText] = useState("");
  const heroRef = useRef<HTMLElement>(null);

  const taglines = [
    "Pioneering Healthcare Innovation",
    "Advancing Medical Excellence", 
    "Transforming Lives Through Leadership",
    "Building Sustainable Healthcare"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect for taglines
    let currentIndex = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    const typeEffect = () => {
      const currentTagline = taglines[currentIndex];
      
      if (!isDeleting) {
        setTypedText(currentTagline.substring(0, currentChar + 1));
        currentChar++;
        
        if (currentChar === currentTagline.length) {
          setTimeout(() => { isDeleting = true; }, 2000);
        }
      } else {
        setTypedText(currentTagline.substring(0, currentChar - 1));
        currentChar--;
        
        if (currentChar === 0) {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % taglines.length;
        }
      }
    };
    
    const interval = setInterval(typeEffect, isDeleting ? 50 : 100);
    
    // Cycle through metrics
    const metricsInterval = setInterval(() => {
      setCurrentMetric(prev => (prev + 1) % 4);
    }, 3000);
    
    return () => {
      clearInterval(interval);
      clearInterval(metricsInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950/90 to-emerald-950/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 opacity-40" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-400/60 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400/60 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-400/40 rounded-full animate-float delay-2000"></div>
        <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-float delay-3000"></div>
        <div className="absolute bottom-20 right-40 w-2 h-2 bg-emerald-300/40 rounded-full animate-float delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            
            {/* Professional Badge */}
            <div className="inline-flex items-center space-x-3 backdrop-blur-xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full px-6 py-3 border border-emerald-400/30 mb-8">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-300 font-medium text-sm tracking-wide">PHARMACEUTICAL LEADERSHIP EXCELLENCE</span>
            </div>

            {/* Name & Title */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                <span className="block">Dr. Tofazzal</span>
                <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Hossain
                </span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl font-semibold text-emerald-400 tracking-wide">
                  Chief Executive Officer
                </p>
                <p className="text-xl text-white/80 font-medium">
                  Servier Operations Bangladesh
                </p>
              </div>
            </div>

            {/* Dynamic Tagline */}
            <div className="mb-8 h-16 flex items-center">
              <p className="text-lg sm:text-xl text-white/70 font-medium">
                <span className="text-emerald-400">{typedText}</span>
                <span className="w-0.5 h-6 bg-emerald-400 ml-1 animate-pulse inline-block"></span>
              </p>
            </div>

            {/* Expertise Areas */}
            <div className="mb-10">
              <div className="flex flex-wrap gap-3">
                {["Healthcare Innovation", "Digital Transformation", "Pharmaceutical Strategy", "Global Leadership"].map((expertise, index) => (
                  <span key={index} className="inline-flex items-center px-4 py-2 rounded-xl backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] text-white/80 text-sm font-medium hover:bg-white/[0.15] transition-all duration-300">
                    {expertise}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection("about")}
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-2xl font-bold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Explore Leadership Journey</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <button 
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 backdrop-blur-xl bg-white/[0.08] text-white rounded-2xl font-bold border border-white/[0.15] hover:bg-white/[0.15] hover:border-white/[0.25] transition-all duration-300"
              >
                <span className="flex items-center space-x-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Executive Profile</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Metrics & Visual */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            
            {/* Professional Photo Placeholder */}
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto rounded-3xl bg-gradient-to-br from-white/[0.15] to-white/[0.05] backdrop-blur-2xl border border-white/[0.2] shadow-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                    TH
                  </div>
                  <p className="text-white/80 font-medium">Professional Portrait</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Dynamic Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "20+", label: "Years Experience", icon: "⏱️", color: "from-emerald-500 to-teal-500" },
                { number: "50M+", label: "Lives Impacted", icon: "❤️", color: "from-blue-500 to-cyan-500" },
                { number: "25+", label: "Countries", icon: "🌍", color: "from-purple-500 to-pink-500" },
                { number: "100+", label: "Innovations", icon: "💡", color: "from-orange-500 to-red-500" }
              ].map((metric, index) => (
                <div 
                  key={index} 
                  className={`backdrop-blur-2xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] rounded-2xl p-6 border border-white/[0.15] shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                    currentMetric === index ? "ring-2 ring-emerald-400/50 bg-emerald-500/10" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center text-lg shadow-lg`}>
                      {metric.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white mb-1">{metric.number}</div>
                      <div className="text-white/60 text-xs font-medium tracking-wide">{metric.label}</div>
                    </div>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000 ${
                        currentMetric === index ? "w-full" : "w-3/4"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Awards & Recognition */}
            <div className="mt-6 backdrop-blur-2xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-400/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-yellow-300 font-semibold text-sm">Global Healthcare Leader</p>
                  <p className="text-white/60 text-xs">Recognized by WHO & IFPMA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <div className="flex flex-col items-center text-white/60 group cursor-pointer">
            <span className="text-xs font-medium mb-2 group-hover:text-emerald-400 transition-colors duration-300">Explore Portfolio</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-emerald-400/50 transition-colors duration-300">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-emerald-400 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
