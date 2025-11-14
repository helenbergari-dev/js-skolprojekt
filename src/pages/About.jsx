

import Hero from "../components/Hero.jsx";
import AboutUs from "../components/AboutUs.jsx";
import LogoStrip from "../components/LogoStrip.jsx";
import Testimonials from "../components/Testimonials.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";

export default function About() {
  return (
    <>
      <Hero
        variant="about"
        title="About Us"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        welcome=""
        buttonText=""
        showImage={false}
      />

      <AboutUs />
      <LogoStrip />
      <Testimonials />
      <WhyChooseUs />
    </>
  );
}