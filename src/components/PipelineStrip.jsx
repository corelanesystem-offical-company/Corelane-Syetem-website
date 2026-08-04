import { useEffect, useRef, useState } from 'react'

const nodes = [
  { id: 'build', label: 'Build' },
  { id: 'test', label: 'Test' },
  { id: 'push', label: 'Push' },
  { id: 'deploy', label: 'Deploy' },
  { id: 'live', label: 'Live' },
]

export default function PipelineStrip() {
  const [animated, setAnimated] = useState(false)
  const stripRef = useRef(null)

  useEffect(() => {
    // Slight delay to ensure page load before triggering draw
    const timer = setTimeout(() => setAnimated(true), 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      ref={stripRef}
      className="w-full flex items-center font-mono text-xs overflow-hidden"
      aria-label="Deployment pipeline visualization"
    >
      {nodes.map((node, i) => {
        const isLast = i === nodes.length - 1
        const isLive = animated && isLast

        return (
          <div key={node.id} className="flex items-center">
            {/* Node chip */}
            <div
              className={`flex items-center gap-2 px-2.5 py-1 rounded-[3px] border transition-colors duration-500 ${
                isLive
                  ? 'bg-brand-surface border-brand-accent text-brand-text shadow-[0_0_8px_rgba(94,234,212,0.15)]'
                  : 'bg-brand-surface border-brand-line text-brand-muted'
              }`}
              style={{
                opacity: animated ? 1 : 0,
                transform: animated ? 'translateX(0)' : 'translateX(-10px)',
                transition: `all 0.4s ease-out ${i * 0.15}s`,
              }}
            >
              {/* Status indicator */}
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isLive ? 'animate-pulse-accent' : 'bg-brand-line'
                }`}
              />
              {node.label}
            </div>

            {/* Connecting line */}
            {!isLast && (
              <div className="w-8 sm:w-12 h-px bg-brand-line mx-1 relative overflow-hidden">
                {/* Animated fill line that draws across */}
                <div
                  className="absolute top-0 left-0 h-full bg-brand-muted"
                  style={{
                    width: animated ? '100%' : '0%',
                    transition: `width 0.3s ease-in-out ${(i * 0.15) + 0.1}s`,
                  }}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
