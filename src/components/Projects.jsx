import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/data";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#6c63ff] text-sm font-medium uppercase tracking-widest mb-2">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Recent <span className="text-[#6c63ff]">Projects</span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={
                "px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 " +
                (filter === cat
                  ? "bg-[#6c63ff] border-[#6c63ff] text-white"
                  : "border-gray-700 text-gray-400 hover:border-[#6c63ff] hover:text-[#6c63ff]")
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-[#060b17] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#6c63ff] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay with Links */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center gap-4">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-[#6c63ff] hover:text-white transition-all"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-[#6c63ff] hover:text-white transition-all"
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#6c63ff] bg-opacity-10 text-[#6c63ff] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#6c63ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
