import About from "@/components/About";
import AchievementsSection from "@/components/AchievementsSection";
import Help from "@/components/Help";
import HeroCarousel from "@/components/Hero";
import Values from "@/components/MissionVission";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/OurTeam";
import Services from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroCarousel/>
      <About/>
      <Help/>
      <Services />
      <Values/>
      <TeamSection/>
      <AchievementsSection/>
      <Testimonials/>
    </>
  );
}
