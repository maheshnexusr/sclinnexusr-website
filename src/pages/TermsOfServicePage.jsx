import termsMd from '../content/legal/terms-of-service.md?raw'
import { LegalDoc } from '../components/legal/LegalDoc'

export function TermsOfServicePage() {
  return (
    <LegalDoc
      md={termsMd}
      pageTitle="Terms of Service | SclinNexus"
      breadcrumbLabel="Terms of Service"
    />
  )
}
