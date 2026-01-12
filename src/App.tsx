import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MorphSVGPlugin, ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";
import { useRef } from "react";
import { Cursor } from "./components/cursor/cursor";
import Footer from "./components/sections/footer.section";
import { Header } from "./components/sections/header";
import HomeSection from "./components/sections/home.section";
import PlaygroundSection from "./components/sections/playground.section";
import { Toaster } from "./components/ui/sonner";
import { useHasFinePointer } from "./hooks/use-fine-pointer";

gsap.registerPlugin(useGSAP, ScrollTrigger, MorphSVGPlugin);

// Render childrens
function App() {
  const lenisRef = useRef(null);

  const hasFinePointer = useHasFinePointer();

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>("section");
    panels.pop();

    panels.forEach((panel) => {
      // Get the element holding the content inside the panel
      const innerpanel = panel.querySelector<HTMLElement>(".section-inner");
      if (!innerpanel) return;

      // Get the Height of the content inside the panel
      const panelHeight = innerpanel.offsetHeight;

      // Get the window height
      const windowHeight = window.innerHeight;

      const difference = panelHeight - windowHeight;

      // ratio (between 0 and 1) representing the portion of the overall animation that's for the fake-scrolling. We know that the scale & fade should happen over the course of 1 windowHeight, so we can figure out the ratio based on how far we must fake-scroll
      const fakeScrollRatio =
        difference > 0 ? difference / (difference + windowHeight) : 0;

      // if we need to fake scroll (because the panel is taller than the window), add the appropriate amount of margin to the bottom so that the next element comes in at the proper time.
      if (fakeScrollRatio) {
        panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "bottom bottom",
          end: () =>
            fakeScrollRatio ? `+=${innerpanel.offsetHeight}` : "bottom top",
          pinSpacing: false,
          pin: true,
          scrub: true,
        },
      });

      // fake scroll. We use 1 because that's what the rest of the timeline consists of (0.9 scale + 0.1 fade)
      if (fakeScrollRatio) {
        tl.to(innerpanel, {
          yPercent: -100,
          y: window.innerHeight,
          duration: 1 / (1 - fakeScrollRatio) - 1,
          ease: "none",
        });
      }
      tl.fromTo(
        panel,
        { scale: 1, opacity: 1 },
        { scale: 0.7, opacity: 0.5, duration: 0.9 }
      ).to(panel, { opacity: 0, duration: 0.1 });
    });
  });

  return (
    <>
      <ReactLenis root ref={lenisRef} />

      <Header className="fixed top-0 z-30 abcd" />

      {/* CUSTOM POINTER ON NON-TOUCHSCREENS DEVICES */}
      {hasFinePointer && <Cursor />}

      <Toaster />

      <div className="relative bg-black w-full h-min z-10">
        <HomeSection className="bg-black" />
      </div>
      <PlaygroundSection className="z-10" />

      {/* FOOTER-LOCKER */}
      <div className="h-dvh w-full pointer-events-none"></div>

      <Footer className="fixed bottom-0 z-0" />
    </>
  );
}

export default App;
