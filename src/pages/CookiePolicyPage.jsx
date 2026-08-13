import cookieMd from '../content/legal/cookie-policy.md?raw'
import { LegalDoc } from '../components/legal/LegalDoc'

export function CookiePolicyPage() {
  return (
    <LegalDoc
      md={cookieMd}
      pageTitle="Cookie Policy | SclinNexus"
      breadcrumbLabel="Cookie Policy"
    />
  )
}
