import { useRef, useState, useEffect } from "react";

export default function Home() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const video1 = video1Ref.current;
    if (video1) {
      video1.muted = true;
      video1.play().catch((err) => {
        console.error("Error auto-playing first video:", err);
      });

      video1.addEventListener("ended", () => {
        setShowSecondVideo(true);
      });
    }
  }, []);

  useEffect(() => {
    if (showSecondVideo && video2Ref.current) {
      const video2 = video2Ref.current;
      video2.muted = !soundEnabled;
      video2.play().catch((err) => {
        console.error("Error playing second video:", err);
      });
    }
  }, [showSecondVideo, soundEnabled]);

  const toggleSound = () => {
    const newSoundEnabled = !soundEnabled;
    setSoundEnabled(newSoundEnabled);

    if (showSecondVideo && video2Ref.current) {
      video2Ref.current.muted = !newSoundEnabled;
    } else if (video1Ref.current) {
      video1Ref.current.muted = !newSoundEnabled;
    }
  };

  return (
    <div className="w-screen h-screen overflow-hidden fixed top-0 left-0">
      <button
        onClick={toggleSound}
        className="absolute bottom-7 right-4 z-20 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition-all"
        aria-label={soundEnabled ? "Mute" : "Unmute"}
      >
        {soundEnabled ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>

      <video
        ref={video1Ref}
        className={`w-full h-full object-cover ${
          showSecondVideo ? "hidden" : "block"
        }`}
        playsInline
        controls={false}
        muted
      >
        <source src="/videos/fableweb.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <video
        ref={video2Ref}
        className={`w-full h-full object-cover ${
          showSecondVideo ? "block" : "hidden"
        }`}
        playsInline
        controls={false}
        loop
        muted
      >
        <source src="/videos/webFelicia+WalkThrough.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
