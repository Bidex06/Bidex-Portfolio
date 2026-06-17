import { LuQuote } from "react-icons/lu";
import { testimonials } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 md:px-16 py-24 max-w-5xl">
      <SectionHeading
        index="testimonials.md"
        title="Testimonials"
        description="Placeholder quotes — swap these out with real client feedback."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 100}>
            <figure
              className="rounded-lg border p-6 flex flex-col h-full"
              style={{ borderColor: "var(--border-faint)", background: "var(--bg-card)" }}
            >
              <LuQuote size={20} style={{ color: "var(--accent)" }} className="mb-4" />
              <blockquote className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t" style={{ borderColor: "var(--border-faint)" }}>
                <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {t.name}
                </div>
                <div className="font-mono text-xs mt-0.5" style={{ color: "var(--text-tertiary)" }}>
                  {t.role}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
