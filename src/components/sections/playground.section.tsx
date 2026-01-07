import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { AmbiantLightProject } from "../projects/ambiant-light.project";
import { PowerbankProject } from "../projects/powerbank.project";
import Section from "./section";
import {
  Project,
  ProjectThumbnail,
  ThumbnailTemplate,
} from "../projects/project";

export const products = [
  new AmbiantLightProject(),
  new PowerbankProject(),
  {
    title: "Cursor",
    thumbnailImageURL:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    thumbnailImageURL:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    thumbnailImageURL:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    thumbnailImageURL:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    thumbnailImageURL:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
];

function PlaygroundSection() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const horizontalSections = gsap.utils.toArray(".horiz-gallery-wrapper");

      horizontalSections.forEach((sec: Element) => {
        const pinWrap = sec.querySelector(".horiz-gallery-strip");

        let pinWrapWidth: number;
        let horizontalScrollLength: number;

        function refresh() {
          pinWrapWidth = pinWrap!.scrollWidth;
          horizontalScrollLength = pinWrapWidth - window.innerWidth;
        }

        refresh();
        // Pinning and horizontal scrolling
        gsap.to(pinWrap, {
          scrollTrigger: {
            scrub: true,
            trigger: sec,
            pin: sec,
            start: "center center",
            end: () => `+=${pinWrapWidth}`,
            invalidateOnRefresh: true,
          },
          x: () => -horizontalScrollLength,
          ease: "none",
        });

        ScrollTrigger.addEventListener("refreshInit", refresh);
      });
    },
    { scope: containerRef }
  );

  return (
    <Section
      id="playground"
      className="bg-[#f7f5fb] dark:bg-[#080a04] min-h-dvh"
    >
      {/* <HeroParallax>
        {products.map((product, index) => {
          const isProject = product instanceof Project;

          if (isProject) {
            return (
              <ProjectThumbnail key={index} project={product as Project} />
            );
          }

          return (
            <ThumbnailTemplate
              key={index}
              title={product.title}
              thumbnail={product.thumbnail}
            >
              <p>dd</p>
            </ThumbnailTemplate>
          );
        })}
      </HeroParallax> */}

      <div className="container-fluid w-full px-0 mx-auto" ref={containerRef}>
        <div className="horiz-gallery-wrapper flex flex-nowrap will-change-transform relative">
          <div className="horiz-gallery-strip flex flex-nowrap will-change-transform relative">
            {products.map((product, index) => {
              const isProject = product instanceof Project;

              let elem = null;
              if (isProject) {
                elem = (
                  <ProjectThumbnail key={index} project={product as Project} />
                );
              } else {
                elem = (
                  <ThumbnailTemplate
                    key={index}
                    title={product.title}
                    thumbnail={product.thumbnailImageURL}
                  >
                    <p>dd</p>
                  </ThumbnailTemplate>
                );
              }

              return (
                <div
                  className="project-wrap w-[50vw] p-8 box-content"
                  key={index}
                >
                  {elem}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default PlaygroundSection;
