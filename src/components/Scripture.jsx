// A quiet scripture "moment" plus a reusable light/star motif, styled to blend
// into the site's night-sky theme (gold on navy).

// A refined four-point radiant star, reading as "light" rather than decoration.
export function StarMark({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ display: 'block', margin: '0 auto', filter: 'drop-shadow(0 0 12px rgba(232,180,72,0.5))' }}
    >
      <path
        d="M12 1 C12.5 7.2 12.9 10.1 14.4 11 C15.3 11.5 18.1 11.8 23 12 C18.1 12.2 15.3 12.5 14.4 13 C12.9 13.9 12.5 16.8 12 23 C11.5 16.8 11.1 13.9 9.6 13 C8.7 12.5 5.9 12.2 1 12 C5.9 11.8 8.7 11.5 9.6 11 C11.1 10.1 11.5 7.2 12 1 Z"
        fill="var(--gold)"
      />
    </svg>
  )
}

// A gentle star divider for the transition between sections.
export function StarDivider() {
  const line = {
    height: 1,
    flex: '0 1 clamp(60px, 18vw, 160px)',
  }
  return (
    <div
      aria-hidden="true"
      style={{
        background: 'var(--navy-deep)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.25rem',
        padding: '0.25rem 1rem 1.5rem',
      }}
    >
      <span style={{ ...line, background: 'linear-gradient(90deg, transparent, rgba(232,180,72,0.45))' }} />
      <StarMark size={20} />
      <span style={{ ...line, background: 'linear-gradient(90deg, rgba(232,180,72,0.45), transparent)' }} />
    </div>
  )
}

function Scripture() {
  return (
    <section
      className="section"
      style={{
        background: 'linear-gradient(180deg, var(--navy-deep) 0%, var(--navy) 50%, var(--navy-deep) 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <div className="starfield" aria-hidden="true" />
      <div className="container" style={{ position: 'relative', maxWidth: '820px' }}>
        <StarMark size={40} />
        <blockquote
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(1.55rem, 4vw, 2.75rem)',
            lineHeight: 1.4,
            color: 'var(--text-light)',
            margin: '1.6rem auto 1.4rem',
            maxWidth: '20ch',
          }}
        >
          &ldquo;I praise you because I am fearfully and wonderfully made.&rdquo;
        </blockquote>
        <span className="accent-line" />
        <cite
          style={{
            fontStyle: 'normal',
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: '0.78rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold-light)',
          }}
        >
          Psalm 139:14
        </cite>
      </div>
    </section>
  )
}

export default Scripture
