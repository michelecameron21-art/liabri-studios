import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getConsent, setConsent, loadAnalyticsIfConsented } from '../lib/consent'

function CookieBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (getConsent() === null) setOpen(true)
    function onReopen() { setOpen(true) }
    window.addEventListener('liabri:open-consent-banner', onReopen)
    // If consent already 'all', load analytics on mount.
    loadAnalyticsIfConsented()
    return () => window.removeEventListener('liabri:open-consent-banner', onReopen)
  }, [])

  function choose(value) {
    setConsent(value)
    if (value === 'all') loadAnalyticsIfConsented()
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '1rem',
        right: '1rem',
        maxWidth: '560px',
        margin: '0 auto',
        background: 'rgba(11, 26, 61, 0.96)',
        backdropFilter: 'blur(14px) saturate(140%)',
        border: '1px solid rgba(232,180,72,0.3)',
        borderRadius: '18px',
        padding: '1.25rem 1.4rem',
        boxShadow: '0 20px 60px rgba(0,0,0,0.55)',
        zIndex: 100,
        color: 'var(--text-light)',
      }}
    >
      <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.55, color: 'var(--text-dim)' }}>
        We use a small amount of essential storage to remember this choice. If you accept analytics, we will also load Google
        Analytics to understand how the site is used. See our <Link to="/cookies" style={{ color: 'var(--gold-light)' }}>Cookie Policy</Link>.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => choose('all')}
          style={{
            background: 'var(--gold)',
            color: '#06122B',
            border: 'none',
            padding: '0.6rem 1.2rem',
            borderRadius: '999px',
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '0.92rem',
            letterSpacing: '0.02em',
            boxShadow: '0 3px 0 var(--gold-deep)',
          }}
        >
          Accept all
        </button>
        <button
          onClick={() => choose('essential')}
          style={{
            background: 'transparent',
            color: 'var(--gold-light)',
            border: '1px solid var(--gold-light)',
            padding: '0.6rem 1.2rem',
            borderRadius: '999px',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '0.92rem',
            letterSpacing: '0.02em',
          }}
        >
          Essential only
        </button>
      </div>
    </div>
  )
}

export default CookieBanner
