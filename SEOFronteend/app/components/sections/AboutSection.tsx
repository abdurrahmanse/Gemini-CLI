import React from "react";
import { useIntersectionObserver, useStaggeredAnimation } from "../../hooks";
import { SectionWrapper, SectionHeader, Card } from "../ui";
import { PERSONAL_INFO } from "../../constants";
import TofazzalImage from "../../assets/TofazzalHossainBhuiyan.jpg";
import aboutData from "../../data/about.json";

export function AboutSection() {
  const { isVisible, ref } = useIntersectionObserver(0.2);
  const { visibleItems, startAnimation } = useStaggeredAnimation(12, 150);

  React.useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <section id="about" className="py-20 relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Full Width Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 w-full h-full opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.02'%3E%3Cpath d='M20 20c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-5 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 backdrop-blur-xl mb-6">
            <span className="text-emerald-300 text-sm font-semibold tracking-wider uppercase">Executive Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Leadership
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {aboutData.introduction.headline}
          </p>
        </div>

        {/* Executive Introduction with Professional Portrait */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/[0.1] p-8 md:p-12 shadow-2xl">
              <div className="grid lg:grid-cols-5 gap-12 items-start">
                
                {/* Professional Executive Portrait */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    {/* Main Portrait Container */}
                    <div className="relative w-full max-w-md mx-auto">
                      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
                        {/* Premium Glow Effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700 animate-pulse"></div>
                        
                        {/* Executive Frame */}
                        <div className="relative w-full h-full bg-gradient-to-br from-white/[0.15] to-black/[0.1] rounded-3xl overflow-hidden border border-white/[0.2] backdrop-blur-xl shadow-2xl">
                          
                          {/* Professional Image */}
                          <img 
                            src={TofazzalImage} 
                            alt={`${PERSONAL_INFO.fullName} - ${PERSONAL_INFO.title}`}
                            className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 filter brightness-110 contrast-110 saturate-110"
                            loading="lazy"
                          />
                          
                          {/* Professional Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-transparent to-blue-900/10"></div>
                          
                          {/* Executive Badge */}
                          <div className="absolute top-4 right-4">
                            <div className="backdrop-blur-xl bg-gradient-to-r from-emerald-500/90 to-blue-500/90 rounded-full px-4 py-2 border border-white/20 shadow-lg">
                              <span className="text-white text-xs font-bold tracking-wider">CEO</span>
                            </div>
                          </div>
                          
                          {/* Professional Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="backdrop-blur-2xl bg-gradient-to-r from-black/60 to-black/30 rounded-2xl p-4 border border-white/[0.15] shadow-xl">
                              <h4 className="text-white font-bold text-lg mb-1 leading-tight">
                                {PERSONAL_INFO.fullName}
                              </h4>
                              <p className="text-emerald-300 font-semibold text-sm tracking-wide mb-1">
                                {PERSONAL_INFO.title}
                              </p>
                              <p className="text-blue-300 font-medium text-sm mb-2">
                                {PERSONAL_INFO.company}
                              </p>
                              <div className="flex items-center space-x-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-sm"></div>
                                ))}
                                <span className="text-white/60 text-xs ml-2">Executive Excellence</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Professional Status Indicators */}
                      <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 border-3 border-white/20">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/30 border-3 border-white/20">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>

                    {/* Personal Details Card */}
                    <div className="mt-8 backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl border border-white/[0.1] p-6 shadow-xl">
                      <h4 className="text-white font-bold text-lg mb-4 flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                        Personal Information
                      </h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-white/[0.08]">
                          <span className="text-white/60 text-sm">Full Name</span>
                          <span className="text-white font-medium text-sm">{PERSONAL_INFO.fullName}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-white/[0.08]">
                          <span className="text-white/60 text-sm">Position</span>
                          <span className="text-emerald-400 font-medium text-sm">{PERSONAL_INFO.title}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-white/[0.08]">
                          <span className="text-white/60 text-sm">Company</span>
                          <span className="text-blue-400 font-medium text-sm">{PERSONAL_INFO.company}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-white/[0.08]">
                          <span className="text-white/60 text-sm">Email</span>
                          <span className="text-white font-medium text-sm">{PERSONAL_INFO.email}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="text-white/60 text-sm">Phone</span>
                          <span className="text-white font-medium text-sm">{PERSONAL_INFO.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Professional Metrics */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      {aboutData.achievements.slice(0, 2).map((achievement, index) => (
                        <div key={index} className={`group transition-all duration-700 delay-${index * 100} ${
                          visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}>
                          <div className="backdrop-blur-xl bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl p-4 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 text-center">
                            <div className="text-2xl font-bold text-emerald-400 mb-1">{achievement.metric}</div>
                            <div className="text-white/80 font-medium text-xs">{achievement.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Executive Bio and Content */}
                <div className="lg:col-span-3">
                  <div className="space-y-8">
                    {/* Executive Header */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-1 h-16 bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full mr-4"></div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">Executive Profile</h3>
                          <p className="text-emerald-400 font-semibold text-lg">
                            {aboutData.introduction.headline}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Executive Summary */}
                    <div className="prose prose-lg prose-invert">
                      <p className="text-white/80 leading-relaxed text-lg mb-6">
                        {aboutData.introduction.summary}
                      </p>
                      
                      {/* Leadership Quote */}
                      <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full"></div>
                        <blockquote className="border-l-0 pl-8 py-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-r-2xl my-6 border border-emerald-400/20">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-emerald-300 font-medium italic text-lg leading-relaxed">
                                "{aboutData.leadershipPhilosophy.quote}"
                              </p>
                              <p className="text-white/60 text-sm mt-3 font-medium">
                                — Leadership Philosophy
                              </p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      
                      {/* Mission Statement */}
                      <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-400/20 mt-6">
                        <h4 className="text-white font-bold text-lg mb-3 flex items-center">
                          <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                          Mission & Vision
                        </h4>
                        <p className="text-white/70 leading-relaxed">
                          {aboutData.introduction.mission}
                        </p>
                      </div>
                    </div>

                    {/* Professional Achievements Grid */}
                    <div className="grid md:grid-cols-2 gap-4 mt-8">
                      {aboutData.achievements.slice(2).map((achievement, index) => (
                        <div key={index} className={`group transition-all duration-700 delay-${(index + 2) * 100} ${
                          visibleItems.includes(index + 2) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                        }`}>
                          <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                            <div className="text-2xl font-bold text-purple-400 mb-1">{achievement.metric}</div>
                            <div className="text-white font-semibold text-sm mb-2">{achievement.label}</div>
                            <div className="text-white/60 text-xs leading-relaxed">{achievement.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Executive Highlights
              </span>
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Distinguished achievements and core expertise areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.keyHighlights.map((highlight, index) => (
              <div key={index} className={`group transition-all duration-700 delay-${(index + 4) * 100} ${
                visibleItems.includes(index + 4) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl border border-white/[0.1] p-6 h-full hover:border-emerald-400/30 hover:bg-white/[0.12] transition-all duration-500 group-hover:transform group-hover:scale-105">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${highlight.color} flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    {highlight.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {highlight.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Leadership Philosophy
              </span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.leadershipPhilosophy.principles.map((principle, index) => (
              <div key={index} className={`transition-all duration-700 delay-${(index + 8) * 100} ${
                visibleItems.includes(index + 8) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
                <div className="backdrop-blur-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-2xl border border-white/[0.08] p-6 h-full hover:border-blue-400/30 transition-all duration-300">
                  <div className="text-3xl mb-4">{principle.icon}</div>
                  <h4 className="text-white font-semibold text-lg mb-3">{principle.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className={`transition-all duration-1000 delay-800 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Core Competencies
              </span>
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Specialized expertise across executive leadership domains
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {aboutData.coreCompetencies.map((category, categoryIndex) => (
              <div key={categoryIndex} className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl border border-white/[0.1] p-6">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mr-3"></div>
                  {category.category}
                </h4>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/80 font-medium text-sm group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-emerald-400 font-bold text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-2 bg-white/[0.08] rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: visibleItems.includes(categoryIndex * 3 + skillIndex) ? `${skill.level}%` : "0%",
                            transitionDelay: `${(categoryIndex * 3 + skillIndex) * 100}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
