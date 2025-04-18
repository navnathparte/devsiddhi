"use client";

import { forwardRef } from "react";
import Home from "./Home";
import Portfolio from "./Portfoilio";

interface HorizontalScrollProps {
  sections: string[];
}

const HorizontalScroll = forwardRef<HTMLDivElement, HorizontalScrollProps>(
  function HorizontalScroll({}, ref) {
    return (
      <div
        ref={ref}
        className="flex-1 flex overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        style={{ scrollbarWidth: "thin" }}
      >
        {/* Home Section */}

        <section className="flex-shrink-0 w-full h-full snap-start flex items-center justify-center bg-blue-50">
          <div className="w-full h-full">
            <Home />
          </div>
        </section>

        {/* About Section */}
        <section className="flex-shrink-0 w-full h-full snap-start flex items-center justify-center bg-green-50">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-xl text-gray-600">
              Learn more about our journey and values
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="flex-shrink-0 w-full h-full snap-start flex items-center justify-center bg-blue-50">
          <div className="w-full h-full">
            <Portfolio />
          </div>
        </section>

        {/* Contact Section */}
        <section className="flex-shrink-0 w-full h-full snap-start flex items-center justify-center bg-purple-50">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600">Get in touch with our team</p>
          </div>
        </section>

        {/* Blog Section */}
        <section className="flex-shrink-0 w-full h-full snap-start flex items-center justify-center bg-red-50">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Blog</h2>
            <p className="text-xl text-gray-600">
              Read our latest articles and insights
            </p>
          </div>
        </section>
      </div>
    );
  }
);

export default HorizontalScroll;
