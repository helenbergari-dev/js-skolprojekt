
import Hero from "../components/Hero.jsx";
import AboutUs from "../components/AboutUs.jsx";
import LogoStrip from "../components/LogoStrip.jsx";
import Services from "../components/Services.jsx";
import Testimonials from "../components/Testimonials.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import PricingPlan from "../components/PricingPlan.jsx";
import LatestBlog from "../components/LatestBlog.jsx";

export default function Home() {
  return (
    <>
      <Hero
        variant="home"
        title="Space Simplified, Storage Perfected"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor."
        welcome="Welcome to StorAid"
        buttonText="Discover More"
        buttonLink="/about"
        showImage
      />

      <AboutUs />
      <LogoStrip />
      <Services />
      <Testimonials />
      <WhyChooseUs />
      <PricingPlan />
      <LatestBlog />
    </>
  );
}