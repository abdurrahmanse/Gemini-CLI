import React from "react";
import { useIntersectionObserver, useStaggeredAnimation } from "../../hooks";
import { SectionHeader, SectionWrapper, Card } from "../ui";
import { ACHIEVEMENTS_DATA } from "../../constants";

export function AchievementsSection() {
  const { isVisible, ref } = useIntersectionObserver(0.2);
  const { visibleItems, startAnimation } = useStaggeredAnimation(ACHIEVEMENTS_DATA.length, 150);

  React.useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <SectionWrapper id="achievements" background="pattern">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            title="Awards & Achievements"
            subtitle="Achievements"
            description="Recognition for excellence in pharmaceutical leadership and healthcare innovation."
          />

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          {ACHIEVEMENTS_DATA.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card variant="glass" className="group p-8 h-full hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${achievement.gradient}`}
                     style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}></div>
                
                {/* Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl p-2 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300 ${achievement.gradient}`}
                         style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium transition-colors duration-300"
                           style={{ color: 'var(--accent-primary)' }}>{achievement.category}</div>
                      <div className="text-lg font-bold group-hover:scale-105 transition-all duration-300"
                           style={{ color: 'var(--text-primary)' }}>
                        {achievement.year}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:scale-105 transition-all duration-300"
                      style={{ color: 'var(--text-primary)' }}>
                    {achievement.title}
                  </h3>
                  
                  <p className="font-semibold text-sm mb-4 transition-colors duration-300"
                     style={{ color: 'var(--accent-primary)' }}>
                    {achievement.organization}
                  </p>
                </div>

                {/* Description */}
                <div className="relative z-10">
                  <p className="text-sm leading-relaxed transition-colors duration-300"
                     style={{ color: 'var(--text-secondary)' }}>
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-4 right-4 w-8 h-8 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 ${achievement.gradient}`}
                     style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}></div>
                <div className={`absolute bottom-4 left-4 w-6 h-6 rounded-full opacity-5 group-hover:opacity-15 transition-opacity duration-500 ${achievement.gradient}`}
                     style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}></div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ background: 'linear-gradient(to top, var(--glass-bg), transparent)' }}></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300"
                 style={{ 
                   backgroundImage: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`
                 }}>
              25+
            </div>
            <div className="text-sm transition-colors duration-300"
                 style={{ color: 'var(--text-secondary)' }}>Industry Awards</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300"
                 style={{ 
                   backgroundImage: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`
                 }}>
              15+
            </div>
            <div className="text-sm transition-colors duration-300"
                 style={{ color: 'var(--text-secondary)' }}>Research Publications</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300"
                 style={{ 
                   backgroundImage: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`
                 }}>
              100+
            </div>
            <div className="text-sm transition-colors duration-300"
                 style={{ color: 'var(--text-secondary)' }}>Speaking Engagements</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300"
                 style={{ 
                   backgroundImage: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`
                 }}>
              50+
            </div>
            <div className="text-sm transition-colors duration-300"
                 style={{ color: 'var(--text-secondary)' }}>Strategic Partnerships</div>
          </div>
        </div>
        </div>
      </SectionWrapper>
    </div>
  );
}