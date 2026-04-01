import React from 'react'

type SectionRevealProps = {
  children: React.ReactNode
}

export default function SectionReveal({ children }: SectionRevealProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const node = ref.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`section-reveal ${isVisible ? 'is-visible' : ''}`}>{children}</div>
}
