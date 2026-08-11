import { useState } from 'react'

const budgetOptions = [
  { value: '', label: 'Select budget range' },
  { value: 'under-1k',  label: 'Under $1,000' },
  { value: '1k-3k',     label: '$1,000 – $3,000' },
  { value: '3k-7k',     label: '$3,000 – $7,000' },
  { value: '7k-15k',    label: '$7,000 – $15,000' },
  { value: '15k-plus',  label: '$15,000+' },
  { value: 'not-sure',  label: 'Not sure yet' },
]

const projectTypes = [
  { value: '', label: 'Select project type' },
  { value: 'website', label: 'Website Development' },
  { value: 'webapp', label: 'Full Stack Web Application' },
  { value: 'mobile', label: 'Mobile App (iOS / Android)' },
  { value: 'devops', label: 'DevOps & CI/CD Setup' },
  { value: 'cloud', label: 'Cloud Infrastructure (AWS/Azure)' },
  { value: 'docker-k8s', label: 'Docker & Kubernetes' },
  { value: 'iac', label: 'Infrastructure as Code' },
  { value: 'api', label: 'API Development' },
  { value: 'saas', label: 'SaaS Platform' },
  { value: 'monitoring', label: 'Monitoring & Observability' },
  { value: 'migration', label: 'Cloud Migration' },
  { value: 'other', label: 'Other' },
]

const CONTACT_EMAIL = 'corelanesystem@gmail.com'
const initial = { name: '', company: '', email: '', phone: '', country: '', budget: '', projectType: '', deadline: '', message: '', file: null }

export default function ContactForm() {
  const [form,   setForm]   = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const handleFile = e => {
    setForm(f => ({ ...f, file: e.target.files[0] || null }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    const subject = encodeURIComponent(`New Project Enquiry from ${form.name} — ${form.projectType || 'General'}`)
    const body    = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company || 'N/A'}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nCountry: ${form.country || 'N/A'}\nBudget: ${form.budget || 'N/A'}\nProject Type: ${form.projectType || 'N/A'}\nDeadline: ${form.deadline || 'N/A'}\n\n${form.message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setStatus('success')
    setForm(initial)
  }

  const base  = 'w-full px-4 py-3.5 rounded-xl bg-white/5 border text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm'
  const norm  = `${base} border-white/10 hover:border-blue-500/30`
  const err   = `${base} border-red-500/50`
  const label = 'block text-xs font-semibold text-slate-300 mb-2 uppercase tracking-wider'

  return (
    <form id="contact-form" onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* Row 1: Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className={label}>Name *</label>
          <input id="cf-name" name="name" type="text" autoComplete="name" placeholder="Muhammad Zaid" value={form.name} onChange={handleChange} className={errors.name ? err : norm} />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-company" className={label}>Company</label>
          <input id="cf-company" name="company" type="text" autoComplete="organization" placeholder="Corelane Systems" value={form.company} onChange={handleChange} className={norm} />
        </div>
      </div>

      {/* Row 2: Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-email" className={label}>Email *</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="hello@company.com" value={form.email} onChange={handleChange} className={errors.email ? err : norm} />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>Phone</label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+44 7700 000000" value={form.phone} onChange={handleChange} className={norm} />
        </div>
      </div>

      {/* Row 3: Country + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-country" className={label}>Country</label>
          <input id="cf-country" name="country" type="text" autoComplete="country-name" placeholder="Pakistan" value={form.country} onChange={handleChange} className={norm} />
        </div>
        <div>
          <label htmlFor="cf-budget" className={label}>Budget</label>
          <select id="cf-budget" name="budget" value={form.budget} onChange={handleChange} className={`${norm} appearance-none cursor-pointer`} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2rem', paddingRight: '2.8rem' }}>
            {budgetOptions.map(o => <option key={o.value} value={o.value} disabled={o.value === ''} className="bg-slate-900">{o.label}</option>)}
          </select>
        </div>
      </div>

      {/* Row 4: Project Type + Deadline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-type" className={label}>Project Type</label>
          <select id="cf-type" name="projectType" value={form.projectType} onChange={handleChange} className={`${norm} appearance-none cursor-pointer`} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2rem', paddingRight: '2.8rem' }}>
            {projectTypes.map(o => <option key={o.value} value={o.value} disabled={o.value === ''} className="bg-slate-900">{o.label}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="cf-deadline" className={label}>Desired Deadline</label>
          <input id="cf-deadline" name="deadline" type="date" value={form.deadline} onChange={handleChange} className={`${norm} text-slate-300`} />
        </div>
      </div>

      {/* File Upload */}
      <div>
        <label htmlFor="cf-file" className={label}>Attach Brief / Document (Optional)</label>
        <div className="relative">
          <input id="cf-file" name="file" type="file" onChange={handleFile} accept=".pdf,.doc,.docx,.txt,.png,.jpg" className="absolute inset-0 opacity-0 cursor-pointer z-10 w-full" />
          <div className={`${norm} flex items-center gap-3 cursor-pointer`}>
            <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
            <span className={form.file ? 'text-blue-400' : 'text-slate-500'}>
              {form.file ? form.file.name : 'Upload PDF, DOC, or image...'}
            </span>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className={label}>Project Description *</label>
        <textarea id="cf-message" name="message" rows={5} placeholder="Describe your project, current infrastructure, goals, and any specific requirements..." value={form.message} onChange={handleChange} className={`${errors.message ? err : norm} resize-none`} />
        {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm">
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          Message sent! We'll reply within 24 hours.
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button type="submit" className="flex-1 py-4 text-sm font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          Send Message
        </button>
        <a href="https://calendly.com/corelanesystems" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 text-sm font-semibold rounded-xl glass-panel text-white hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5 text-center">
          📅 Book a Call Instead
        </a>
      </div>
    </form>
  )
}
