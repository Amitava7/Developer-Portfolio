import { useEffect, useState } from 'react'
import './ScrollDots.css'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function ScrollDots() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observers = SECTIONS.map(({ id }, i) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i) },
        { threshold: 0.5 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="scroll-dots" aria-label="Page navigation">
      {SECTIONS.map(({ id, label }, i) => (
        <button
          key={id}
          className={`scroll-dot${active === i ? ' scroll-dot--active' : ''}`}
          onClick={() => scrollTo(id)}
          aria-label={`Navigate to ${label}`}
          title={label}
        />
      ))}
    </nav>
  )
}
