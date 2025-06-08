import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const PageTwo = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      controls.start({ opacity: 1, y: 0 });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <>
      <div className="w-full flex flex-col bg-zinc-900 text-white">
        <motion.section
          id="services"
          className="min-h-screen py-32 px-4 text-center flex items-center justify-center flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <motion.h2
            className="text-4xl font-semibold mb-4"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          >
            We Create Experiences
          </motion.h2>
          <motion.p
            className="text-lg max-w-2xl mx-auto"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          >
            Motion, visuals, and code—blended into memorable digital stories.
          </motion.p>
        </motion.section>
      </div>
      <div className="w-full flex flex-col bg-zinc-900 text-white">
        <motion.section
          id="projects"
          className="min-h-screen py-20 px-4 bg-zinc-900 text-center flex items-center justify-center flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <motion.h3
            className="text-3xl font-medium mb-10"
            style={{ transform: `translateY(${scrollY * 0.04}px)` }}
          >
            Projects
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="bg-zinc-800 rounded-2xl p-8 w-60 hover:scale-105 transition-transform"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <p className="text-xl font-semibold">Project {i}</p>
                <p className="text-sm mt-2">Interactive showcase {i}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default PageTwo;
