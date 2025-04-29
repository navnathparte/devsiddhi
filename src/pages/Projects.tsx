"use client";

import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

interface ImageItem {
  src: string;
  title: string;
  caption: string;
}

const images: ImageItem[] = [
  {
    src: "/assets/green-min.jpg",
    title: "Devsiddhi Green",
    caption: "Green Nature",
  },
  {
    src: "/assets/fable-min.jpg",
    title: "Devsiddhi Fantasy",
    caption: "Fantasy Fable",
  },
  {
    src: "/assets/felicia-min.jpg",
    title: "Devsiddhi Felicia",
    caption: "Felicia Portrait",
  },
  {
    src: "/assets/Fabula-min.jpg",
    title: "Devsiddhi Fabula",
    caption: "Fabula Lights",
  },
];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface ProjectSlideProps {
  data: ImageItem;
  index: number;
}

function ProjectSlide({ data }: ProjectSlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);

  return (
    <section
      ref={ref}
      className="h-screen snap-start flex flex-col md:flex-row justify-center items-center px-6 gap-10"
    >
      {/* Image */}
      <div className="w-[600px] h-[400px] rounded-xl overflow-hidden shadow-lg">
        <img
          src={data.src}
          alt={data.caption}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-md flex flex-col gap-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#B68842]"
        >
          {data.title}
        </motion.h2>
        <p className="text-gray-800">
          This is a brief overview of the project. It showcases some of the best
          work I've done using React, Tailwind, and other technologies.
        </p>
        <ul className="text-[#B68842] space-y-1">
          <li>
            <strong>Client:</strong> {data.caption}
          </li>
        </ul>
      </div>

      {/* Optional Number */}
      <motion.span
        style={{ y }}
        className="absolute right-10 top-1/2 text-[#B68842] text-4xl font-mono hidden md:block"
      ></motion.span>
    </section>
  );
}

export default function ProjectsParallax() {
  return (
    <div
      className="snap-y snap-mandatory overflow-y-scroll h-screen"
      style={{ scrollbarWidth: "none" }}
    >
      {images.map((item, index) => (
        <ProjectSlide key={index} data={item} index={index} />
      ))}
    </div>
  );
}
