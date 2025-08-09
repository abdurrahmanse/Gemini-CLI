import React from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/20 backdrop-blur-xl border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-blue-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {PERSONAL_INFO.fullName}
            </h3>
            <p className="text-sm font-medium text-gray-400">
              © {currentYear} • CEO & Healthcare Innovation Leader
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 hover:border-blue-400 p-2 flex items-center justify-center transition-all duration-300 group"
            >
              <span className="text-blue-400 text-sm font-bold group-hover:scale-110 transition-transform">in</span>
            </a>
            
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-blue-400/20 hover:bg-blue-400/40 border border-blue-400/30 hover:border-blue-300 p-2 flex items-center justify-center transition-all duration-300 group"
            >
              <span className="text-blue-300 text-sm font-bold group-hover:scale-110 transition-transform">𝕏</span>
            </a>
            
            <a
              href={SOCIAL_LINKS.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-green-600/20 hover:bg-green-600/40 border border-green-500/30 hover:border-green-400 p-2 flex items-center justify-center transition-all duration-300 group"
            >
              <span className="text-green-400 text-sm group-hover:scale-110 transition-transform">🌐</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-sm font-medium text-gray-300">{PERSONAL_INFO.email}</p>
            <p className="text-xs font-medium text-gray-400 mt-1">{PERSONAL_INFO.location}</p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      </div>
    </footer>
  );
}
