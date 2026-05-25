import { Mail, Star } from 'lucide-react'

const CONTACT_EMAIL = 'hello@liabristudios.com'

function Contact() {
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
            Press, school visits, partnership ideas, or just hello. Drop us an email.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
              color: 'var(--gold-light)',
              textDecoration: 'underline',
              textDecorationColor: 'rgba(232,180,72,0.4)',
              textUnderlineOffset: '6px',
              transition: 'color .15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#FFE6A5'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--gold-light)'}
          >
            {CONTACT_EMAIL}
          </a>
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
          {/* MailerLite embed placeholder. Michele to swap in her real action URL when the list is created. */}
          <form
            action="https://assets.mailerlite.com/jsonp/REPLACE/forms/REPLACE/subscribe"
            method="post"
            style={{
              display: 'flex',
              gap: '0.6rem',
              flexWrap: 'wrap',
              maxWidth: '460px',
            }}
          >
            <input
              type="email"
              name="fields[email]"
              required
              placeholder="your@email.com"
              style={{
                flex: '1 1 220px',
                background: 'rgba(6,18,43,0.6)',
                color: 'var(--text-light)',
                border: '1px solid rgba(232,180,72,0.3)',
                borderRadius: 999,
                padding: '0.85rem 1.2rem',
                fontSize: '1rem',
                outline: 'none',
                fontFamily: 'inherit',
              }}
            />
            <button className="btn" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
