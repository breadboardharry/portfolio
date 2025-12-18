import { motion } from "motion/react";
import { Navbar } from "./components/navbar";
import AboutSection from "./components/sections/about.section";
import ContactSection from "./components/sections/contact.section";
import HomeSection from "./components/sections/home.section";
// import { motion, useMotionValue, useSpring } from "framer-motion";
import PlaygroundSection from "./components/sections/playground.section";
import { Pointer } from "@/components/ui/pointer";

// Render childrens
function App() {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     smoothWheel: true,
  //   });

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => lenis.destroy();
  // }, []);

  return (
    <div
      className="w-full h-full flex flex-col
    relative before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none
     before:bg-[url('https://www.ui-layouts.com/noise.gif')]"
    >
      <Pointer />

      <Navbar />
      <HomeSection />
      <AboutSection />
      <PlaygroundSection />
      <ContactSection />
    </div>
  );
}

export default App;
