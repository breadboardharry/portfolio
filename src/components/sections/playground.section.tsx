import { AmbiantLightProject } from "../projects/ambiant-light.project";
import { PowerbankProject } from "../projects/powerbank.project";
import {
  Project,
  ProjectThumbnail,
  ThumbnailTemplate,
} from "../projects/project";
import { HeroParallax } from "../ui/hero-parallax";
import Section from "./section";

export const products = [
  new AmbiantLightProject(),
  new PowerbankProject(),
  {
    title: "Cursor",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

function PlaygroundSection() {
  return (
    <Section
      id="playground"
      className="bg-[#f7f5fb] dark:bg-[#080a04] h-auto pb-0"
    >
      <HeroParallax>
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
      </HeroParallax>
    </Section>
  );
}

export default PlaygroundSection;
