import { useState, useEffect } from 'react'
import Logo from './Logo'

const navLinks = [
  { label: 'Services',  href: '#services'   },
  { label: 'Portfolio', href: '#portfolio'   },
  { label: 'Stack',     href: '#tech-stack'  },
  { label: 'Pricing',   href: '#pricing'     },
  { label: 'Team',      href: '#team'        },
  { label: 'Blog',      href: '#blog'        },
  { label: 'Contact',   href: '#contact'     },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-5 pointer-events-none">
      <div
        className={`max-w-6xl mx-auto transition-all duration-500 pointer-events-auto rounded-full ${
          scrolled
            ? 'glass-panel border border-white/10 px-4 sm:px-6 py-2 bg-[#14171B]/60 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'px-0 py-2 border border-transparent bg-transparent shadow-none'
        }`}
      >
        <div className="flex items-center justify-between h-12">

          {/* Logo */}
          <a
            href="#hero"
            onClick={() => handleNavClick('#hero')}
            className="group"
            aria-label="Corelane Systems home"
          >
            <Logo className="transition-transform duration-300 group-hover:scale-105" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5" aria-label="Primary navigation">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`relative px-3.5 py-1.5 text-sm rounded-full transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-blue-500/20 border border-blue-500/30 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.3)] -z-10" />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://calendly.com/corelanesystems"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book Free Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="block w-5 h-px bg-current mb-1.5 transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translate(1px,9px)' : 'none' }} />
            <span className="block w-5 h-px bg-current mb-1.5 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-px bg-current transition-all"        style={{ transform: menuOpen ? 'rotate(-45deg) translate(0,-8px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 pointer-events-auto mx-4 sm:mx-6 mt-2 rounded-2xl ${
          menuOpen ? 'max-h-[36rem] glass-panel border border-white/10 opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <nav className="p-4 flex flex-col gap-1.5" aria-label="Mobile navigation">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="text-left px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              {label}
            </button>
          ))}
          <a
            href="https://calendly.com/corelanesystems"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-3.5 text-sm font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors text-center"
          >
            Book Free Consultation
          </a>
        </nav>
      </div>
    </header>
  )
}
