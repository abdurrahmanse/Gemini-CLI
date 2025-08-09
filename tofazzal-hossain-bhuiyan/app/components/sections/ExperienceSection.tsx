import React from "react";
import { useIntersectionObserver, useStaggeredAnimation } from "../../hooks";
import { SectionHeader, SectionWrapper, Card } from "../ui";
import { EXPERIENCE_DATA } from "../../constants";

export function ExperienceSection() {
  const { isVisible, ref } = useIntersectionObserver(0.2);
  const { visibleItems, startAnimation } = useStaggeredAnimation(EXPERIENCE_DATA.length, 200);

  React.useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <SectionWrapper id="experience" background="gradient" className="overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader
            title="Professional Experience"
            subtitle="Experience"
            description="Decades of leadership driving pharmaceutical excellence across Bangladesh and the global market."
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px transition-all duration-300"
                 style={{ 
                   background: `linear-gradient(to bottom, 
                     var(--accent-primary)20, 
                     var(--accent-secondary)40, 
                     var(--accent-primary)20)`
                 }}></div>
          
          <div className="space-y-16">
            {EXPERIENCE_DATA.map((experience, index) => (
              <div
                key={experience.company}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-20">
                  <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${experience.gradient}`}
                       style={{ 
                         borderColor: 'var(--bg-primary)',
                         background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`
                       }}>
                    <div className="absolute inset-0 rounded-full"
                         style={{ background: 'linear-gradient(135deg, var(--glass-bg), transparent)' }}></div>
                  </div>
                  <div className={`absolute inset-0 w-6 h-6 rounded-full animate-ping opacity-20 ${experience.gradient}`}
                       style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} ml-16 md:ml-0`}>
                  <Card variant="glass" className="group p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${experience.gradient}`}
                         style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-xl p-2 flex items-center justify-center text-xl group-hover:scale-110 transition-all duration-300 ${experience.gradient}`}
                             style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}>
                          {experience.logo}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold group-hover:scale-105 transition-all duration-300"
                              style={{ color: 'var(--text-primary)' }}>
                            {experience.position}
                          </h3>
                          <p className="font-semibold transition-colors duration-300"
                             style={{ color: 'var(--accent-primary)' }}>{experience.company}</p>
                          <p className="text-sm transition-colors duration-300"
                             style={{ color: 'var(--text-secondary)' }}>{experience.period}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="leading-relaxed mb-6 transition-colors duration-300"
                         style={{ color: 'var(--text-secondary)' }}>
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3 transition-colors duration-300"
                            style={{ color: 'var(--accent-primary)' }}>Key Achievements</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm transition-colors duration-300"
                                style={{ color: 'var(--text-secondary)' }}>
                              <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${experience.gradient}`}
                                   style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3 transition-colors duration-300"
                            style={{ color: 'var(--accent-primary)' }}>Core Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 text-xs rounded-full font-medium opacity-80 group-hover:opacity-100 transition-all duration-300 ${experience.gradient}`}
                              style={{
                                background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`,
                                color: 'var(--bg-primary)'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                         style={{ background: 'linear-gradient(to top, var(--glass-bg), transparent)' }}></div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Card variant="glass" className="p-8 max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed font-medium transition-colors duration-300"
               style={{ color: 'var(--text-secondary)' }}>
            Over two decades of progressive leadership in pharmaceutical and healthcare industries, 
            consistently driving innovation, operational excellence, and strategic growth across 
            diverse markets and therapeutic areas.
          </p>
        </Card>
      </div>
    </div>
      </SectionWrapper>
    </div>
  );
}