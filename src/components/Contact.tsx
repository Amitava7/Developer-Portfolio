import { useState, FormEvent } from 'react'
import AnimateIn from './AnimateIn'
import './Contact.css'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>)

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <AnimateIn>
        <h2 className="contact-title">Get in Touch</h2>
      </AnimateIn>

      {status === 'sent' ? (
        <AnimateIn>
          <p className="contact-success">Message sent — I'll be in touch.</p>
        </AnimateIn>
      ) : (
        <AnimateIn delay={0.1}>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="form-input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="form-input"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            rows={5}
            className="form-textarea"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="form-submit"
          >
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>

          {status === 'error' && (
            <p className="contact-error">
              Something went wrong. Email me directly at amitavamozumder@gmail.com
            </p>
          )}
        </form>
        </AnimateIn>
      )}
    </section>
  )
}
