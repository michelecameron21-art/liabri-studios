import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const LAST_UPDATED = '26 May 2026'
const CONTACT_EMAIL = 'hello@liabristudios.com'

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Liabri Studios</title>
        <meta name="description" content="How Liabri Studios collects, uses and protects your personal data under UK GDPR. Last updated 26 May 2026." />
        <link rel="canonical" href="https://www.liabristudios.com/privacy" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy | Liabri Studios" />
        <meta property="og:description" content="How Liabri Studios collects, uses and protects your personal data under UK GDPR." />
        <meta property="og:url" content="https://www.liabristudios.com/privacy" />
        <meta property="og:type" content="website" />
      </Helmet>

      <LegalHero kicker="Legal" title="Privacy Policy" updated={LAST_UPDATED} />

      <article className="prose" style={{ background: 'var(--navy-deep)', padding: '1rem 1.5rem 5rem' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <p>
            This privacy policy explains how Liabri Studios ("we", "us", "our") collects and uses your personal data when you visit
            liabristudios.com or interact with us. We take your privacy seriously and only collect the information we genuinely need.
          </p>

          <h2>Who we are</h2>
          <p>
            Liabri Studios is the independent children's book publishing imprint of Michele Cameron, operating as a sole trader in
            the United Kingdom. For the purposes of UK GDPR, Michele Cameron is the data controller for any personal data collected
            through this website.
          </p>
          <p>
            You can contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> for any privacy-related questions.
          </p>

          <h2>What personal data we collect</h2>
          <p>We only collect information when you choose to give it to us. Specifically:</p>
          <ul>
            <li>
              <strong>Newsletter signup.</strong> When you subscribe to our newsletter, we collect your email address (and your name
              if you choose to provide it) so we can send you the updates you have asked for.
            </li>
            <li>
              <strong>Contact form.</strong> When you send us a message via the contact form, we collect your name, email address
              and the message itself so we can reply to you.
            </li>
            <li>
              <strong>Analytics (if you consent).</strong> If you accept analytics cookies, Google Analytics records anonymised
              information about your visit, such as pages viewed, country, device type and approximate visit duration. This data
              does not personally identify you.
            </li>
          </ul>
          <p>
            We do not collect special category data, payment information (purchases happen on Amazon and other retailers, not on
            this site), or data about children under 13.
          </p>

          <h2>Lawful basis for processing</h2>
          <p>Under UK GDPR, we rely on the following lawful bases:</p>
          <ul>
            <li><strong>Consent</strong> for the newsletter and analytics cookies. You can withdraw consent at any time.</li>
            <li><strong>Legitimate interest</strong> for responding to enquiries you send via the contact form.</li>
          </ul>

          <h2>Who we share your data with</h2>
          <p>
            We do not sell your data. We use a small number of trusted third party services to operate the site:
          </p>
          <ul>
            <li>
              <strong>MailerLite</strong> hosts our newsletter and stores subscriber email addresses on our behalf. See the
              {' '}<a href="https://www.mailerlite.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">MailerLite privacy policy</a>.
            </li>
            <li>
              <strong>Formspree</strong> receives and forwards contact form submissions to us by email. See the
              {' '}<a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Formspree privacy policy</a>.
            </li>
            <li>
              <strong>Google Analytics</strong> provides anonymised visitor statistics if you accept analytics cookies. See the
              {' '}<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google privacy policy</a>.
            </li>
            <li>
              <strong>Vercel</strong> hosts this website and processes basic technical request logs as part of normal site hosting.
              See the {' '}<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel privacy policy</a>.
            </li>
          </ul>

          <h2>International transfers</h2>
          <p>
            Some of our processors are based outside the UK. Where personal data is transferred internationally, it is protected by
            appropriate safeguards such as the UK Addendum to the EU Standard Contractual Clauses, in line with UK GDPR.
          </p>

          <h2>How long we keep your data</h2>
          <ul>
            <li><strong>Newsletter subscribers:</strong> until you unsubscribe. You can unsubscribe at any time using the link in any email we send.</li>
            <li><strong>Contact form messages:</strong> for up to two years after our last interaction, then deleted.</li>
            <li><strong>Analytics data:</strong> retained by Google Analytics for up to 14 months.</li>
          </ul>

          <h2>Your rights</h2>
          <p>Under UK GDPR you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Have it corrected if it is wrong</li>
            <li>Have it deleted ("right to be forgotten")</li>
            <li>Restrict or object to our processing</li>
            <li>Receive your data in a portable format</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise any of these rights, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond within
            one month.
          </p>
          <p>
            You also have the right to complain to the UK Information Commissioner's Office (ICO) if you believe we have not
            handled your data correctly. You can reach the ICO at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>
            {' '}or on 0303 123 1113.
          </p>

          <h2>Cookies</h2>
          <p>
            For details about cookies and similar technologies we use, please see our <Link to="/cookies">Cookie Policy</Link>.
          </p>

          <h2>Children's privacy</h2>
          <p>
            This website is intended for parents, teachers and other adults who buy or recommend books for children. We do not
            knowingly collect personal data from children. If you believe a child has provided personal data on the site, please
            contact us and we will delete it.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The "last updated" date at the top of the page reflects the most recent
            revision. Material changes will be highlighted on the site for a reasonable period.
          </p>

          <h2>Contact</h2>
          <p>
            Questions, requests, complaints, or anything else: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </article>
    </>
  )
}

export function LegalHero({ kicker, title, updated }) {
  return (
    <section style={{
      paddingTop: 'clamp(7rem, 14vh, 11rem)',
      paddingBottom: 'clamp(2rem, 4vh, 3rem)',
      background: 'var(--navy-deep)',
      position: 'relative',
    }}>
      <div className="starfield" aria-hidden="true" />
      <div className="container" style={{ position: 'relative', maxWidth: '720px' }}>
        <span className="kicker">{kicker}</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', marginTop: '0.5rem' }}>
          {title}
        </h1>
        {updated && (
          <p style={{ color: 'var(--text-dim-strong)', marginTop: '0.5rem', fontSize: '0.92rem' }}>
            Last updated {updated}
          </p>
        )}
      </div>
    </section>
  )
}

export default Privacy
