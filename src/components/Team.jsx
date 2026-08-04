import { useEffect, useRef } from 'react'

const team = [
  {
    name: 'Muhammad Zaid',
    role: 'Founder & CEO',
    speciality: 'Developer · DevOps Engineer',
    bio: 'Muhammad Zaid leads Corelane Systems with deep expertise in cloud infrastructure, DevOps automation, and full-stack development. He architects enterprise solutions that scale.',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'React', 'Node.js', 'CI/CD'],
    linkedin: 'https://www.linkedin.com/in/muhammad-zaid-9363bb377',
    avatar: 'MZ',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Talha Ahmer',
    role: 'Product Manager',
    speciality: 'Developer · Product Strategy',
    bio: 'Talha bridges the gap between business requirements and technical delivery. He ensures every project is scoped accurately, delivered on time, and exceeds client expectations.',
    skills: ['Product Strategy', 'Agile', 'React', 'Node.js', 'UI/UX', 'APIs'],
    linkedin: 'https://www.linkedin.com/in/talha-ahmer-488063306/',
    avatar: 'TA',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Arham Sheikh',
    role: 'Data Engineer',
    speciality: 'Data Pipelines · Analytics',
    bio: 'Arham designs robust data pipelines, warehouse architectures, and analytics platforms that turn raw data into actionable business intelligence.',
    skills: ['Python', 'PostgreSQL', 'MongoDB', 'Spark', 'Airflow', 'FastAPI'],
    linkedin: 'https://www.linkedin.com/in/arhammsheikh/',
    avatar: 'AS',
    color: 'from-green-500 to-teal-500',
  },
  {
    name: 'Mirza Khizar Hayyat Baig',
    role: 'DevOps Engineer',
    speciality: 'Infrastructure · Automation',
    bio: 'Khizar specialises in building reliable, automated cloud infrastructure. From Kubernetes clusters to GitOps pipelines, he keeps systems running at 99.9% uptime.',
    skills: ['Docker', 'Kubernetes', 'Ansible', 'Jenkins', 'Linux', 'Nginx'],
    linkedin: 'https://www.linkedin.com/in/mirza-khizar-hayyat-baig-9250a2401/',
    avatar: 'MK',
    color: 'from-orange-500 to-red-500',
  },
]

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function Team() {
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
    <section id="team" className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">Our Team</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            The people behind the engineering.
          </h3>
          <p className="text-slate-400 text-lg">
            A small, focused team of senior engineers. No juniors on client work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              ref={el => cardsRef.current[i] = el}
              className="group glass-panel rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(59,130,246,0.1)] flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Avatar */}
              <div className="relative mb-5">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl`}>
                  {member.avatar}
                </div>
              </div>

              <h4 className="text-white font-bold text-base mb-0.5">{member.name}</h4>
              <p className="text-blue-400 text-sm font-semibold mb-1">{member.role}</p>
              <p className="text-slate-500 text-xs font-mono mb-3">{member.speciality}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{member.bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {member.skills.map(skill => (
                  <span key={skill} className="px-2 py-0.5 text-xs rounded bg-white/5 border border-white/10 text-slate-400 font-mono">
                    {skill}
                  </span>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors mt-auto"
                aria-label={`${member.name} on LinkedIn`}
              >
                <LinkedInIcon />
                Connect on LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
