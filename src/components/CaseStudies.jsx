import { useEffect, useRef } from 'react'

const projects = [
  {
    index: 1,
    tag: 'Cloud Migration',
    title: 'Enterprise AWS Migration',
    description: 'A complete lift-and-shift of legacy on-prem infrastructure to AWS with zero downtime and improved security posture.',
  },
  {
    index: 2,
    tag: 'DevOps / CI/CD',
    title: 'Automated Deployment Pipeline',
    description: 'Reduced deployment times from days to minutes using GitLab CI and Terraform for a global SaaS provider.',
  },
  {
    index: 3,
    tag: 'Containerization',
    title: 'Kubernetes Orchestration',
    description: 'Containerized a monolithic application and orchestrated it using EKS, enabling auto-scaling during peak loads.',
  },
]

export default function CaseStudies() {
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
    <section id="work" className="py-24 relative overflow-hidden bg-transparent">
      {/* Decorative gradient */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">
            Our Work
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6">
            Proven engineering.
          </h3>
          <p className="text-slate-400 text-lg">
            We deliver robust infrastructure and scalable platforms. Here are examples of
            how we've solved complex engineering challenges.
          </p>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div
              key={proj.index}
              className="group glass-panel rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_12px_40px_rgb(59,130,246,0.15)] hover:-translate-y-2 flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-48 bg-[#0B0D10]/50 relative overflow-hidden border-b border-white/5 flex items-center justify-center">
                {/* Abstract visualization placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/5 opacity-50 group-hover:scale-110 transition-transform duration-700" />
                <svg className="w-12 h-12 text-slate-700 relative z-10 group-hover:text-blue-500/50 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-3">
                  {proj.tag}
                </span>
                <h4 className="text-xl font-bold text-white mb-3">
                  {proj.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {proj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
