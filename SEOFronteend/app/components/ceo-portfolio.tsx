import { 
  Navigation,
  Footer,
  HeroSection,
  AboutSection,
  ExpertiseSection,
  ExperienceSection,
  AchievementsSection,
  VisionSection,
  ContactSection
} from "./index";
import { ThemeProvider } from '~/hooks/useTheme';

export function CEOPortfolio() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative font-sans transition-colors duration-500" 
           style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Theme-aware background layers */}
        <div className="fixed inset-0 transition-opacity duration-500">
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)' 
          }}></div>
          <div className="absolute inset-0 opacity-30" style={{
            background: 'radial-gradient(circle at 30% 20%, var(--accent-secondary), transparent 50%)'
          }}></div>
          <div className="absolute inset-0 opacity-30" style={{
            background: 'radial-gradient(circle at 70% 80%, var(--accent-primary), transparent 50%)'
          }}></div>
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="fixed inset-0 opacity-[0.03]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <Navigation />
        
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ExpertiseSection />
          <ExperienceSection />
          <AchievementsSection />
          <VisionSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}
