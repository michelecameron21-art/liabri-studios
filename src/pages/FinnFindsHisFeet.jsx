import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// PLACEHOLDERS (swap when ready)
const AMAZON_URL = 'https://www.amazon.com/dp/1067638512'
const COVER = '/assets/finn-cover.jpg'

// Real reviews provided by Michele (US + France, Jun 2026)
const reviews = [
  {
    quote: 'A warm, heartfelt, and encouraging book that helps children understand that being different is not something to be ashamed of.',
    by: 'Verified Amazon reviewer, France',
    stars: 4,
  },
  {
    quote: 'A lovely story with a beautiful moral: have faith in yourself.',
    by: 'Amazon reviewer, United States',
    stars: 5,
  },
]

function FinnFindsHisFeet() {
  // SEO + share metadata for this page
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Finn Finds His Feet | A Liabri Studios Story'
    const desc = document.querySelector('meta[name="description"]')
    const prevDesc = desc ? desc.getAttribute('content') : null
    const newDesc =
      'A gentle, hopeful story about bravery, being different, and the friends who cheer you on. Get it on Amazon.'
    if (desc) desc.setAttribute('content', newDesc)
    return () => {
      document.title = prevTitle
      if (desc && prevDesc !== null) desc.setAttribute('content', prevDesc)
    }
  }, [])

  return (
    <div style={{ background: 'var(--navy-deep)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <div className="starfield" aria-hidden="true" />

      {/* Minimal top-left logo — the only link out of this page */}
      <header style={{ position: 'relative', zIndex: 10, padding: '1.25rem 1.5rem' }}>
        <Link to="/" aria-label="Back to Liabri Studios home" style={{ display: 'inline-block' }}>
          <img
            src="/assets/liabri-logo.png"
            alt="Liabri Studios"
            style={{ width: 'clamp(110px, 14vw, 150px)', display: 'block' }}
          />
        </Link>
      </header>

      {/* HERO */}
      <section style={{ position: 'relative', padding: 'clamp(2rem, 5vw, 4rem) 1.5rem clamp(3rem, 6vw, 5rem)' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center',
        }}>
          {/* Cover */}
          <div style={{ textAlign: 'center' }}>
            <img
              src={COVER}
              alt="Finn Finds His Feet — book cover"
              style={{
                width: 'min(360px, 78vw)',
                margin: '0 auto',
                borderRadius: '6px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(232,180,72,0.22)',
              }}
            />
          </div>

          {/* Title + hook + CTA */}
          <div style={{ textAlign: 'center' }}>
            <span className="kicker" style={{ marginBottom: '1.25rem' }}>A Liabri story</span>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
              color: 'var(--gold-light)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              textShadow: '0 4px 30px rgba(232,180,72,0.3)',
            }}>
              Finn Finds His Feet
            </h1>
            <p style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)',
              color: 'var(--text-dim)',
              maxWidth: '32rem',
              margin: '0 auto 2rem',
              lineHeight: 1.6,
            }}>
              A gentle story for any child still finding their feet.
            </p>
            <a
              className="btn"
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.05rem' }}
            >
              Get it on Amazon
            </a>
            <p style={{ marginTop: '0.85rem', fontSize: '0.85rem', color: 'var(--text-dim-strong)' }}>
              Available in Kindle &amp; Paperback
            </p>
          </div>
        </div>
      </section>

      {/* THE STORY */}
      <section className="section" style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <span className="accent-line" />
          <span className="kicker">The story</span>
          <h2 style={{
            fontStyle: 'italic',
            color: 'var(--gold-light)',
            marginBottom: '1.5rem',
          }}>
            Finding your feet, in your own time.
          </h2>
          <p style={{
            fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
            color: 'var(--text-dim)',
            lineHeight: 1.75,
          }}>
            Finn finds running, jumping and keeping his balance a little trickier than the other animals. Until he discovers that finding your feet happens in your own way, in your own time. A gentle, hopeful story about bravery, being different, and the friends who cheer you on.
          </p>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ background: 'var(--navy-deep)', padding: 'clamp(2.5rem, 5vw, 4rem) 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.2rem, 2.1vw, 1.6rem)',
            color: 'var(--cream)',
            lineHeight: 1.55,
          }}>
            A heartwarming story for ages 4 to 8, and especially for any child learning that everyone finds their feet differently.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section" style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="accent-line" />
            <span className="kicker">What readers are saying</span>
            <h2 style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
              From parents and small readers.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}>
            {reviews.map((r, i) => (
              <figure key={i} style={{
                background: 'linear-gradient(170deg, rgba(26,43,85,0.7) 0%, rgba(11,26,61,0.85) 100%)',
                border: '1px solid rgba(232,180,72,0.25)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.75rem',
                margin: 0,
              }}>
                <div aria-label={`${r.stars} out of 5 stars`} style={{
                  color: 'var(--gold)',
                  fontSize: '1.1rem',
                  marginBottom: '1rem',
                  letterSpacing: '0.15em',
                }}>
                  {'★'.repeat(r.stars)}
                  <span style={{ color: 'rgba(232,180,72,0.3)' }}>{'★'.repeat(5 - r.stars)}</span>
                </div>
                <blockquote style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1.08rem',
                  color: 'var(--cream)',
                  lineHeight: 1.65,
                  margin: '0 0 1.25rem',
                }}>
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption style={{
                  color: 'var(--text-dim-strong)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}>
                  {r.by}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{
        background: 'var(--navy-deep)',
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--gold-light)',
            fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
            marginBottom: '1.25rem',
            textShadow: '0 4px 30px rgba(232,180,72,0.25)',
          }}>
            Bring Finn's story home.
          </h2>
          <p style={{
            color: 'var(--text-dim)',
            marginBottom: '2.25rem',
            fontSize: '1.05rem',
            lineHeight: 1.6,
          }}>
            A warm bedtime read for any child still finding their feet.
          </p>
          <a
            className="btn"
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '1.1rem', padding: '1rem 2.25rem' }}
          >
            Get it on Amazon
          </a>
          <p style={{ marginTop: '0.85rem', fontSize: '0.85rem', color: 'var(--text-dim-strong)' }}>
            Available in Kindle &amp; Paperback
          </p>
        </div>
      </section>

      {/* Minimal footer — no links out per conversion focus */}
      <footer style={{
        background: 'var(--navy-deep)',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(232,180,72,0.15)',
      }}>
        <p style={{ color: 'var(--text-dim-strong)', fontSize: '0.85rem' }}>
          © 2026 Liabri Studios
        </p>
      </footer>
    </div>
  )
}

export default FinnFindsHisFeet
