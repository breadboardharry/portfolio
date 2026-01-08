import { cn } from "@/libs/style";
import { ArrowDownIcon } from "lucide-react";
import Section from "./section";

function HomeSection({ className }: { className?: string }) {
  return (
    <Section className={cn("h-dvh", className)}>
      <div className="section-content h-full">
        <div className="section-inner h-full flex flex-col items-center justify-center ">
          <h1 className="whitespace-nowrap leading-none text-[120px] opacity-80 font-medium">
            I TURN IDEAS
          </h1>
          <h1 className="whitespace-nowrap leading-none text-[200px] font-semibold tracking-tight">
            PRODUCTS
          </h1>

          {/* CALL TO SCROLL */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <ArrowDownIcon />
          </div>

          <div className="absolute bottom-6 left-8 right-8 z-0 flex justify-between">
            <div>
              <h3 className="font-medium text-lg">PASSIONNATE</h3>
              <h3 className="font-medium text-lg">FRENCH ENGINEER</h3>
            </div>
            <div>
              <h3 className="font-medium text-lg">
                FULLSTACK WEB,
                <br /> ELECTRONICS & MORE
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HomeSection;
