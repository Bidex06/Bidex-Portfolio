import { LuExternalLink } from "react-icons/lu";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const images = import.meta.glob("../assets/projects/*.png", { eager: true, import: "default" });

function getImage(filename) {
  const match = Object.entries(images).find(([path]) => path.endsWith(filename));
  return match ? match[1] : null;
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-24 max-w-5xl">
      <SectionHeading
        index="projects/"
        title="Projects"
        description="A few things I've built and shipped to production."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 100}>
            <article
              className="rounded-lg border overflow-hidden flex flex-col transition-transform duration-150 hover:-translate-y-1 h-full"
              style={{ borderColor: "var(--border-mid)", background: "var(--bg-card)" }}
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={getImage(project.image)}
                  alt={`${project.name} screenshot`}
                  className="w-full h-48 object-cover object-top"
                />
              </a>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-1 rounded border"
                      style={{ borderColor: "var(--border-faint)", color: "var(--text-tertiary)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm inline-flex items-center gap-1.5 self-start px-3 py-2 rounded-md transition-colors duration-150"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  live demo <LuExternalLink size={14} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
