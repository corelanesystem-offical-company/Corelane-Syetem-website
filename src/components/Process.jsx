import { useEffect, useRef } from 'react'
import ProcessStep from './ProcessStep'

const steps = [
  {
    number: '1/5',
    title: 'Discovery call',
    description:
      `A 30-minute call to understand your current setup, what you're trying to achieve, and whether we're a good fit. No pitch — just questions.`,
  },
  {
    number: '2/5',
    title: 'Assessment',
    description:
      'We review your codebase, infrastructure, and tooling. This gives us what we need to scope the work accurately — no surprises later.',
  },
  {
    number: '3/5',
    title: 'Proposal',
    description:
      `A written proposal with a fixed price, a clear scope, and a realistic timeline. You know exactly what you're getting before we start.`,
  },
  {
    number: '4/5',
    title: 'Build',
    description:
      'We do the work. You get progress updates and access to the repository throughout — not a black box that opens at the end.',
  },
  {
    number: '5/5',
    title: 'Handover',
    description:
      'Everything is documented: runbooks, architecture notes, environment setup, and a handover call so your team can own it going forward.',
  },
]

export default function Process() {
  const headingRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const els = [headingRef.current, contentRef.current].filter(Boolean)
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
    <section id="process" className="py-24 relative overflow-hidden bg-transparent">
      {/* Decorative gradient */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: heading */}
          <div ref={headingRef} className="sticky top-32">
            <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">
              How it works
            </h2>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-6">
              A straightforward engagement.
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm mb-8">
              Every engagement follows the same five steps — designed to keep the
              scope clear, the communication open, and the handover clean.
            </p>
            
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
              <p className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Fixed Pricing Model
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                The price in the proposal is the price you pay. We don't bill by the hour
                and we don't add scope without your approval.
              </p>
            </div>
          </div>

          {/* Right: timeline */}
          <div ref={contentRef} className="lg:mt-4 relative">
            {/* Timeline track */}
            <div className="absolute left-[1.125rem] top-4 bottom-12 w-px bg-slate-800 hidden sm:block" />
            
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="relative glass-panel p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)] hover:-translate-y-1">
                  <ProcessStep
                    number={step.number}
                    title={step.title}
                    description={step.description}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
