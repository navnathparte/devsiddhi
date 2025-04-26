// src/components/HorizontalParallax.tsx
import React, { useEffect, useRef, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface ParallaxContextType {
  routeIndex: number;
  previousRouteIndex: number;
  direction: number;
}

const ParallaxContext = React.createContext<ParallaxContextType>({
  routeIndex: 0,
  previousRouteIndex: 0,
  direction: 0,
});

interface ParallaxProviderProps {
  children: ReactNode;
}

export const ParallaxProvider: React.FC<ParallaxProviderProps> = ({
  children,
}) => {
  const location = useLocation();
  const previousPathRef = useRef(location.pathname);
  const [state, setState] = React.useState<ParallaxContextType>({
    routeIndex: 0,
    previousRouteIndex: 0,
    direction: 0,
  });

  const routes = [
    "/",
    "/about",
    "/director",
    "/achievements",
    "/portfolio-upcoming",
    "/portfolio-completed",
    "/post",
    "/contact-us",
  ];

  useEffect(() => {
    const currentIndex = routes.findIndex(
      (route) => route === location.pathname
    );
    const previousIndex = routes.findIndex(
      (route) => route === previousPathRef.current
    );

    if (currentIndex !== -1) {
      setState({
        routeIndex: currentIndex,
        previousRouteIndex: previousIndex !== -1 ? previousIndex : currentIndex,
        direction: currentIndex > previousIndex ? 1 : -1,
      });
    }

    previousPathRef.current = location.pathname;
  }, [location.pathname]);

  return (
    <ParallaxContext.Provider value={state}>
      {children}
    </ParallaxContext.Provider>
  );
};

export const useParallax = () => React.useContext(ParallaxContext);

interface ParallaxLayerProps {
  children: ReactNode;
  speed: number;
  className?: string;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed,
  className = "",
}) => {
  const { routeIndex, previousRouteIndex, direction } = useParallax();
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const offset = (routeIndex - previousRouteIndex) * direction * speed * 100;

    if (layerRef.current) {
      layerRef.current.style.transform = `translateX(${offset}px)`;
      layerRef.current.style.transition =
        "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
    }

    const timeout = setTimeout(() => {
      if (layerRef.current) {
        layerRef.current.style.transform = "translateX(0)";
        layerRef.current.style.transition = "transform 0.5s ease-out";
      }
    }, 800);

    return () => clearTimeout(timeout);
  }, [routeIndex, previousRouteIndex, direction, speed]);

  return (
    <div ref={layerRef} className={`transition-transform ${className}`}>
      {children}
    </div>
  );
};
