import { marqueeSkills } from "../data";

export default function TechMarquee() {
  // Duplicate the list so the loop is seamless
  const items = [...marqueeSkills, ...marqueeSkills];

  return (
    <div
      className="relative overflow-hidden border-y py-6"
      style={{ borderColor: "var(--border-faint)", background: "var(--bg-panel)" }}
    >
      {/* Edge fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg-panel), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg-panel), transparent)" }}
      />

      <div className="marquee-track flex gap-10 w-max">
        {items.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.name}-${i}`}
              className="flex items-center gap-2.5 font-mono text-sm shrink-0"
              style={{ color: "var(--text-secondary)" }}
            >
              <Icon size={20} style={{ color: "var(--accent)" }} />
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
