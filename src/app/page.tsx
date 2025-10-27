import About from "@/components/About";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";
import Help from "@/components/Help";
import HeroCarousel from "@/components/Hero";
import Values from "@/components/MissionVission";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/OurTeam";
import ProjectsShowcase from "@/components/ProjectShowcase";
import Services from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroCarousel/>
      <About/>
      <Help/>
      <Services />
      <ProjectsShowcase /> 
      <Values/>
      <TeamSection/>
      {/* <AchievementsSection/> */}
      <Testimonials/>
      {/* <Footer/> */}
    </>
  );
}
