import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageItem {
  src: string;
  title: string;
  caption: string;
}

const images: ImageItem[] = [
  {
    src: "/assets/green.jpg",
    title: "Devsiddhi Green",
    caption: "Green Nature",
  },
  {
    src: "/assets/fable.jpg",
    title: "Devsiddhi Fantasy",
    caption: "Fantasy Fable",
  },
  {
    src: "/assets/felicia.jpg",
    title: "Devsiddhi Felicia",
    caption: "Felicia Portrait",
  },
  {
    src: "/assets/Fabula.jpg",
    title: "Devsiddhi Fabula",
    caption: "Fabula Lights",
  },
];

const Upcoming: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    draggable: true,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  useEffect(() => {
    // Update scroll position when scrolling
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Parallax Layers */}
      <div
        className="fixed inset-0 bg-cover bg-center pointer-events-none z-0"
        style={{
          backgroundImage: "url('/OngoingProjects.jpg')",
          transform: `translateY(${scrollPosition * 0.3}px)`, // Parallax effect for the background layer 1
        }}
      />

      <div
        className="fixed inset-0 bg-cover bg-center pointer-events-none z-10"
        style={{
          backgroundImage: "url('/assets/Layer2.jpg')",
          transform: `translateY(${scrollPosition * 0.5}px)`, // Parallax effect for layer 2 (faster than background)
        }}
      />

      {/* Foreground content */}
      <div className="relative z-20 p-6">
        <h1 className="text-4xl font-extrabold text-center text-[#B68842] mb-18 animate-fadeUp">
          Current Projects
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-10">
          <div className="w-[600px] h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Slider ref={sliderRef} {...settings}>
              {images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-[400px] object-cover transition duration-500 ease-in-out transform hover:scale-105"
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="flex flex-col gap-4 max-w-sm animate-fadeUp">
            <h2 className="text-3xl font-bold text-[#B68842]">
              {images[currentSlide].title}
            </h2>
            <p className="text-black">
              This is a brief overview of the project. It showcases some of the
              best work I've done using React, Tailwind, and other technologies.
            </p>
            <ul className="text-[#B68842] space-y-2">
              <li>
                <strong>Client:</strong> {images[currentSlide].caption}
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              className="w-12 h-12 bg-[#B68842] rounded-full flex items-center justify-center text-white text-xl hover:bg-[#D12023]"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <button
              className="w-12 h-12 bg-[#B68842] rounded-full flex items-center justify-center text-white text-xl hover:bg-[#D12023]"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
