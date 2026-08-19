import { useEffect } from 'react'
import { home } from '../content/home'
import { site } from '../content/site'
import { HomeHero } from '../components/sections/HomeHero'
import { WhyChoose } from '../components/sections/WhyChoose'
import { TrustStrip } from '../components/sections/TrustStrip'
import { ConnectedPlatform } from '../components/sections/ConnectedPlatform'
import { EdcShowcase } from '../components/sections/EdcShowcase'
import { StatsBand } from '../components/sections/StatsBand'
import { RoleGrid } from '../components/sections/RoleGrid'
import { WhyProEDC } from '../components/sections/WhyProEDC'
import { TrialJourney } from '../components/sections/TrialJourney'
import { StudyIntelligence } from '../components/sections/StudyIntelligence'
import { ComplianceSpotlight } from '../components/sections/ComplianceSpotlight'
import { FeaturedTestimonial } from '../components/sections/FeaturedTestimonial'
import { SupportStrip } from '../components/sections/SupportStrip'

export function HomePage() {
  useEffect(() => {
    document.title = 'ProEDC — One Platform. Every Clinical Trial.'
  }, [])

  return (
    <>
      {/* Brand → message → action → product */}
      <HomeHero content={home.hero} />
      <WhyChoose content={home.whyChoose} />
      <TrustStrip content={home.compliance} />

      {/* One connected platform, EDC first */}
      <ConnectedPlatform content={home.platform} solutions={site.solutions} />
      <EdcShowcase content={home.edcShowcase} />

      {/* Proof and people */}
      {/* <StatsBand content={home.stats} background="border-y border-primary-100 bg-primary-50/60" /> */}
      <RoleGrid content={home.roles} />

      {/* Why teams choose the platform */}
      {/* <WhyProEDC content={home.why} /> */}

      {/* The clinical workflow, end to end */}
      <TrialJourney content={home.journey} />
      <StudyIntelligence content={home.intelligence} />
      <ComplianceSpotlight content={home.complianceSpotlight} />

      {/* Trust → quiet support strip before the footer */}
      {/* <FeaturedTestimonial content={home.testimonials} /> */}
      <SupportStrip content={home.support} />
    </>
  )
}
