import { motion } from "motion/react";
const Home = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black text-white text-4xl">
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative pt-20"
      >
        <motion.h1
          className="text-5xl font-bold"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Valentime Clone
        </motion.h1>
        <motion.p
          className="mt-4 text-xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Creative Studio
        </motion.p>
      </section>
    </div>
  );
};

export default Home;
