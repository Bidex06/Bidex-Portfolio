export default function SectionHeading({ index, title, description }) {
  return (
    <div className="mb-10 reveal">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-sm" style={{ color: "var(--accent)" }}>
          {index}
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: "var(--text-primary)" }}>
          {title}
        </h2>
      </div>
      {description && (
        <p className="text-sm md:text-base max-w-xl" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
