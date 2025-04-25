import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CustomScrollbar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/director", name: "About" },
    { path: "/achievements", name: "Achievements" },
    { path: "/portfolio-upcoming", name: "Portfolio" },
    { path: "/portfolio-completed", name: "Portfolio" },
    { path: "/post", name: "Post" },
    { path: "/contact-us", name: "Contact Us" },
  ];

  const scrollbarRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    const currentIndex = routes.findIndex(
      (route) => route.path === location.pathname
    );
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname]);

  const scrollToRoute = (index: number) => {
    if (isScrolling || index < 0 || index >= routes.length) return;

    setIsScrolling(true);
    setActiveIndex(index);
    navigate(routes[index].path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      if (e.deltaX > 0 || e.deltaY > 0) {
        scrollToRoute(activeIndex + 1); // Scroll right or down → Next
      } else if (e.deltaX < 0 || e.deltaY < 0) {
        scrollToRoute(activeIndex - 1); // Scroll left or up → Previous
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaX = touchStartX.current - e.changedTouches[0].clientX;
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 50) {
          scrollToRoute(activeIndex + 1); // Swipe left
        } else if (deltaX < -50) {
          scrollToRoute(activeIndex - 1); // Swipe right
        }
      } else {
        if (deltaY > 50) {
          scrollToRoute(activeIndex + 1);
        } else if (deltaY < -50) {
          scrollToRoute(activeIndex - 1);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      switch (e.key) {
        case "ArrowRight":
        // case "ArrowDown":
          scrollToRoute(activeIndex + 1);
          break;
        case "ArrowLeft":
        // case "ArrowUp":
          scrollToRoute(activeIndex - 1);
          break;
      }
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("keydown", handleKeyDown); // 👈

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown); // 👈
    };
  }, [activeIndex, isScrolling]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !scrollbarRef.current) return;

      const scrollbar = scrollbarRef.current;
      const scrollbarRect = scrollbar.getBoundingClientRect();
      const relativeX = e.clientX - scrollbarRect.left;
      const percent = relativeX / scrollbarRect.width;
      const newIndex = Math.floor(percent * routes.length);

      if (newIndex !== activeIndex) {
        scrollToRoute(newIndex);
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [activeIndex, isScrolling]);

  return (
    <div
      ref={scrollbarRef}
      className="fixed bottom-[8%] left-1/2 transform -translate-x-1/2 z-50 w-2/3 md:w-1/3 h-2 bg-gray-800 bg-opacity-60 rounded-full cursor-pointer"
      onMouseDown={(e) => {
        isDragging.current = true;
        dragStartX.current = e.clientX;
      }}
    >
      <div className="flex justify-between absolute w-full -top-3 px-1"></div>

      <div
        className="h-full bg-[#B68842] rounded-full transition-all duration-700"
        style={{
          width: `${100 / routes.length}%`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
    </div>
  );
};

export default CustomScrollbar;
