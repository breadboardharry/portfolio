"use client";
import { MotionValue } from "motion/react";
import { Project, ThumbnailFrame } from "./project";

export class PowerbankProject extends Project {
  thumbnail({ translate }: { translate?: MotionValue<number> }): JSX.Element {
    return (
      <ThumbnailFrame translate={translate}>
        <button className="block group-hover/product:shadow-2xl cursor-none">
          <img
            src={
              "https://aceternity.com/images/products/thumbnails/new/moonbeam.png"
            }
            height="600"
            width="600"
            className="object-cover object-left-top absolute h-full w-full inset-0"
            alt={"WAWWWWWW"}
          />
        </button>
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-10 bg-black pointer-events-none"></div>
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
          {"WAWWWWWW"}
        </h2>
      </ThumbnailFrame>
    );
  }
}
