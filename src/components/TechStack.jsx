import { useEffect, useRef } from 'react'

const techCategories = [
  {
    label: 'Cloud',
    items: [
      { name: 'AWS', color: 'text-orange-400', bg: 'bg-orange-500/10 hover:bg-orange-500/20 hover:border-orange-500/40' },
      { name: 'Azure', color: 'text-blue-400', bg: 'bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/40' },
      { name: 'Google Cloud', color: 'text-blue-300', bg: 'bg-sky-500/10 hover:bg-sky-500/20 hover:border-sky-500/40' },
    ]
  },
  {
    label: 'Containers & Infra',
    items: [
      { name: 'Docker', color: 'text-blue-400', bg: 'bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/40' },
      { name: 'Kubernetes', color: 'text-blue-400', bg: 'bg-blue-600/10 hover:bg-blue-600/20 hover:border-blue-600/40' },
      { name: 'Terraform', color: 'text-purple-400', bg: 'bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-500/40' },
      { name: 'Ansible', color: 'text-red-400', bg: 'bg-red-500/10 hover:bg-red-500/20 hover:border-red-500/40' },
    ]
  },
  {
    label: 'CI/CD',
    items: [
      { name: 'GitHub Actions', color: 'text-slate-300', bg: 'bg-slate-500/10 hover:bg-slate-500/20 hover:border-slate-500/40' },
      { name: 'GitLab CI', color: 'text-orange-400', bg: 'bg-orange-500/10 hover:bg-orange-500/20 hover:border-orange-500/40' },
      { name: 'Jenkins', color: 'text-slate-300', bg: 'bg-slate-500/10 hover:bg-slate-500/20 hover:border-slate-500/40' },
    ]
  },
  {
    label: 'Backend & Databases',
    items: [
      { name: 'Node.js', color: 'text-green-400', bg: 'bg-green-500/10 hover:bg-green-500/20 hover:border-green-500/40' },
      { name: 'Python', color: 'text-yellow-400', bg: 'bg-yellow-500/10 hover:bg-yellow-500/20 hover:border-yellow-500/40' },
      { name: 'FastAPI', color: 'text-teal-400', bg: 'bg-teal-500/10 hover:bg-teal-500/20 hover:border-teal-500/40' },
      { name: 'PostgreSQL', color: 'text-blue-400', bg: 'bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/40' },
      { name: 'MongoDB', color: 'text-green-400', bg: 'bg-green-500/10 hover:bg-green-500/20 hover:border-green-500/40' },
      { name: 'Redis', color: 'text-red-400', bg: 'bg-red-500/10 hover:bg-red-500/20 hover:border-red-500/40' },
    ]
  },
  {
    label: 'Frontend & Mobile',
    items: [
      { name: 'React', color: 'text-cyan-400', bg: 'bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-500/40' },
      { name: 'Next.js', color: 'text-slate-200', bg: 'bg-slate-400/10 hover:bg-slate-400/20 hover:border-slate-400/40' },
      { name: 'Flutter', color: 'text-blue-400', bg: 'bg-blue-400/10 hover:bg-blue-400/20 hover:border-blue-400/40' },
    ]
  },
  {
    label: 'Monitoring',
    items: [
      { name: 'Prometheus', color: 'text-orange-400', bg: 'bg-orange-500/10 hover:bg-orange-500/20 hover:border-orange-500/40' },
      { name: 'Grafana', color: 'text-orange-400', bg: 'bg-orange-400/10 hover:bg-orange-400/20 hover:border-orange-400/40' },
      { name: 'Linux', color: 'text-yellow-400', bg: 'bg-yellow-500/10 hover:bg-yellow-500/20 hover:border-yellow-500/40' },
      { name: 'Nginx', color: 'text-green-400', bg: 'bg-green-500/10 hover:bg-green-500/20 hover:border-green-500/40' },
    ]
  },
]

export default function TechStack() {
  const headingRef = useRef(null)
  const gridRef    = useRef(null)

  useEffect(() => {
    const els = [headingRef.current, gridRef.current].filter(Boolean)
    els.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
    })
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'all 0.7s cubic-bezier(0.16,1,0.3,1)'
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">Technology Stack</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Built on proven technology.
          </h3>
          <p className="text-slate-400 text-lg">
            We use industry-standard tools trusted by the world's best engineering teams.
          </p>
        </div>

        <div ref={gridRef} className="space-y-10">
          {techCategories.map((category, catIdx) => (
            <div key={category.label}>
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">
                // {category.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech, i) => (
                  <div
                    key={tech.name}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 ${tech.bg} cursor-default transition-all duration-300 hover:scale-105 hover:-translate-y-0.5`}
                    style={{ transitionDelay: `${(catIdx * 3 + i) * 30}ms` }}
                  >
                    <span className={`text-sm font-semibold tracking-wide ${tech.color}`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
