import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative">
      {/* Background Image Layer */}
      <div
        className="fixed inset-0 bg-cover bg-center pointer-events-none z-0"
        // style={{ backgroundImage: "url('/BG-Pattern.png')" }}
      />

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full flex justify-center items-start p-4 md:p-8 pt-24 md:pt-32 bg-cover bg-center bg-no-repeat bg-fixed"
      >
        <div className="w-full max-w-6xl rounded-3xl flex flex-col md:flex-row gap-4 md:gap-6 p-3 md:p-5">
          {/* Logo Section */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/Devsiddhi-Logo-(2).png"
              alt="Devsiddhi Logo"
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center gap-4">
            <p className="text-xl text-amber-600 font-bold">
              Devsiddhi Construction Co., a pioneering real-estate development
              company based in Ahmedabad (Gujarat), has been benchmarking the
              industry since its inception in 2015.
            </p>
            <p className="text-xl text-amber-600 font-bold">
              Devsiddhi Group imbibes the three core values of Excellence,
              Expertise and Elegance across all the development projects that
              they undertake.
            </p>
            <p className="text-xl text-amber-600 font-bold">
              The portfolio is a mix of residential and commercial projects.
              Leading corporate and retail brands have chosen Devsiddhi
              properties.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
