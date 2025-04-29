import { useRef, useState, useEffect, ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

const ParallaxLayer = ({
  children,
  offset = 0.3,
  className = "",
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const horizontalScroll =
        document.documentElement.scrollLeft || document.body.scrollLeft;
      setScrollPosition(horizontalScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translateX(${scrollPosition * offset * -1}px)`,
    transition: "transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)",
  };

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={parallaxStyle}
    >
      {children}
    </div>
  );
};

export default ParallaxLayer;
