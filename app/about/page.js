
import AboutMission from '@/components/about/AboutMission';
import AboutTeam from '@/components/about/AboutTeam';
import AboutFAQ from '@/components/about/AboutFAQ';
import AboutStats from '@/components/about/AboutStats';
import ConnectUsForm from '@/components/ConnectUs';
import Head from 'next/head';

export const metadata = {
  title: 'About Us | Atithi Stay - Find Your Perfect Paying Guest Accommodation',
  description: 'Get to know Atithi Stay - your trusted partner for safe, affordable, and fully-furnished PG accommodations across Mumbai, Pune, and Nagpur. Learn about our mission to simplify city living for students and professionals, explore our range of services, and meet the dedicated team behind the region’s leading PG rental platform.',
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