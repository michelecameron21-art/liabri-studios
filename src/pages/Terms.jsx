import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { LegalHero } from './Privacy'

const LAST_UPDATED = '26 May 2026'
const CONTACT_EMAIL = 'hello@liabristudios.com'

function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | Liabri Studios</title>
        <meta name="description" content="Terms of use for the Liabri Studios website. Last updated 26 May 2026." />
        <link rel="canonical" href="https://www.liabristudios.com/terms" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Terms of Use | Liabri Studios" />
        <meta property="og:description" content="Terms of use for the Liabri Studios website." />
        <meta property="og:url" content="https://www.liabristudios.com/terms" />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalHero kicker="Legal" title="Terms of Use" updated={LAST_UPDATED} />

      <article className="prose" style={{ background: 'var(--navy-deep)', padding: '1rem 1.5rem 5rem' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <p>
            These terms govern your use of liabristudios.com. By visiting or using the site you agree to these terms. If you do not
            agree, please stop using the site.
          </p>

          <h2>About us</h2>
          <p>
            liabristudios.com is operated by Michele Cameron, trading as Liabri Studios, a sole trader based in the United Kingdom.
            You can contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>Use of the site</h2>
          <p>You agree to use the site for lawful purposes only. In particular, you agree not to:</p>
          <ul>
            <li>Use the site in a way that damages, disables or impairs it or interferes with another visitor's use of it</li>
            <li>Attempt to gain unauthorised access to the site, the server it is hosted on, or any related systems</li>
            <li>Scrape, copy or harvest content other than for normal personal, non-commercial reading</li>
            <li>Upload or transmit any material that contains viruses or malicious code</li>
          </ul>

          <h2>Intellectual property</h2>
          <p>
            All content on this site, including text, illustrations, book extracts, page designs and the Liabri Studios name and
            logo, is the copyright of Michele Cameron / Liabri Studios unless otherwise stated. All rights are reserved.
          </p>
          <p>
            You may share short quotations and link to the site for personal and editorial purposes, with appropriate credit.
            Reproduction, distribution or commercial use of book content, illustrations or other site material without our written
            permission is not permitted.
          </p>

          <h2>Books and external retailers</h2>
          <p>
            We sell our books through third party retailers such as Amazon. When you click a buy link on this site, you are taken
            to that retailer's website. Their own terms, prices, delivery and returns policies apply to your purchase. We are not
            responsible for the content or operation of those external sites.
          </p>

          <h2>Links to other websites</h2>
          <p>
            This site may link to other websites we do not control, such as charity partners, retailers or related book sites.
            We provide those links because we think they may be useful, but we do not endorse their content and are not responsible
            for their availability, content or privacy practices.
          </p>

          <h2>Newsletter and contact form</h2>
          <p>
            If you sign up to our newsletter or send a message via the contact form, your data is handled in line with our
            <Link to="/privacy"> Privacy Policy</Link>. You can unsubscribe from the newsletter at any time using the link in any
            email we send.
          </p>

          <h2>No warranty</h2>
          <p>
            We try to keep the site working and the information accurate, but the site is provided "as is" without any warranty of
            any kind. We do not guarantee that the site will always be available, error-free, or free from viruses, and you use it
            at your own risk.
          </p>
          <p>
            Nothing in these terms excludes or limits our liability for death or personal injury caused by our negligence, for
            fraud, or for any other liability that cannot be excluded by law.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the extent permitted by law, we are not liable for any loss of profits, loss of business, business interruption, or
            loss of business opportunity arising from your use of the site, or for any indirect or consequential loss.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these terms from time to time. The "last updated" date at the top reflects the most recent revision.
            Continued use of the site after changes means you accept the updated terms.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the law of England and Wales. Any dispute relating to these terms or your use of the site
            is subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </article>
    </>
  )
}

export default Terms
