import { useState, useEffect, useRef } from "react";
import aboutData from "../data/about.json";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredHighlight, setHoveredHighlight] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills with delay
          setTimeout(() => {
            aboutData.coreCompetencies[activeCategory].skills.forEach((_, index) => {
              setTimeout(() => {
                setAnimatedSkills(prev => [...prev, index]);
              }, index * 200);
            });
          }, 500);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeCategory]);

  const handleCategoryChange = (categoryIndex: number) => {
    setActiveCategory(categoryIndex);
    setAnimatedSkills([]);
    setTimeout(() => {
      aboutData.coreCompetencies[categoryIndex].skills.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => [...prev, index]);
        }, index * 200);
      });
    }, 100);
  };

  return (
    <section ref={sectionRef} id="about" className="py-32 px-6 sm:px-8 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_50%_50%,rgba(14,165,233,0.1),transparent,rgba(168,85,247,0.1),transparent)]"></div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-24 transition-all duration-1200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="relative">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 relative">
              About{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Dr. Bhuiyan
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 blur-lg"></div>
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              {aboutData.introduction.headline}
            </p>
            
            {/* Animated Underline */}
            <div className="relative w-32 h-1 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-sm"></div>
            </div>
            
            {/* Subtitle Badge */}
            <div className="inline-flex items-center px-6 py-3 mt-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 backdrop-blur-xl">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-blue-300 font-semibold text-lg">Healthcare Innovation Leader</span>
            </div>
          </div>
        </div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Enhanced Profile Card */}
          <div className={`lg:col-span-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-8 scale-95"
          }`}>
            <div className="relative group">
              {/* Card Background Effects */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative backdrop-blur-3xl bg-gradient-to-br from-white/20 to-white/5 rounded-3xl border border-white/30 p-8 shadow-2xl">
                {/* Enhanced Profile Avatar */}
                <div className="relative mb-8">
                  <div className="w-40 h-40 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 flex items-center justify-center text-5xl text-white font-black shadow-2xl transform group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    <span className="relative z-10">DB</span>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Enhanced Profile Info */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black text-white mb-3 leading-tight">
                    Dr. Tofazzal Hossain Bhuiyan
                  </h3>
                  <div className="space-y-2">
                    <p className="text-blue-300 font-bold text-lg">{aboutData.profile.currentRole}</p>
                    <p className="text-gray-300 font-semibold">{aboutData.profile.industry}</p>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30">
                      <span className="text-green-300 font-semibold text-sm">🌍 {aboutData.profile.specialization}</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {aboutData.achievements.map((achievement, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                      <div className="relative text-center p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="text-3xl font-black text-blue-400 mb-2">{achievement.metric}</div>
                        <div className="text-xs text-gray-300 leading-tight font-semibold">{achievement.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Enhanced Experience Badge */}
                <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/50 backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
                  <div className="relative">
                    <div className="text-sm text-blue-200 font-bold mb-2">Years of Excellence</div>
                    <div className="text-4xl font-black text-white mb-2">{aboutData.profile.yearsOfExperience}+</div>
                    <div className="text-xs text-gray-300 font-semibold">Transforming Healthcare</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Area */}
          <div className={`lg:col-span-8 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <div className="relative group h-full">
              {/* Card Background Effects */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              
              <div className="relative backdrop-blur-3xl bg-gradient-to-br from-white/15 to-white/5 rounded-3xl border border-white/30 p-8 shadow-2xl h-full">
                
                {/* Enhanced Introduction */}
                <div className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-white text-xl">👨‍⚕️</span>
                    </div>
                    <h3 className="text-3xl font-black text-white">Healthcare Visionary & Executive Leader</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-100 leading-relaxed font-medium">
                      {aboutData.introduction.summary}
                    </p>
                    <p className="text-lg text-gray-200 leading-relaxed">
                      {aboutData.introduction.mission}
                    </p>
                  </div>
                </div>

                {/* Enhanced Key Highlights */}
                <div className="mb-12">
                  <h4 className="text-2xl font-black text-white mb-8 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"></span>
                    Key Leadership Areas
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {aboutData.keyHighlights.map((highlight, index) => (
                      <div 
                        key={index} 
                        className="group relative cursor-pointer"
                        onMouseEnter={() => setHoveredHighlight(index)}
                        onMouseLeave={() => setHoveredHighlight(null)}
                      >
                        {/* Hover Effect Background */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${highlight.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`}></div>
                        
                        <div className="relative p-6 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group-hover:transform group-hover:scale-105">
                          <div className="flex items-start space-x-4">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${highlight.color} flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                              {highlight.icon}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-black text-white mb-3 text-lg group-hover:text-blue-300 transition-colors">
                                {highlight.title}
                              </h5>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                {highlight.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Leadership Philosophy */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-400/40 p-8 backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
                  
                  <div className="relative">
                    <h4 className="text-2xl font-black text-white mb-6 flex items-center">
                      <span className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-4"></span>
                      Leadership Philosophy
                    </h4>
                    
                    <blockquote className="text-xl text-white font-medium italic leading-relaxed mb-8 pl-4 border-l-4 border-gradient-to-b from-blue-400 to-purple-500">
                      "{aboutData.leadershipPhilosophy.quote}"
                    </blockquote>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {aboutData.leadershipPhilosophy.principles.map((principle, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-all duration-300 group">
                          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{principle.icon}</span>
                          <div>
                            <div className="text-white font-bold mb-1">{principle.title}</div>
                            <div className="text-gray-300 text-sm leading-relaxed">{principle.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Skills & Competencies Section */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="relative group">
            {/* Background Effects */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            
            <div className="relative backdrop-blur-3xl bg-gradient-to-br from-white/15 to-white/5 rounded-3xl border border-white/30 p-10 shadow-2xl">
              <h3 className="text-3xl font-black text-white mb-12 text-center">
                Core Competencies & Expertise
              </h3>
              
              {/* Enhanced Category Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {aboutData.coreCompetencies.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryChange(index)}
                    className={`relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 overflow-hidden group ${
                      activeCategory === index
                        ? "text-white shadow-2xl transform scale-105"
                        : "text-gray-300 hover:text-white hover:scale-105"
                    }`}
                  >
                    {activeCategory === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl"></div>
                    )}
                    {activeCategory !== index && (
                      <div className="absolute inset-0 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300"></div>
                    )}
                    <span className="relative z-10">{category.category}</span>
                  </button>
                ))}
              </div>

              {/* Enhanced Skills Display */}
              <div className="space-y-8">
                {aboutData.coreCompetencies[activeCategory].skills.map((skill, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-lg">{skill.name}</span>
                      <span className="text-blue-400 text-lg font-black">{skill.level}%</span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-white/20 rounded-full h-4 backdrop-blur-xl border border-white/30 shadow-inner">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-4 rounded-full relative overflow-hidden transition-all duration-2000 ease-out shadow-lg`}
                          style={{ width: animatedSkills.includes(index) ? `${skill.level}%` : "0%" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-pulse"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-pulse"></div>
                        </div>
                      </div>
                      
                      <div 
                        className={`absolute top-0 w-8 h-8 bg-white rounded-full border-4 border-gray-900 shadow-2xl transition-all duration-2000 ease-out transform -translate-y-2 ${
                          animatedSkills.includes(index) ? "opacity-100 scale-100" : "opacity-0 scale-75"
                        }`}
                        style={{ 
                          left: animatedSkills.includes(index) ? `calc(${skill.level}% - 16px)` : "0%",
                          transitionDelay: `${index * 200}ms`
                        }}
                      >
                        <div className={`w-3 h-3 bg-gradient-to-r ${skill.color} rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse`}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Personal Values */}
        <div className={`transition-all duration-1000 delay-800 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-3xl font-black text-white mb-12 text-center">
            Core Values & Principles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.personalValues.map((value, index) => (
              <div key={index} className="group relative">
                {/* Background Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                
                <div className="relative text-center p-8 backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:rotate-1">
                  <div className={`w-20 h-20 mx-auto mb-6 ${value.color} rounded-3xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                    {value.icon}
                  </div>
                  <h4 className="text-white font-black mb-4 text-lg group-hover:text-blue-300 transition-colors">
                    {value.value}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
