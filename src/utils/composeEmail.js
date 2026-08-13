/**
 * Opens a Gmail compose window in a new tab, pre-filled with the message.
 * The website itself never sends anything — the user reviews the email and
 * clicks Send in Gmail. If a popup blocker swallows the tab, falls back to
 * the OS default mail client via mailto: so the user is never stranded.
 *
 * Returns true when the compose tab opened, false when the fallback ran.
 */
export function openEmailCompose({ to, subject, body }) {
  const su = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(body)
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${to}&su=${su}&body=${encodedBody}`

  const win = window.open(gmailUrl, '_blank')
  if (win) {
    win.opener = null
    return true
  }
  window.location.href = `mailto:${to}?subject=${su}&body=${encodedBody}`
  return false
}
