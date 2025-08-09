import { useState, useEffect, useRef } from "react";

export function PublicationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [visiblePublications, setVisiblePublications] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const publications = [
    {
      type: "journal",
      title: "Digital Health Transformation in Emerging Markets: A Comprehensive Framework for Pharmaceutical Companies",
      journal: "International Journal of Healthcare Management",
      year: "2024",
      authors: "T. Hossain, M. Rahman, S. Ahmed",
      impact: "Impact Factor: 4.2",
      citations: "23 citations",
      category: "Healthcare Innovation",
      abstract: "This paper presents a comprehensive framework for pharmaceutical companies to successfully implement digital health transformations in emerging markets, with particular focus on regulatory compliance and patient accessibility.",
      link: "#",
      featured: true
    },
    {
      type: "journal",
      title: "Sustainable Pharmaceutical Manufacturing in South Asia: Environmental and Economic Considerations",
      journal: "Pharmaceutical Engineering",
      year: "2023",
      authors: "T. Hossain, R. Chen, A. Kumar",
      impact: "Impact Factor: 3.8",
      citations: "41 citations",
      category: "Sustainability",
      abstract: "An analysis of sustainable manufacturing practices in pharmaceutical production, examining environmental impact reduction while maintaining cost-effectiveness in South Asian markets.",
      link: "#"
    },
    {
      type: "conference",
      title: "AI-Driven Drug Discovery: Opportunities and Challenges in Low-Resource Settings",
      journal: "IEEE International Conference on Healthcare Informatics",
      year: "2023",
      authors: "T. Hossain, L. Zhang, K. Patel",
      impact: "Best Paper Award",
      citations: "15 citations",
      category: "AI & Technology",
      abstract: "Explores the potential of artificial intelligence in accelerating drug discovery processes while addressing unique challenges faced by pharmaceutical companies in resource-constrained environments.",
      link: "#"
    },
    {
      type: "book",
      title: "Healthcare Leadership in the Digital Age: Strategies for Pharmaceutical Excellence",
      journal: "Cambridge University Press",
      year: "2023",
      authors: "T. Hossain",
      impact: "ISBN: 978-1-108-42567-8",
      citations: "Book - Multiple citations",
      category: "Leadership",
      abstract: "A comprehensive guide for healthcare leaders navigating digital transformation, covering strategic planning, implementation, and change management in pharmaceutical organizations.",
      link: "#",
      featured: true
    },
    {
      type: "journal",
      title: "Regulatory Harmonization in ASEAN Pharmaceutical Markets: Progress and Future Directions",
      journal: "Regulatory Affairs Professionals Society Journal",
      year: "2022",
      authors: "T. Hossain, M. Singh, Y. Tanaka",
      impact: "Impact Factor: 5.1",
      citations: "67 citations",
      category: "Regulatory Affairs",
      abstract: "Examines the current state of regulatory harmonization across ASEAN countries and provides recommendations for improved pharmaceutical market access and patient safety.",
      link: "#"
    },
    {
      type: "journal",
      title: "Public-Private Partnerships in Healthcare: Lessons from Bangladesh Pharmaceutical Sector",
      journal: "Health Economics and Policy",
      year: "2022",
      authors: "T. Hossain, N. Ahmed, P. Williams",
      impact: "Impact Factor: 4.6",
      citations: "52 citations",
      category: "Health Economics",
      abstract: "Analyzes successful public-private partnership models in Bangladesh's pharmaceutical sector and their impact on healthcare accessibility and economic development.",
      link: "#"
    },
    {
      type: "conference",
      title: "Machine Learning Applications in Pharmaceutical Quality Control: A Practical Implementation Guide",
      journal: "International Conference on Pharmaceutical Sciences",
      year: "2022",
      authors: "T. Hossain, A. Thompson, R. Kumar",
      impact: "Keynote Presentation",
      citations: "29 citations",
      category: "Quality Control",
      abstract: "Presents practical approaches for implementing machine learning solutions in pharmaceutical quality control processes, with real-world case studies and implementation frameworks.",
      link: "#"
    },
    {
      type: "journal",
      title: "Cost-Effectiveness Analysis of Generic Drug Programs in Low-Income Countries",
      journal: "Journal of Generic Medicines",
      year: "2021",
      authors: "T. Hossain, B. Patel, M. Johnson",
      impact: "Impact Factor: 3.2",
      citations: "78 citations",
      category: "Health Economics",
      abstract: "Comprehensive analysis of generic drug programs' economic impact in low-income countries, providing evidence-based recommendations for policy makers and healthcare administrators.",
      link: "#"
    }
  ];

  const categories = ["all", "Healthcare Innovation", "Sustainability", "AI & Technology", "Leadership", "Regulatory Affairs", "Health Economics", "Quality Control"];

  const filteredPublications = activeTab === "all" 
    ? publications 
    : publications.filter(pub => pub.category === activeTab);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          filteredPublications.forEach((_, index) => {
            setTimeout(() => {
              setVisiblePublications(prev => [...prev, index]);
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

  useEffect(() => {
    setVisiblePublications([]);
    filteredPublications.forEach((_, index) => {
      setTimeout(() => {
        setVisiblePublications(prev => [...prev, index]);
      }, index * 100);
    });
  }, [activeTab]);

  const getPublicationIcon = (type: string) => {
    switch (type) {
      case "journal": return "📄";
      case "conference": return "🎤";
      case "book": return "📚";
      default: return "📄";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "journal": return "from-blue-500 to-cyan-500";
      case "conference": return "from-purple-500 to-pink-500";
      case "book": return "from-emerald-500 to-teal-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section ref={sectionRef} id="publications" className="py-32 px-6 sm:px-8 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-gradient-to-r from-blue-500/12 to-indigo-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/5 w-80 h-80 bg-gradient-to-r from-emerald-500/12 to-teal-500/12 rounded-full blur-3xl animate-pulse delay-1500"></div>
        
        {/* Academic pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'0.5\'%3E%3Cpath d=\'M40 0v80M0 40h80\'/%3E%3Cpath d=\'M20 0v80M60 0v80M0 20h80M0 60h80\' opacity=\'0.5\'/%3E%3C/g%3E%3C/svg%3E")'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 font-display">
            Research & <span className="bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent">Publications</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Peer-reviewed research contributing to healthcare innovation, pharmaceutical excellence, and sustainable healthcare solutions across emerging markets.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Publication Stats */}
        <div className={`grid md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {[
            { label: "Total Publications", value: "45+", icon: "📚" },
            { label: "Citations", value: "1,250+", icon: "📊" },
            { label: "h-index", value: "18", icon: "📈" },
            { label: "Impact Factor", value: "4.2 avg", icon: "⭐" }
          ].map((stat, index) => (
            <div key={index} className="backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-2xl border border-white/[0.12] p-6 text-center shadow-xl">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1 font-display">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === category
                    ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg"
                    : "backdrop-blur-xl bg-white/[0.06] text-white/80 border border-white/[0.12] hover:bg-white/[0.12]"
                }`}
              >
                {category === "all" ? "All Publications" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Publications Grid */}
        <div className="space-y-6">
          {filteredPublications.map((publication, index) => (
            <div
              key={index}
              className={`backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/[0.12] p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group ${
                publication.featured ? "ring-2 ring-emerald-500/30" : ""
              } ${
                visiblePublications.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                {/* Publication Icon & Type */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getTypeColor(publication.type)} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                    {getPublicationIcon(publication.type)}
                  </div>
                  {publication.featured && (
                    <div className="mt-2 text-center">
                      <span className="inline-flex items-center px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-medium">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Publication Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2 font-display">
                        {publication.title}
                      </h3>
                      <div className="text-white/80 font-medium mb-1">
                        {publication.journal} • {publication.year}
                      </div>
                      <div className="text-white/60 text-sm mb-2">
                        {publication.authors}
                      </div>
                    </div>
                    <div className="flex-shrink-0 mt-2 sm:mt-0">
                      <span className={`inline-flex items-center px-3 py-1 rounded-lg bg-gradient-to-r ${getTypeColor(publication.type)} text-white text-xs font-medium shadow-md`}>
                        {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                      </span>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {publication.abstract}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-white/60">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>{publication.impact}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/60">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>{publication.citations}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-emerald-400">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>{publication.category}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 flex items-center space-x-1">
                      <span>Read Publication</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                    <button className="text-white/60 hover:text-white text-sm transition-colors duration-300 flex items-center space-x-1">
                      <span>Cite</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="backdrop-blur-xl bg-blue-500/10 rounded-2xl border border-blue-400/20 p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-4 font-display">
              Collaborate on Research
            </h4>
            <p className="text-white/80 mb-6">
              Interested in collaborative research opportunities in healthcare innovation and pharmaceutical excellence?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-display">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Research Collaboration</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="px-6 py-3 backdrop-blur-xl bg-white/[0.08] text-white rounded-xl font-medium border border-white/[0.12] hover:bg-white/[0.12] transition-all duration-300 font-display">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
