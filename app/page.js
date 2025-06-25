import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";
import FeaturedPGs from "@/components/home/FeaturedPGs";
import ConnectUsForm from "./components/ConnectUs";

export const metadata = {
  title:
    "Atithi Stay | Best PG Accommodation in mumbai for Students & Working Professionals",
  description:
    "Discover Atithi Stay - Mumbai's trusted platform to find safe, affordable, and fully-furnished Paying Guest (PG) accommodations for students and professionals in cities like Pune, Mumbai, and Nagpur.",
  robots: "index, follow", 
  alternates: {
    canonical: 'https://www.atithistaymumbai.com/',
  },
  openGraph: {
    title: "Atithi Stay | Best PG in Mumbai for Students & Professionals",
    description:
      "Explore premium PG stays with Atithi Stay across Mumbai. Fully-furnished, secure, and affordable accommodations tailored for students and professionals.",
    url: "https://www.atithistaymumbai.com",
    siteName: "Atithi Stay",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atithi Stay | Affordable PG in Mumbai",
    description:
      "Discover trusted PG accommodation for students and professionals in Mumbai with Atithi Stay.",
  },
};

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedPGs />
      <Testimonials />
      <ConnectUsForm/>
    </div>
  );
}
