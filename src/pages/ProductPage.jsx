import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../content/products'
import { Breadcrumb } from '../components/layout/Breadcrumb'
import {
  CapabilityGrid,
  ComplianceCompact,
  ConnectedPlatform,
  FaqAccordion,
  FeatureSplits,
  FinalCta,
  ProductHero,
  WhySection,
  WorkflowTimeline,
} from '../components/sections/product/ProductSections'
import { NotFoundPage } from './NotFoundPage'

export function ProductPage() {
  const { slug } = useParams()
  const content = products[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
    if (content) document.title = content.meta.title
  }, [slug, content])

  if (!content) return <NotFoundPage />

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: 'Platform' },
          { label: content.breadcrumb },
        ]}
      />
      <ProductHero content={content.hero} slug={content.slug} />
      <WhySection content={content.why} />
      <CapabilityGrid content={content.capabilities} />
      <FeatureSplits features={content.features} />
      <WorkflowTimeline content={content.workflow} />
      <ConnectedPlatform currentSlug={content.slug} />
      <ComplianceCompact />
      <FaqAccordion items={content.faq} productName={`SclinNexus ${content.breadcrumb}`} />
      <FinalCta />
    </>
  )
}
