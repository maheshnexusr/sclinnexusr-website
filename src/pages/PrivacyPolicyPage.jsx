import policyMd from '../content/legal/privacy-policy.md?raw'
import { LegalDoc } from '../components/legal/LegalDoc'

export function PrivacyPolicyPage() {
  return (
    <LegalDoc
      md={policyMd}
      pageTitle="Privacy Policy | ProEDC"
      breadcrumbLabel="Privacy Policy"
    />
  )
}
