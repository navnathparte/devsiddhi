import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  bgColor?: string;
  bgImage?: string;
  customBackground?: ReactNode; // ✅ new
  children?: ReactNode;
}

export default function Section({
  id,
  bgColor,
  bgImage,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="w-screen h-screen relative overflow-hidden flex flex-col justify-center items-center "
      style={{
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </section>
  );
}

