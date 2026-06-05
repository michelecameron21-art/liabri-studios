import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// PLACEHOLDERS (swap when ready)
const AMAZON_URL = 'https://www.amazon.com/dp/1067638512'
const COVER = '/assets/finn-cover.jpg'

// Real reviews provided by Michele (VERBATIM — typos and grammar preserved for authenticity)
const reviews = [
  {
    stars: 4,
    title: 'A powerful story about understanding differences and discovering hidden strengths',
    body:
      "This is a warm, heartfelt, and encouraging book that helps children understand that being different is not something to be ashamed of. Fin's struggles with coordination feel real and relatable, but what makes this story special is how he slowly learns that his brain simply works differently and that those differences can also become strengths.",
    by: 'Verified Amazon reviewer, France',
    verified: true,
  },
  {
    stars: 5,
    title: 'You might be clumsy but you might be able to notice details, pattern and cross reference-insights',
    body:
      "Even if you might be clumsy and uncoordinated you might be able to notice details, pattern and cross reference-insights nobody else is able to notice - this is the premise of this book, which is lovely. The moral story is also nice: have faith in yourself.",
    by: 'Amazon reviewer, United States',
    verified: false,
  },
  {
    stars: 5,
    title: 'Good Children Book',
    body:
      "Coordination difficulties are the one we need to notice. This book was really good for kids to understand that this is not the big issue, it can solve in a different way. Excellent illustrations for the stroy line. I really enjoyed the illustrations with clear and bright colors . Good for the one who face this Coordination difficulties.",
    by: 'Amazon reviewer, India',
    verified: false,
  },
]

const forYou = [
  'Your child drops things, bumps into things, or feels clumsy',
  'They’ve been assessed for DCD, dyspraxia, or coordination difficulties',
  'They find gym class, handwriting, or buttoning shirts harder than the other kids',
  'They’re starting to feel different, and you want them to know that’s okay',
  'They’re working with a teacher, SENCO, or OT',
  'They need to hear that there’s nothing wrong with them',
]

