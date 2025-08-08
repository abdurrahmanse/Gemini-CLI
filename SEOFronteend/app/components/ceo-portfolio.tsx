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
      <div className="min-h-screen relative font-sans">
        {/* Sophisticated background layers */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"></div>
        <div className="fixed inset-0 bg-gradient-to-tr from-emerald-900/20 via-transparent to-blue-900/30"></div>
        
        {/* Medical themed mesh background */}
        <div className="fixed inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-mesh-pattern"></div>
        </div>
        
        {/* Subtle medical cross pattern */}
        <div className="fixed inset-0 opacity-[0.03] bg-medical-pattern"></div>
        
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
