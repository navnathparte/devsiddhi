import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import LoadingOverlay from "../components/LoadingOverlay"; // Make sure this path is correct

export default function Home() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [isSecondVideo, setIsSecondVideo] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const handleToggleVideo = () => {
    setIsSecondVideo(!isSecondVideo);
  };

  useEffect(() => {
    if (isLoading) return;

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
  }, [inView, isSecondVideo, isLoading]);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
    const currentVideo = isSecondVideo ? video2Ref.current : video1Ref.current;
    if (currentVideo) {
      currentVideo.muted = !soundEnabled;
    }
  };

  return (
    <div ref={ref} className="w-screen h-screen overflow-hidden relative">
      <LoadingOverlay show={isLoading} message="Devsidhhi" />
      {!isLoading && (
        <>
          {/* <video
            ref={video1Ref}
            className={`absolute top-0 left-0 w-full h-full object-cover ${
              isSecondVideo ? "hidden" : "block"
            }`}
            playsInline
            controls={false}
            muted
            loop
          >
            <source
              src="/videos/webFelicia+WalkThrough.webm"
              type="video/webm"
            />
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

          <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 z-20 bg-[#bfbfb8] bg-opacity-30 rounded-xl shadow-xl flex items-center px-4 py-3 md:max-w-lg w-full justify-between">
            <div className="flex w-full">
              <div className="w-1/2 pr-4 border-r border-[#13252B] flex flex-col justify-center items-center">
                {!isSecondVideo ? (
                  <>
                    <img
                      src="/Fable-Logo.png"
                      alt="Fable-Logo"
                      className="h-30 w-30"
                    />
                  </>
                ) : (
                  <>
                    <img
                      src="/FeliciaLogo.png"
                      alt="FeliciaLogo"
                      className="h-25 w-35"
                    />
                  </>
                )}
              </div>

              <div className="w-1/2 pl-4 flex justify-between items-center">
                <div>
                  {!isSecondVideo ? (
                    <>
                      <div className="text-sm font-medium text-black">
                        THE TIMELESS MASTERPIECE
                      </div>
                      <div className="text-xs text-[#7a7a75] mt-1">
                        A RARE JEWEL, HIDDEN IN TIME’S EMBRACE
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-sm font-medium text-black">
                        AN ARCHITECTURE MARVEL. A STATEMENT OF EXCELLENCE.
                      </div>
                    </>
                  )}
                </div>

                <button
                  onClick={handleToggleVideo}
                  className="ml-4 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div> */}

          <button
            onClick={toggleSound}
            className="absolute bottom-7 right-4 z-20 bg-black bg-opacity-60 text-white p-3 rounded-full hover:bg-opacity-80 transition-all"
            aria-label={soundEnabled ? "Mute" : "Unmute"}
          >
            {!soundEnabled ? (
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

          <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 z-20 bg-[#bfbfb8] bg-opacity-30 rounded-xl shadow-xl flex items-center px-4 py-3 md:max-w-lg w-full justify-between">
            <div className="flex w-full">
              <div className="w-1/2 pr-4 border-r border-[#13252B] flex flex-col justify-center items-center">
                {!isSecondVideo ? (
                  <>
                    <img
                      src="/Fable-Logo.png"
                      alt="Fable-Logo"
                      className="h-30 w-30"
                    />
                  </>
                ) : (
                  <>
                    <img
                      src="/FeliciaLogo.png"
                      alt="FeliciaLogo"
                      className="h-25 w-35"
                    />
                  </>
                )}
              </div>

              <div className="w-1/2 pl-4 flex justify-between items-center">
                <div>
                  {!isSecondVideo ? (
                    <>
                      <div className="text-sm font-medium text-black">
                        THE TIMELESS MASTERPIECE
                      </div>
                      <div className="text-xs text-[#7a7a75] mt-1">
                        A RARE JEWEL, HIDDEN IN TIME’S EMBRACE
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-sm font-medium text-black">
                        AN ARCHITECTURE MARVEL. A STATEMENT OF EXCELLENCE.
                      </div>
                    </>
                  )}
                </div>

                <button
                  onClick={handleToggleVideo}
                  className="ml-4 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <video
            ref={video1Ref}
            className={`w-full h-full object-cover ${
              isSecondVideo ? "hidden" : "block"
            }`}
            playsInline
            controls={false}
            loop
            muted
          >
            <source src="/videos/fableweb.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          <video
            ref={video2Ref}
            className={`w-full h-full object-cover ${
              isSecondVideo ? "block" : "hidden"
            }`}
            playsInline
            controls={false}
            loop
            muted
          >
            <source
              src="/videos/webFelicia+WalkThrough.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </>
      )}
    </div>
  );
}
