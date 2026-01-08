import { cn } from "@/libs/style";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { AmbiantLightProject } from "../projects/ambiant-light.project";
import { PowerbankProject } from "../projects/powerbank.project";
import { Project, ProjectThumbnail } from "../projects/project";
import Section from "./section";

const projects: Project[] = [new AmbiantLightProject(), new PowerbankProject()];

function PlaygroundSection({ className }: { className?: string }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const projects = gsap.utils.toArray<Element>(".project");

      // Make the items lasts 800px each
      projects.forEach((project) => {
        ScrollTrigger.create({
          trigger: project,
          start: "center center",
          end: "+=2000",
          pin: true,
          pinSpacing: true,
          scrub: true,
          toggleClass: { targets: project, className: "active" },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <Section id="playground" className={cn("min-h-dvh bg-black", className)}>
      <div className="bg-white flex flex-col items-center gap-16 rounded-4xl">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-medium">My playground</h2>
          <p className="text-xl text-center text-muted-foreground mt-6 max-w-[600px]">
            A selection of personal and experimental projects where I tinker and
            explore new ideas.
          </p>
        </div>

        <div className="flex flex-col items-center" ref={containerRef}>
          {projects.map((product, index) => (
            <div className="project w-[33vw] p-8 box-content" key={index}>
              <ProjectThumbnail
                key={index}
                project={product as Project}
                className="w-full aspect-video"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default PlaygroundSection;
