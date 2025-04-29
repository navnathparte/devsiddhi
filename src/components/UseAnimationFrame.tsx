// UseAnimationFrame.tsx
"use client";

import { useAnimationFrame } from "framer-motion";
import { useRef, CSSProperties } from "react";

interface Props {
  style?: CSSProperties;
}

export default function UseAnimationFrame({ style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div
      className="absolute w-[100px] h-[100px]"
      style={{ perspective: "800px", ...style }}
    >
      <div
        ref={ref}
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        {[
          { transform: "rotateY(0deg) translateZ(50px)", bg: "bg-red-500" },
          { transform: "rotateY(90deg) translateZ(50px)", bg: "bg-green-500" },
          { transform: "rotateY(180deg) translateZ(50px)", bg: "bg-blue-500" },
          {
            transform: "rotateY(-90deg) translateZ(50px)",
            bg: "bg-yellow-500",
          },
          { transform: "rotateX(90deg) translateZ(50px)", bg: "bg-purple-500" },
          { transform: "rotateX(-90deg) translateZ(50px)", bg: "bg-pink-500" },
        ].map((side, i) => (
          <div
            key={i}
            className={`absolute w-full h-full ${side.bg} opacity-60`}
            style={{ transform: side.transform }}
          />
        ))}
      </div>
    </div>
  );
}
