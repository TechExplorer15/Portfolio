import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={
        "fixed top-0 w-full z-50 transition-all duration-300 " +
        (scrolled ? "bg-[#060b17] shadow-lg shadow-black/20" : "bg-transparent")
      }
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleClick("Home")}
        >
          <span className="text-white">T</span>
          <span className="text-[#6c63ff]">W</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleClick(link)}
                className={
                  "text-sm font-medium transition-all duration-300 relative " +
                  (activeLink === link
                    ? "text-[#6c63ff]"
                    : "text-gray-300 hover:text-[#6c63ff]")
                }
              >
                {link}
                <span
                  className={
                    "absolute -bottom-1 left-0 h-0.5 bg-[#6c63ff] transition-all duration-300 " +
                    (activeLink === link ? "w-full" : "w-0")
                  }
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Hire Me Button - Desktop */}
        <a
          href="mailto:monir@email.com"
          className="hidden md:block bg-[#6c63ff] hover:bg-[#5a52e0] text-white text-sm px-5 py-2.5 rounded-full transition-all duration-300"
        >
          Hire Me
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#060b17] px-6 pb-6 border-t border-gray-800">
          <ul className="flex flex-col gap-2 mt-4 list-none m-0 p-0">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleClick(link)}
                  className={
                    "text-sm font-medium w-full text-left py-2 transition-colors bg-transparent border-none cursor-pointer " +
                    (activeLink === link ? "text-[#6c63ff]" : "text-gray-300")
                  }
                >
                  {link}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="mailto:monir@email.com"
                className="block bg-[#6c63ff] text-white text-sm px-5 py-2.5 rounded-full text-center"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
