import { LuMail, LuArrowUpRight } from "react-icons/lu";
import { SiGithub, SiX } from "react-icons/si";
import { profile } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 py-24 max-w-5xl">
      <SectionHeading index="contact.sh" title="Contact" />

      <Reveal>
        <div
          className="rounded-xl border p-8 md:p-12"
          style={{ borderColor: "var(--border-mid)", background: "var(--bg-card)" }}
        >
        <h3 className="text-2xl md:text-3xl font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
          Got a project in mind?
        </h3>
        <p className="text-base mb-8 max-w-md" style={{ color: "var(--text-secondary)" }}>
          I'm currently available for freelance work. Send a message and I'll get back to you.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 font-mono text-sm px-5 py-3 rounded-md mb-8"
          style={{ background: "var(--accent)", color: "var(--bg-void)" }}
        >
          <LuMail size={16} />
          {profile.email}
        </a>

        <div className="flex gap-4 pt-6 border-t" style={{ borderColor: "var(--border-faint)" }}>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm transition-colors duration-150"
            style={{ color: "var(--text-secondary)" }}
          >
            <SiGithub size={16} /> GitHub <LuArrowUpRight size={12} />
          </a>
          <a
            href={profile.x}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-sm transition-colors duration-150"
            style={{ color: "var(--text-secondary)" }}
          >
            <SiX size={16} /> X <LuArrowUpRight size={12} />
          </a>
        </div>
        </div>
      </Reveal>

      <footer className="mt-16 text-center font-mono text-xs" style={{ color: "var(--text-tertiary)" }}>
        © {new Date().getFullYear()} {profile.brand} — built with React
      </footer>
    </section>
  );
}
