import Logo from './Logo'

const currentYear = new Date().getFullYear()

const footerLinks = {
  Services: [
    'Website Development',
    'Full Stack Applications',
    'Mobile App Development',
    'DevOps & CI/CD',
    'AWS Cloud Solutions',
    'Docker & Kubernetes',
    'Infrastructure as Code',
    'API Development',
    'SaaS Development',
    'Cloud Migration',
    'Monitoring & Observability',
    'Managed Hosting',
  ],
  Technologies: [
    'AWS', 'Azure', 'Google Cloud',
    'Docker', 'Kubernetes', 'Terraform',
    'React', 'Next.js', 'Node.js',
    'Python', 'Flutter', 'PostgreSQL',
  ],
  Company: [
    { label: 'About Us', href: '#why' },
    { label: 'Our Team', href: '#team' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Refund Policy', href: '#' },
  ],
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-zaid-9363bb377',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    href: 'https://github.com/corelanesystems',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/923000000000',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    )
  },
  {
    name: 'Email',
    href: 'mailto:hello@corelanesystems.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
]

const scrollTo = (href) => {
  if (href.startsWith('#')) {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050608] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand — 2 cols */}
          <div className="lg:col-span-2">
            <Logo className="mb-5" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Enterprise software development and cloud engineering for startups, SMEs, and global businesses. Fixed pricing. Transparent delivery.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services — 1 col */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5">Services</h5>
            <ul className="space-y-2.5">
              {footerLinks.Services.slice(0, 8).map(item => (
                <li key={item}>
                  <button onClick={() => scrollTo('#services')} className="text-slate-400 text-sm hover:text-blue-400 transition-colors text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5">Technologies</h5>
            <ul className="space-y-2.5">
              {footerLinks.Technologies.map(item => (
                <li key={item}>
                  <button onClick={() => scrollTo('#tech-stack')} className="text-slate-400 text-sm hover:text-blue-400 transition-colors text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5">Company</h5>
            <ul className="space-y-2.5">
              {footerLinks.Company.map(item => (
                <li key={item.label}>
                  <button onClick={() => scrollTo(item.href)} className="text-slate-400 text-sm hover:text-blue-400 transition-colors text-left">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Newsletter */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-5">Legal</h5>
            <ul className="space-y-2.5 mb-8">
              {footerLinks.Legal.map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-400 text-sm hover:text-blue-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} Corelane Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              All systems operational
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-white transition-colors font-mono text-xs hover:text-blue-400"
              aria-label="Scroll to top"
            >
              ↑ Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
