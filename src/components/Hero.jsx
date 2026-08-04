import { useEffect, useRef } from 'react'
import PipelineStrip from './PipelineStrip'

const techBadges = ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'React', 'Node.js']

const trustStats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '30+', label: 'Happy Clients' },
  { value: '15+', label: 'Cloud Deployments' },
]

export default function Hero() {
  const headlineRef = useRef(null)
  const subRef      = useRef(null)
  const ctaRef      = useRef(null)
  const pipelineRef = useRef(null)
  const badgesRef   = useRef(null)
  const statsRef    = useRef(null)

  useEffect(() => {
    const els = [headlineRef.current, subRef.current, pipelineRef.current, ctaRef.current, badgesRef.current, statsRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 100 + i * 130)
    })
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full pt-32 pb-20 flex flex-col items-start text-left z-10">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 font-mono text-xs mb-8 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          ENTERPRISE SOFTWARE AGENCY — SYSTEMS_ONLINE
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 leading-[1.05] tracking-tight mb-8 max-w-5xl"
        >
          We Build &amp; Deploy <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Software That Scales.
          </span>
        </h1>

        {/* Pipeline Signature Element */}
        <div ref={pipelineRef} className="mb-10 w-full max-w-2xl relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-[40px] -z-10" />
          <PipelineStrip />
        </div>

        {/* Sub */}
        <p
          ref={subRef}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
        >
          From custom web applications and mobile apps to AWS infrastructure,
          CI/CD automation, and Kubernetes orchestration — Corelane Systems
          delivers enterprise-grade engineering with fixed pricing and zero surprises.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full sm:w-auto mb-16"
        >
          <a
            href="https://calendly.com/corelanesystems"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            Book Free Consultation
          </a>
          <button
            onClick={() => scrollTo('portfolio')}
            className="w-full sm:w-auto px-8 py-4 text-sm font-semibold rounded-full glass-panel text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            View Our Work
          </button>
        </div>

        {/* Tech badges */}
        <div ref={badgesRef} className="mb-10">
          <p className="font-mono text-xs text-slate-500 mb-4">TRUSTED TECHNOLOGIES</p>
          <div className="flex flex-wrap gap-2">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-slate-300 text-xs font-mono hover:border-blue-500/40 hover:text-blue-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Trust Stats */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
          {trustStats.map((stat) => (
            <div key={stat.label} className="glass-panel rounded-xl p-4 text-center hover:border-blue-500/30 transition-colors">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
