
import AboutMission from '@/components/about/AboutMission';
import AboutTeam from '@/components/about/AboutTeam';
import AboutFAQ from '@/components/about/AboutFAQ';
import AboutStats from '@/components/about/AboutStats';

export const metadata = {
  title: 'About Us | Atithi Stay - Find Your Perfect Paying Guest Accommodation',
  description: 'Learn about Atithi Stay, our mission, services, and the team behind the best PG accommodation platform in the region.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* <HeroSection /> */}
      <AboutMission />
      <AboutStats />
      {/* <AboutServices /> */}
      <AboutTeam />
      {/* <AboutTestimonials /> */}
      <AboutFAQ />
      {/* <AboutContact /> */}
    </main>
  );
}