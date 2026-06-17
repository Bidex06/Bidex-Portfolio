import { useState, useEffect } from "react";
import { LuArrowDown } from "react-icons/lu";
import { profile } from "../data";

const roles = ["React.js", "ASP.NET Core", "C#", "Full-Stack Engineer"];

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-16 pt-20 md:pt-0 relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-mid) 1px, transparent 1px), linear-gradient(90deg, var(--border-mid) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-3xl relative reveal">
        <div
          className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border mb-8"
          style={{ borderColor: "var(--border-mid)", color: "var(--text-secondary)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
          open to freelance work
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
          {profile.role}
        </h1>

        <div
          className="font-mono text-lg md:text-2xl mb-6 h-8 flex items-center"
          style={{ color: "var(--accent)" }}
        >
          <span>const stack = "{typed}"</span>
          <span className="caret">_</span>
        </div>

        <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: "var(--text-secondary)" }}>
          {profile.bio}
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#projects"
            className="font-mono text-sm px-5 py-3 rounded-md font-medium transition-transform duration-150 hover:-translate-y-0.5"
            style={{ background: "var(--accent)", color: "var(--bg-void)" }}
          >
            view projects
          </a>
          <a
            href="#contact"
            className="font-mono text-sm px-5 py-3 rounded-md border transition-colors duration-150"
            style={{ borderColor: "var(--border-mid)", color: "var(--text-primary)" }}
          >
            get in touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-10 left-16 items-center gap-2 font-mono text-xs"
        style={{ color: "var(--text-tertiary)" }}
        aria-label="Scroll to about section"
      >
        <LuArrowDown size={14} />
        scroll
      </a>
    </section>
  );
}
