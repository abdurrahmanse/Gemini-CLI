import React from "react";
import { useIntersectionObserver } from "../../hooks";
import { SectionHeader, SectionWrapper, Card, Button } from "../ui";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../constants";

export function ContactSection() {
  const { isVisible, ref } = useIntersectionObserver(0.3);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <SectionWrapper id="contact" background="pattern">
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader
            title="Get In Touch"
            subtitle="Touch"
            description="Ready to connect for pharmaceutical innovation, strategic partnerships, or professional collaboration opportunities."
          />

          <div className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <Card variant="glass" className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-4 transition-colors duration-300"
                    style={{ color: 'var(--text-primary)' }}>
                  Let's Connect and Collaborate
                </h3>
                <p className="text-lg leading-relaxed max-w-2xl mx-auto transition-colors duration-300"
                   style={{ color: 'var(--text-secondary)' }}>
                  I'm always interested in discussing pharmaceutical innovation, healthcare initiatives, 
                strategic partnerships, and opportunities to advance healthcare accessibility in emerging markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold mb-4 transition-colors duration-300"
                    style={{ color: 'var(--text-primary)' }}>Contact Information</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                         style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}>
                      <span className="text-lg" style={{ color: 'var(--bg-primary)' }}>📧</span>
                    </div>
                    <div>
                      <div className="text-sm transition-colors duration-300"
                           style={{ color: 'var(--text-secondary)' }}>Email</div>
                      <div className="font-medium transition-colors duration-300"
                           style={{ color: 'var(--text-primary)' }}>{PERSONAL_INFO.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                         style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}>
                      <span className="text-lg" style={{ color: 'var(--bg-primary)' }}>📱</span>
                    </div>
                    <div>
                      <div className="text-sm transition-colors duration-300"
                           style={{ color: 'var(--text-secondary)' }}>Phone</div>
                      <div className="font-medium transition-colors duration-300"
                           style={{ color: 'var(--text-primary)' }}>{PERSONAL_INFO.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                         style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}>
                      <span className="text-lg" style={{ color: 'var(--bg-primary)' }}>📍</span>
                    </div>
                    <div>
                      <div className="text-sm transition-colors duration-300"
                           style={{ color: 'var(--text-secondary)' }}>Location</div>
                      <div className="font-medium transition-colors duration-300"
                           style={{ color: 'var(--text-primary)' }}>{PERSONAL_INFO.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                         style={{ background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))` }}>
                      <span className="text-lg" style={{ color: 'var(--bg-primary)' }}>🏢</span>
                    </div>
                    <div>
                      <div className="text-sm transition-colors duration-300"
                           style={{ color: 'var(--text-secondary)' }}>Organization</div>
                      <div className="font-medium transition-colors duration-300"
                           style={{ color: 'var(--text-primary)' }}>{PERSONAL_INFO.company}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold mb-4 transition-colors duration-300"
                    style={{ color: 'var(--text-primary)' }}>Professional Networks</h4>
                
                <div className="space-y-4">
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-4 rounded-xl border transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: 'var(--glass-border)',
                      backgroundColor: 'var(--glass-bg)'
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                         style={{ background: 'var(--accent-primary)' }}>
                      <span className="text-sm font-bold" style={{ color: 'var(--bg-primary)' }}>in</span>
                    </div>
                    <div>
                      <div className="font-medium transition-colors duration-300"
                           style={{ color: 'var(--text-primary)' }}>LinkedIn</div>
                      <div className="text-sm transition-colors duration-300"
                           style={{ color: 'var(--text-secondary)' }}>Professional Network</div>
                    </div>
                  </a>

                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-4 rounded-xl border transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: 'var(--glass-border)',
                      backgroundColor: 'var(--glass-bg)'
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                         style={{ background: 'var(--accent-secondary)' }}>
                      <span className="text-sm font-bold" style={{ color: 'var(--bg-primary)' }}>𝕏</span>
                    </div>
                    <div>
                      <div className="font-medium transition-colors duration-300"
                           style={{ color: 'var(--text-primary)' }}>Twitter</div>
                      <div className="text-sm transition-colors duration-300"
                           style={{ color: 'var(--text-secondary)' }}>Industry Insights</div>
                    </div>
                  </a>

                  <a
                    href={SOCIAL_LINKS.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group p-4 rounded-xl border transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: 'var(--glass-border)',
                      backgroundColor: 'var(--glass-bg)'
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                         style={{ background: 'var(--accent-primary)' }}>
                      <span className="text-sm" style={{ color: 'var(--bg-primary)' }}>🌐</span>
                    </div>
                    <div>
                      <div className="font-medium transition-colors duration-300"
                           style={{ color: 'var(--text-primary)' }}>Company Website</div>
                      <div className="text-sm transition-colors duration-300"
                           style={{ color: 'var(--text-secondary)' }}>Servier Operations</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center border-t pt-8 transition-all duration-300"
                 style={{ borderColor: 'var(--glass-border)' }}>
              <h4 className="text-lg font-semibold mb-4 transition-colors duration-300"
                  style={{ color: 'var(--text-primary)' }}>
                Interested in Collaboration?
              </h4>
              <p className="mb-6 max-w-lg mx-auto transition-colors duration-300"
                 style={{ color: 'var(--text-secondary)' }}>
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
          <p className="transition-colors duration-300"
             style={{ color: 'var(--text-secondary)' }}>
            Thank you for your interest in connecting. I look forward to exploring how we can 
            advance healthcare innovation together.
          </p>
        </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
