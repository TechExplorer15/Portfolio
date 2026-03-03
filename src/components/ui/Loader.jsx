import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const name = "TANMAY"; // change if needed

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { y: 120, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // premium cubic ease
    },
  },
};

const Loader = ({ onFinish }) => {
  const [stage, setStage] = useState("letters");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Stage 1: Letters animate
    const letterTimer = setTimeout(() => {
      setStage("loading");
    }, 1200);

    return () => clearTimeout(letterTimer);
  }, []);

  useEffect(() => {
    if (stage === "loading") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);

            // Pause effect after full load
            setTimeout(() => {
              setStage("exit");
              setTimeout(() => {
                onFinish();
              }, 800);
            }, 700); // pause duration

            return 100;
          }
          return prev + 4;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [stage, onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={stage === "exit" ? { opacity: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[999]"
    >
      {/* Animated Letters */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex overflow-hidden mb-10"
      >
        {name.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="text-6xl md:text-8xl font-bold tracking-wider"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Loading Bar */}
      <div className="w-72 h-1 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white"
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
