import { pinnedSkills, additionalSkills } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-24 max-w-5xl">
      <SectionHeading
        index="skills.json"
        title="Skills"
        description="Top 3 are pinned — the ones I reach for first on any project."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {pinnedSkills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <Reveal key={skill.name} delay={i * 80}>
              <div
                className="rounded-lg border p-5 flex flex-col gap-3 relative h-full skill-glow"
                style={{ borderColor: "var(--border-mid)", background: "var(--bg-card)" }}
              >
                <span
                  className="absolute top-3 right-3 font-mono text-[10px] px-2 py-0.5 rounded-full"
                  style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                >
                  pinned
                </span>
                <Icon size={28} style={{ color: "var(--accent)" }} />
                <div>
                  <div className="font-medium text-base" style={{ color: "var(--text-primary)" }}>
                    {skill.name}
                  </div>
                  <div className="font-mono text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>
                    {skill.note}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div
        className="font-mono text-xs mb-4 uppercase tracking-wide"
        style={{ color: "var(--text-tertiary)" }}
      >
        additional skills
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {additionalSkills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <Reveal key={skill.name} delay={(i % 8) * 40}>
              <div
                className="rounded-lg border px-4 py-3 flex items-center gap-3 skill-glow"
                style={{ borderColor: "var(--border-faint)", background: "var(--bg-card)" }}
              >
                <Icon size={18} style={{ color: "var(--text-secondary)" }} />
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>
                  {skill.name}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
