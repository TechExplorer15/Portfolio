import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { personalInfo } from "../data/data";

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20"
    >
      {/* Background Glow Left */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#6c63ff] opacity-10 rounded-full blur-3xl pointer-events-none" />
      {/* Background Glow Right */}
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#ff6584] opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT - Text Content */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#6c63ff] bg-opacity-10 border border-[#6c63ff] border-opacity-30 text-[#6c63ff] text-sm px-4 py-2 rounded-full mb-6"
          >
            Welcome to my portfolio
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-4"
          >
            Hi, I am
            <br />
            <span className="text-[#6c63ff]">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-400 font-medium mb-4"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button
              onClick={scrollToProjects}
              className="bg-[#6c63ff] hover:bg-[#5a52e0] text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 border border-gray-600 hover:border-[#6c63ff] text-gray-300 hover:text-[#6c63ff] px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              <FiDownload />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-[#6c63ff] hover:text-[#6c63ff] transition-all duration-300"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-[#6c63ff] hover:text-[#6c63ff] transition-all duration-300"
            >
              <FiLinkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-full bg-[#6c63ff] opacity-20 blur-2xl scale-110 pointer-events-none" />

            {/* Gradient border ring */}
            <div
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1"
              style={{
                background: "linear-gradient(135deg, #6c63ff, #ff6584)",
              }}
            >
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#060b17] border border-gray-700 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-xs text-gray-400">Experience</p>
              <p className="text-lg font-bold text-white">5+ Years</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
