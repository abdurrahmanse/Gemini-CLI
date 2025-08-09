import { useState, useEffect, useRef } from "react";

export function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [countedMetrics, setCountedMetrics] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const achievements = [
    {
      title: "Forbes 40 Under 40",
      year: "2023",
      category: "Leadership Excellence",
      description: "Recognized for exceptional leadership in business transformation and innovation",
      icon: "🏆",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "CEO of the Year",
      year: "2022",
      category: "Business Excellence",
      description: "Business Excellence Awards for outstanding corporate leadership and growth",
      icon: "👑",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Innovation Leader",
      year: "2021",
      category: "Technology",
      description: "Tech Industry Awards for driving digital transformation initiatives",
      icon: "💡",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Best Workplace Culture",
      year: "2021",
      category: "Human Resources",
      description: "Great Places to Work certification for fostering exceptional company culture",
      icon: "⭐",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Sustainability Champion",
      year: "2020",
      category: "Environmental Impact",
      description: "Environmental Leadership Award for sustainable business practices",
      icon: "🌱",
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Global Expansion Excellence",
      year: "2019",
      category: "International Business",
      description: "International Business Award for successful global market expansion",
      icon: "🌍",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const metrics = [
    { value: 2.1, suffix: "B+", label: "Total Revenue Generated", prefix: "$", format: "currency" },
    { value: 500, suffix: "+", label: "Team Members Led", prefix: "", format: "number" },
    { value: 12, suffix: "", label: "Countries Expanded To", prefix: "", format: "number" },
    { value: 98, suffix: "%", label: "Customer Satisfaction", prefix: "", format: "percentage" },
    { value: 15, suffix: "+", label: "Years of Leadership", prefix: "", format: "number" },
    { value: 50, suffix: "+", label: "Startups Advised", prefix: "", format: "number" }
  ];

  const testimonials = [
    {
      text: "Alex's visionary leadership transformed our organization and set new industry standards.",
      author: "Sarah Chen",
      position: "Board Member, InnovateTech Global",
      avatar: "SC"
    },
    {
      text: "Under Alex's guidance, we achieved unprecedented growth while maintaining our core values.",
      author: "Michael Rodriguez",
      position: "Former COO, TechVision Solutions",
      avatar: "MR"
    }
  ];

  // Animate counter
  const animateCounter = (finalValue: number, index: number) => {
    let currentValue = 0;
    const increment = finalValue / 50;
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= finalValue) {
        currentValue = finalValue;
        clearInterval(timer);
      }
      setCountedMetrics(prev => {
        const newArr = [...prev];
        newArr[index] = currentValue;
        return newArr;
      });
    }, 30);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate metrics
          metrics.forEach((metric, index) => {
            setTimeout(() => {
              animateCounter(metric.value, index);
            }, index * 100);
          });
          
          // Animate achievement cards
          achievements.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 150);
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

  const formatMetricValue = (value: number, metric: any, index: number) => {
    const animatedValue = countedMetrics[index] || 0;
    if (metric.format === "currency") {
      return `${metric.prefix}${animatedValue.toFixed(1)}${metric.suffix}`;
    } else if (metric.format === "percentage") {
      return `${Math.round(animatedValue)}${metric.suffix}`;
    } else {
      return `${Math.round(animatedValue)}${metric.suffix}`;
    }
  };

  return (
    <section ref={sectionRef} id="achievements" className="py-32 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Achievements & <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Celebrating milestones of excellence, innovation, and transformational leadership across industries
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Metrics Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {metrics.map((metric, index) => (
            <div key={index} className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl border border-white/[0.12] p-6 text-center shadow-2xl hover:bg-white/[0.15] hover:scale-105 transition-all duration-300 group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {formatMetricValue(metric.value, metric, index)}
              </div>
              <div className="text-white/70 text-sm font-medium leading-tight">{metric.label}</div>
            </div>
          ))}
        </div>
        
        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className={`backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/[0.12] p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105 ${
              visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              {/* Award icon and year */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <div className="text-right">
                  <div className="text-white/60 text-sm font-medium">{achievement.category}</div>
                  <div className={`text-lg font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.year}
                  </div>
                </div>
              </div>
              
              {/* Award details */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {achievement.description}
              </p>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className={`mb-20 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            What <span className="text-blue-400">Leaders</span> Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/[0.12] p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="text-white/90 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-white/60 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className={`text-center transition-all duration-1000 delay-900 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/[0.12] p-12 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your <span className="text-blue-400">Business</span>?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Let's discuss how strategic leadership, innovative thinking, and proven methodologies 
              can drive your organization to new heights of success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Schedule Consultation</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group relative px-8 py-4 backdrop-blur-xl bg-white/10 text-white rounded-2xl font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <span className="flex items-center space-x-2">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m3 0V3a2 2 0 00-2-2H6a2 2 0 00-2 2v1m15 0v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4h16z" />
                  </svg>
                  <span>View Case Studies</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
