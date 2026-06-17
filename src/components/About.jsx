import avatar from "../assets/profile/avatar.png";
import { profile } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-24 max-w-5xl">
      <SectionHeading index="about.js" title="About" />

      <Reveal className="flex flex-col md:flex-row gap-10 items-start">
        <div
          className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border shrink-0"
          style={{ borderColor: "var(--border-mid)" }}
        >
          <img src={avatar} alt={profile.brand} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1">
          <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
            {profile.bio}
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I work across the full stack — designing the database schema, building the API,
            and shipping the interface that sits on top of it. Most of my recent work has been
            building and deploying production e-commerce and business sites for clients,
            handling everything from authentication to deployment.
          </p>

          <div
            className="mt-8 font-mono text-sm rounded-lg border p-4"
            style={{ borderColor: "var(--border-faint)", background: "var(--bg-card)" }}
          >
            <span style={{ color: "var(--text-tertiary)" }}>{"// currently"}</span>
            <br />
            <span style={{ color: "var(--accent)" }}>const</span>{" "}
            <span style={{ color: "var(--text-primary)" }}>focus</span> = [
            <span style={{ color: "var(--warn)" }}>"freelance clients"</span>,{" "}
            <span style={{ color: "var(--warn)" }}>"personal projects"</span>];
          </div>
        </div>
      </Reveal>
    </section>
  );
}
