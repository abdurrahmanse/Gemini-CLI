import { useScrollState, useMobileMenu } from '~/hooks';
import { scrollToSection } from '~/utils';
import { NAVIGATION_ITEMS, PERSONAL_INFO } from '~/constants';
import ThemeSwitcher from '~/components/ui/ThemeSwitcher';

export function Navigation() {
  const isScrolled = useScrollState(20);
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId as any);
    closeMobileMenu();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
      isScrolled 
        ? "glass-nav shadow-2xl border-b" 
        : ""
    }`} style={{
      backgroundColor: isScrolled 
        ? 'var(--glass-bg)' 
        : 'rgba(var(--bg-primary-rgb), 0.6)',
      borderBottomColor: isScrolled ? 'var(--glass-border)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(10px)'
    }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 cursor-pointer group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="font-bold text-sm text-white font-display">
                  {PERSONAL_INFO.firstName.charAt(0)}{PERSONAL_INFO.lastName.split(' ')[0].charAt(0)}
                </span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold tracking-tight font-display transition-colors duration-300" 
                   style={{ color: 'var(--text-primary)' }}>
                Dr. Tofazzal Bhuiyan
              </div>
              <div className="text-xs font-medium transition-colors duration-300" 
                   style={{ color: 'var(--accent-primary)' }}>
                Chief Executive Officer
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 p-1 rounded-2xl" style={{
              backgroundColor: 'rgba(var(--bg-primary-rgb), 0.4)',
              border: '1px solid var(--glass-border)'
            }}>
              {NAVIGATION_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl hover:scale-105 group font-display"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    {item.label}
                  </span>
                  <div 
                    className="absolute inset-0 rounded-xl scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg"
                    style={{ 
                      background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
                    }}
                  ></div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Side Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeSwitcher />
            <button 
              onClick={() => handleNavClick("contact")}
              className="relative px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-display group overflow-hidden"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeSwitcher />
            <button 
              onClick={toggleMobileMenu}
              className="relative p-2 rounded-xl transition-all duration-300 hover:scale-110"
              style={{ 
                backgroundColor: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)'
              }}
              aria-label="Toggle mobile menu"
            >
              <div className="w-5 h-5 relative">
                <span className={`absolute top-0 left-0 w-full h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 top-2" : ""
                }`} style={{ backgroundColor: 'var(--text-primary)' }}></span>
                <span className={`absolute top-2 left-0 w-full h-0.5 transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`} style={{ backgroundColor: 'var(--text-primary)' }}></span>
                <span className={`absolute top-4 left-0 w-full h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 top-2" : ""
                }`} style={{ backgroundColor: 'var(--text-primary)' }}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}>
          <div className="pt-4 space-y-1">
            <div className="p-3 rounded-2xl space-y-1" style={{
              backgroundColor: 'rgba(var(--bg-primary-rgb), 0.4)',
              border: '1px solid var(--glass-border)'
            }}>
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 font-display hover:scale-[0.98]"
                  style={{ 
                    color: 'var(--text-secondary)',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--glass-bg)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button 
              onClick={() => handleNavClick("contact")}
              className="w-full mt-3 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-lg transition-all duration-300 font-display hover:scale-[0.98]"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
