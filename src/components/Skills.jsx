import { motion } from "framer-motion";
import { skills } from "../data/data";

export default function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#6c63ff] text-sm font-medium uppercase tracking-widest mb-2">
            What I Know
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-[#6c63ff]">Skills</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="bg-[#060b17] border border-gray-800 rounded-2xl p-7 hover:border-[#6c63ff] transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-lg font-bold text-[#6c63ff] mb-6 pb-3 border-b border-gray-800">
                {cat}
              </h3>

              {/* Skill Bars */}
              <div className="space-y-5">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-[#6c63ff] font-semibold">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.percentage + "%" }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: i * 0.1,
                            ease: "easeOut",
                          }}
                          style={{
                            background:
                              "linear-gradient(to right, #6c63ff, #ff6584)",
                          }}
                          className="h-full rounded-full"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
