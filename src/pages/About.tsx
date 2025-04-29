import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const ref = useRef(null);
  const location = useLocation();
  const [key, setKey] = useState(0);
  
  // Reset the animations when the route changes
  useEffect(() => {
    // Increment key to force component remount
    setKey(prevKey => prevKey + 1);
  }, [location.pathname]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax motion
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative overflow-hidden" ref={ref} key={key}>
      {/* Background */}
      <motion.div
        className="fixed inset-0 bg-cover bg-center pointer-events-none z-0"
        style={{
          backgroundImage: "url('/images/BG-Pattern.png')",
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 w-full flex justify-center items-start p-4 md:p-8 pt-24 md:pt-32 bg-fixed">
        <div className="w-full max-w-6xl rounded-3xl flex flex-col md:flex-row gap-4 md:gap-6 p-3 md:p-5 ">
          
          {/* Logo Section with Motion */}
          <motion.div
            style={{ y: logoY }}
            className="flex-1 flex justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }} // Changed to false to reset animations
            variants={fadeIn}
          >
            <motion.img
              src="/Devsiddhi-Logo-(2).png"
              alt="Devsiddhi Logo"
              className="max-w-full h-auto object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }} // Changed to false
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          {/* Text Section with Motion */}
          <motion.div
            style={{ y: textY }}
            className="flex-1 flex flex-col justify-center gap-4"
          >
            {[
              "Devsiddhi Construction Co., a pioneering real-estate development company based in Ahmedabad (Gujarat), has been benchmarking the industry since its inception in 2015.",
              "Devsiddhi Group imbibes the three core values of Excellence, Expertise and Elegance across all the development projects that they undertake.",
              "The portfolio is a mix of residential and commercial projects. Leading corporate and retail brands have chosen Devsiddhi properties.",
            ].map((text, idx) => (
              <motion.p
                key={idx}
                className="text-xl text-amber-600 font-bold leading-relaxed"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }} // Changed to false
                variants={fadeIn}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;