import { fullname } from "@/data";
import { cn } from "@/libs/style";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDownIcon } from "lucide-react";
import Section from "./section";

function HomeSection({ className }: { className?: string }) {
  useGSAP(() => {
    gsap.from("#path", {
      drawSVG: 0,
      duration: 2,
      ease: "power1.inOut",
    });

    gsap.from("#path2", {
      drawSVG: 0,
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.from("#path3", {
      drawSVG: 0,
      duration: 1,
      delay: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <Section className={cn("h-dvh min-dvh", className)}>
      <div className="section-content h-full">
        <div className="relative z-10 section-inner h-full flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-14 xl:gap-16">
          <h1 className="whitespace-nowrap leading-none text-4xl md:text-[70px] lg:text-[100px] xl:text-[120px] opacity-80 font-medium">
            I TURN IDEAS
          </h1>
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[43%] xl:-translate-y-[44%] size-48 md:size-72 lg:size-96 xl:size-[480px]"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 256 256"
            // style="enable-background:new 0 0 516.3 211.99;"
            xmlSpace="preserve"
          >
            <path
              id="path2"
              className="fill-none stroke-3 stroke-gray-200"
              style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
              d="M103.92,82.26c-0.2,0.04-0.34,0.21-0.45,0.38c-0.23,0.36-0.37,0.84-0.15,1.21c0.14,0.24,0.4,0.39,0.67,0.42
			c0.27,0.04,0.55-0.03,0.79-0.15c0.23-0.11,0.44-0.28,0.58-0.5c0.18-0.29,0.2-0.66,0.13-1c-0.04-0.17-0.1-0.34-0.22-0.46
			c-0.22-0.23-0.59-0.27-0.9-0.18s-0.57,0.29-0.82,0.49"
            />
            <path
              id="path3"
              className="fill-none stroke-3 stroke-gray-200"
              style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
              d="M133.31,87.35c12.29-2.3,24.69-4.08,37.13-5.34"
            />

            <path
              id="path"
              className="fill-none stroke-4 stroke-gray-200"
              style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
              d="M85.5,102.5c1.99-0.13,3.25-0.71,4.98-1.7c4.02-2.3,6.44-5.83,9.37-9.03c-2.81,4.12-4.93,8.72-6.23,13.53
			c-0.71,2.63-1.17,5.46-0.37,8.07c0.23,0.73,0.57,1.46,1.16,1.95c0.91,0.75,2.25,0.8,3.35,0.37c1.1-0.42,2-1.24,2.8-2.11
			c6.25-6.73,8.54-16.03,16.34-20.88c0.59-0.37,1.38-0.69,1.94-0.28c0.3,0.22,0.44,0.59,0.53,0.95c0.5,1.89,0.19,2.89-0.2,4.81
			c-1.25,6.12-3.33,12.08-6.14,17.66c4.47-8.34,7.58-17.31,15.56-22.64c0.8-0.53,1.85-1.03,2.68-0.53c1.02,0.62,0.79,2.15,0.42,3.28
			c-1.82,5.69-3.64,10.37-5.47,16.06c-0.25,0.77-0.48,1.63-0.11,2.35c0.42,0.81,1.51,1.08,2.39,0.82c0.88-0.25,1.58-0.9,2.21-1.56
			c2.38-2.49,4.25-5.41,6.11-8.31c6-9.38,12.04-18.84,16.14-29.19c-1.69,4.06-3.39,8.12-5.08,12.18c-2.01,4.81-4.02,9.64-5.51,14.64
			c-0.88,2.95-1.57,8.04-1.17,11.09c0.08,0.61,0.22,1.25,0.64,1.71c1.05,1.16,2.97,0.45,4.26-0.44c3.58-2.49,6.48-7.96,8.3-11.93
			c-0.79,2.17-1.4,4.4-1.8,6.67c-0.16,0.93-0.29,1.9-0.04,2.82c0.49,1.76,2.38,2.88,4.21,2.95c1.83,0.07,3.59-0.72,5.13-1.71
			c3.24-2.08,5.86-5.14,7.4-8.66c0.98-2.24,1.55-5.7,1.38-8.14c-0.11-1.56-0.57-3.19-1.76-4.21c-2.27-1.94-5.81-0.68-8.15,1.17
			c-3.11,2.45-5.49,6.82-6.76,10.57"
            />
          </svg>
          <h1 className="whitespace-nowrap leading-none text-6xl md:text-[110px] lg:text-[150px] xl:text-[200px] font-semibold tracking-tight">
            PRODUCTS
          </h1>

          {/* CALL TO SCROLL */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <ArrowDownIcon className="size-8 lg:size-12" />
          </div>

          <div className="absolute bottom-24 md:bottom-6 left-8 right-8 z-0 flex flex-col items-center md:flex-row justify-between">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="md:hidden font-medium text-md">{fullname}</h3>
              <h3 className="font-medium text-md md:text-xl lg:text-2xl">
                PASSIONNATE
              </h3>
              <h3 className="font-medium text-md md:text-xl lg:text-2xl">
                FRENCH ENGINEER
              </h3>
            </div>

            <div className="hidden md:block">
              <h3 className="font-medium text-md md:text-xl lg:text-2xl">
                FULLSTACK WEB,
                <br /> ELECTRONICS & MORE
              </h3>
            </div>
          </div>
        </div>

        {/* <FlickeringGrid
          className="absolute top-0 left-0 w-full h-full inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#ffffff"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={1000}
          width={1000}
        /> */}
      </div>
    </Section>
  );
}

export default HomeSection;
