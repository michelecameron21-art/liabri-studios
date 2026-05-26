// Tiny consent store + GA loader.
// Consent values: 'all' (essential + analytics), 'essential' (essential only), null (no choice yet)

export const CONSENT_KEY = 'liabri_cookie_consent'
export const CONSENT_EVENT = 'liabri:consent-change'

const CONSENT_TTL_DAYS = 365

export function getConsent() {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed.value || !parsed.timestamp) return null
    const ageDays = (Date.now() - parsed.timestamp) / 86_400_000
    if (ageDays > CONSENT_TTL_DAYS) return null
    return parsed.value
  } catch {
    return null
  }
}

export function setConsent(value) {
  if (typeof window === 'undefined') return
  localStorage.setItem(CONSENT_KEY, JSON.stringify({ value, timestamp: Date.now() }))
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }))
}

export function openConsentBanner() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('liabri:open-consent-banner'))
}

// --- Google Analytics 4 loader (only loads when consent === 'all' and GA_ID is set) ---

const GA_ID = import.meta.env.VITE_GA_ID || ''
let gaLoaded = false

export function loadAnalyticsIfConsented() {
  if (typeof window === 'undefined') return
  if (gaLoaded) return
  if (!GA_ID) return
  if (getConsent() !== 'all') return

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })

  gaLoaded = true
}

export function trackPageview(path) {
  if (typeof window === 'undefined') return
  if (!GA_ID || getConsent() !== 'all' || !window.gtag) return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.origin + path,
  })
}
