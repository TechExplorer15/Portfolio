import { useState } from "react";
import Container from "../components/layout/Container";
import { motion, AnimatePresence } from "framer-motion";

function Education() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="education"
      className="min-h-screen flex items-center border-t border-white/10"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8">Education</h2>

          <button
            onClick={() => setOpen(!open)}
            className="px-6 py-3 rounded-full border border-white/20 text-gray-300 hover:bg-white/10 transition"
          >
            {open ? "Hide Details" : "View Education Details"}
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 text-left text-gray-400 overflow-hidden"
              >
                <div className="space-y-4 border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-sm">
                  <h3 className="text-xl text-white font-medium">
                    B.E Computere Engineering
                  </h3>
                  <p>7.26 CGPA</p>
                  <p>
                    Savitribai Phule Pune University
                    <br />
                    2021 – 2025
                  </p>
                </div>
                <br />

                <div className="space-y-4 border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-sm">
                  <h3 className="text-xl text-white font-medium">
                    HSC ~ (12th)
                  </h3>
                  <p>89%</p>
                  <p>
                    Maharashtra State Board
                    <br />
                    2020 – 2021
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

export default Education;
