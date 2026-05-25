import { useEffect, useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { worlds } from '../data/worlds'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      padding: scrolled ? '0.85rem 1.5rem' : '1.2rem 1.5rem',
      background: scrolled
        ? 'rgba(6, 18, 43, 0.78)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(14px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(232, 180, 72, 0.18)' : '1px solid transparent',
      transition: 'all .3s ease',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#top" aria-label="Liabri Studios home" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/liabri-logo.png"
            alt="Liabri Studios"
            style={{
              height: scrolled ? '36px' : '44px',
              width: 'auto',
              transition: 'height .25s ease',
              filter: 'drop-shadow(0 2px 12px rgba(232,180,72,0.25))',
            }}
          />
        </a>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <NavDropdown
            label="Worlds"
            href="#worlds"
            items={worlds.map(w => ({ label: w.series, href: w.teaser ? w.externalUrl : `#${w.id}`, external: !!w.teaser }))}
          />
          <NavDropdown
            label="About"
            href="#about"
            items={[
              { label: 'About Liabri Studios', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ]}
          />
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ href, children }) {
  const [hover, setHover] = useState(false)
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontSize: '0.92rem',
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: hover ? 'var(--gold-light)' : 'var(--text-dim)',
        transition: 'color .15s',
      }}
    >
      {children}
    </a>
  )
}

function NavDropdown({ label, href, items }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const closeTimer = useRef(null)

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpen(false), 140)
  }
  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  // Close on outside click for mobile/tap users
  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  return (
    <div
      ref={ref}
      style={{ position: 'relative' }}
      onMouseEnter={() => { cancelClose(); setOpen(true) }}
      onMouseLeave={scheduleClose}
    >
      <a
        href={href}
        onClick={(e) => {
          // On touch devices, first tap should open dropdown instead of jumping
          if (!open && window.matchMedia('(hover: none)').matches) {
            e.preventDefault()
            setOpen(true)
          }
        }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          fontSize: '0.92rem',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: open ? 'var(--gold-light)' : 'var(--text-dim)',
          transition: 'color .15s',
          cursor: 'pointer',
        }}
      >
        {label}
        <ChevronDown size={14} strokeWidth={2.5} style={{
          transform: open ? 'rotate(180deg)' : 'rotate(0)',
          transition: 'transform .2s ease',
        }} />
      </a>

      {open && (
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          style={{
            position: 'absolute',
            top: 'calc(100% + 14px)',
            right: 0,
            minWidth: '230px',
            background: 'rgba(11, 26, 61, 0.96)',
            backdropFilter: 'blur(14px) saturate(140%)',
            border: '1px solid rgba(232, 180, 72, 0.3)',
            borderRadius: '14px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.55)',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {items.map(item => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : '_self'}
              rel={item.external ? 'noopener noreferrer' : ''}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.65rem 0.9rem',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--text-dim)',
                borderRadius: '10px',
                transition: 'background .15s, color .15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(232, 180, 72, 0.12)'
                e.currentTarget.style.color = 'var(--gold-light)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--text-dim)'
              }}
            >
              {item.label}{item.external ? ' ↗' : ''}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Header
