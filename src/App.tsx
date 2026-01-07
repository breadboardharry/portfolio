import { useRef } from "react";
import AboutSection from "./components/sections/about.section";
import ContactSection from "./components/sections/contact.section";
// import { motion, useMotionValue, useSpring } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MorphSVGPlugin, ScrollSmoother, ScrollTrigger } from "gsap/all";
import HomeSection from "./components/sections/home.section";
import PlaygroundSection from "./components/sections/playground.section";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, MorphSVGPlugin);

// Render childrens
function App() {
  const scrollWrapperRef = useRef(null);

  useGSAP(
    () => {


      ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        normalizeScroll: true,
      });
    },

    { scope: scrollWrapperRef }
  );

  return (
    <div
      ref={scrollWrapperRef}
      id="smooth-wrapper"
      // className="!cursor-none"
      // className="w-full h-full relative"
    >
      <div
        id="smooth-content"
        //     className="w-full h-full overflow-visible
        //  relative before:absolute before:top-0 before:left-0 before:w-full
        //  before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none
        //  before:bg-[url('https://www.ui-layouts.com/noise.gif')]"
      >
        {/* <div className="flair flair--3 size-4 fixed top-0 left-0 z-50 rounded-full bg-gray-400 pointer-events-none"></div> */}

        {/* <Navbar /> */}
        <HomeSection />
        <AboutSection />
        <PlaygroundSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
