import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { personalInfo, stats } from "../data/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#6c63ff] text-sm font-medium uppercase tracking-widest mb-2">
            Get To Know
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-[#6c63ff]">Me</span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden">
              <img
                src={personalInfo.profileImage}
                alt="About Me"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-[#060b17] border border-gray-800 rounded-2xl p-5 shadow-2xl">
              <p className="text-3xl font-bold text-[#6c63ff]">5+</p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              I am <span className="text-[#6c63ff]">{personalInfo.name}</span>
              <br />a {personalInfo.title}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Contact Info Items */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#6c63ff] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <FiMapPin size={16} className="text-[#6c63ff]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm text-gray-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#6c63ff] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <FiMail size={16} className="text-[#6c63ff]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm text-gray-200">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#6c63ff] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <FiPhone size={16} className="text-[#6c63ff]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm text-gray-200">{personalInfo.phone}</p>
                </div>
              </div>
            </div>

            <a
              href={"mailto:" + personalInfo.email}
              className="inline-block bg-[#6c63ff] hover:bg-[#5a52e0] text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              Lets Talk
            </a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#060b17] border border-gray-800 rounded-2xl p-6 text-center hover:border-[#6c63ff] transition-all duration-300"
            >
              <p className="text-3xl font-bold text-[#6c63ff] mb-1">
                {stat.number}
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
