import { LightRays } from "@/components/ui/light-rays";
import image from "./../../../public/vue-ordinateur-personnel-au-look-retro.png";
import Section from "./section";

function HomeSection() {
  return (
    <Section>
      <LightRays />

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 size-96 flex items-center justify-center">
        <img src={image} />
        <div>
          <p className="whitespace-nowrap font-sans text-6xl font-semibold">
            Scribble From My Journal
          </p>
          <br />
          <p className="whitespace-nowrap text-2xl font-semibold">
            Scribble From My Journal
          </p>
        </div>
      </div>
    </Section>
  );
}

export default HomeSection;
