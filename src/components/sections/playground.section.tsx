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
      const projectNavbar = document.querySelector(".project-navbar");

      ScrollTrigger.create({
        trigger: projectNavbar,
        start: "top top+=80px",
        end: `+=${projects.length * 1000}px`,
        pin: true,
        scrub: true,
        onEnter: () => {
          gsap.to(projectNavbar, { scale: 1.15 });
        },
        onLeaveBack: () => {
          gsap.to(projectNavbar, { scale: 1 });
        },
      });

      // projects.forEach((project) => {
      //   ScrollTrigger.create({
      //     trigger: project,
      //     start: "center center",
      //     end: "+=1000",
      //     pin: true,
      //     pinSpacing: true,
      //     scrub: true,
      //     toggleClass: { targets: project, className: "active" },
      //   });
      // });
    },
    { scope: containerRef },
  );

  return (
    <Section
      id="playground"
      className={cn("bg-background w-full px-12 flex flex-col items-center", className)}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-medium text-black">My playground</h2>
        <p className="text-xl text-center text-muted-foreground mt-6 max-w-[600px]">
          A selection of personal and experimental projects where I tinker and
          explore new ideas.
        </p>
      </div>

      <div className="min-h-dvh max-w-[1200px] w-full my-12 grid grid-cols-6 grid-rows-12 gap-4 text-black">
        <div className="col-span-6 row-span-5 col-start-1 row-start-1">
          <ProjectThumbnail
            project={new PowerbankProject()}
            className="size-full"
          />
        </div>
        <div className="col-span-3 row-span-4 col-start-4 row-start-6">
          <ProjectThumbnail
            project={new AmbiantLightProject()}
            className="size-full border-8 opacity-50 hover:opacity-100"
          />
        </div>
        <div className="col-span-3 row-span-4 col-start-1 row-start-6">
          <ProjectThumbnail
            project={new PowerbankProject()}
            className="size-full border-8 opacity-50 hover:opacity-100"
          />
        </div>
        <div className="col-span-2 row-span-3 col-start-1 row-start-10">
          <ProjectThumbnail
            project={new AmbiantLightProject()}
            className="size-full border-8 opacity-50 hover:opacity-100"
          />
        </div>
        <div className="col-span-2 row-span-3 col-start-3 row-start-10">
          <ProjectThumbnail
            project={new PowerbankProject()}
            className="size-full border-8 opacity-50 hover:opacity-100"
          />
        </div>
        <div className="col-span-2 row-span-3 col-start-5 row-start-10">
          <ProjectThumbnail
            project={new AmbiantLightProject()}
            className="size-full border-8 opacity-50 hover:opacity-100"
          />
        </div>
      </div>
    </Section>
  );
}

export default PlaygroundSection;
