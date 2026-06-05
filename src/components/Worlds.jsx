import { worlds } from '../data/worlds'
import { ArrowUpRight } from 'lucide-react'

function Worlds() {
  return (
    <section id="worlds" className="section" style={{ background: 'var(--navy-deep)' }}>
      <div className="starfield" aria-hidden="true" />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="accent-line" />
          <span className="kicker">Three worlds, one studio</span>
          <h2>Step into a Liabri world.</h2>
          <p className="lede" style={{ margin: '1rem auto 0' }}>
            Every Liabri story is built to inspire children by celebrating what makes them unique, by giving them courage, and by showing them that Jesus loves them. Tap a world to meet the books inside.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {worlds.map((w, idx) => (
            <a
              key={w.id}
              href={w.teaser ? w.externalUrl : (w.landingUrl || `#${w.id}`)}
              target={w.teaser ? '_blank' : '_self'}
              rel={w.teaser ? 'noopener noreferrer' : ''}
              style={{
                position: 'relative',
                display: 'block',
                background: 'linear-gradient(170deg, rgba(26,43,85,0.7) 0%, rgba(11,26,61,0.85) 100%)',
                border: '1px solid rgba(232,180,72,0.25)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 18px 50px rgba(0,0,0,0.5), 0 0 0 1px ' + w.palette.glow
                e.currentTarget.style.borderColor = 'rgba(232,180,72,0.55)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(232,180,72,0.25)'
              }}
            >
              {/* Cover image */}
              <div style={{
                aspectRatio: '4 / 5',
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--navy-mist)',
              }}>
                <img
                  src={w.book.cover}
                  alt={w.book.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform .6s ease',
                  }}
                  onLoad={() => null}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, transparent 85%, rgba(6,18,43,0.5) 100%)',
                }} />
                {w.teaser && (
                  <span style={{
                    position: 'absolute',
                    top: '1.1rem', right: '1.1rem',
                    background: 'rgba(232,180,72,0.95)',
                    color: 'var(--navy-deep)',
                    width: 36, height: 36,
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <ArrowUpRight size={20} strokeWidth={2.5} />
                  </span>
                )}
              </div>

              <div style={{ padding: '1.75rem 1.75rem 2rem' }}>
                <h3 style={{
                  fontSize: '1.6rem',
                  color: 'var(--gold-light)',
                  marginBottom: '0.5rem',
                }}>{w.series}</h3>
                <p style={{
                  color: 'var(--text-dim)',
                  fontSize: '0.98rem',
                  marginBottom: '1.25rem',
                  lineHeight: 1.55,
                }}>{w.tagline}</p>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--gold)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                }}>
                  {w.teaser ? 'Visit the site' : 'Step into the world'} →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Worlds
