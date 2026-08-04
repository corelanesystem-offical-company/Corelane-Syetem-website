export default function Logo({ className = "", layout = "horizontal" }) {
  if (layout === "horizontal") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Cloud Icon Approximation */}
        <svg className="w-8 h-8 text-[#5EEAD4]" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* We use overlapping circles to mimic the cloud structure */}
          <circle cx="25" cy="40" r="12" />
          <circle cx="45" cy="40" r="12" />
          <circle cx="70" cy="40" r="12" />
          <circle cx="40" cy="22" r="14" />
          <circle cx="62" cy="24" r="12" />
        </svg>
        <div className="flex flex-col justify-center">
          <span className="text-white font-bold text-xl leading-none tracking-tight">Corelane</span>
          <span className="text-[#5EEAD4] text-[0.55rem] tracking-[0.3em] font-bold leading-none mt-1">SYSTEMS</span>
        </div>
      </div>
    )
  }

  // Vertical layout (e.g. for footer or hero)
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg className="w-12 h-12 text-[#5EEAD4] mb-3" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="25" cy="40" r="12" />
        <circle cx="45" cy="40" r="12" />
        <circle cx="70" cy="40" r="12" />
        <circle cx="40" cy="22" r="14" />
        <circle cx="62" cy="24" r="12" />
      </svg>
      <span className="text-white font-bold text-3xl leading-none tracking-tight">Corelane</span>
      <span className="text-[#5EEAD4] text-xs tracking-[0.35em] font-bold leading-none mt-2">SYSTEMS</span>
    </div>
  )
}
