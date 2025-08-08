import React from "react";
import { useIntersectionObserver, useStaggeredAnimation } from "../../hooks";
import { SectionHeader, Card } from "../ui";
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
    <section ref={ref} id="achievements" className="py-32 px-6 sm:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-yellow-900/5 to-black/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Awards &"
          subtitle="Achievements"
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
              <Card className="group p-8 h-full hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Header */}
                <div className="relative z-10 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.gradient} p-2 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-blue-400 font-medium">{achievement.category}</div>
                      <div className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {achievement.year}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-blue-400 font-semibold text-sm mb-4">
                    {achievement.organization}
                  </p>
                </div>

                {/* Description */}
                <div className="relative z-10">
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {achievement.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${achievement.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className={`absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br ${achievement.gradient} rounded-full opacity-5 group-hover:opacity-15 transition-opacity duration-500`}></div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
              25+
            </div>
            <div className="text-gray-400 text-sm">Industry Awards</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-gray-400 text-sm">Research Publications</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-gray-400 text-sm">Speaking Engagements</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-400 text-sm">Strategic Partnerships</div>
          </div>
        </div>
      </div>
    </section>
  );
}
