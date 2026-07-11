import { ChevronDown } from 'lucide-react'
import SkyDecor from './SkyDecor'

function Hero() {
  return (
    <section id="top" style={{
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background:
        'radial-gradient(ellipse at 50% 110%, rgba(232,180,72,0.18) 0%, transparent 55%),' +
        'radial-gradient(ellipse at 80% 20%, rgba(26,43,85,0.6) 0%, transparent 55%),' +
        'linear-gradient(180deg, #06122B 0%, #0B1A3D 60%, #1A2B55 100%)',
    }}>
      {/* Three wise men following the star: full-bleed night-sky backdrop */}
      <img
        src="/assets/liabri-hero-wisemen.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 40%',
          opacity: 0.82,
        }}
      />
      {/* Navy scrim: darkens top (behind logo) and base (behind buttons) for legibility,
          while letting the guiding star's warm glow show through the middle. */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background:
          'linear-gradient(180deg, rgba(6,18,43,0.62) 0%, rgba(6,18,43,0.22) 38%, rgba(6,18,43,0.18) 62%, rgba(6,18,43,0.55) 100%)',
      }} />

      <div className="starfield" aria-hidden="true" />
      <SkyDecor />

      <div className="container" style={{ position: 'relative', textAlign: 'center', zIndex: 2 }}>
        <img
          src="/assets/liabri-logo.png"
          alt="Liabri Studios"
          style={{
            display: 'block',
            margin: '0 auto 2rem',
            width: 'clamp(220px, 32vw, 380px)',
            animation: 'logoFloat 6s ease-in-out infinite, logoGlow 4s ease-in-out infinite',
            transformOrigin: 'center',
            willChange: 'transform, filter',
          }}
        />
        <span className="kicker" style={{ marginBottom: '1.5rem' }}>A faith-based children's storytelling studio</span>
        <h1 style={{
          fontSize: 'clamp(2.4rem, 6vw, 4.8rem)',
          fontWeight: 500,
          fontStyle: 'italic',
          color: 'var(--gold-light)',
          marginBottom: '1.25rem',
          textShadow: '0 4px 30px rgba(232,180,72,0.35)',
          letterSpacing: '-0.02em',
        }}>
          Big hearts, Big stories.
        </h1>
        <p style={{
          fontSize: 'clamp(1.05rem, 1.5vw, 1.3rem)',
          color: 'var(--text-dim)',
          maxWidth: '40rem',
          margin: '0 auto 2.5rem',
          lineHeight: 1.6,
        }}>
          Faith-filled stories for children, about courage, wonder, being different, and knowing they are deeply loved by Jesus.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="btn" href="#worlds">Explore the worlds</a>
          <a className="btn btn-ghost" href="#about">About Liabri</a>
        </div>
      </div>

      {/* Soft fade into the next section — no hard edge */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        left: 0, right: 0, bottom: 0,
        height: '180px',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(6,18,43,0.4) 45%, var(--navy-deep) 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <a href="#worlds" aria-label="Scroll to worlds" style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'var(--gold-light)',
        opacity: 0.7,
        animation: 'float 2.4s ease-in-out infinite',
        zIndex: 2,
      }}>
        <ChevronDown size={32} />
      </a>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 8px); }
        }
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0) rotate(-0.4deg); }
          50%      { transform: translateY(-10px) rotate(0.4deg); }
        }
        @keyframes logoGlow {
          0%, 100% { filter: drop-shadow(0 6px 30px rgba(232,180,72,0.30)); }
          50%      { filter: drop-shadow(0 10px 44px rgba(232,180,72,0.55)); }
        }
      `}</style>
    </section>
  )
}

export default Hero
