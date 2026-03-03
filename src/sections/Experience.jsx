import Container from "../components/layout/Container";

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center border-t border-white/10"
    >
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-center">
            Experience
          </h2>

          <div className="space-y-10">
            {/* Experience Item */}
            <div className="border-l border-white/20 pl-6">
              <h3 className="text-xl text-white font-medium">
                Web Development Intern
              </h3>

              <p className="text-gray-500 mb-2">
                Cognifyz Technologies | Jan 2024- Feb 2024
              </p>

              <p className="text-gray-400">
                Developed responsive and interactive web pages using HTML5,
                CSS3, JavaScript for improved UI/UX performance. Implemented
                dynamic components and basic CRUD functionalities using
                React.js, enhancing interactivity and reusability across web
                modules.
              </p>
            </div>

            {/* Add more experiences here */}
            <div className="border-l border-white/20 pl-6">
              <h3 className="text-xl text-white font-medium">
                AI–ML Virtual Intern
              </h3>

              <p className="text-gray-500 mb-2">
                Eduskills Foundation | Jul 2024- Sep 2024{" "}
              </p>

              <p className="text-gray-400">
                Completed a 3-month virtual internship focused on Artificial
                Intelligence and Machine Learning concepts and hands-on
                implementation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
