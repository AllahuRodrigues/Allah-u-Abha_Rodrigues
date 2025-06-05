import { SimpleHero } from '@/components/hero/SimpleHero';
import { AboutSection } from '@/components/about';
import { ExperienceSection } from '@/components/experience';
import { ProjectsSection } from '@/components/projects';
import { ResearchSection } from '@/components/research';
import { InternetPresenceSection } from '@/components/internet-presence';
import ContactSection from '@/components/sections/ContactSection';
import { SimpleNavigation } from '@/components/navigation/SimpleNavigation';

export default function Home() {
  return (
    <>
      <SimpleNavigation />
      <SimpleHero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <InternetPresenceSection />
      <ContactSection />
    </>
  );
}
