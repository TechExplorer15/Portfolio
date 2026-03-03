import Container from "../components/layout/Container";
import Reveal from "../components/ui/Reveal";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-white/10">
      <Container>
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Selected Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#141416] p-6 rounded-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  <a
                    href={project.live}
                    className="text-indigo-400 hover:underline"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="text-indigo-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Projects;
