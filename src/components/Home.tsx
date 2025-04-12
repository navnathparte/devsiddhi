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
    <div className="home min-w-screen w-screen flex items-center justify-center relative">
      {/* First Video */}

      {/* Title Text */}
      <div className="z-10 relative text-center">
        <div>
          <h1 className="relative z-10 text-[150px] font-extrabold leading-[150px] m-0">
            <span className="block overflow-hidden px-[200px] leading-[160px]">
              <span className="block overflow-hidden transform -translate-x-1/2 -translate-y-1/2 tracking-wider text-transparent [text-shadow:8px_8px_#fff,20px_20px_#222] [--webkit-text-stroke-width:0px] [--webkit-text-stroke-color:#333]">
                Hello
              </span>
            </span>
          </h1>
        </div>
        <div className="absolute h-[170px] w-[200px] p-0 flex items-center justify-center text-white text-[18px] left-[620px] top-0 font-normal text-left rounded-full flex-col leading-[30px]">
          <p className="m-0">Welcome</p>
          <p className="m-0">to my site</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="absolute right-[60px] top-[calc(50vh-30px)] z-10">
        <button
          className="bg-white text-black font-bold py-2 px-4 rounded-xl shadow-md hover:bg-gray-200 transition"
          onClick={enableSound}
        >
          Enable Sound
        </button>
      </div>
    </div>
  );
};

export default Home;
