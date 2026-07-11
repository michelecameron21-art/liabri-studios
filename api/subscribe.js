// Serverless function (Vercel) that adds an email to MailerLite via the official API.
// Requires env var MAILERLITE_API_KEY. Optional MAILERLITE_GROUP_ID to file
// subscribers into a specific group (e.g. the Liabri Subscriber List).
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const email = (req.body && req.body.email ? String(req.body.email) : '').trim()
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  const KEY = process.env.MAILERLITE_API_KEY
  if (!KEY) {
    return res.status(500).json({ error: 'Newsletter is not configured yet.' })
  }

  const payload = { email }
  const groupId = process.env.MAILERLITE_GROUP_ID
  if (groupId) payload.groups = [groupId]

  try {
    const r = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${KEY}`,
      },
      body: JSON.stringify(payload),
    })

    if (r.ok) return res.status(200).json({ ok: true })

    const data = await r.json().catch(() => ({}))
    return res.status(r.status).json({ error: data.message || 'Could not subscribe. Please try again.' })
  } catch {
    return res.status(500).json({ error: 'Could not reach the mailing list. Please try again.' })
  }
}
