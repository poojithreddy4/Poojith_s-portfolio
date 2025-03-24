"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";
import Project from "./Project/Project";
import Services from "./Services/Services";
import Skill from "./Skills/Skill";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Education />
      {/* <About /> */}
      <Experience />
      <Services />
      <Project />
      <Skill />
      {/* <Review /> */}
      <Contact />
    </div>
  );
};

export default Home;
