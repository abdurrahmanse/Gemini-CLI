import React from "react";
import { useIntersectionObserver, useStaggeredAnimation } from "../../hooks";
import { SectionHeader, SectionWrapper, Card } from "../ui";
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
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <SectionWrapper id="vision" background="gradient" className="overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            title="Vision & Future Goals"
            subtitle="Future Goals"
            description="Pioneering the future of healthcare through innovation, leadership, and strategic excellence."
          />

          {/* Mission Statement */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Card variant="glass" className="p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 transition-colors duration-300"
                style={{ color: 'var(--text-primary)' }}>
              Transforming Healthcare Through Innovation and Leadership
            </h3>
            <p className="text-lg leading-relaxed transition-colors duration-300"
               style={{ color: 'var(--text-secondary)' }}>
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
              <Card variant="glass" className="group p-8 h-full hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${pillar.gradient}`}
                     style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl p-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 ${pillar.gradient}`}
                         style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}>
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:scale-105 transition-all duration-300"
                          style={{ color: 'var(--text-primary)' }}>
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="leading-relaxed mb-6 transition-colors duration-300"
                     style={{ color: 'var(--text-secondary)' }}>
                    {pillar.description}
                  </p>

                  {/* Initiatives */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 transition-colors duration-300"
                        style={{ color: 'var(--accent-primary)' }}>Key Initiatives</h4>
                    <ul className="space-y-2">
                      {pillar.initiatives.map((initiative, initIndex) => (
                        <li key={initIndex} className="flex items-start gap-2 text-sm transition-colors duration-300"
                            style={{ color: 'var(--text-secondary)' }}>
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${pillar.gradient}`}
                               style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}></div>
                          {initiative}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-2xl opacity-5 group-hover:opacity-15 transition-opacity duration-500 blur-xl ${pillar.gradient}`}
                     style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}></div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ background: 'linear-gradient(to top, var(--glass-bg), transparent)' }}></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Future Timeline */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Card variant="glass" className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center transition-colors duration-300"
                style={{ color: 'var(--text-primary)' }}>
              Strategic Roadmap 2024-2030
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg transition-all duration-300"
                     style={{ 
                       background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`,
                       color: 'var(--bg-primary)'
                     }}>
                  2025
                </div>
                <h4 className="font-semibold mb-2 transition-colors duration-300"
                    style={{ color: 'var(--text-primary)' }}>Market Leadership</h4>
                <p className="text-sm transition-colors duration-300"
                   style={{ color: 'var(--text-secondary)' }}>Achieve market leadership position in Bangladesh pharmaceutical sector</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg transition-all duration-300"
                     style={{ 
                       background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`,
                       color: 'var(--bg-primary)'
                     }}>
                  2027
                </div>
                <h4 className="font-semibold mb-2 transition-colors duration-300"
                    style={{ color: 'var(--text-primary)' }}>Regional Expansion</h4>
                <p className="text-sm transition-colors duration-300"
                   style={{ color: 'var(--text-secondary)' }}>Expand operations across South Asian markets with local partnerships</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg transition-all duration-300"
                     style={{ 
                       background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`,
                       color: 'var(--bg-primary)'
                     }}>
                  2030
                </div>
                <h4 className="font-semibold mb-2 transition-colors duration-300"
                    style={{ color: 'var(--text-primary)' }}>Global Impact</h4>
                <p className="text-sm transition-colors duration-300"
                   style={{ color: 'var(--text-secondary)' }}>Establish global presence with innovative pharmaceutical solutions</p>
              </div>
            </div>
          </Card>
        </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
