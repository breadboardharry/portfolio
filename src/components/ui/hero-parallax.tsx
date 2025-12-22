"use client";
import {
  motion,
  useScroll,
  useSpring,
  useTransform
} from "motion/react";
import React, { ReactNode, isValidElement } from "react";

export const HeroParallax = ({ children }: { children: ReactNode }) => {
  const ref = React.useRef(null);

  const items = React.Children.toArray(children);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.175], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.175], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.175], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.175], [-700, 0]),
    springConfig
  );

  const firstRow = items.slice(0, 5).map((node) =>
    isValidElement(node)
      ? React.cloneElement(node, {
          translate: translateX,
        } as any)
      : node
  );
  const secondRow = items.slice(5, 10).map((node) =>
    isValidElement(node)
      ? React.cloneElement(node, {
          translate: translateXReverse,
        } as any)
      : node
  );
  const thirdRow = items.slice(10, 15).map((node) =>
    isValidElement(node)
      ? React.cloneElement(node, {
          translate: translateX,
        } as any)
      : node
  );

  return (
    <div
      ref={ref}
      className="h-[240vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};
