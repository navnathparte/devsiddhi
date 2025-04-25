import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Professor {
  name: string;
  title: string;
  imageSrc: string;
  affiliation: string[];
}

const ProfessorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const professors: Professor[] = [
    {
      name: "Hiren Soni",
      title: "Managing Director",
      imageSrc: "/navnath.png",
      affiliation: [
        "As Managing Director, I lead with vision and strategy, overseeing operations and driving growth across all business verticals.",
        " With a commitment to innovation and excellence, I ensure our team delivers exceptional value to clients.",
      ],
    },
    {
      name: "Vijay Soni",
      title: "Managing Director",
      imageSrc: "/download-2.png",
      affiliation: [
        "As Managing Director, I lead with vision and strategy, overseeing operations and driving growth across all business verticals.",
        " With a commitment to innovation and excellence, I ensure our team delivers exceptional value to clients.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 0, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: i * 0.2,
      },
    }),
  };

  return (
    <div className="py-16 px-4 bg-white max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold text-[#B68842] mb-4">
          Meet Our Directors
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {professors.map((professor, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center max-w-md"
            custom={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="rounded-xl overflow-hidden w-48 h-88 md:w-56 md:h-56 mb-6 bg-gray-100 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={professor.imageSrc}
                alt={professor.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {professor.name}
            </h3>
            <p className="text-blue-500 mb-4">{professor.title}</p>

            <div className="text-[#B68842] text-center mb-6">
              {professor.affiliation.map((item, i) => (
                <p key={i} className="mb-2 text-sm">
                  {item}
                </p>
              ))}
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#B68842] hover:text-blue-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-[#B68842] hover:text-blue-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-[#B68842] hover:text-blue-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-[#B68842] hover:text-blue-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProfessorsSection;
