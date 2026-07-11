import { useEffect, useState, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { worlds } from '../data/worlds'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const onChange = () => { setIsMobile(mq.matches); if (!mq.matches) setMenuOpen(false) }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  function go(to) {
    setMenuOpen(false)
    if (to.startsWith('/#')) {
      const id = to.slice(2)
      if (location.pathname === '/') {
        const el = document.getElementById(id)
        if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return }
      }
    }
    navigate(to)
  }

  const mobileLinks = [
    { label: 'Worlds', to: '/#worlds' },
    { label: 'About', to: '/#about' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/#contact' },
  ]

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      padding: scrolled ? '0.85rem 1.5rem' : '1.2rem 1.5rem',
      background: (scrolled || (isMobile && menuOpen))
        ? 'rgba(6, 18, 43, 0.78)'
        : 'transparent',
      backdropFilter: (scrolled || (isMobile && menuOpen)) ? 'blur(14px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(232, 180, 72, 0.18)' : '1px solid transparent',
      transition: 'all .3s ease',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link to="/" aria-label="Liabri Studios home" style={{ display: 'flex', alignItems: 'center' }}>
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
        </Link>

        {!isMobile && (
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <NavDropdown
              label="Worlds"
              anchor="worlds"
              items={worlds.map(w => ({
                label: w.series,
                href: w.teaser ? w.externalUrl : `/#${w.id}`,
                external: !!w.teaser,
              }))}
            />
            <NavDropdown
              label="About"
              anchor="about"
              items={[
                { label: 'About Liabri Studios', href: '/#about' },
                { label: 'Contact', href: '/#contact' },
              ]}
            />
            <SmartLink to="/blog">Blog</SmartLink>
            <SmartLink to="/#contact">Contact</SmartLink>
          </nav>
        )}

        {isMobile && (
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
            style={{ background: 'none', border: 'none', color: 'var(--gold-light)', cursor: 'pointer', padding: 4, display: 'flex' }}
          >
            {menuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <nav style={{
          maxWidth: 1180,
          margin: '0.85rem auto 0',
          display: 'flex', flexDirection: 'column', gap: '0.15rem',
          background: 'rgba(11, 26, 61, 0.97)',
          backdropFilter: 'blur(14px) saturate(140%)',
          border: '1px solid rgba(232, 180, 72, 0.3)',
          borderRadius: '14px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.55)',
          padding: '0.5rem',
        }}>
          {mobileLinks.map(l => (
            <a
              key={l.to}
              href={l.to}
              onClick={(e) => { e.preventDefault(); go(l.to) }}
              style={{
                display: 'block',
                padding: '0.85rem 0.9rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                borderRadius: '10px',
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

// Handles both in-page anchors (/#contact) and route links (/blog).
function SmartLink({ to, children }) {
  const [hover, setHover] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function onClick(e) {
    if (to.startsWith('/#')) {
      const id = to.slice(2)
      if (location.pathname === '/') {
        e.preventDefault()
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        e.preventDefault()
        navigate(`/#${id}`)
      }
    }
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontSize: '0.98rem',
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: hover ? '#FFE6A5' : 'var(--gold-light)',
        transition: 'color .15s',
      }}
    >
      {children}
    </Link>
  )
}

function NavDropdown({ label, anchor, items }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const closeTimer = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpen(false), 140)
  }
  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  function onLabelClick(e) {
    if (window.matchMedia('(hover: none)').matches && !open) {
      e.preventDefault()
      setOpen(true)
      return
    }
    e.preventDefault()
    if (location.pathname === '/') {
      const el = document.getElementById(anchor)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(`/#${anchor}`)
    }
  }

  return (
    <div
      ref={ref}
      style={{ position: 'relative' }}
      onMouseEnter={() => { cancelClose(); setOpen(true) }}
      onMouseLeave={scheduleClose}
    >
      <a
        href={`/#${anchor}`}
        onClick={onLabelClick}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          fontSize: '0.98rem',
          fontWeight: 600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: open ? '#FFE6A5' : 'var(--gold-light)',
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
            <DropdownItem key={item.href} item={item} close={() => setOpen(false)} />
          ))}
        </div>
      )}
    </div>
  )
}

function DropdownItem({ item, close }) {
  const location = useLocation()
  const navigate = useNavigate()
  const linkStyle = {
    display: 'block',
    padding: '0.65rem 0.9rem',
    fontSize: '0.92rem',
    fontWeight: 600,
    color: 'var(--text-dim)',
    borderRadius: '10px',
    transition: 'background .15s, color .15s',
    whiteSpace: 'nowrap',
  }
  const enter = e => {
    e.currentTarget.style.background = 'rgba(232, 180, 72, 0.12)'
    e.currentTarget.style.color = 'var(--gold-light)'
  }
  const leave = e => {
    e.currentTarget.style.background = 'transparent'
    e.currentTarget.style.color = 'var(--text-dim)'
  }

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={close} style={linkStyle} onMouseEnter={enter} onMouseLeave={leave}>
        {item.label} ↗
      </a>
    )
  }

  function onClick(e) {
    if (item.href.startsWith('/#')) {
      e.preventDefault()
      const id = item.href.slice(2)
      close()
      if (location.pathname === '/') {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        navigate(`/#${id}`)
      }
    } else {
      close()
    }
  }

  return (
    <Link to={item.href} onClick={onClick} style={linkStyle} onMouseEnter={enter} onMouseLeave={leave}>
      {item.label}
    </Link>
  )
}

export default Header
