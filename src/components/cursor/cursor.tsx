import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRightIcon, EyeIcon } from "lucide-react";
import { useRef } from "react";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Make cursor follow mouse
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(".cursor", "x", {
        duration: 0.2,
        ease: "elastic",
      }),
      yTo = gsap.quickTo(".cursor", "y", { duration: 0.2, ease: "elastic" });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  });

  useGSAP(() => {
    // Change cursor on hover
    const buttons = document.querySelectorAll<HTMLElement>(
      'button:not(.see-more), a:not([target="_blank"])'
    ); // Select a without _blank target
    const anchors =
      document.querySelectorAll<HTMLElement>('a[target="_blank"]');
    const seeMoreButtons =
      document.querySelectorAll<HTMLElement>("button.see-more");

    console.log(seeMoreButtons.length);

    const showDefaultCursor = () => {
      cursorRef.current?.classList.add("mix-blend-difference");

      gsap.to(".cursor-default", {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
      });

      gsap.to(".cursor-open", {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: "power1.out",
      });

      gsap.to(".cursor-see-more", {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: "power1.out",
      });
    };
    const showOpenCursor = () => {
      cursorRef.current?.classList.remove("mix-blend-difference");

      gsap.to(".cursor-default", {
        scale: 0,
        opacity: 0.5,
        duration: 0.3,
        ease: "power1.out",
      });

      gsap.to(".cursor-open", {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
      });

      gsap.to(".cursor-see-more", {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: "power1.out",
      });
    };
    const showSeeMoreCursor = () => {
      cursorRef.current?.classList.remove("mix-blend-difference");

      gsap.to(".cursor-default", {
        scale: 0,
        opacity: 0.5,
        duration: 0.3,
        ease: "power1.out",
      });

      gsap.to(".cursor-see-more", {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
      });

      gsap.to(".cursor-open", {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    showDefaultCursor();

    gsap
      .to(".cursor-default", {
        scale: 1,
        translateX: "-0.25rem",
        translateY: 0,
        duration: 0.3,
        ease: "power1.out",
      })
      .pause();

    anchors.forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        showOpenCursor();
      });

      elem.addEventListener("mouseleave", () => {
        showDefaultCursor();
      });
    });

    buttons.forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        gsap.to(".cursor-default", {
          scale: 1.5,
          translateX: "0.1rem",
          translateY: "0.4rem",
          duration: 0.3,
          ease: "power1.out",
        });
      });

      elem.addEventListener("mouseleave", () => {
        gsap.to(".cursor-default", {
          scale: 1,
          translateX: "-0.25rem",
          translateY: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      });
    });

    seeMoreButtons.forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        showSeeMoreCursor();
      });

      elem.addEventListener("mouseleave", () => {
        showDefaultCursor();
      });
    });
  });

  return (
    <div
      className="cursor fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      ref={cursorRef}
    >
      <svg
        className="cursor-default size-7 absolute -translate-x-1 fill-white"
        version="1.2"
        baseProfile="tiny"
        id="Calque_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
      >
        <path
          d="M19.92,23.76c2.97-1.88,6.13-3.22,9.35-4.07c2.55-0.67,3.04-4.08,0.79-5.46L10.62,2.33C6.8-0.01,4.07,1.72,4.55,6.17
	l2.43,22.68c0.28,2.62,3.57,3.64,5.27,1.62C14.39,27.91,16.95,25.64,19.92,23.76z"
        />
      </svg>

      <div className="cursor-open px-2 pl-2.5 py-1.5 absolute rounded-lg bg-white text-black text-sm font-semibold uppercase flex items-center gap-1 -translate-x-1/2 -translate-y-1/2">
        Open
        <ArrowUpRightIcon className="size-5" />
      </div>

      <div className="cursor-see-more px-2.5 py-1.5 absolute rounded-lg bg-white text-black text-sm text-nowrap font-semibold uppercase flex items-center -translate-x-1/2 -translate-y-1/2">
        See more
      </div>
    </div>
  );
}
