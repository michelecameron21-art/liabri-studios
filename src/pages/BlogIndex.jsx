import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { posts } from '../lib/posts'

function BlogIndex() {
  return (
    <>
      <Helmet>
        <title>Blog | Liabri Studios — Children's Books, Bravery, Faith & Being Different</title>
        <meta name="description" content="Stories, reading guides and resources from Liabri Studios. Picture books for children aged 4 to 8 about bravery, being different, and faith." />
        <link rel="canonical" href="https://liabristudios.com/blog" />
        <meta property="og:title" content="Liabri Studios Blog" />
        <meta property="og:description" content="Stories, reading guides and resources from Liabri Studios." />
        <meta property="og:url" content="https://liabristudios.com/blog" />
        <meta property="og:image" content="https://liabristudios.com/assets/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section style={{
        paddingTop: 'clamp(7rem, 14vh, 11rem)',
        paddingBottom: 'clamp(3rem, 6vh, 5rem)',
        background: 'var(--navy-deep)',
        position: 'relative',
      }}>
        <div className="starfield" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <span className="accent-line" />
          <span className="kicker">From the studio</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', marginTop: '0.75rem' }}>
            Liabri Studios Blog
          </h1>
          <p className="lede" style={{ margin: '1rem auto 0' }}>
            Reading guides, stories about the people behind our books, and resources for families, teachers and anyone supporting a child who feels a little different.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--navy-deep)', padding: '2rem 1.5rem 5rem' }}>
        <div className="container">
          {posts.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-dim)' }}>No posts yet. Check back soon.</p>
          ) : (
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gap: '1.5rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            }}>
              {posts.map(p => (
                <li key={p.slug}>
                  <Link
                    to={`/blog/${p.slug}`}
                    style={{
                      display: 'block',
                      padding: '1.75rem',
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(232,180,72,0.18)',
                      borderRadius: '18px',
                      transition: 'transform .2s ease, border-color .2s ease, background .2s ease',
                      height: '100%',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.borderColor = 'rgba(232,180,72,0.45)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.045)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.borderColor = 'rgba(232,180,72,0.18)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <span style={{
                      fontSize: '0.75rem',
                      color: 'var(--gold-light)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                    }}>
                      {formatDate(p.date)} · {p.readingMinutes} min read
                    </span>
                    <h2 style={{
                      fontSize: '1.45rem',
                      marginTop: '0.5rem',
                      marginBottom: '0.75rem',
                      lineHeight: 1.2,
                    }}>
                      {p.title}
                    </h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.98rem', lineHeight: 1.55 }}>
                      {p.description}
                    </p>
                    <span style={{
                      display: 'inline-block',
                      marginTop: '1rem',
                      color: 'var(--gold-light)',
                      fontWeight: 600,
                      fontSize: '0.92rem',
                    }}>
                      Read post →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}

function formatDate(d) {
  if (!d) return ''
  const date = new Date(d)
  if (isNaN(date)) return d
  return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default BlogIndex
