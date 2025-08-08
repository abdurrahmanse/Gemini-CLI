import React from "react";
import { useIntersectionObserver, useStaggeredAnimation } from "../../hooks";
import { SectionHeader, Card } from "../ui";
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
    <section ref={ref} id="experience" className="py-32 px-6 sm:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-blue-900/10 to-black/10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Professional"
          subtitle="Experience"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/40 to-blue-500/20"></div>
          
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
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${experience.gradient} border-4 border-gray-900 shadow-lg`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent"></div>
                  </div>
                  <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r ${experience.gradient} animate-ping opacity-20`}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} ml-16 md:ml-0`}>
                  <Card className="group p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${experience.gradient} p-2 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                          {experience.logo}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {experience.position}
                          </h3>
                          <p className="text-blue-400 font-semibold">{experience.company}</p>
                          <p className="text-gray-400 text-sm">{experience.period}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm text-gray-300">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.gradient} mt-2 flex-shrink-0`}></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 mb-3">Core Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${experience.gradient} text-white font-medium opacity-80 group-hover:opacity-100 transition-all duration-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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
          <Card className="p-8 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              Over two decades of progressive leadership in pharmaceutical and healthcare industries, 
              consistently driving innovation, operational excellence, and strategic growth across 
              diverse markets and therapeutic areas.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
