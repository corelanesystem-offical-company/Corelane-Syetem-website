import { useEffect, useRef } from 'react'

const points = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Fixed pricing, no hourly billing',
    description: `Every engagement is priced upfront from a written proposal. If scope doesn't change, the price doesn't change.`,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Documented handover, always',
    description: 'You get runbooks, architecture notes, and a handover call. The goal is that your team can own and operate everything we build.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Founder-led delivery',
    description: `The person you speak to is the person who does the work. There's no hand-off to a junior or a subcontractor midway through.`,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Modern, standard tooling',
    description: 'Docker, AWS, GitHub Actions, GitLab CI. Established tools with broad community support — not experimental or proprietary stacks.',
  },
]

export default function WhyCorelane() {
  const headingRef = useRef(null)
  const gridRef    = useRef(null)

  useEffect(() => {
    const els = [headingRef.current, gridRef.current].filter(Boolean)
    els.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <div ref={headingRef} className="mb-16">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">
            Why Corelane
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight max-w-lg mb-4">
            Small on purpose. Clear on delivery.
          </h3>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            Here's an honest account of how we work and what makes this engagement
            different from hiring a large agency.
          </p>
        </div>

        {/* 2×2 grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((pt, i) => (
            <div
              key={pt.title}
              className="glass-panel p-8 rounded-2xl hover:border-blue-500/40 transition-all duration-300 group hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:-translate-y-1 flex gap-5"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
                {pt.icon}
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-2">
                  {pt.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {pt.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
