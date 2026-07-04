import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, posts } from '../lib/posts'

function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/404" replace />

  const url = `https://www.liabristudios.com/blog/${post.slug}`
  const ogImage = post.ogImage.startsWith('http')
    ? post.ogImage
    : `https://www.liabristudios.com${post.ogImage}`

  const related = posts.filter(p => p.slug !== post.slug).slice(0, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: ogImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Michele Cameron',
      url: 'https://www.liabristudios.com/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Liabri Studios',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.liabristudios.com/assets/liabri-logo.png',
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.keywords,
    inLanguage: 'en-GB',
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Liabri Studios</title>
        <meta name="description" content={post.description} />
        {post.keywords && <meta name="keywords" content={post.keywords} />}
        <link rel="canonical" href={url} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Liabri Studios" />
        <meta property="article:author" content="Michele Cameron" />
        {post.date && <meta property="article:published_time" content={post.date} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section style={{
        paddingTop: 'clamp(7rem, 14vh, 11rem)',
        paddingBottom: 'clamp(1.5rem, 4vh, 2.5rem)',
        background: 'var(--navy-deep)',
        position: 'relative',
      }}>
        <div className="starfield" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', maxWidth: '760px' }}>
          <Link
            to="/blog"
            style={{
              display: 'inline-block',
              fontSize: '0.85rem',
              color: 'var(--gold-light)',
              fontWeight: 600,
              marginBottom: '1.5rem',
              letterSpacing: '0.05em',
            }}
          >
            ← Back to blog
          </Link>
          <span style={{
            display: 'block',
            fontSize: '0.78rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--gold-light)',
            fontWeight: 700,
            marginBottom: '0.75rem',
          }}>
            {formatDate(post.date)} · {post.readingMinutes} min read
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.4rem)',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            {post.title}
          </h1>
          {post.description && (
            <p className="lede" style={{ marginTop: '0.5rem' }}>{post.description}</p>
          )}
        </div>
      </section>

      <article className="prose" style={{
        background: 'var(--navy-deep)',
        padding: '1rem 1.5rem 4rem',
      }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      {related.length > 0 && (
        <section style={{ background: 'var(--navy-deep)', padding: '3rem 1.5rem 5rem', borderTop: '1px solid rgba(232,180,72,0.18)' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <h2 style={{ fontSize: '1.4rem', textAlign: 'center', marginBottom: '1.5rem' }}>Keep reading</h2>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gap: '1rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            }}>
              {related.map(p => (
                <li key={p.slug}>
                  <Link
                    to={`/blog/${p.slug}`}
                    style={{
                      display: 'block',
                      padding: '1.25rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(232,180,72,0.18)',
                      borderRadius: '14px',
                      color: 'var(--text-dim)',
                    }}
                  >
                    <span style={{
                      fontSize: '0.74rem',
                      color: 'var(--gold-light)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                    }}>
                      Read next
                    </span>
                    <h3 style={{ fontSize: '1.1rem', marginTop: '0.4rem', color: 'var(--text)' }}>{p.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}

function formatDate(d) {
  if (!d) return ''
  const date = new Date(d)
  if (isNaN(date)) return d
  return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default BlogPost
