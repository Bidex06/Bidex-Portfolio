import { useState, useEffect } from "react";
import { LuLayoutDashboard, LuUser, LuFolderGit2, LuLayers, LuQuote, LuMail, LuTerminal } from "react-icons/lu";

const sections = [
  { id: "hero", label: "hero", icon: LuLayoutDashboard },
  { id: "about", label: "about", icon: LuUser },
  { id: "projects", label: "projects", icon: LuFolderGit2 },
  { id: "skills", label: "skills", icon: LuLayers },
  { id: "testimonials", label: "testimonials", icon: LuQuote },
  { id: "contact", label: "contact", icon: LuMail },
];

export default function Sidebar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile top bar */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 border-b"
        style={{ background: "var(--bg-panel)", borderColor: "var(--border-faint)" }}
      >
        <span className="font-mono text-sm" style={{ color: "var(--accent)" }}>
          codewithBidex
        </span>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="font-mono text-xs px-3 py-1.5 rounded border"
          style={{ borderColor: "var(--border-mid)", color: "var(--text-secondary)" }}
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:top-0 md:left-0 md:h-screen md:w-60 z-40 border-r flex flex-col transition-transform duration-200 ${
          open ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0 top-12 left-0 right-0 md:right-auto`}
        style={{ background: "var(--bg-panel)", borderColor: "var(--border-faint)" }}
      >
        <div className="hidden md:flex items-center gap-2 px-5 py-5 border-b" style={{ borderColor: "var(--border-faint)" }}>
          <LuTerminal size={18} style={{ color: "var(--accent)" }} />
          <span className="font-mono text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            codewithBidex
          </span>
        </div>

        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          {sections.map((s) => {
            const Icon = s.icon;
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleClick(s.id)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-left transition-colors duration-150 font-mono text-sm"
                style={{
                  background: isActive ? "var(--accent-soft)" : "transparent",
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  borderLeft: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                }}
              >
                <Icon size={16} />
                <span>{s.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="px-5 py-4 border-t font-mono text-xs" style={{ borderColor: "var(--border-faint)", color: "var(--text-tertiary)" }}>
          status: <span style={{ color: "var(--accent)" }}>available</span>
        </div>
      </aside>
    </>
  );
}
