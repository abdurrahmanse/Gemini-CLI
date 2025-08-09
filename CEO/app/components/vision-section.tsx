import { useState, useEffect, useRef } from "react";

export function VisionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeVision, setActiveVision] = useState(0);
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const visionPillars = [
    {
      title: "Digital Healthcare Transformation",
      subtitle: "Leading the Future of Medicine",
      description: "Pioneering the integration of artificial intelligence, telemedicine, and digital therapeutics to create accessible, personalized healthcare solutions for emerging markets.",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
      metrics: [
        { label: "Digital Health Adoption", target: "75%", timeline: "by 2030" },
        { label: "AI-Powered Diagnostics", target: "40+ diseases", timeline: "by 2028" },
        { label: "Telemedicine Coverage", target: "85% rural areas", timeline: "by 2027" }
      ],
      initiatives: [
        "AI-driven drug discovery platforms",
        "Blockchain-based medical records",
        "IoT-enabled remote patient monitoring",
        "Virtual reality medical training"
      ]
    },
    {
      title: "Sustainable Healthcare Ecosystem",
      subtitle: "Building for Tomorrow",
      description: "Creating environmentally responsible pharmaceutical manufacturing and distribution systems that ensure long-term healthcare sustainability while reducing carbon footprint.",
      icon: "🌱",
      color: "from-emerald-500 to-green-500",
      metrics: [
        { label: "Carbon Neutral Operations", target: "100%", timeline: "by 2030" },
        { label: "Renewable Energy Usage", target: "90%", timeline: "by 2028" },
        { label: "Waste Reduction", target: "60%", timeline: "by 2026" }
      ],
      initiatives: [
        "Green pharmaceutical manufacturing",
        "Sustainable packaging solutions",
        "Circular economy principles",
        "Clean energy pharmaceutical plants"
      ]
    },
    {
      title: "Universal Healthcare Access",
      subtitle: "Healthcare for All",
      description: "Establishing comprehensive healthcare delivery systems that ensure equitable access to essential medicines and medical services across all socioeconomic segments of society.",
      icon: "🏥",
      color: "from-purple-500 to-pink-500",
      metrics: [
        { label: "Healthcare Coverage", target: "95%", timeline: "by 2030" },
        { label: "Essential Medicines Access", target: "100%", timeline: "by 2027" },
        { label: "Healthcare Facilities", target: "500+ new", timeline: "by 2029" }
      ],
      initiatives: [
        "Community health centers expansion",
        "Mobile healthcare units",
        "Affordable medicine programs",
        "Health insurance accessibility"
      ]
    },
    {
      title: "Innovation & Research Excellence",
      subtitle: "Advancing Medical Science",
      description: "Fostering cutting-edge research and development capabilities to address unmet medical needs and create breakthrough therapeutic solutions for complex diseases.",
      icon: "🔬",
      color: "from-orange-500 to-red-500",
      metrics: [
        { label: "R&D Investment", target: "15% of revenue", timeline: "by 2026" },
        { label: "New Drug Applications", target: "20+ annually", timeline: "by 2028" },
        { label: "Research Partnerships", target: "50+ institutions", timeline: "by 2027" }
      ],
      initiatives: [
        "Personalized medicine development",
        "Rare disease research programs",
        "Genomics and precision medicine",
        "International research collaborations"
      ]
    }
  ];

  const globalImpact = [
    {
      region: "South Asia",
      focus: "Pharmaceutical Manufacturing Hub",
      impact: "Creating 50,000+ high-quality jobs in pharmaceutical sector",
      icon: "🏭"
    },
    {
      region: "Southeast Asia",
      focus: "Digital Health Infrastructure",
      impact: "Implementing telemedicine solutions across 10 countries",
      icon: "💻"
    },
    {
      region: "Global Markets",
      focus: "Affordable Medicine Access",
      impact: "Reducing essential medicine costs by 40% in emerging markets",
      icon: "🌍"
    },
    {
      region: "Research Networks",
      focus: "Scientific Collaboration",
      impact: "Establishing 25+ international research partnerships",
      icon: "🤝"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate elements sequentially
          [0, 1, 2, 3, 4, 5, 6].forEach(index => {
            setTimeout(() => {
              setVisibleElements(prev => [...prev, index]);
            }, index * 300);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVision(prev => (prev + 1) % visionPillars.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="vision" className="py-32 px-6 sm:px-8 relative overflow-hidden">
      {/* Premium Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Professional grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M20 20.5V18h-.5v3.5h3V21H20.5zM10 10l.5.5L10.5 10l-.5-.5zm10 10l.5.5-.5.5-.5-.5zm10 10l.5.5-.5.5-.5-.5zm-10 10l.5.5-.5.5-.5-.5z\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          visibleElements.includes(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 font-display">
            Healthcare <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Vision 2030</span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto">
            Transforming healthcare delivery through innovation, sustainability, and universal access. Building a future where cutting-edge medical solutions reach every corner of society.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Vision Statement */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${
          visibleElements.includes(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] rounded-3xl border border-white/[0.15] p-12 shadow-3xl">
            <div className="text-center">
              <div className="text-6xl mb-6">🌟</div>
              <h3 className="text-3xl font-bold text-white mb-6 font-display">
                Our <span className="text-emerald-400">Mission</span>
              </h3>
              <p className="text-lg text-white/90 leading-relaxed max-w-4xl mx-auto">
                "To revolutionize healthcare delivery in emerging markets by creating innovative, sustainable, and accessible medical solutions that improve lives, advance scientific knowledge, and build resilient healthcare systems for future generations."
              </p>
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-8 text-white/70">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">2030</div>
                    <div className="text-sm">Target Year</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">50M+</div>
                    <div className="text-sm">Lives Impacted</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">25+</div>
                    <div className="text-sm">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Pillars */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${
          visibleElements.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-display">
            Strategic <span className="text-emerald-400">Pillars</span>
          </h3>
          
          {/* Vision Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {visionPillars.map((pillar, index) => (
              <button
                key={index}
                onClick={() => setActiveVision(index)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl transition-all duration-500 ${
                  activeVision === index
                    ? `bg-gradient-to-r ${pillar.color} text-white shadow-xl scale-105`
                    : "backdrop-blur-xl bg-white/[0.06] text-white/80 border border-white/[0.12] hover:bg-white/[0.12]"
                }`}
              >
                <span className="text-xl">{pillar.icon}</span>
                <span className="font-medium text-sm">{pillar.title}</span>
              </button>
            ))}
          </div>

          {/* Active Vision Display */}
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/[0.12] p-10 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`w-20 h-20 bg-gradient-to-r ${visionPillars[activeVision].color} rounded-3xl flex items-center justify-center text-4xl shadow-xl mb-6`}>
                  {visionPillars[activeVision].icon}
                </div>
                <h4 className="text-3xl font-bold text-white mb-2 font-display">
                  {visionPillars[activeVision].title}
                </h4>
                <p className="text-emerald-400 font-medium mb-4">
                  {visionPillars[activeVision].subtitle}
                </p>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  {visionPillars[activeVision].description}
                </p>

                {/* Key Initiatives */}
                <div>
                  <h5 className="text-white font-semibold mb-4 font-display">Key Initiatives:</h5>
                  <div className="grid grid-cols-1 gap-3">
                    {visionPillars[activeVision].initiatives.map((initiative, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${visionPillars[activeVision].color} rounded-full`}></div>
                        <span className="text-white/70 text-sm">{initiative}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-white font-semibold mb-6 font-display">Target Metrics:</h5>
                <div className="space-y-6">
                  {visionPillars[activeVision].metrics.map((metric, index) => (
                    <div key={index} className="backdrop-blur-xl bg-white/[0.04] rounded-2xl p-6 border border-white/[0.08]">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white/80 text-sm">{metric.label}</span>
                        <span className="text-white/60 text-xs">{metric.timeline}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${visionPillars[activeVision].color} bg-clip-text text-transparent`}>
                          {metric.target}
                        </div>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${visionPillars[activeVision].color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Impact */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${
          visibleElements.includes(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-display">
            Global <span className="text-blue-400">Impact</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalImpact.map((impact, index) => (
              <div key={index} className="backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl border border-white/[0.12] p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="text-4xl mb-4 text-center">{impact.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2 text-center font-display">{impact.region}</h4>
                <p className="text-emerald-400 text-sm font-medium text-center mb-3">{impact.focus}</p>
                <p className="text-white/70 text-xs text-center leading-relaxed">{impact.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className={`mb-16 transition-all duration-1000 delay-900 ${
          visibleElements.includes(4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-3xl font-bold text-white text-center mb-12 font-display">
            Implementation <span className="text-purple-400">Roadmap</span>
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500"></div>
            
            <div className="space-y-12">
              {[
                { year: "2024-2025", title: "Foundation Phase", description: "Establishing digital infrastructure and sustainable manufacturing capabilities" },
                { year: "2026-2027", title: "Expansion Phase", description: "Scaling operations across South Asia and implementing AI-driven healthcare solutions" },
                { year: "2028-2029", title: "Innovation Phase", description: "Launching breakthrough treatments and expanding global research partnerships" },
                { year: "2030", title: "Vision Realization", description: "Achieving universal healthcare access and carbon-neutral operations" }
              ].map((phase, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl border border-white/[0.12] p-6 shadow-xl">
                      <div className="text-emerald-400 font-bold mb-2">{phase.year}</div>
                      <h4 className="text-lg font-bold text-white mb-2 font-display">{phase.title}</h4>
                      <p className="text-white/70 text-sm">{phase.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full border-4 border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1100 ${
          visibleElements.includes(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-3xl border border-emerald-400/20 p-12 max-w-4xl mx-auto">
            <h4 className="text-3xl font-bold text-white mb-6 font-display">
              Join the Healthcare <span className="text-emerald-400">Revolution</span>
            </h4>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Together, we can build a healthier, more sustainable future. Partner with us to transform healthcare delivery and create lasting impact across emerging markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-display">
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Partner With Us</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="px-8 py-4 backdrop-blur-xl bg-white/[0.08] text-white rounded-2xl font-bold border border-white/[0.15] hover:bg-white/[0.12] transition-all duration-300 font-display">
                Download Vision Paper
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
