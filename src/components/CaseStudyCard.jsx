/**
 * CaseStudyCard — placeholder project card.
 *
 * Props:
 *   tag         string  — service category tag
 *   title       string
 *   description string
 *   outcome     string  — one-line result / outcome
 *   index       number  — card number shown in placeholder state
 */
export default function CaseStudyCard({ tag, title, description, outcome, index }) {
  return (
    <article className="group relative flex flex-col rounded-sm border border-brand-line bg-brand-surface overflow-hidden hover:border-brand-muted transition-colors duration-300">

      {/* Top image placeholder area */}
      <div className="h-44 bg-brand-bg flex items-center justify-center border-b border-brand-line relative overflow-hidden">
        <div className="text-center relative z-10">
          <div className="font-mono text-4xl font-bold text-brand-line mb-1">{String(index).padStart(2, '0')}</div>
          <span className="font-mono text-xs text-brand-muted">_placeholder.png</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tag */}
        <span className="inline-block font-mono text-xs text-brand-accent mb-3">
          [{tag.toLowerCase().replace(/ /g, '_')}]
        </span>

        {/* Title */}
        <h3 className="text-brand-text font-display font-semibold text-lg mb-2 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-brand-muted text-sm leading-relaxed flex-grow mb-5">
          {description}
        </p>

        {/* Outcome chip */}
        <div className="flex items-start gap-2 text-sm border-t border-brand-line pt-4 mt-auto">
          <span className="font-mono text-xs text-brand-accent mt-0.5">{'>'}</span>
          <span className="text-brand-muted font-mono text-xs">{outcome}</span>
        </div>
      </div>
    </article>
  )
}
