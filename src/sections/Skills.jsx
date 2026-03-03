import Container from "../components/layout/Container";
import Reveal from "../components/ui/Reveal";
import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-white/10">
      <Container>
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-[#141416] rounded-full text-gray-300 hover:bg-indigo-600 transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Skills;
