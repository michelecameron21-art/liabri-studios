import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Liabri Studios</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1.5rem',
      }}>
        <span className="kicker">404</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '1rem' }}>
          This page wandered off into the night sky.
        </h1>
        <p style={{ color: 'var(--text-dim)', maxWidth: '32rem', margin: '1rem auto 2rem' }}>
          The page you are looking for does not exist. Let's get you back home.
        </p>
        <Link to="/" className="btn">Back to Liabri Studios</Link>
      </section>
    </>
  )
}

export default NotFound
