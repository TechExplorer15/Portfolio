import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#0a0f1e",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
