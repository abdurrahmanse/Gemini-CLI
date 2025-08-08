import React from "react";
import { useIntersectionObserver, useStaggeredAnimation } from "../../hooks";
import { SectionHeader, Card } from "../ui";
import { VISION_DATA } from "../../constants";

export function VisionSection() {
  const { isVisible, ref } = useIntersectionObserver(0.2);
  const { visibleItems, startAnimation } = useStaggeredAnimation(VISION_DATA.length, 200);

  React.useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <section ref={ref} id="vision" className="py-32 px-6 sm:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-purple-900/10 to-black/10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Vision &"
          subtitle="Future Goals"
        />

        {/* Mission Statement */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Card className="p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Transforming Healthcare Through Innovation and Leadership
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our vision is to create a healthcare ecosystem where innovation meets accessibility, 
              where cutting-edge pharmaceutical solutions reach every corner of Bangladesh and beyond, 
              and where sustainable practices drive lasting positive impact on global health outcomes.
            </p>
          </Card>
        </div>

        {/* Vision Pillars */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {VISION_DATA.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="group p-8 h-full hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} p-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                    {pillar.description}
                  </p>

                  {/* Initiatives */}
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Initiatives</h4>
                    <ul className="space-y-2">
                      {pillar.initiatives.map((initiative, initIndex) => (
                        <li key={initIndex} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pillar.gradient} mt-2 flex-shrink-0`}></div>
                          {initiative}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl opacity-5 group-hover:opacity-15 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Future Timeline */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Strategic Roadmap 2024-2030
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  2025
                </div>
                <h4 className="font-semibold text-white mb-2">Market Leadership</h4>
                <p className="text-gray-300 text-sm">Achieve market leadership position in Bangladesh pharmaceutical sector</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  2027
                </div>
                <h4 className="font-semibold text-white mb-2">Regional Expansion</h4>
                <p className="text-gray-300 text-sm">Expand operations across South Asian markets with local partnerships</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  2030
                </div>
                <h4 className="font-semibold text-white mb-2">Global Impact</h4>
                <p className="text-gray-300 text-sm">Establish global presence with innovative pharmaceutical solutions</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
