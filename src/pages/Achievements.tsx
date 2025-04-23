import React from "react";
import CountUp from "react-countup";
import { FaBriefcase, FaSmile, FaCode, FaCheckCircle } from "react-icons/fa";
import "../index.css";

const Achievements: React.FC = () => {
  return (
    <div className="">
      <div className="w-auto flex justify-center items-center overflow-hidden p-8 h-[750px]">
        <div
          className="fixed inset-0 bg-cover bg-center transform scale-110 pointer-events-none"
          style={{ backgroundImage: "url('/RankBG.jpg')", zIndex: 0 }}
        />

        <div className="z-10 flex flex-wrap gap-8">
          <div className="flex flex-wrap gap-8">
            {[
              {
                value: 13,
                label: "Years Of Experience",
                icon: <FaBriefcase size={28} />,
              },
              {
                value: 56,
                label: "Happy Customers",
                icon: <FaSmile size={28} />,
              },
              {
                value: 32,
                label: "Learned Frameworks",
                icon: <FaCode size={28} />,
              },
              {
                value: 67,
                label: "Completed Projects",
                icon: <FaCheckCircle size={28} />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="box bg-[#B68842] text-center px-6 py-8 rounded-2xl shadow-md w-[160px]"
              >
                <div className="text-white mb-2 p-1">{item.icon}</div>
                <div className="text-3xl font-bold text-white bg-gradient-to-r from-[#693132] via-[#B68842] to-[#90494a] rounded-full w-22 h-22 flex items-center justify-center mx-auto mb-4">
                  <CountUp
                    key={`count-${index}`}
                    end={item.value}
                    duration={4}
                  />
                  +
                </div>
                <div className="text-white font-bold tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
