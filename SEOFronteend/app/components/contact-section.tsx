import { useState, useEffect, useRef } from "react";
import contactData from "../data/contact.json";
import personalInfo from "../data/personal-info.json";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMethod, setActiveMethod] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: ""
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 px-6 sm:px-8 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(14,165,233,0.1),transparent,rgba(34,197,94,0.1),transparent)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-24 transition-all duration-1200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="relative">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 relative">
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                  {contactData.header.title}
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-green-500/20 to-emerald-500/20 blur-lg"></div>
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              {contactData.header.subtitle}
            </p>
            
            {/* Animated Underline */}
            <div className="relative w-32 h-1 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-emerald-500 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-green-400 to-emerald-400 rounded-full blur-sm"></div>
            </div>
            
            {/* Executive Badge */}
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 backdrop-blur-xl">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              <span className="text-green-300 font-bold text-lg">Healthcare Executive • Available for Strategic Discussions</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          
          {/* Contact Information Panel */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-12 scale-95"
          }`}>
            <div className="relative group h-full">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative backdrop-blur-3xl bg-gradient-to-br from-white/20 to-white/5 rounded-3xl border border-white/30 p-8 shadow-2xl h-full">
                
                {/* Executive Introduction */}
                <div className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                      <span className="text-white text-2xl">�‍⚕️</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">{personalInfo.fullName}</h3>
                      <p className="text-green-300 font-bold">{personalInfo.title}</p>
                      <p className="text-gray-300 font-semibold text-sm">{personalInfo.company}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-gray-200 leading-relaxed">
                      {contactData.header.callToAction}
                    </p>
                    
                    <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30">
                      <p className="text-green-200 text-sm font-medium">
                        <strong>Response Commitment:</strong> {contactData.responseInfo.standardResponse}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Contact Methods */}
                <div className="mb-10">
                  <h4 className="text-xl font-black text-white mb-6 flex items-center">
                    <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                    Contact Methods
                  </h4>
                  
                  <div className="space-y-4">
                    {contactData.contactMethods.map((method, index) => (
                      <div 
                        key={index} 
                        className={`group relative cursor-pointer transition-all duration-300 ${
                          activeMethod === index ? 'scale-105' : ''
                        }`}
                        onMouseEnter={() => setActiveMethod(index)}
                      >
                        {/* Background Effect */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${method.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`}></div>
                        
                        <div className="relative flex items-start space-x-4 p-6 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                            {method.icon}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-black text-white mb-2 text-lg group-hover:text-green-300 transition-colors">
                              {method.title}
                            </h5>
                            <p className="text-white font-bold mb-1">{method.detail}</p>
                            <p className="text-gray-300 text-sm leading-relaxed mb-2">{method.description}</p>
                            <p className="text-green-300 text-xs font-semibold">{method.availability}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expertise Areas */}
                <div className="mb-8">
                  <h4 className="text-xl font-black text-white mb-6">Key Expertise Areas</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {contactData.expertise.map((area, index) => (
                      <div key={index} className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-xl group-hover:scale-110 transition-transform duration-300">{area.icon}</span>
                          <h5 className="font-bold text-white text-sm">{area.area}</h5>
                        </div>
                        <p className="text-gray-300 text-xs leading-relaxed">{area.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-black text-white mb-4">Professional Networks</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {contactData.socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`group relative flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r ${social.color} text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden`}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                        <div>
                          <div className="font-bold text-sm">{social.name}</div>
                          <div className="text-xs opacity-90">{social.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Contact Form */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}>
            <div className="relative group h-full">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              
              <div className="relative backdrop-blur-3xl bg-gradient-to-br from-white/15 to-white/5 rounded-3xl border border-white/30 p-8 shadow-2xl h-full">
                
                {submitted ? (
                  /* Success State */
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 animate-pulse">
                      <span className="text-white text-4xl">✓</span>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4">Message Sent Successfully!</h3>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                      Thank you for reaching out. I'll review your message and respond within 24 hours during business days.
                    </p>
                    <div className="p-4 rounded-xl bg-green-500/20 border border-green-400/30">
                      <p className="text-green-300 font-semibold">
                        For urgent healthcare matters, please call: {personalInfo.phone}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Form State */
                  <>
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                        <span className="text-white text-xl">✉️</span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white">Send a Message</h3>
                        <p className="text-gray-300 font-semibold">Let's discuss healthcare innovation opportunities</p>
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Row */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/90 text-sm font-bold mb-3">First Name *</label>
                          <input 
                            type="text" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full backdrop-blur-xl bg-white/15 border border-white/30 rounded-xl px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:bg-white/20 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 font-semibold"
                            placeholder={contactData.formFields.placeholders.firstName}
                          />
                        </div>
                        <div>
                          <label className="block text-white/90 text-sm font-bold mb-3">Last Name *</label>
                          <input 
                            type="text" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full backdrop-blur-xl bg-white/15 border border-white/30 rounded-xl px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:bg-white/20 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 font-semibold"
                            placeholder={contactData.formFields.placeholders.lastName}
                          />
                        </div>
                      </div>
                      
                      {/* Contact Details */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/90 text-sm font-bold mb-3">Email Address *</label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full backdrop-blur-xl bg-white/15 border border-white/30 rounded-xl px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:bg-white/20 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 font-semibold"
                            placeholder={contactData.formFields.placeholders.email}
                          />
                        </div>
                        <div>
                          <label className="block text-white/90 text-sm font-bold mb-3">Phone Number</label>
                          <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full backdrop-blur-xl bg-white/15 border border-white/30 rounded-xl px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:bg-white/20 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 font-semibold"
                            placeholder={contactData.formFields.placeholders.phone}
                          />
                        </div>
                      </div>
                      
                      {/* Company and Subject */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/90 text-sm font-bold mb-3">Organization</label>
                          <input 
                            type="text" 
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full backdrop-blur-xl bg-white/15 border border-white/30 rounded-xl px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:bg-white/20 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 font-semibold"
                            placeholder={contactData.formFields.placeholders.company}
                          />
                        </div>
                        <div>
                          <label className="block text-white/90 text-sm font-bold mb-3">Subject *</label>
                          <select 
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full backdrop-blur-xl bg-white/15 border border-white/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-green-400 focus:bg-white/20 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 font-semibold"
                          >
                            <option value="" className="bg-gray-800 text-white">Select discussion topic...</option>
                            {contactData.formFields.subjects.map((subject, index) => (
                              <option key={index} value={subject.value} className="bg-gray-800 text-white">
                                {subject.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      {/* Message */}
                      <div>
                        <label className="block text-white/90 text-sm font-bold mb-3">Message *</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full backdrop-blur-xl bg-white/15 border border-white/30 rounded-xl px-4 py-4 text-white placeholder-white/60 focus:outline-none focus:border-green-400 focus:bg-white/20 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 resize-none font-semibold"
                          placeholder={contactData.formFields.placeholders.message}
                        ></textarea>
                      </div>
                      
                      {/* Enhanced Submit Button */}
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full backdrop-blur-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-500 disabled:to-gray-600 text-white py-5 rounded-xl border border-green-300/40 transition-all duration-500 hover:scale-[1.02] font-bold text-lg shadow-2xl hover:shadow-green-500/25 disabled:cursor-not-allowed overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center space-x-3">
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Sending Message...</span>
                            </>
                          ) : (
                            <>
                              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                              </svg>
                              <span>Send Message</span>
                              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </>
                          )}
                        </span>
                        {!isSubmitting && (
                          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Footer */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-xl">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">🏥</span>
              </div>
              <p className="text-white/80 font-bold text-lg">
                © 2025 {personalInfo.fullName} • {personalInfo.company}
              </p>
            </div>
            <p className="text-white/60 text-sm">
              Committed to advancing healthcare innovation • Transforming patient outcomes across South Asia • Building sustainable pharmaceutical solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