function FinnFindsHisFeet() {
  // SEO + share metadata
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Finn Finds His Feet | A Liabri Studios Story'
    const desc = document.querySelector('meta[name="description"]')
    const prevDesc = desc ? desc.getAttribute('content') : null
    const newDesc =
      "An uplifting, inspirational story about discovering that a brain that works differently might just be your superpower. Finn Finds His Feet, on Amazon."
    if (desc) desc.setAttribute('content', newDesc)
    return () => {
      document.title = prevTitle
      if (desc && prevDesc !== null) desc.setAttribute('content', prevDesc)
    }
  }, [])

  return (
    <div style={{ background: 'var(--navy-deep)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Sticky mobile bottom CTA — biggest single conversion lift on ad landing pages */}
      <style>{`
        .finn-sticky-cta { display: none; }
        @media (max-width: 768px) {
          .finn-sticky-cta {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 100;
            background: linear-gradient(180deg, rgba(6,18,43,0) 0%, rgba(6,18,43,0.96) 35%);
            padding: 1rem 1rem 1.25rem;
            justify-content: center;
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
          }
          .finn-sticky-cta .btn { width: 100%; max-width: 400px; padding: 1rem 1.5rem; font-size: 1.05rem; }
          .finn-sticky-spacer { height: 96px; }
        }

        /* Reviews + Gallery: locked 3 cols on desktop, balanced rows */
        .finn-reviews-grid, .finn-gallery-grid {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 900px) {
          .finn-reviews-grid, .finn-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .finn-reviews-grid, .finn-gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

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
      <section style={{ position: 'relative', padding: 'clamp(1.5rem, 4vw, 3rem) 1.5rem clamp(2.5rem, 5vw, 4rem)' }}>
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
              alt="Finn Finds His Feet — children's story book cover"
              style={{
                width: 'min(360px, 78vw)',
                margin: '0 auto',
                borderRadius: '6px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(232,180,72,0.22)',
              }}
            />
          </div>

          {/* Hook + title + CTA */}
          <div style={{ textAlign: 'center' }}>
            <span className="kicker" style={{ marginBottom: '1rem', color: 'var(--gold)' }}>
              For the child who finds things a little harder
            </span>
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
              fontSize: 'clamp(1.1rem, 1.7vw, 1.35rem)',
              color: 'var(--cream)',
              maxWidth: '34rem',
              margin: '0 auto 2rem',
              lineHeight: 1.55,
            }}>
              An uplifting, inspirational story about discovering that a brain that works differently might just be your superpower.
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
            <p style={{ marginTop: '1.25rem', fontSize: '0.92rem', color: 'var(--text-dim)' }}>
              <span style={{ color: 'var(--gold)', letterSpacing: '0.15em', marginRight: '0.4rem' }}>★★★★★</span>
              Loved by Amazon readers around the world.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS — moved above the fold to land social proof early on TikTok cold traffic */}
      <section className="section" style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="accent-line" />
            <span className="kicker">What readers are saying</span>
            <h2 style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
              From Amazon readers around the world.
            </h2>
          </div>

          <div className="finn-reviews-grid">
            {reviews.map((r, i) => (
              <article key={i} style={{
                background: 'linear-gradient(170deg, rgba(26,43,85,0.7) 0%, rgba(11,26,61,0.85) 100%)',
                border: '1px solid rgba(232,180,72,0.25)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem 1.35rem',
              }}>
                {/* Stars + verified badge row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
                  <span aria-label={`${r.stars} out of 5 stars`} style={{
                    color: 'var(--gold)',
                    fontSize: '1.05rem',
                    letterSpacing: '0.15em',
                  }}>
                    {'★'.repeat(r.stars)}
                    <span style={{ color: 'rgba(232,180,72,0.3)' }}>{'★'.repeat(5 - r.stars)}</span>
                  </span>
                  {r.verified && (
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-light)',
                      background: 'rgba(232,180,72,0.12)',
                      border: '1px solid rgba(232,180,72,0.35)',
                      padding: '0.25rem 0.55rem',
                      borderRadius: '999px',
                    }}>
                      Verified Purchase
                    </span>
                  )}
                </div>

                {/* Review title */}
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: 'var(--cream)',
                  lineHeight: 1.4,
                  marginBottom: '1rem',
                }}>
                  {r.title}
                </h3>

                {/* Review body — full text, preserving paragraph breaks */}
                <div style={{
                  color: 'var(--text-dim)',
                  fontSize: '0.98rem',
                  lineHeight: 1.7,
                  marginBottom: '1.25rem',
                }}>
                  {r.body.split('\n\n').map((para, j) => (
                    <p key={j} style={{ margin: j === 0 ? 0 : '1rem 0 0' }}>{para}</p>
                  ))}
                </div>

                <p style={{
                  color: 'var(--text-dim-strong)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}>
                  {r.by}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR — identification list */}
      <section className="section" style={{ background: 'var(--navy-deep)', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="accent-line" />
            <span className="kicker">Is this your child?</span>
            <h2 style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
              This is for your family if&hellip;
            </h2>
          </div>

          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gap: '0.85rem',
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            {forYou.map((item, i) => (
              <li key={i} style={{
                display: 'flex',
                gap: '0.85rem',
                alignItems: 'flex-start',
                padding: '0.9rem 1.1rem',
                background: 'rgba(232,180,72,0.06)',
                border: '1px solid rgba(232,180,72,0.18)',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--cream)',
                lineHeight: 1.5,
              }}>
                <span aria-hidden="true" style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '1.1rem', flexShrink: 0, marginTop: '-1px' }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p style={{
            textAlign: 'center',
            marginTop: '2.5rem',
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
            color: 'var(--gold-light)',
          }}>
            A heartwarming story for ages 4 to 8.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="section" style={{ background: 'var(--navy)', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="accent-line" />
            <span className="kicker">What happens</span>
            <h2 style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
              Finn drops things.
            </h2>
          </div>

          <div style={{
            fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
            color: 'var(--text-dim)',
            lineHeight: 1.8,
            display: 'grid',
            gap: '1.4rem',
          }}>
            <p>
              His toast. His pencil. His entire lunch tray, in front of everyone. And when the ball hits him right on the nose in gym class, all Finn wants to do is disappear.
            </p>
            <p>
              Then Finn meets Rosa, the school&rsquo;s occupational therapist. And Rosa tells him something nobody has said before. <strong style={{ color: 'var(--cream)', fontWeight: 700 }}>His brain isn&rsquo;t broken. It just works differently.</strong>
            </p>
            <p>
              His brain sends signals in zigzags. So yes, some things will always be a little harder. But his brain also sees what everyone else walks straight past. The spider in the corner of the library. The sadness on a friend&rsquo;s face. The rain coming, before the clouds even change.
            </p>
            <p>
              By the end of the story, Finn understands his brain. He sees its quiet superpower. And he wouldn&rsquo;t change a thing about it.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY — a look inside the book */}
      <section className="section" style={{ background: 'var(--navy-deep)', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="accent-line" />
            <span className="kicker">A look inside</span>
            <h2 style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
              Some pages from Finn&rsquo;s story.
            </h2>
          </div>

          <div className="finn-gallery-grid">
            {[1,2,3,4,5,6].map(n => {
              const num = String(n).padStart(2, '0')
              return (
                <div key={n} style={{
                  aspectRatio: '4 / 5',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(232,180,72,0.25)',
                  background: 'rgba(0,0,0,0.25)',
                  boxShadow: '0 14px 36px rgba(0,0,0,0.45)',
                }}>
                  <img
                    src={`/assets/finn-interior/finn-page-${num}.jpg`}
                    alt={`A page from Finn Finds His Feet, image ${n} of 6`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    loading="lazy"
                  />
                </div>
              )
            })}
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
            Bring Finn&rsquo;s story home.
          </h2>
          <p style={{
            color: 'var(--text-dim)',
            marginBottom: '2.25rem',
            fontSize: '1.05rem',
            lineHeight: 1.6,
          }}>
            A warm bedtime read your child will ask for again.
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

      {/* Spacer so sticky CTA doesn't cover final footer on mobile */}
      <div className="finn-sticky-spacer" aria-hidden="true" />

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

      {/* Sticky mobile bottom CTA — hidden on desktop via CSS above */}
      <div className="finn-sticky-cta">
        <a
          className="btn"
          href={AMAZON_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get it on Amazon
        </a>
      </div>
    </div>
  )
}

export default FinnFindsHisFeet
