/**
 * ProcessStep — a single step in the engagement timeline.
 *
 * Props:
 *   number     string  — e.g., "1/5"
 *   title      string
 *   description string
 */
export default function ProcessStep({ number, title, description }) {
  return (
    <div className="flex flex-col mb-8 last:mb-0 group">
      {/* CLI output line style */}
      <div className="flex gap-3 items-baseline mb-2">
        <span className="font-mono text-xs text-brand-accent shrink-0">
          [step {number}]
        </span>
        <h3 className="text-brand-text font-display font-semibold text-lg leading-snug">
          {title}
        </h3>
      </div>
      
      {/* Content */}
      <div className="pl-[5.5rem] sm:pl-24">
        <p className="text-brand-muted text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
