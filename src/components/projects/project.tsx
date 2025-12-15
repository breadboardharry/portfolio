"use client";
import { MotionValue, motion } from "motion/react";
import { ReactNode } from "react";

export abstract class Project {
  abstract thumbnail(props: { translate?: MotionValue<number> }): JSX.Element;
}

export function ThumbnailFrame({
  translate,
  children,
}: {
  translate?: MotionValue<number>;
  children: ReactNode;
}) {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      className="group/product h-[25rem] w-[40rem] relative shrink-0 rounded-xl overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

export function ThumbnailTemplate({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate?: MotionValue<number>;
}) {
  return (
    <ThumbnailFrame key={product.title} translate={translate}>
      <a href={product.link} className="block group-hover/product:shadow-2xl cursor-none">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-10 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </ThumbnailFrame>
  );
}
