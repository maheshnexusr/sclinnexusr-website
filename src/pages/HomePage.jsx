import { useEffect } from 'react'
import { home } from '../content/home'
import { site } from '../content/site'
import { HomeHero } from '../components/sections/HomeHero'
import { TrustStrip } from '../components/sections/TrustStrip'
import { ConnectedPlatform } from '../components/sections/ConnectedPlatform'
import { EdcShowcase } from '../components/sections/EdcShowcase'
import { StatsBand } from '../components/sections/StatsBand'
import { RoleGrid } from '../components/sections/RoleGrid'
import { WhySclinNexus } from '../components/sections/WhySclinNexus'
import { TrialJourney } from '../components/sections/TrialJourney'
import { StudyIntelligence } from '../components/sections/StudyIntelligence'
import { ComplianceSpotlight } from '../components/sections/ComplianceSpotlight'
import { FeaturedTestimonial } from '../components/sections/FeaturedTestimonial'
import { CtaBand } from '../components/sections/CtaBand'

export function HomePage() {
  useEffect(() => {
    document.title = 'SclinNexus — Clinical Trial Software'
  }, [])

  return (
    <>
      {/* Brand → message → action → product */}
      <HomeHero content={home.hero} />
      <TrustStrip content={home.compliance} />

      {/* One connected platform, EDC first */}
      <ConnectedPlatform content={home.platform} solutions={site.solutions} />
      <EdcShowcase content={home.edcShowcase} />

      {/* Proof and people */}
      <StatsBand content={home.stats} background="border-y border-primary-100 bg-primary-50/60" />
      <RoleGrid content={home.roles} />

      {/* Why teams choose the platform */}
      <WhySclinNexus content={home.why} />

      {/* The clinical workflow, end to end */}
      <TrialJourney content={home.journey} />
      <StudyIntelligence content={home.intelligence} />
      <ComplianceSpotlight content={home.complianceSpotlight} />

      {/* Trust → conversion */}
      <FeaturedTestimonial content={home.testimonials} />
      <CtaBand content={home.cta} />
    </>
  )
}
