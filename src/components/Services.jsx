import { useEffect, useRef } from 'react'

const services = [
  {
    title: 'Cloud Solutions',
    description: 'Design, deploy, and manage secure and scalable cloud infrastructure on AWS, Azure, and Google Cloud. We help businesses migrate, optimize, and modernize their cloud environments.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Automate software delivery with modern CI/CD pipelines, Infrastructure as Code, and DevOps best practices for faster, more reliable deployments.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Docker & Kubernetes',
    description: 'Containerize applications and orchestrate workloads using Docker and Kubernetes to improve scalability, availability, and operational efficiency.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Infrastructure as Code',
    description: 'Build repeatable, version-controlled cloud infrastructure using Terraform and Ansible for faster provisioning and easier management.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Software Development',
    description: 'Develop secure, scalable, and high-performance web applications, APIs, and custom software solutions tailored to business needs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'AI & Business Automation',
    description: 'Create AI-powered chatbots, intelligent assistants, and workflow automation solutions that improve productivity and customer engagement.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Monitoring & Observability',
    description: 'Monitor applications and infrastructure using Prometheus, Grafana, Loki, and the ELK Stack with real-time dashboards, logging, and alerting.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Cloud Security',
    description: 'Strengthen cloud environments with identity management, security best practices, vulnerability assessments, compliance, and DevSecOps integration.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
]

export default function Services() {
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (headerRef.current) {
      headerRef.current.style.opacity = '0'
      headerRef.current.style.transform = 'translateY(20px)'
      headerRef.current.style.transition = 'all 0.6s ease-out'
      observer.observe(headerRef.current)
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0'
        card.style.transform = 'translateY(30px)'
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`
        observer.observe(card)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-transparent">
      {/* Decorative background glow to match the blue theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">
            Our Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise-grade IT Solutions
          </h3>
          <p className="text-lg text-slate-400">
            We deliver premium cloud, devops, and software engineering services
            tailored to accelerate your business growth and secure your infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative flex flex-col glass-panel hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_12px_40px_rgb(59,130,246,0.15)] hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              {/* Learn More Button */}
              <button className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-auto w-fit group/btn">
                Learn More
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
