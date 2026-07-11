// Post-build prerender (SSG): writes a static HTML file per route with the real
// rendered body + per-page head (title, meta, canonical, OG, schema), so Google
// and non-JS crawlers get full pages instead of an empty shell.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(__dirname, 'dist')
const SITE = 'https://www.liabristudios.com'
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const serverEntry = path.join(__dirname, 'dist-server', 'entry-server.js')
const { render, posts } = await import(pathToFileURL(serverEntry).href)

function buildPage(r) {
  let html = template
  if (r.title) html = html.replace(/<title>[\s\S]*?<\/title>/, () => r.title)
  const extra = [r.meta, r.link, r.script].filter(Boolean).join('\n    ')
  if (extra.trim()) html = html.replace('</head>', () => `    ${extra}\n  </head>`)
  html = html.replace('<div id="root"></div>', () => `<div id="root">${r.html}</div>`)
  return html
}

function write(relPath, html) {
  const file = relPath === '' ? path.join(dist, 'index.html') : path.join(dist, relPath, 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
}

const routes = [
  '', 'finn-finds-his-feet', 'blog', 'privacy', 'cookies', 'terms',
  ...posts.map((p) => `blog/${p.slug}`),
]

let ok = 0
for (const route of routes) {
  try {
    write(route, buildPage(render('/' + route)))
    ok++
  } catch (e) {
    console.warn(`  ! SSR render failed for /${route}: ${e.message}`)
  }
}

// Sitemap — includes the home, Finn landing page, blog index, every post and
// the legal pages, all on the canonical www host. Book covers and post images
// are included as image sitemap entries for richer indexing.
const today = new Date().toISOString().slice(0, 10)
const xe = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]))
const abs = (u) => (u && u.startsWith('http') ? u : `${SITE}${u}`)
const urls = [
  { loc: `${SITE}/`, pr: '1.0', cf: 'weekly', images: [
    { loc: `${SITE}/assets/og-image.jpg`, title: 'Liabri Studios' },
    { loc: `${SITE}/assets/finn-cover.jpg`, title: 'Finn Finds His Feet' },
    { loc: `${SITE}/assets/fh-cover.jpg`, title: 'The Brave River Rescue' },
    { loc: `${SITE}/assets/sbj-cover.jpg`, title: "Eli's Gift" },
  ] },
  { loc: `${SITE}/finn-finds-his-feet`, pr: '0.9', cf: 'monthly', images: [
    { loc: `${SITE}/assets/finn-cover.jpg`, title: 'Finn Finds His Feet' },
  ] },
  { loc: `${SITE}/blog`, pr: '0.8', cf: 'weekly' },
  ...posts.map((p) => ({
    loc: `${SITE}/blog/${p.slug}`, pr: '0.7', cf: 'monthly', lastmod: p.date,
    images: p.ogImage ? [{ loc: abs(p.ogImage), title: p.title }] : [],
  })),
  { loc: `${SITE}/privacy`, pr: '0.3', cf: 'yearly' },
  { loc: `${SITE}/terms`, pr: '0.3', cf: 'yearly' },
  { loc: `${SITE}/cookies`, pr: '0.3', cf: 'yearly' },
]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map((u) => {
  const imgs = (u.images || []).map((im) => `\n    <image:image><image:loc>${xe(im.loc)}</image:loc><image:title>${xe(im.title)}</image:title></image:image>`).join('')
  return `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod || today}</lastmod><changefreq>${u.cf}</changefreq><priority>${u.pr}</priority>${imgs}${imgs ? '\n  ' : ''}</url>`
}).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)

console.log(`Prerendered ${ok}/${routes.length} routes + sitemap (${urls.length} URLs).`)
