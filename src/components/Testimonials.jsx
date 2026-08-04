import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'James Whitfield',
    role: 'CTO',
    company: 'NovaBridge Tech',
    country: '🇬🇧 United Kingdom',
    rating: 5,
    review: `Corelane Systems transformed our entire deployment process. What used to take hours of manual work now runs automatically in minutes. Their Kubernetes setup is rock-solid and the documentation they handed over meant our team could own it from day one.`,
    avatar: 'JW',
    color: 'bg-blue-500',
  },
  {
    name: 'Aisha Al-Rashidi',
    role: 'Founder & CEO',
    company: 'CloudNest Solutions',
    country: '🇦🇪 UAE',
    rating: 5,
    review: `Muhammad Zaid and the team delivered our AWS infrastructure exactly on time and on budget. The Terraform code is clean, well-documented, and fully reusable. I've worked with larger agencies that delivered far less. Corelane is now our permanent DevOps partner.`,
    avatar: 'AA',
    color: 'bg-teal-500',
  },
  {
    name: 'Sven Lindqvist',
    role: 'Lead Engineer',
    company: 'Nordex Digital',
    country: '🇸🇪 Sweden',
    rating: 5,
    review: `Exceptional work on our full-stack SaaS platform. The React + Node.js architecture is scalable, the CI/CD pipeline they set up catches issues before they ever hit production, and the team was responsive throughout. Highly recommend for any serious engineering project.`,
    avatar: 'SL',
    color: 'bg-purple-500',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Technology',
    company: 'HealthLink Systems',
    country: '🇮🇳 India',
    rating: 5,
    review: `We hired Corelane to build our hospital management system and they exceeded every expectation. The system handles thousands of patient records reliably, the UI is clean and fast, and the PostgreSQL schema is designed for the long term. Outstanding delivery.`,
    avatar: 'PS',
    color: 'bg-pink-500',
  },
  {
    name: 'Carlos Reyes',
    role: 'Product Manager',
    company: 'TiendaFast',
    country: '🇲🇽 Mexico',
    rating: 5,
    review: `Our e-commerce platform went live in 6 weeks. Corelane integrated Stripe, built the inventory system, and deployed everything on AWS with Redis caching. The site handles Black Friday traffic without breaking a sweat. Professional team, professional results.`,
    avatar: 'CR',
    color: 'bg-orange-500',
  },
]

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const headingRef = useRef(null)

  useEffect(() => {
    if (!headingRef.current) return
    headingRef.current.style.opacity = '0'
    headingRef.current.style.transform = 'translateY(24px)'
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'all 0.7s cubic-bezier(0.16,1,0.3,1)'
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
        observer.disconnect()
      }
    }, { threshold: 0.1 })
    observer.observe(headingRef.current)
    return () => observer.disconnect()
  }, [])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">Testimonials</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            What clients say.
          </h3>
        </div>

        {/* Main testimonial card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 mb-8 relative">
          <div className="absolute top-6 right-8 font-mono text-8xl leading-none text-blue-500/10 font-bold select-none">"</div>

          <div className="flex gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => <StarIcon key={i} />)}
          </div>

          <blockquote className="text-slate-200 text-lg leading-relaxed mb-8 font-light">
            "{t.review}"
          </blockquote>

          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
              {t.avatar}
            </div>
            <div>
              <div className="text-white font-semibold">{t.name}</div>
              <div className="text-slate-400 text-sm">{t.role} · {t.company}</div>
              <div className="text-slate-500 text-xs mt-0.5">{t.country}</div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center items-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-8 h-2 bg-blue-500'
                  : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail row */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {testimonials.map((t2, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs transition-all duration-300 ${
                i === current ? 'border-blue-500/50 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={`w-5 h-5 rounded-full ${t2.color} text-white text-[9px] flex items-center justify-center font-bold`}>{t2.avatar}</div>
              {t2.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
