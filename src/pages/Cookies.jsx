import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { LegalHero } from './Privacy'
import { CONSENT_KEY, openConsentBanner } from '../lib/consent'

const LAST_UPDATED = '26 May 2026'

function Cookies() {
  function reopenBanner() {
    localStorage.removeItem(CONSENT_KEY)
    openConsentBanner()
  }

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Liabri Studios</title>
        <meta name="description" content="What cookies Liabri Studios uses and how you can manage your preferences. Last updated 26 May 2026." />
        <link rel="canonical" href="https://www.liabristudios.com/cookies" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Cookie Policy | Liabri Studios" />
        <meta property="og:description" content="What cookies Liabri Studios uses and how you can manage your preferences." />
        <meta property="og:url" content="https://www.liabristudios.com/cookies" />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalHero kicker="Legal" title="Cookie Policy" updated={LAST_UPDATED} />

      <article className="prose" style={{ background: 'var(--navy-deep)', padding: '1rem 1.5rem 5rem' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <p>
            This page explains what cookies and similar technologies we use on liabristudios.com, why we use them, and how you can
            manage your preferences.
          </p>

          <h2>What are cookies?</h2>
          <p>
            Cookies are small files saved on your device by your browser when you visit a website. They let sites remember things
            like your preferences and help site owners understand how visitors use the site. Some "cookies" are technically other
            forms of local storage (such as <code>localStorage</code>), but we treat them the same way for transparency.
          </p>

          <h2>Cookies we use</h2>

          <h3>1. Essential (always on)</h3>
          <p>
            We store your cookie consent choice in your browser's <code>localStorage</code> so that we do not have to ask you again
            on every visit. This is the only "essential" item we set, and it cannot be disabled because it is what enables the
            consent banner itself.
          </p>
          <ul>
            <li><strong>Name:</strong> <code>liabri_cookie_consent</code></li>
            <li><strong>Purpose:</strong> Remembers whether you accepted or declined analytics cookies</li>
            <li><strong>Stored for:</strong> 12 months from the date you set it</li>
          </ul>

          <h3>2. Analytics (only if you consent)</h3>
          <p>
            If you click "Accept all" on the cookie banner, we load Google Analytics 4 to understand how visitors use the site in
            aggregate. The data is anonymised and we do not use it to identify individual visitors.
          </p>
          <ul>
            <li><strong>Provider:</strong> Google Analytics 4 (Google Ireland Limited)</li>
            <li><strong>Cookies set:</strong> <code>_ga</code>, <code>_ga_*</code> (and similar)</li>
            <li><strong>Purpose:</strong> Counts visits, page views, sessions, country, device type</li>
            <li><strong>Stored for:</strong> up to 24 months</li>
            <li><strong>More info:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
          </ul>
          <p>
            We have IP anonymisation enabled, do not enable Google Signals, and do not use Google Analytics for advertising.
          </p>

          <h3>3. Third-party services on specific pages</h3>
          <p>
            When you submit our contact form, the form is processed by Formspree. When you sign up to our newsletter, your data is
            processed by MailerLite. These services may set their own cookies when their forms are loaded. See:
          </p>
          <ul>
            <li><a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Formspree privacy policy</a></li>
            <li><a href="https://www.mailerlite.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">MailerLite privacy policy</a></li>
          </ul>

          <h2>We do not use</h2>
          <ul>
            <li>Advertising or remarketing cookies</li>
            <li>Cross-site tracking pixels</li>
            <li>Social media tracking widgets</li>
          </ul>

          <h2>Managing your preferences</h2>
          <p>
            You can change your mind at any time:
          </p>
          <ul>
            <li>
              <button
                onClick={reopenBanner}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--gold-light)',
                  color: 'var(--gold-light)',
                  padding: '0.55rem 1.1rem',
                  borderRadius: '999px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                }}
              >
                Reopen cookie preferences
              </button>
            </li>
            <li>
              You can also clear cookies and site data using your browser settings. The next time you visit, our banner will show
              again so you can make a fresh choice.
            </li>
          </ul>

          <h2>More information</h2>
          <p>
            For full details about how we handle personal data, see our <Link to="/privacy">Privacy Policy</Link>.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we change the cookies we use, we will update this page and bump the "last updated" date at the top.
          </p>
        </div>
      </article>
    </>
  )
}

export default Cookies
