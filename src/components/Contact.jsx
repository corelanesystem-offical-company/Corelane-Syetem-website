import { useEffect, useRef } from 'react'
import ContactForm from './ContactForm'

const contactInfo = [
  { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, label: 'Email', value: 'corelanesystem@gmail.com', href: 'mailto:corelanesystem@gmail.com' },
  { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, label: 'WhatsApp', value: '+92 301 2756091', href: 'https://wa.me/923012756091' },
  { icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, label: 'LinkedIn', value: 'Corelane Systems', href: 'https://www.linkedin.com/company/corelane-system/?viewAsMember=true' },
  { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, label: 'Book a Call', value: 'Free 30-min consultation', href: 'https://calendly.com/corelanesystems' },
]

export default function Contact() {
  const headingRef = useRef(null)
  const formRef    = useRef(null)

  useEffect(() => {
    const els = [headingRef.current, formRef.current].filter(Boolean)
    els.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
    })
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'all 0.8s cubic-bezier(0.16,1,0.3,1)'
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      <div className="absolute right-[-10%] bottom-[-10%] w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="glass-panel rounded-3xl border border-white/5 p-8 sm:p-12 relative overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left: 2/5 */}
            <div ref={headingRef} className="lg:col-span-2">
              <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3">Get in Touch</h2>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-4">
                Let's build something great.
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Tell us about your project. We'll reply within 24 hours with a clear assessment and next steps.
              </p>

              <div className="space-y-4">
                {contactInfo.map(info => (
                  <a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">{info.label}</div>
                      <div className="text-sm text-white font-medium group-hover:text-blue-400 transition-colors">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                <p className="text-blue-300 text-sm font-semibold mb-1">⚡ Fast Response Guarantee</p>
                <p className="text-slate-400 text-sm">
                  Every enquiry gets a personal reply within 24 hours — not an automated response.
                </p>
              </div>
            </div>

            {/* Right: 3/5 */}
            <div ref={formRef} className="lg:col-span-3 bg-[#0B0D10]/50 p-8 rounded-2xl border border-white/5 backdrop-blur-md">
              <h4 className="text-white font-bold text-lg mb-6">Send us a message</h4>
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
