"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HorizontalScroll from "@/components/HorizontalScroll";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["Home", "About", "Portfolio", "Contact", "Blog"];

  const scrollToSection = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const sectionWidth = container.clientWidth;
    container.scrollTo({
      left: index * sectionWidth,
      behavior: "smooth",
    });

    setActiveSection(index);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const sectionWidth = container.clientWidth;
    const scrollPosition = container.scrollLeft;
    const newActiveSection = Math.round(scrollPosition / sectionWidth);

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Add top margin to account for the fixed navbar */}
      <div className="mt-24 flex-1 flex flex-col">
        <HorizontalScroll ref={containerRef} sections={sections} />
      </div>

      <ScrollIndicator
        sections={sections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
    </div>
  );
}
