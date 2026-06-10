import { SimpleHero } from '@/components/hero/SimpleHero';
import { AboutSection } from '@/components/about';
import { ExperienceSection } from '@/components/experience';
import { ProjectsSection } from '@/components/projects';
import ContactSection from '@/components/sections/ContactSection';
import { SimpleNavigation } from '@/components/navigation/SimpleNavigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SimpleNavigation />
      
      <main>
        <SimpleHero />
        
        <div>
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
