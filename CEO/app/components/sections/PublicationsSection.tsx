import React from "react";
import { useIntersectionObserver, useStaggeredAnimation } from "../../hooks";
import { SectionHeader, Card } from "../ui";

const PUBLICATIONS = [
  {
    title: "Digital Transformation in Pharmaceutical Operations: A South Asian Perspective",
    journal: "International Journal of Pharmaceutical Business",
    year: "2023",
    type: "Research Article",
    citations: 45,
    impact: "Q1",
    description: "Comprehensive analysis of digital adoption strategies in emerging pharmaceutical markets with focus on operational efficiency and regulatory compliance.",
    tags: ["Digital Health", "Pharmaceutical Operations", "Market Analysis"],
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    title: "Sustainable Healthcare Models for Emerging Markets",
    journal: "Global Health Economics Review",
    year: "2022",
    type: "Review Paper",
    citations: 78,
    impact: "Q1",
    description: "Systematic review of sustainable healthcare delivery models and their implementation in resource-constrained environments.",
    tags: ["Healthcare Economics", "Sustainability", "Public Health"],
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "Regulatory Harmonization in South Asian Pharmaceutical Markets",
    journal: "Regulatory Affairs Professionals Society",
    year: "2022",
    type: "Policy Brief",
    citations: 32,
    impact: "Industry",
    description: "Policy recommendations for streamlining pharmaceutical regulations across South Asian countries to improve market access.",
    tags: ["Regulatory Affairs", "Policy Development", "Market Access"],
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    title: "Innovation Leadership in Pharmaceutical Excellence",
    journal: "Harvard Business Review",
    year: "2021",
    type: "Case Study",
    citations: 125,
    impact: "Q1",
    description: "Case study examining transformational leadership approaches in pharmaceutical companies operating in emerging markets.",
    tags: ["Leadership", "Innovation", "Strategic Management"],
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Quality Management Systems in Global Pharmaceutical Operations",
    journal: "Quality Assurance International",
    year: "2021",
    type: "Technical Article",
    citations: 56,
    impact: "Q2",
    description: "Best practices for implementing and maintaining quality management systems in multi-national pharmaceutical operations.",
    tags: ["Quality Management", "GMP", "International Standards"],
    gradient: "from-emerald-500 to-green-600"
  },
  {
    title: "Public-Private Partnerships in Healthcare: Bangladesh Model",
    journal: "Social Sciences & Medicine",
    year: "2020",
    type: "Research Article",
    citations: 89,
    impact: "Q1",
    description: "Analysis of successful public-private healthcare partnerships and their impact on healthcare accessibility in Bangladesh.",
    tags: ["Public Health", "Healthcare Policy", "Partnership Models"],
    gradient: "from-teal-500 to-blue-600"
  }
] as const;

export function PublicationsSection() {
  const { isVisible, ref } = useIntersectionObserver(0.2);
  const { visibleItems, startAnimation } = useStaggeredAnimation(PUBLICATIONS.length, 150);

  React.useEffect(() => {
    if (isVisible) {
      startAnimation();
    }
  }, [isVisible, startAnimation]);

  return (
    <section ref={ref} id="publications" className="py-32 px-6 sm:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-blue-900/5 to-black/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.1),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Research &"
          subtitle="Publications"
        />

        <div className={`space-y-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {PUBLICATIONS.map((publication, index) => (
            <div
              key={publication.title}
              className={`transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-8 scale-95"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="group p-8 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${publication.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors leading-tight">
                        {publication.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <p className="text-blue-400 font-semibold">{publication.journal}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-300">{publication.year}</span>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${publication.gradient} text-white`}>
                          {publication.type}
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex gap-6 lg:flex-col lg:items-end lg:text-right">
                      <div>
                        <div className="text-2xl font-bold text-white">{publication.citations}</div>
                        <div className="text-xs text-gray-400">Citations</div>
                      </div>
                      <div>
                        <div className={`px-2 py-1 rounded text-xs font-bold ${
                          publication.impact === 'Q1' ? 'bg-green-500/20 text-green-400' :
                          publication.impact === 'Q2' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {publication.impact}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">Impact</div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                    {publication.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {publication.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${publication.gradient} text-white font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Research Metrics */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-400 text-sm">Total Publications</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-2">
              1,250+
            </div>
            <div className="text-gray-400 text-sm">Total Citations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              25
            </div>
            <div className="text-gray-400 text-sm">H-Index</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-gray-400 text-sm">Q1 Journals</div>
          </div>
        </div>
      </div>
    </section>
  );
}
