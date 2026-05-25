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
          Liabri Studios is an independent children's content producer. We strive to tell stories that are inspiring and uplifting for children. Stories about courage, bravery, the joy of knowing that being different is something to be celebrated, and the power of teamwork and friendship.
        </p>
      </div>
    </section>
  )
}

export default About
