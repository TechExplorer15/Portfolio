import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md"
    >
      <div className="max-w-[1400px] mx-auto px-8 py-5 flex justify-between items-center text-sm">
        <div className="font-semibold tracking-widest">TW</div>

        <div className="flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
