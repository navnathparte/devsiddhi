import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative">
      {/* Background Image Layer */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="fixed inset-0 bg-cover bg-center pointer-events-none z-0"
        style={{ backgroundImage: "url('/BG-Pattern.png')" }}
      />

      {/* Foreground Content - Added padding-top to push content down */}
      <div className="relative z-10 w-full flex justify-center items-start p-4 md:p-8 pt-24 md:pt-32 bg-cover bg-center bg-no-repeat bg-fixed">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl rounded-3xl flex flex-col md:flex-row gap-4 md:gap-6 p-3 md:p-5"
        >
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center items-center"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              src="/Devsiddhi-Logo-(2).png"
              alt="Devsiddhi Logo"
              className="max-w-full h-auto object-contain"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex flex-col justify-center gap-4"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl text-amber-600 font-bold"
            >
              Devsiddhi Construction Co., a pioneering real-estate development
              company based in Ahmedabad (Gujarat), has been benchmarking the
              industry since its inception in 2015.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-xl text-amber-600 font-bold"
            >
              Devsiddhi Group imbibes the three core values of Excellence,
              Expertise and Elegance across all the development projects that
              they undertake.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-xl text-amber-600 font-bold"
            >
              The portfolio is a mix of residential and commercial projects.
              Leading corporate and retail brands have chosen Devsiddhi
              properties.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
