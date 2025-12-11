import { AuroraText } from "@/components/ui/aurora-text";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import Section from "./section";

function AboutSection() {
  return (
    <Section id="about" className="bg-[#080a04] dark:bg-[#f7f5fb] ">
      <h1 className="text-5xl text-background dark:text-foreground leading-none font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl">
        ABOUT
        <LineShadowText className="italic" shadowColor="black">
          ME
        </LineShadowText>
      </h1>

      <AuroraText>Welcome to my Portfolio</AuroraText>
    </Section>
  );
}

export default AboutSection;
