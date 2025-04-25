import React from "react";
import { motion } from "framer-motion";

type Professor = {
  name: string;
  title: string;
  imageSrc: string;
  affiliation: string[];
};

const professors: Professor[] = [
  {
    name: "Shin Saimdang",
    title: "Professor",
    imageSrc: "/navnath.png",
    affiliation: [
      "Ph.D. Committee Member, Seoul National University - Department of Profiling",
      "Member, NYC Research Association",
    ],
  },
  {
    name: "Su Ji",
    title: "Professor",
    imageSrc: "/download.png",
    affiliation: [
      "Ph.D. Committee Member, Seoul National University - Department of Profiling",
      "Member, NYC Research Association",
    ],
  },
];

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-indigo-50 to-purple-100 pt-16 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-20">
        Meet Our Professors
      </h2>

      <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
        {professors.map((prof, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Image + Info Card */}
            <div className="bg-white/90 backdrop-blur-md px-6 pt-6 pb-5 rounded-3xl shadow-xl max-w-sm text-center">
              <div className="relative w-64 h-64 mx-auto mb-4">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-16 bg-white/50 rounded-t-full blur-lg z-0" />

                {/* Main Image */}
                <img
                  src={prof.imageSrc}
                  alt={prof.name}
                  className="w-full h-full  relative z-10"
                />
              </div>

              {/* Name & Title */}
              <h3 className="text-2xl font-bold text-gray-900">{prof.name}</h3>
              <p className="text-blue-700 font-medium mb-2">{prof.title}</p>

              {/* Affiliations */}
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                {prof.affiliation.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
