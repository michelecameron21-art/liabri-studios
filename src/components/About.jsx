function About() {
  return (
    <section id="about" className="section" style={{
      background: 'var(--navy-deep)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="starfield" aria-hidden="true" />
      <div className="container" style={{ position: 'relative', maxWidth: '760px', textAlign: 'center' }}>
        <span className="accent-line" />
        <span className="kicker">About Liabri Studios</span>
        <h2 style={{ marginBottom: '1.5rem' }}>Big hearts, Big stories.</h2>
        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text-dim)',
          lineHeight: 1.8,
        }}>
          Liabri Studios is an independent, faith-based children's storytelling studio. We tell stories rooted in Christian faith: about courage, kindness, the joy of knowing that being made different is something to be celebrated, and the truth that every child is seen, known, and loved by Jesus.
        </p>
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--gold-light)',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          marginTop: '1.5rem',
        }}>
          Schools, churches and children's groups: we offer our books <strong>at cost</strong>.{' '}
          <a href="#contact" style={{ color: 'var(--gold-light)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Get in touch
          </a>{' '}and we'll help you out.
        </p>
      </div>
    </section>
  )
}

export default About
