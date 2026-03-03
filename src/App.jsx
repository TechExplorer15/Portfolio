import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Loader from "./components/ui/Loader";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-[#0B0B0C] text-white min-h-screen">
      <AnimatePresence>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
