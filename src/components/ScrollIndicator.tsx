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
                ? "bg-blue-600"
                : "bg-gray-300 hover:bg-blue-400"
            }`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>
    </div>
  );
}
