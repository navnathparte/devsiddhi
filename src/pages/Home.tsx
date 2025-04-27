import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer"; // 👈 import

export default function Home() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [isSecondVideo, setIsSecondVideo] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5, // 50% visible
  });

  useEffect(() => {
    if (inView) {
      if (isSecondVideo) {
        video2Ref.current?.play().catch((err) => console.error(err));
      } else {
        video1Ref.current?.play().catch((err) => console.error(err));
      }
    } else {
      video1Ref.current?.pause();
      video2Ref.current?.pause();
    }
  }, [inView, isSecondVideo]);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    if (isSecondVideo && video2Ref.current) {
      video2Ref.current.muted = soundEnabled;
    } else if (video1Ref.current) {
      video1Ref.current.muted = soundEnabled;
    }
  };

  return (
    <div ref={ref} className="w-screen h-screen overflow-hidden relative">
      {/* Video Elements */}
      <video
        ref={video1Ref}
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          isSecondVideo ? "hidden" : "block"
        }`}
        playsInline
        controls={false}
        muted
        loop
      >
        <source src="/videos/webFelicia+WalkThrough.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <video
        ref={video2Ref}
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          isSecondVideo ? "block" : "hidden"
        }`}
        playsInline
        controls={false}
        muted
      >
        <source src="/videos/fableweb.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Sound Button */}
      <button
        onClick={toggleSound}
        className="absolute bottom-7 left-4 z-50 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition-all"
        aria-label={soundEnabled ? "Mute" : "Unmute"}
      >
        {soundEnabled ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
    </div>
  );
}
