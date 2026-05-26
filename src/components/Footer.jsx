import { Link } from 'react-router-dom'
import { openConsentBanner } from '../lib/consent'

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
          gap: '1.5rem',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
          <p style={{ color: 'var(--text-dim-strong)', fontSize: '0.88rem' }}>
            © {new Date().getFullYear()} Liabri Studios.
          </p>
          <nav aria-label="Site footer" style={{
            display: 'flex',
            gap: '1.25rem 1.5rem',
            fontSize: '0.88rem',
            flexWrap: 'wrap',
          }}>
            <a href="/#worlds" style={{ color: 'var(--text-dim)' }}>Worlds</a>
            <a href="/#about" style={{ color: 'var(--text-dim)' }}>About</a>
            <Link to="/blog" style={{ color: 'var(--text-dim)' }}>Blog</Link>
            <a href="/#contact" style={{ color: 'var(--text-dim)' }}>Contact</a>
          </nav>
        </div>

        <hr style={{
          border: 'none',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(232,180,72,0.18), transparent)',
          margin: '1.5rem 0 1rem',
        }} />

        <div style={{
          display: 'flex',
          gap: '1.25rem',
          flexWrap: 'wrap',
          fontSize: '0.82rem',
          color: 'var(--text-dim-strong)',
          justifyContent: 'center',
        }}>
          <Link to="/privacy" style={{ color: 'var(--text-dim-strong)' }}>Privacy Policy</Link>
          <Link to="/cookies" style={{ color: 'var(--text-dim-strong)' }}>Cookie Policy</Link>
          <Link to="/terms" style={{ color: 'var(--text-dim-strong)' }}>Terms of Use</Link>
          <button
            onClick={openConsentBanner}
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              color: 'var(--text-dim-strong)',
              fontSize: '0.82rem',
              fontFamily: 'inherit',
            }}
          >
            Cookie preferences
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
