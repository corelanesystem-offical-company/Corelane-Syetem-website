import { useEffect, useRef } from 'react'

const articles = [
  {
    category: 'Docker',
    title: 'Dockerizing a Node.js Application: A Production-Ready Guide',
    excerpt: 'Learn how to write multi-stage Dockerfiles, manage secrets securely, and build lean production images that run identically across every environment.',
    readTime: '8 min read',
    date: 'Jul 2025',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  },
  {
    category: 'Kubernetes',
    title: 'Running a Production Kubernetes Cluster on AWS EKS',
    excerpt: 'A practical walkthrough of setting up EKS with Terraform, configuring auto-scaling, and implementing GitOps with ArgoCD for zero-downtime deployments.',
    readTime: '12 min read',
    date: 'Jul 2025',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  },
  {
    category: 'AWS',
    title: 'AWS Cost Optimisation: 10 Changes That Cut Your Bill in Half',
    excerpt: 'Practical, immediately actionable steps to reduce your AWS spend — from right-sizing EC2 instances to leveraging Savings Plans and S3 Intelligent Tiering.',
    readTime: '10 min read',
    date: 'Jun 2025',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
  },
  {
    category: 'CI/CD',
    title: 'Building a Zero-Downtime CI/CD Pipeline with GitHub Actions',
    excerpt: 'End-to-end guide to automating builds, tests, and deployments with GitHub Actions — including environment gates, secrets management, and rollback strategies.',
    readTime: '9 min read',
    date: 'Jun 2025',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    category: 'Web Development',
    title: 'Next.js 15 App Router: Building Scalable SaaS Applications',
    excerpt: 'A deep dive into Next.js 15 App Router patterns for multi-tenant SaaS: data fetching strategies, middleware, authentication, and API routes at scale.',
    readTime: '11 min read',
    date: 'May 2025',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    category: 'DevOps',
    title: 'Infrastructure as Code with Terraform: From Zero to Production',
    excerpt: 'Structure your Terraform projects for real teams — modules, remote state, workspaces, and CI/CD integration for fully automated infrastructure provisioning.',
    readTime: '14 min read',
    date: 'May 2025',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    icon: <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
  },
]

export default function Blog() {
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

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">Blog</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Engineering insights.
          </h3>
          <p className="text-slate-400 text-lg">
            Practical guides from our engineers on cloud, DevOps, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article
              key={article.title}
              ref={el => cardsRef.current[i] = el}
              className="group glass-panel rounded-2xl p-7 flex flex-col hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-5">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold ${article.bg} ${article.color} border border-current/20`}>
                  {article.icon} {article.category}
                </span>
                <span className="text-slate-500 text-xs font-mono">{article.date}</span>
              </div>

              <h4 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-blue-300 transition-colors">
                {article.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-5">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-slate-500 text-xs font-mono">{article.readTime}</span>
                <span className="flex items-center gap-1 text-xs text-blue-400 group-hover:gap-2 transition-all duration-300">
                  Read more
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3.5 rounded-full glass-panel text-white text-sm font-semibold hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-0.5">
            View All Articles →
          </button>
        </div>
      </div>
    </section>
  )
}
