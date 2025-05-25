import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";
import FeaturedPGs from "@/components/home/FeaturedPGs";
import ConnectUsForm from "./components/ConnectUs";

export const metadata = {
  title:
    "Atithi Stay | Best PG Accommodation in mumbai for Students & Working Professionals",
  description:
    "Discover Atithi Stay - Mumbai's trusted platform to find safe, affordable, and fully-furnished Paying Guest (PG) accommodations for students and professionals in cities like Pune, Mumbai, and Nagpur.",
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
