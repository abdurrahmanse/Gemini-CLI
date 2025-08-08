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
    <SectionWrapper id="about" background="pattern">
      <div ref={ref as React.RefObject<HTMLDivElement>}>
        <SectionHeader
          title="About"
          subtitle="Leadership Excellence"
          description="Driving innovation and transformation in pharmaceutical leadership"
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
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl blur-xl transition-all duration-500"
                     style={{
                       background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`,
                       opacity: 0.3
                     }}></div>
                <h3 className="text-2xl font-bold mb-6 relative transition-colors duration-300"
                    style={{ color: 'var(--text-primary)' }}>
                  Executive Profile
                </h3>
                
                <div className="space-y-4 leading-relaxed">
                  <p className="transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                    As CEO of {PERSONAL_INFO.company}, Dr. {PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName} brings over two decades of transformative leadership 
                    in the pharmaceutical industry. His strategic vision has consistently driven innovation and operational 
                    excellence across diverse therapeutic areas.
                  </p>
                  
                  <p className="transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
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
                                  <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t transition-all duration-300"
                       style={{ borderColor: 'var(--glass-border)' }}>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent">
                        20+
                      </div>
                      <div className="text-sm mt-1 transition-colors duration-300" 
                           style={{ color: 'var(--text-secondary)' }}>Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                        50M+
                      </div>
                      <div className="text-sm mt-1 transition-colors duration-300" 
                           style={{ color: 'var(--text-secondary)' }}>Lives Impacted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent">
                        25+
                      </div>
                      <div className="text-sm mt-1 transition-colors duration-300" 
                           style={{ color: 'var(--text-secondary)' }}>Countries</div>
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
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl blur-xl transition-all duration-500"
                     style={{
                       background: `linear-gradient(135deg, var(--accent-secondary), var(--accent-primary))`,
                       opacity: 0.3
                     }}></div>
                <h3 className="text-2xl font-bold mb-8 relative transition-colors duration-300"
                    style={{ color: 'var(--text-primary)' }}>
                  Core Competencies
                </h3>
                
                <div className="space-y-6">
                  {SKILLS_DATA.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium group-hover:opacity-100 transition-all duration-300"
                              style={{ 
                                color: 'var(--text-secondary)',
                                opacity: 0.8
                              }}>
                          {skill.name}
                        </span>
                        <span className="font-bold transition-colors duration-300"
                              style={{ color: 'var(--accent-primary)' }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-3 rounded-full overflow-hidden transition-all duration-300"
                           style={{ backgroundColor: 'var(--glass-border)' }}>
                        <div className="absolute inset-0 rounded-full transition-all duration-300"
                             style={{ 
                               background: `linear-gradient(90deg, var(--glass-bg), transparent)`,
                               opacity: 0.5
                             }}></div>
                        <div 
                          className={`h-full rounded-full relative overflow-hidden transition-all duration-1000 ease-out ${
                            visibleItems.includes(index) ? "animate-pulse" : ""
                          }`}
                          style={{ 
                            width: visibleItems.includes(index) ? `${skill.level}%` : "0%",
                            transitionDelay: `${index * 100}ms`,
                            background: `linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))`
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
    </SectionWrapper>
  );
}
