import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/data";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#060b17] border-t border-gray-800 py-12 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="text-2xl font-bold mb-4">
          <span className="text-white">T</span>
          <span className="text-[#6c63ff]">W</span>
        </div>

        <p className="text-gray-500 text-sm mb-6">
          Open to freelance work and full-time opportunities
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
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
          <a
            href={"mailto:" + personalInfo.email}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-[#6c63ff] hover:text-[#6c63ff] transition-all duration-300"
          >
            <FiMail size={18} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-600 text-xs">
          2026 {personalInfo.name}. Built with React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
