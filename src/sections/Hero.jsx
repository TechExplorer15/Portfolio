import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 mt-20 max-w-4xl">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-gray-300"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for Work
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-semibold leading-tight"
        >
          <span className="block text-4xl md:text-6xl lg:text-7xl">
            MERN Stack Developer
          </span>

          <span className="block mt-3 text-2xl md:text-3xl lg:text-4xl text-gray-300 font-medium">
            Turning Ideas Into Real Products
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Computer Science Graduate building modern, high-performance web
          applications. Ready to contribute to real-world engineering teams.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
