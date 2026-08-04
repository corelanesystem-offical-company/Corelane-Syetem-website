import { useEffect, useRef } from 'react'

/**
 * Custom hook: reveals the element when it enters the viewport.
 * Returns a ref to attach to the target element.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Start hidden
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.55s ease, transform 0.55s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
