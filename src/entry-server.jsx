// Server entry for build-time prerendering (SSG).
// Renders each route to static HTML and captures its react-helmet-async head
// tags, so crawlers receive the real page (content + title + meta + canonical +
// schema) instead of an empty <div id="root">.
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )
  const { helmet } = helmetContext
  return {
    html,
    title: helmet.title.toString(),
    meta: helmet.meta.toString(),
    link: helmet.link.toString(),
    script: helmet.script.toString(),
  }
}

// Blog posts (slugs) resolved at build time via Vite's import.meta.glob.
export { posts } from './lib/posts.js'
