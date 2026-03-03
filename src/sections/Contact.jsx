import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import { FiMail, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center border-t border-white/10 relative overflow-hidden"
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Startup Glow Background */}
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-indigo-600/10 blur-3xl rounded-full" />
          </div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold mb-6 relative"
          >
            Let’s Build The Next Big Thing.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            I’m actively looking for full-time MERN stack roles where I can
            contribute, learn fast, and help ship meaningful products. If you're
            building something exciting, I’d love to be part of it.
          </motion.p>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* Primary CTA */}
            <motion.a
              href="tanmaywagh8220@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300"
            >
              <FiMail />
              Let’s Talk
            </motion.a>

            {/* Resume Download */}
            <motion.a
              href="/resume.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-gray-300 hover:bg-white/10 transition-all duration-300"
            >
              <FiDownload />
              Download Resume
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-12 text-gray-400 text-xl">
            <a
              href="https://www.linkedin.com/in/tanmay-wagh/"
              target="_blank"
              className="hover:text-white transition"
            >
              <FiLinkedin />
            </a>

            <a
              href="https://github.com/TechExplorer15"
              target="_blank"
              className="hover:text-white transition"
            >
              <FiGithub />
            </a>
          </div>

          {/* Footer Line */}
          <p className="mt-16 text-sm text-gray-600">
            © {new Date().getFullYear()} Tanmay — Built with MERN.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
