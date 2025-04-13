import { useRef, useEffect, useState } from "react";

const Home: React.FC = () => {
  const firstVideoRef = useRef<HTMLVideoElement | null>(null);
  const secondVideoRef = useRef<HTMLVideoElement | null>(null);
  const [activeVideo, setActiveVideo] = useState<number>(1);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  useEffect(() => {
    if (firstVideoRef.current) {
      firstVideoRef.current.onended = () => {
        setActiveVideo(2);
        if (secondVideoRef.current) {
          secondVideoRef.current.currentTime = 0;
          secondVideoRef.current.muted = !soundEnabled;
          secondVideoRef.current
            .play()
            .catch((e) => console.log("Failed to play second video:", e));
        }
      };
    }

    if (secondVideoRef.current) {
      secondVideoRef.current.onended = () => {
        setActiveVideo(1);
        if (firstVideoRef.current) {
          firstVideoRef.current.currentTime = 0;
          firstVideoRef.current.muted = !soundEnabled;
          firstVideoRef.current
            .play()
            .catch((e) => console.log("Failed to play first video:", e));
        }
      };
    }

    if (firstVideoRef.current) {
      firstVideoRef.current
        .play()
        .catch((e) => console.log("Initial play failed:", e));
    }
  }, [soundEnabled]);

  const enableSound = () => {
    setSoundEnabled(true);
    if (activeVideo === 1 && firstVideoRef.current) {
      firstVideoRef.current.muted = false;
    } else if (activeVideo === 2 && secondVideoRef.current) {
      secondVideoRef.current.muted = false;
    }
  };

  useEffect(() => {
    const handleInteraction = () => {
      enableSound();
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, [activeVideo]);

  return (
    <div className="w-full h-full relative">
      <video
        ref={firstVideoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{ display: activeVideo === 1 ? "block" : "none" }}
      >
        <source src="videos/fableweb.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <video
        ref={secondVideoRef}
        className="w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
        style={{ display: activeVideo === 2 ? "block" : "none" }}
      >
        <source src="videos/webFeliciaWalkThrough.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
