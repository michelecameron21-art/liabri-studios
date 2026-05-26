// Loads markdown blog posts from /src/posts at build time via Vite's import.meta.glob.
// Each post is a markdown file with simple YAML-ish frontmatter:
//
//   ---
//   title: Post Title
//   description: Meta description for search engines
//   date: 2026-05-26
//   keywords: keyword one, keyword two
//   ogImage: /assets/og-image.jpg (optional)
//   ---
//
//   Post body in markdown...

const rawModules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }
  const data = {}
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w[\w-]*)\s*:\s*(.*)$/)
    if (m) data[m[1]] = m[2].trim()
  }
  return { data, content: match[2] }
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

export const posts = Object.entries(rawModules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    return {
      slug: slugFromPath(path),
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || '',
      keywords: data.keywords || '',
      ogImage: data.ogImage || '/assets/og-image.jpg',
      readingMinutes: Math.max(1, Math.round(content.split(/\s+/).length / 230)),
      content,
    }
  })
  .sort((a, b) => (b.date || '').localeCompare(a.date || ''))

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug)
}
