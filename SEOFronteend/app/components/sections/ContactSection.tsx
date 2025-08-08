import React from "react";
import { useIntersectionObserver } from "../../hooks";
import { SectionHeader, Card, Button } from "../ui";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../constants";

export function ContactSection() {
  const { isVisible, ref } = useIntersectionObserver(0.3);

  return (
    <section ref={ref} id="contact" className="py-32 px-6 sm:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-blue-900/10 to-black/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader
          title="Get In"
          subtitle="Touch"
        />

        <div className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Card className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Connect and Collaborate
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                I'm always interested in discussing pharmaceutical innovation, healthcare initiatives, 
                strategic partnerships, and opportunities to advance healthcare accessibility in emerging markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">📧</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="text-white font-medium">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">📱</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <div className="text-white font-medium">{PERSONAL_INFO.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">📍</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      <div className="text-white font-medium">{PERSONAL_INFO.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-lg">🏢</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Organization</div>
                      <div className="text-white font-medium">{PERSONAL_INFO.company}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white mb-4">Professional Networks</h4>
                
                <div className="space-y-4">
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-4 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-600 p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-sm font-bold">in</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">LinkedIn</div>
                      <div className="text-gray-400 text-sm">Professional Network</div>
                    </div>
                  </a>

                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-4 rounded-xl border border-white/10 hover:border-blue-400/50 hover:bg-blue-400/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-400 p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-sm font-bold">𝕏</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Twitter</div>
                      <div className="text-gray-400 text-sm">Industry Insights</div>
                    </div>
                  </a>

                  <a
                    href={SOCIAL_LINKS.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-4 rounded-xl border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-600 p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-sm">🌐</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Company Website</div>
                      <div className="text-gray-400 text-sm">Servier Operations</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center border-t border-white/10 pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Interested in Collaboration?
              </h4>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Whether you're looking to discuss pharmaceutical partnerships, healthcare innovation, 
                or strategic opportunities, I'd love to hear from you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  <span className="mr-2">📧</span>
                  Send Email
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Button>
                
                <Button
                  variant="secondary"
                  size="lg"
                  className="group"
                >
                  <span className="mr-2">📅</span>
                  Schedule Meeting
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Message */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <p className="text-gray-400">
            Thank you for your interest in connecting. I look forward to exploring how we can 
            advance healthcare innovation together.
          </p>
        </div>
      </div>
    </section>
  );
}
