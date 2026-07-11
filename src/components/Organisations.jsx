import { GraduationCap } from 'lucide-react'

// A warm callout offering books at cost to schools, churches and children's groups.
function Organisations() {
  return (
    <section
      style={{
        background: 'var(--navy-deep)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(1.5rem, 3.5vw, 2.75rem) 0',
      }}
    >
      <div className="starfield" aria-hidden="true" />
      <div
        className="container"
        style={{ position: 'relative', maxWidth: '720px', textAlign: 'center' }}
      >
        <div
          style={{
            border: '1px solid rgba(232,180,72,0.28)',
            borderRadius: 20,
            background: 'rgba(26,43,85,0.28)',
            padding: 'clamp(1.75rem, 4vw, 2.75rem)',
          }}
        >
          <GraduationCap
            size={30}
            color="var(--gold)"
            style={{ marginBottom: '0.75rem', filter: 'drop-shadow(0 0 12px rgba(232,180,72,0.5))' }}
          />
          <span className="kicker">For schools, churches &amp; children's groups</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', marginBottom: '0.9rem' }}>
            Books at cost for children's organisations.
          </h2>
          <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, maxWidth: '34rem', margin: '0 auto 1.5rem' }}>
            Buying for a classroom, Sunday school, or children's ministry? We offer our books at cost
            to schools, churches, and children's organisations, because every child deserves these
            stories. Get in touch and we'll help you out.
          </p>
          <a href="#contact" className="btn">Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default Organisations
