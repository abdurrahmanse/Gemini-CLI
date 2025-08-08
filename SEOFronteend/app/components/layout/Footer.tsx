import React from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/20 backdrop-blur-xl border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-blue-900/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-black mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {PERSONAL_INFO.fullName}
              </h3>
              <p className="text-xl font-bold text-blue-400 mb-4">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-lg font-semibold text-gray-300 mb-6">
                {PERSONAL_INFO.company}
              </p>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-md font-medium">
              Transforming healthcare through innovation, leadership, and strategic vision. 
              Building sustainable pharmaceutical solutions for a healthier future.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-2 flex items-center justify-center">
                  <span className="text-white text-sm">📧</span>
                </div>
                <span className="text-lg font-semibold text-gray-300">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 p-2 flex items-center justify-center">
                  <span className="text-white text-sm">📱</span>
                </div>
                <span className="text-lg font-semibold text-gray-300">{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 p-2 flex items-center justify-center">
                  <span className="text-white text-sm">📍</span>
                </div>
                <span className="text-lg font-semibold text-gray-300">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-2xl font-black text-white mb-6">
              Quick Links
            </h4>
            <nav className="space-y-4">
              <a href="#about" className="block text-lg font-bold text-gray-300 hover:text-blue-400 transition-colors duration-300">
                About Me
              </a>
              <a href="#expertise" className="block text-lg font-bold text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Core Expertise
              </a>
              <a href="#experience" className="block text-lg font-bold text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Experience
              </a>
              <a href="#achievements" className="block text-lg font-bold text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Achievements
              </a>
              <a href="#vision" className="block text-lg font-bold text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Vision & Goals
              </a>
              <a href="#contact" className="block text-lg font-bold text-gray-300 hover:text-blue-400 transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>

          {/* Professional Networks */}
          <div className="space-y-6">
            <h4 className="text-2xl font-black text-white mb-6">
              Connect
            </h4>
            <div className="space-y-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group p-3 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600 p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm font-black">in</span>
                </div>
                <div>
                  <div className="text-lg font-black text-white">LinkedIn</div>
                  <div className="text-sm font-semibold text-gray-400">Professional Network</div>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group p-3 rounded-xl border border-white/10 hover:border-blue-400/50 hover:bg-blue-400/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-400 p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm font-black">𝕏</span>
                </div>
                <div>
                  <div className="text-lg font-black text-white">Twitter</div>
                  <div className="text-sm font-semibold text-gray-400">Industry Insights</div>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group p-3 rounded-xl border border-white/10 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-green-600 p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-sm">🌐</span>
                </div>
                <div>
                  <div className="text-lg font-black text-white">Company</div>
                  <div className="text-sm font-semibold text-gray-400">Servier Operations</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-gray-300">
                © {currentYear} {PERSONAL_INFO.fullName}. All rights reserved.
              </p>
              <p className="text-base font-semibold text-gray-400 mt-1">
                Leading Healthcare Innovation & Pharmaceutical Excellence
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-lg font-bold text-gray-400">Built with</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💙</span>
                <span className="text-lg font-bold text-blue-400">for Healthcare Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
}
