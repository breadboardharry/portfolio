import { fullname } from "@/data";
import { cn } from "@/libs/style";
import { ArrowDownIcon } from "lucide-react";
import Section from "./section";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

function HomeSection({ className }: { className?: string }) {
  return (
    <Section className={cn("h-dvh min-dvh", className)}>
      <div className="section-content h-full">
        <div className="relative z-10 section-inner h-full flex flex-col items-center justify-center gap-2 lg:gap-0">
          <h1 className="whitespace-nowrap leading-none text-4xl md:text-[70px] lg:text-[100px] xl:text-[120px] opacity-80 font-medium">
            I TURN IDEAS
          </h1>
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
