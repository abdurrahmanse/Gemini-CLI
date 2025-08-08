import React from "react";
import { useIntersectionObserver, useStaggeredAnimation } from "../../hooks";
import { SectionWrapper, SectionHeader, Card } from "../ui";
import { PERSONAL_INFO, SKILLS_DATA } from "../../constants";

export function AboutSection() {
  const { isVisible, ref } = useIntersectionObserver(0.3);
  const { visibleItems, startAnimation } = useStaggeredAnimation(SKILLS_DATA.length, 200);

  React.useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <section ref={ref} id="about" className="py-32 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="About"
          subtitle="Me"
        />

        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Bio Section */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>
            <Card className="p-8 h-full">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <h3 className="text-2xl font-bold text-white mb-6 relative">
                  Executive Profile
                </h3>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    As CEO of {PERSONAL_INFO.company}, Dr. {PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName} brings over two decades of transformative leadership 
                    in the pharmaceutical industry. His strategic vision has consistently driven innovation and operational 
                    excellence across diverse therapeutic areas.
                  </p>
                  
                  <p>
                    With a proven track record in business transformation, market expansion, and team development, 
                    Dr. Hossain has successfully led multi-million dollar initiatives that have enhanced patient outcomes 
                    and strengthened organizational capabilities across the region.
                  </p>
                  
                  <p>
                    His leadership philosophy centers on fostering innovation, building high-performing teams, and 
                    creating sustainable value for stakeholders while maintaining the highest standards of quality 
                    and regulatory compliance.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      20+
                    </div>
                    <div className="text-sm text-gray-400 mt-1">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                      500+
                    </div>
                    <div className="text-sm text-gray-400 mt-1">Team Members</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Skills Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
            <Card className="p-8 h-full">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <h3 className="text-2xl font-bold text-white mb-8 relative">
                  Core Competencies
                </h3>
                
                <div className="space-y-6">
                  {SKILLS_DATA.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-blue-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-full"></div>
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full relative overflow-hidden transition-all duration-1000 ease-out ${
                            visibleItems.includes(index) ? "animate-pulse" : ""
                          }`}
                          style={{ 
                            width: visibleItems.includes(index) ? `${skill.level}%` : "0%",
                            transitionDelay: `${index * 100}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                          <div className="absolute right-0 top-0 w-2 h-full bg-white/40 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
