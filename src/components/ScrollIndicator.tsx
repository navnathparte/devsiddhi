// components/ScrollIndicator.tsx
"use client";

interface ScrollIndicatorProps {
  sections: string[];
  activeSection: number;
  onNavigate: (index: number) => void;
}

export default function ScrollIndicator({
  sections,
  activeSection,
  onNavigate,
}: ScrollIndicatorProps) {
  return (
    <div className="flex justify-center py-4 bg-white">
      <div className="flex space-x-2">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeSection === index
                ? "bg-white-600"
                : "bg-white-700 hover:bg-white-500"
            }`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>
    </div>
  );
}
