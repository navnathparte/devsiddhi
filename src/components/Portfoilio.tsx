import React, { useState } from "react";

const images = [
  { src: "assets/green.jpg", caption: "Green Nature" },
  { src: "assets/fable.jpg", caption: "Fantasy Fable" },
  { src: "assets/felicia.jpg", caption: "Felicia Portrait" },
  { src: "assets/Fabula.jpg", caption: "Fabula Lights" },
];

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swapImage = (direction: number) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + direction + images.length) % images.length
    );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex w-[100%] max-w-5xl h-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left */}
        <div className="w-[10%] h-full bg-blue-500 text-white flex items-center justify-center font-bold tracking-widest writing-vertical">
          <div className="rotate-[270deg] whitespace-nowrap text-[60px]">
            My Gallery
          </div>
        </div>

        {/* Middle */}
        <div className="w-[50%] flex flex-row items-center justify-center p-6 ml-3 relative">
          <div className="relative w-full h-[250px] overflow-hidden">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={`Slide ${index}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="w-[30%] flex flex-row items-center justify-center p-6 relative">
          <div className="mt-4 text-lg text-gray-700 font-medium">
            {images[currentIndex].caption}
          </div>
        </div>

        {/* Right */}
        <div className="w-[10%] bg-gray-200 flex flex-col items-center justify-center gap-4 p-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => swapImage(-1)}
          >
            ⬆️ Swap Up
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={() => swapImage(1)}
          >
            ⬇️ Swap Down
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
