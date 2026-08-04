import { useEffect, useRef, useState } from 'react'

const categories = ['All', 'Cloud', 'DevOps', 'Web App', 'Mobile', 'SaaS', 'Enterprise']

const projects = [
  {
    id: 1,
    name: 'AWS EKS Production Platform',
    category: 'Cloud',
    description: 'End-to-end Kubernetes cluster on AWS EKS with auto-scaling, load balancing, and full observability stack.',
    tech: ['AWS EKS', 'Terraform', 'Helm', 'Prometheus', 'Grafana'],
    image: '/images/aws_eks.png',
  },
  {
    id: 2,
    name: 'Enterprise CRM System',
    category: 'Enterprise',
    description: 'Custom CRM with sales pipeline, client management, invoicing, and analytics dashboard for a B2B firm.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    image: '/images/enterprise_crm.png',
  },
  {
    id: 3,
    name: 'Restaurant Chain Platform',
    category: 'Web App',
    description: 'Full-stack web platform for a restaurant chain with online ordering, table reservations, and kitchen dashboard.',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Node.js'],
    image: '/images/restaurant_platform.png',
  },
  {
    id: 4,
    name: 'E-Commerce Platform',
    category: 'Web App',
    description: 'High-performance e-commerce store with inventory management, payment gateway, and real-time analytics.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
    image: '/images/ecommerce_platform.png',
  },
  {
    id: 5,
    name: 'Hospital Management System',
    category: 'Enterprise',
    description: 'Complete HMS with patient records, appointment scheduling, billing, and doctor portal.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: '/images/hospital_system.png',
  },
  {
    id: 6,
    name: 'School Management System',
    category: 'Enterprise',
    description: 'Multi-tenant school platform with student management, timetabling, grades, and parent portal.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
    image: '/images/school_system.png',
  },
  {
    id: 7,
    name: 'Travel Agency Booking Platform',
    category: 'Web App',
    description: 'End-to-end travel booking platform with real-time flight integrations, hotel reservations, and custom itinerary builder.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Amadeus API'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    name: 'Flutter Mobile App',
    category: 'Mobile',
    description: 'Cross-platform iOS/Android app with real-time data sync, push notifications, and offline support.',
    tech: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    image: '/images/restaurant_platform.png',
  },
  {
    id: 9,
    name: 'SaaS Analytics Dashboard',
    category: 'SaaS',
    description: 'Multi-tenant SaaS platform with subscription billing, white-labelling, and real-time dashboards.',
    tech: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'AWS'],
    image: '/images/ecommerce_platform.png',
  },
  {
    id: 10,
    name: 'Kubernetes Production Cluster',
    category: 'DevOps',
    description: 'Full GitOps workflow with ArgoCD, Cert-Manager, Ingress-NGINX, and automated blue/green deployments.',
    tech: ['Kubernetes', 'ArgoCD', 'Helm', 'Terraform', 'GitHub Actions'],
    image: '/images/aws_eks.png',
  },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const headingRef = useRef(null)

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

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

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">Portfolio</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Projects we're proud of.
          </h3>
          <p className="text-slate-400 text-lg">
            From enterprise platforms to production Kubernetes clusters, here's what we've shipped.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-blue-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className="group glass-panel rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Image area */}
              <div className="h-48 relative overflow-hidden border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs text-slate-200 font-mono border border-white/10 z-10 shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-bold text-white mb-2">{project.name}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-xs text-slate-400 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2">
                  <a
                    href="#contact"
                    onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="flex-1 text-center py-2 rounded-lg text-xs font-semibold bg-blue-600/20 border border-blue-600/30 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                  >
                    Case Study
                  </a>
                  <a
                    href="https://calendly.com/corelanesystems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg text-xs font-semibold glass-panel text-slate-300 hover:text-white hover:border-blue-500/40 transition-all duration-300"
                  >
                    Discuss Project
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
