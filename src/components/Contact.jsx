import { useState } from 'react'
import { Mail, Star } from 'lucide-react'

// Formspree endpoint for the Liabri contact form.
// Swap REPLACE for the form id from https://formspree.io/f/REPLACE (reCAPTCHA OFF).
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrenzgek'

const inputStyle = {
  width: '100%',
  background: 'rgba(6,18,43,0.6)',
  color: 'var(--text-light)',
  border: '1px solid rgba(232,180,72,0.3)',
  borderRadius: 18,
  padding: '0.85rem 1.2rem',
  fontSize: '1rem',
  outline: 'none',
  fontFamily: 'inherit',
}

function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
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
    <section id="contact" style={{
      background: 'linear-gradient(180deg, var(--navy-deep) 0%, var(--navy) 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(1.5rem, 3.5vw, 2.75rem) 0',
    }}>
      <div className="starfield" aria-hidden="true" />
      <div className="container" style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(2rem, 4vw, 3.5rem)',
        alignItems: 'start',
      }}>
        {/* Get in touch */}
        <div>
          <Mail size={28} color="var(--gold)" style={{ marginBottom: '0.5rem', filter: 'drop-shadow(0 0 12px rgba(232,180,72,0.5))' }} />
          <span className="kicker">Get in touch</span>
          <h2 style={{ fontSize: 'clamp(1.55rem, 3vw, 2.2rem)', marginBottom: '0.6rem' }}>
            Say hello.
          </h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '1.5rem', maxWidth: '32rem' }}>
            Press, school visits, partnership ideas, or just hello. Send us a message and we will get back to you.
          </p>

          {status === 'sent' ? (
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
              color: 'var(--gold-light)',
              maxWidth: '32rem',
            }}>
              Thank you for reaching out. We will be in touch soon.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '460px' }}
            >
              <input type="text" name="name" required placeholder="Your name" style={inputStyle} />
              <input type="email" name="email" required placeholder="your@email.com" style={inputStyle} />
              <textarea name="message" required rows={4} placeholder="Your message" style={{ ...inputStyle, borderRadius: 18, resize: 'vertical' }} />
              {/* Honeypot spam trap: bots fill this, humans never see it */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button className="btn" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                {status === 'error' && (
                  <span style={{ color: '#ffb4b4', fontSize: '0.95rem' }}>
                    Something went wrong. Please try again.
                  </span>
                )}
              </div>
            </form>
          )}
        </div>

        {/* Subscribe */}
        <div>
          <Star size={28} color="var(--gold)" fill="var(--gold)" style={{ marginBottom: '0.5rem', filter: 'drop-shadow(0 0 12px rgba(232,180,72,0.55))' }} />
          <span className="kicker">Stay in the night sky</span>
          <h2 style={{ fontSize: 'clamp(1.55rem, 3vw, 2.2rem)', marginBottom: '0.6rem' }}>
            Be in the know.
          </h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '1.5rem', maxWidth: '32rem' }}>
            When new books get released, freebies for little readers, and other exciting news from Liabri Studios.
          </p>
          {/* MailerLite embedded form (account 2212478). Rendered by universal.js loaded in index.html head. */}
          <div className="ml-embedded" data-form="e2PiJk" style={{ maxWidth: '460px' }} />
        </div>
      </div>
    </section>
  )
}

export default Contact
