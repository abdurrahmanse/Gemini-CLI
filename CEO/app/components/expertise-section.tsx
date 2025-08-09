import { useState, useEffect, useRef } from "react";

export function ExpertiseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const expertiseAreas = [
    {
      title: "Pharmaceutical Strategy",
      description: "Leading comprehensive pharmaceutical strategies that align with global health initiatives while ensuring local market accessibility and regulatory compliance.",
      icon: "💊",
      color: "from-emerald-500 to-teal-600",
      skills: ["Drug Portfolio Management", "Market Access Strategy", "Regulatory Affairs", "Pricing Strategy"]
    },
    {
      title: "Healthcare Innovation",
      description: "Pioneering innovative healthcare solutions through cutting-edge research, digital health technologies, and evidence-based medicine practices.",
      icon: "🔬",
      color: "from-blue-500 to-cyan-600",
      skills: ["Clinical Research", "Digital Health", "Medical Affairs", "Innovation Management"]
    },
    {
      title: "Public Health Leadership",
      description: "Advancing public health initiatives across Bangladesh through strategic partnerships with government agencies, NGOs, and healthcare institutions.",
      icon: "🏥",
      color: "from-purple-500 to-indigo-600",
      skills: ["Health Policy", "Community Outreach", "Epidemiology", "Healthcare Access"]
    },
    {
      title: "Organizational Excellence",
      description: "Building high-performance pharmaceutical organizations with focus on quality systems, compliance, and sustainable growth in emerging markets.",
      icon: "⚡",
      color: "from-orange-500 to-red-600",
      skills: ["Quality Management", "GMP Compliance", "Team Development", "Change Management"]
    },
    {
      title: "Global Collaboration",
      description: "Fostering international partnerships and knowledge transfer to bring world-class pharmaceutical standards to Bangladesh healthcare sector.",
      icon: "🌍",
      color: "from-green-500 to-emerald-600",
      skills: ["International Relations", "Technology Transfer", "Cross-cultural Leadership", "Global Standards"]
    },
    {
      title: "Sustainable Healthcare",
      description: "Implementing sustainable healthcare models that ensure long-term accessibility to essential medicines while maintaining environmental responsibility.",
      icon: "🌱",
      color: "from-teal-500 to-green-600",
      skills: ["Sustainability Strategy", "Environmental Health", "Economic Modeling", "Social Impact"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          expertiseAreas.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="expertise" className="py-32 px-6 sm:px-8 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Premium grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M10 10h80v80h-80z\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'0.5\'/%3E%3Cpath d=\'M50 10v80M10 50h80\' stroke=\'%23ffffff\' stroke-width=\'0.25\'/%3E%3C/svg%3E")'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 font-display">
            Healthcare <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Two decades of specialized experience in pharmaceutical leadership, healthcare innovation, and public health advancement across emerging markets.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className={`backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/[0.12] p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                  {area.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 font-display">
                    {area.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/80 leading-relaxed mb-6 text-sm">
                {area.description}
              </p>

              {/* Skills */}
              <div className="space-y-2">
                <h4 className="text-white/90 font-semibold text-sm mb-3 font-display">Key Competencies:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${area.color} rounded-full`}></div>
                      <span className="text-white/70 text-xs">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certifications & Affiliations */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/[0.12] p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 text-center font-display">
              Professional <span className="text-emerald-400">Credentials</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  category: "Medical Qualifications",
                  items: ["MD - Internal Medicine", "MSc Healthcare Management", "PhD Pharmaceutical Sciences"],
                  icon: "🎓"
                },
                {
                  category: "Professional Certifications",
                  items: ["PMP - Project Management", "Six Sigma Black Belt", "GCP Certification"],
                  icon: "📜"
                },
                {
                  category: "Industry Affiliations",
                  items: ["IFPMA Member", "PSAB Board Member", "WHO Advisory Panel"],
                  icon: "🤝"
                },
                {
                  category: "Leadership Programs",
                  items: ["Harvard Business School", "INSEAD Executive MBA", "Wharton Leadership"],
                  icon: "🏆"
                }
              ].map((section, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-4 font-display">{section.category}</h4>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-white/70 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="backdrop-blur-xl bg-emerald-500/10 rounded-2xl border border-emerald-400/20 p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-4 font-display">
              Interested in Healthcare Collaboration?
            </h4>
            <p className="text-white/80 mb-6">
              Let's explore opportunities to advance healthcare innovation and pharmaceutical excellence together.
            </p>
            <button className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-display">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Schedule Consultation</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
