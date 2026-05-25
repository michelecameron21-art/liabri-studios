function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(to bottom, var(--navy) 0%, var(--navy-deep) 40%, #030915 100%)',
      padding: '2.5rem 1.5rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ color: 'var(--text-dim-strong)', fontSize: '0.88rem' }}>
            © {new Date().getFullYear()} Liabri Studios. All stories belong to the children who read them.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.88rem' }}>
            <a href="#worlds" style={{ color: 'var(--text-dim)' }}>Worlds</a>
            <a href="#about" style={{ color: 'var(--text-dim)' }}>About</a>
            <a href="#contact" style={{ color: 'var(--text-dim)' }}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
