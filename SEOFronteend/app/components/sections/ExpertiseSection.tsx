import React from "react";
import { useIntersectionObserver, useStaggeredAnimation } from "../../hooks";
import { SectionHeader, Card } from "../ui";
import { EXPERTISE_AREAS } from "../../constants";

export function ExpertiseSection() {
  const { isVisible, ref } = useIntersectionObserver(0.2);
  const { visibleItems, startAnimation } = useStaggeredAnimation(EXPERTISE_AREAS.length, 150);

  React.useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <section ref={ref} id="expertise" className="py-32 px-6 sm:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-emerald-900/5 to-black/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Core"
          subtitle="Expertise"
        />

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {EXPERTISE_AREAS.map((area, index) => (
            <div
              key={area.title}
              className={`transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="group p-8 h-full hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Floating Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} p-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {area.icon}
                  </div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${area.gradient} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white mb-6 group-hover:text-blue-300 transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 group-hover:text-gray-200 transition-colors font-semibold">
                    {area.description}
                  </p>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3">
                    {area.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 text-sm rounded-full bg-gradient-to-r ${area.gradient} text-white font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                        style={{ animationDelay: `${skillIndex * 100}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed font-bold">
            With over two decades of experience in pharmaceutical leadership, Dr. Hossain continues to 
            drive innovation and excellence in healthcare delivery across Bangladesh and the region.
          </p>
        </div>
      </div>
    </section>
  );
}
