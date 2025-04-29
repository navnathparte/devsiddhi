import { motion, animate, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Props {
  show: boolean;
  message?: string;
  progress?: number; // Optional progress value (0-100)
}

const LoadingOverlay: React.FC<Props> = ({}) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const backgroundControls = useAnimation();
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Start continuous zoom in/out
    controls.start({
      scale: [1, 1.1, 1],
      //   rotateY: [0, 180],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
        repeatType: "loop",
      },
    });

    // Start counting
    const animation = animate(0, 100, {
      duration: 5,
      onUpdate: (v) => setCount(Math.floor(v)),
      onComplete: () => setIsDone(true), // Trigger collapse after count reaches 100
    });

    return () => animation.stop();
  }, []);

  // Collapse background after loading is done
  useEffect(() => {
    if (isDone) {
      backgroundControls.start({
        width: "0%",
        transition: { duration: 1, ease: "easeInOut" },
      });
    }
  }, [isDone]);

  return (
    <div className="fixed inset-0 w-screen h-screen flex flex-col justify-center items-center font-['Roboto'] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/city.jpg')" }}
        animate={backgroundControls}
      />

      {/* Flipping & Zooming Logo */}
      {!isDone && (
        <motion.img
          src="Devsiddhi-Logo-(2).png"
          alt="Devsiddhi Logo"
          className="w-150 h-80 mb-10"
          animate={controls}
          style={{ transformStyle: "preserve-3d" }}
        />
      )}

      {/* Counter at bottom */}
      {!isDone && (
        <div className="absolute bottom-10 text-center w-[200px]">
          <p className="text-[40px] font-thin text-[#f60d54]">loading</p>
          <h1 className="text-white text-[60px] mt-[-10px]">{count}%</h1>
          <hr
            className="mt-2 h-[1px] border-none bg-[#f60d54]"
            style={{ width: `${count}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default LoadingOverlay;
