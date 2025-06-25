
import AboutMission from '@/components/about/AboutMission';
import AboutTeam from '@/components/about/AboutTeam';
import AboutFAQ from '@/components/about/AboutFAQ';
import AboutStats from '@/components/about/AboutStats';
import ConnectUsForm from '@/components/ConnectUs';
import Head from 'next/head';

export const metadata = {
  title: 'About Us | Atithi Stay - Find Your Perfect Paying Guest Accommodation',
  description: 'Learn about Atithi Stay, our mission, services, and the team behind the best PG accommodation platform in the region.',
  alternates: {
    canonical: 'https://www.atithistaymumbai.com/',
  },
};

export default function AboutPage() {
  <Head>
    <meta name="robots" content="index,follow" />
  </Head>
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
      <ConnectUsForm/>
    </main>
  );
}