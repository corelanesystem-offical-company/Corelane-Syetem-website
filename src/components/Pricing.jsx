import { useEffect, useRef } from 'react'

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: 'per project',
    tagline: 'Perfect for startups and small businesses.',
    popular: false,
    features: [
      'Custom Website Development',
      'Up to 5 Pages',
      'Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      'Domain & Hosting Guidance',
      '2 Rounds of Revisions',
      '30-Day Post-Launch Support',
    ],
    cta: 'Get Started',
    border: 'border-white/10 hover:border-blue-500/30',
  },
  {
    name: 'Professional',
    price: '$1,499',
    period: 'per project',
    tagline: 'Best for SMEs and growing SaaS companies.',
    popular: true,
    features: [
      'Full Stack Web Application',
      'Custom Backend & REST API',
      'Authentication & User Roles',
      'Database Design & Optimisation',
      'Docker Containerisation',
      'CI/CD Pipeline Setup',
      'AWS Cloud Deployment',
      'Admin Dashboard',
      '3 Months Support',
    ],
    cta: 'Most Popular — Book Now',
    border: 'border-blue-500/50 shadow-[0_0_40px_rgba(37,99,235,0.2)]',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored scope',
    tagline: 'For large-scale systems and enterprise clients.',
    popular: false,
    features: [
      'Everything in Professional',
      'Kubernetes Orchestration',
      'Infrastructure as Code (Terraform)',
      'Multi-environment Deployments',
      'Monitoring & Observability Stack',
      'Security Audit & Hardening',
      'SLA & Uptime Guarantees',
      'Dedicated Project Manager',
      'Ongoing Managed Hosting',
      '12 Months Priority Support',
    ],
    cta: 'Request a Proposal',
    border: 'border-white/10 hover:border-teal-500/30',
  },
]

const CheckIcon = () => (
  <svg className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

export default function Pricing() {
  const headingRef = useRef(null)
  const cardsRef   = useRef([])

  useEffect(() => {
    const els = [headingRef.current, ...cardsRef.current].filter(Boolean)
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

  const handleCta = (plan) => {
    if (plan.name === 'Enterprise') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open('https://calendly.com/corelanesystems', '_blank')
    }
  }

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">Pricing</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Transparent. Fixed. No surprises.
          </h3>
          <p className="text-slate-400 text-lg">
            Every engagement starts with a written proposal. The price you agree is the price you pay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              ref={el => cardsRef.current[i] = el}
              className={`relative flex flex-col glass-panel rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-1 ${plan.border} ${plan.popular ? 'md:-translate-y-4' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-1">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-white font-display">{plan.price}</span>
                  {plan.period !== 'tailored scope' && <span className="text-slate-400 text-sm">/{plan.period}</span>}
                </div>
                <p className="text-slate-400 text-sm">{plan.tagline}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map(feat => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckIcon />
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCta(plan)}
                className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]'
                    : 'border border-white/10 text-white hover:bg-white/5 hover:border-blue-500/40'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10 font-mono">
          // All prices are starting points. Complex projects are scoped individually.
        </p>
      </div>
    </section>
  )
}
