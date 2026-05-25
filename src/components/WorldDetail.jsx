import { worlds } from '../data/worlds'
import { ArrowUpRight } from 'lucide-react'

function WorldSection({ w, index }) {
  const isReverse = index % 2 === 1
  return (
    <section
      id={w.id}
      className="section"
      style={{
        background: 'var(--navy-deep)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="starfield" aria-hidden="true" />

      {/* Soft world-coloured glow */}
      <div style={{
        position: 'absolute',
        top: '15%', left: isReverse ? '60%' : '-10%',
        width: '42rem', height: '42rem',
        background: `radial-gradient(circle, ${w.palette.glow} 0%, transparent 60%)`,
        pointerEvents: 'none',
        filter: 'blur(10px)',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* World identity */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)', maxWidth: '720px', margin: '0 auto clamp(3rem, 6vw, 5rem)' }}>
          <span className="kicker" style={{ color: w.palette.accent }}>
            The {w.series} World
          </span>
          <h2 style={{ marginBottom: '1rem' }}>{w.series}</h2>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
            color: 'var(--gold-light)',
            marginBottom: '1.5rem',
          }}>
            {w.tagline}
          </p>
          <p style={{
            color: 'var(--text-dim)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
          }}>
            {w.worldDescription}
          </p>
        </div>

        {/* Divider */}
        <div style={{
          width: '120px',
          height: '1px',
          margin: '0 auto clamp(2.5rem, 5vw, 4rem)',
          background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
        }} />

        {/* Book detail */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(2rem, 6vw, 5rem)',
          alignItems: 'center',
        }}>
          <div style={{ order: isReverse ? 2 : 1 }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: w.palette.accent,
              marginBottom: '0.75rem',
            }}>{w.book.label}</span>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)',
              color: 'var(--text-light)',
              marginBottom: '0.6rem',
              lineHeight: 1.15,
            }}>{w.book.title}</h3>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.05rem',
              color: 'var(--gold-light)',
              marginBottom: '1.5rem',
            }}>{w.book.subtitle}</p>

            {(Array.isArray(w.book.blurb) ? w.book.blurb : [w.book.blurb]).map((para, idx) => (
              <p key={idx} style={{
                color: 'var(--text-dim)',
                fontSize: '1.02rem',
                lineHeight: 1.7,
                marginBottom: '1rem',
              }}>
                {para}
              </p>
            ))}

            {w.book.perfectFor && w.book.perfectFor.length > 0 && (
              <div style={{ margin: '1.5rem 0 0.5rem' }}>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--gold-light)',
                  fontSize: '1rem',
                  marginBottom: '0.6rem',
                }}>Perfect for:</p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  color: 'var(--text-dim)',
                  fontSize: '0.98rem',
                  lineHeight: 1.7,
                }}>
                  {w.book.perfectFor.map((item, idx) => (
                    <li key={idx} style={{
                      paddingLeft: '1.2rem',
                      position: 'relative',
                      marginBottom: '0.25rem',
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: w.palette.accent,
                        fontWeight: 700,
                      }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-dim-strong)',
              margin: '1.5rem 0 1.75rem',
            }}>{w.book.ages}</p>

            {w.teaser ? (
              <a
                className="btn"
                href={w.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Visit frankiehenryadventures.com <ArrowUpRight size={18} strokeWidth={2.5} />
              </a>
            ) : w.book.comingSoon ? (
              <span className="btn" style={{
                background: 'transparent',
                border: '1.5px solid var(--gold)',
                color: 'var(--gold-light)',
                boxShadow: 'none',
                cursor: 'default',
              }}>
                Coming soon
              </span>
            ) : (
              <a className="btn" href={w.book.buyUrl} target="_blank" rel="noopener noreferrer">
                Find on Amazon →
              </a>
            )}
          </div>

          <div style={{ order: isReverse ? 1 : 2, textAlign: 'center' }}>
            <div style={{
              display: 'inline-block',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow:
                '0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(232,180,72,0.25)',
              transform: isReverse ? 'rotate(2deg)' : 'rotate(-2deg)',
              transition: 'transform .35s ease',
              background: 'var(--navy-mist)',
              maxWidth: '380px',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = isReverse ? 'rotate(2deg)' : 'rotate(-2deg)'}
            >
              <img
                src={w.book.cover}
                alt={`${w.book.title} cover`}
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorldDetail() {
  return (
    <>
      {worlds.map((w, idx) => <WorldSection key={w.id} w={w} index={idx} />)}
    </>
  )
}

export default WorldDetail
