import { cn } from "@/libs/style";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { AmbiantLightProject } from "../projects/ambiant-light.project";
import { PowerbankProject } from "../projects/powerbank.project";
import { Project, ProjectThumbnail } from "../projects/project";
import Section from "./section";
import { Button } from "../ui/button";
import { BinaryIcon, CircuitBoardIcon, FlaskConicalIcon } from "lucide-react";

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
    { scope: containerRef }
  );

  return (
    <Section id="playground" className={cn("", className)}>
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-medium text-black">My playground</h2>
        <p className="text-xl text-center text-muted-foreground mt-6 max-w-[600px]">
          A selection of personal and experimental projects where I tinker and
          explore new ideas.
        </p>
      </div>

      <div className="flex flex-col items-center" ref={containerRef}>
        <div className="project-navbar z-20">
          <ul className="flex gap-2">
            <li>
              <Button>
                <BinaryIcon />
                Software
              </Button>
            </li>
            <li>
              <Button>
                <CircuitBoardIcon />
                Hardware
              </Button>
            </li>
            <li>
              <Button>
                <FlaskConicalIcon />
                Others
              </Button>
            </li>
          </ul>
        </div>

        {projects.map((product, index) => (
          <div className="project p-8 flex gap-8" key={index}>
            <ProjectThumbnail
              key={index}
              project={product as Project}
              className="w-full aspect-video basis-1/3"
            />
            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, reprehenderit recusandae consequatur error tempora praesentium! Possimus doloremque voluptatum sequi quidem nostrum inventore ducimus similique excepturi pariatur dolor, repellat culpa ab.</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default PlaygroundSection;
