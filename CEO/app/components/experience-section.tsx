import { useState, useEffect, useRef } from "react";

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const experiences = [
    {
      company: "InnovateTech Global",
      position: "Chief Executive Officer",
      period: "2020 - Present",
      logo: "🚀",
      description: "Leading a team of 500+ employees across 12 countries. Grew revenue from $50M to $200M+ annually through strategic acquisitions and digital transformation initiatives.",
      achievements: [
        "300% revenue growth in 4 years",
        "Expanded to 12 new markets globally",
        "Led 3 successful acquisitions worth $150M+"
      ],
      technologies: ["Strategic Planning", "M&A", "Digital Transformation", "Global Operations"],
      color: "from-blue-500 to-purple-600"
    },
    {
      company: "TechVision Solutions",
      position: "Chief Operating Officer",
      period: "2017 - 2020",
      logo: "⚡",
      description: "Transformed operational efficiency and scaled the organization from startup to mid-market leader. Implemented data-driven decision making processes across all departments.",
      achievements: [
        "Reduced operational costs by 40%",
        "Increased customer satisfaction to 98%",
        "Built scalable infrastructure for 10x growth"
      ],
      technologies: ["Operations Management", "Process Optimization", "Data Analytics", "Team Leadership"],
      color: "from-purple-500 to-pink-600"
    },
    {
      company: "Digital Dynamics Inc.",
      position: "VP of Strategy",
      period: "2014 - 2017",
      logo: "💎",
      description: "Developed and executed strategic initiatives that positioned the company as an industry leader in digital transformation services for Fortune 500 clients.",
      achievements: [
        "Launched 5 new product lines",
        "Increased market share by 150%",
        "Built strategic partnerships with industry leaders"
      ],
      technologies: ["Strategic Planning", "Business Development", "Product Management", "Client Relations"],
      color: "from-green-500 to-blue-600"
    },
    {
      company: "StartupAccelerator",
      position: "Senior Consultant",
      period: "2010 - 2014",
      logo: "🌟",
      description: "Provided strategic guidance to early-stage startups, helping them scale operations, secure funding, and achieve sustainable growth in competitive markets.",
      achievements: [
        "Advised 50+ startups to success",
        "$100M+ in funding secured for clients",
        "85% client success rate over 4 years"
      ],
      technologies: ["Startup Consulting", "Funding Strategy", "Business Modeling", "Mentorship"],
      color: "from-yellow-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate items with staggered delay
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
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

  return (
    <section ref={sectionRef} id="experience" className="py-32 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A timeline of leadership, innovation, and transformational achievements across diverse industries
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative transition-all duration-1000 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
                {/* Timeline node */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-gray-900 shadow-lg z-10`}>
                  <div className={`w-full h-full bg-gradient-to-r ${exp.color} rounded-full animate-pulse`}></div>
                </div>
                
                {/* Content */}
                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8'}`}>
                  <div className={`backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/[0.12] p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-[1.02] ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}>
                    
                    {/* Header */}
                    <div className={`flex items-center mb-6 ${index % 2 === 0 ? 'md:justify-end md:flex-row-reverse' : ''}`}>
                      <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {exp.logo}
                      </div>
                      <div className={`ml-4 ${index % 2 === 0 ? 'md:mr-4 md:ml-0' : ''}`}>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                        <h4 className="text-xl text-blue-300 mb-1">{exp.company}</h4>
                        <div className="text-white/60 font-medium text-sm bg-white/10 px-3 py-1 rounded-full inline-block">
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="text-white font-semibold mb-3 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        Key Achievements
                      </h5>
                      <div className="grid gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center space-x-3 text-white/80 text-sm">
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${exp.color} rounded-full`}></div>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies/Skills */}
                    <div>
                      <h5 className="text-white font-semibold mb-3 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        Core Competencies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 backdrop-blur-xl bg-white/10 text-white/90 text-xs rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Download Resume CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/[0.12] p-8 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Learning More?
            </h3>
            <p className="text-white/80 mb-6">
              Download my detailed resume to explore my complete professional journey and accomplishments.
            </p>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
