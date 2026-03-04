import { useEffect, useRef, useState } from 'react'
import './Hero.css'
import { GitHubIcon, LinkedInIcon, MapPinIcon, EmailIcon, DownloadIcon } from './icons'

function useTyping(text: string, speed = 80, startDelay = 400) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i === text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(delay)
  }, [text, speed, startDelay])

  return { displayed, done }
}

export default function Hero() {
  const scriptLoaded = useRef(false)
  const { displayed, done } = useTyping('Amitava Mozumder')

  useEffect(() => {
    if (scriptLoaded.current) return
    scriptLoaded.current = true

    const script = document.createElement('script')
    script.src = '/particle.js'
    document.body.appendChild(script)

    return () => {
      const existing = document.querySelector('script[src="/particle.js"]')
      if (existing) existing.remove()
    }
  }, [])

  return (
    <div className="hero">
      <div className="landscape" aria-hidden="true" />
      <div className="filter" aria-hidden="true" />

      <canvas id="canvas" aria-hidden="true" />

      <a
        href="/resume.pdf"
        download="Amitav_Mozumder_Resume.pdf"
        className="resume-btn"
        aria-label="Download resume as PDF"
      >
        <DownloadIcon />
        <span>Resume</span>
      </a>

      <div className="center-content">
        <h1 className="name">
          {displayed}
          <span className={`cursor${done ? ' cursor--hidden' : ''}`}>|</span>
        </h1>

        <nav className="social-links" aria-label="Contact and social links">
          <a
            href="https://github.com/Amitava7"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/amitavamozumder"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://www.google.com/maps/place/Berlin,+Germany"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link social-link--location"
            aria-label="Berlin, Germany on Google Maps"
            title="Location"
          >
            <MapPinIcon />
          </a>

          <a
            href="mailto:amitavamozumder@gmail.com"
            className="social-link"
            aria-label="Send email to amitavamozumder@gmail.com"
            title="amitavamozumder@gmail.com"
          >
            <EmailIcon />
          </a>
        </nav>
      </div>
    </div>
  )
}
