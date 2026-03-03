import Container from "../components/layout/Container";
import TiltCard from "../components/ui/TiltCard";

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <TiltCard>
            <div className="relative">
              {/* Soft Glow */}
              <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full" />

              <img
                src="/profile.png"
                alt="Tanmay"
                className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border border-white/10 shadow-2xl"
              />
            </div>
          </TiltCard>

          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              About Me
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              <h3>I’m Tanmay Sunil Wagh,</h3>A Computer Science graduate. I build
              performant, scalable web applications with a strong focus on clean
              architecture and user experience. With hands-on experience in
              React, modern JavaScript, and responsive UI systems, I approach
              development with both engineering precision and design awareness.
              I’m actively looking for full-time roles where I can contribute to
              real-world products and deliver meaningful impact.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Currently seeking full-time frontend opportunities where I can
              contribute to scalable real-world products.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
