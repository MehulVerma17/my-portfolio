import my_image from "/my_image.jpeg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center 
  justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={my_image}
            alt=""
            className="w-[300px] cursor-pointer rounded-full 
          shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 
          hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 
          text-center"
        >
          <h1
            className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent 
          text-5xl font-light md:text-7xl"
          >
            Mehul Verma
          </h1>
          <h3
            className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent 
          text-2xl md:text-3xl"
          >
            Software Development Engineer
          </h3>
          <p
            className="md:text-base text-pretty text-sm 
          text-gray-400"
          >
            I’m Mehul Verma, a software developer with a passion for building
            practical, user-focused solutions. I’ve delivered real features in
            production, optimized app performance, and collaborated closely with
            cross-functional teams. I thrive in environments where I can learn
            fast, take ownership, and write clean, maintainable code that solves
            real problems. I’m always up for building something new, improving
            what already exists, or diving into a challenge that makes me think
            harder.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
