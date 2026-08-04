/**
 * ServiceCard — a single service offering card.
 *
 * Props:
 *   icon       React element — SVG icon
 *   filename   string   — e.g., "01_dockerize.yaml"
 *   title      string
 *   description string
 *   bullets    string[] — "what you get" list items
 *   delay      number   — stagger delay in ms (for reveal)
 */
export default function ServiceCard({ icon, filename, title, description, bullets, delay = 0 }) {
  return (
    <article
      className="group relative flex flex-col rounded-sm border border-brand-line bg-brand-surface p-7 hover:border-brand-muted transition-colors duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-line group-hover:bg-brand-muted transition-colors duration-300" />

      {/* Header section */}
      <div className="flex items-center justify-between mb-5">
        <div className="text-brand-muted">
          {icon}
        </div>
        <div className="font-mono text-xs text-brand-muted">
          {filename}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-brand-text font-display font-semibold text-xl mb-2 tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* What you get */}
      <div className="border-t border-brand-line pt-4">
        <p className="font-mono text-xs text-brand-muted mb-3">
          # what you get
        </p>
        <ul className="space-y-2.5">
          {bullets.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-brand-text">
              <span className="text-brand-accent mt-0.5 font-mono text-xs">{'>'}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
