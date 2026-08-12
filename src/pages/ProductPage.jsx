import { lazy, Suspense, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../content/products'
import { Breadcrumb } from '../components/layout/Breadcrumb'
import { ProductHero } from '../components/sections/ProductHero'
import { ComplianceStrip } from '../components/sections/ComplianceStrip'
import { NotFoundPage } from './NotFoundPage'

const StatsBand = lazy(() =>
  import('../components/sections/StatsBand').then((m) => ({ default: m.StatsBand })),
)
const CapabilityTabs = lazy(() =>
  import('../components/sections/CapabilityTabs').then((m) => ({ default: m.CapabilityTabs })),
)
const ProcessSteps = lazy(() =>
  import('../components/sections/ProcessSteps').then((m) => ({ default: m.ProcessSteps })),
)
const RoleCards = lazy(() =>
  import('../components/sections/RoleCards').then((m) => ({ default: m.RoleCards })),
)
const AddOnGrid = lazy(() =>
  import('../components/sections/AddOnGrid').then((m) => ({ default: m.AddOnGrid })),
)
const IntegrationBand = lazy(() =>
  import('../components/sections/IntegrationBand').then((m) => ({ default: m.IntegrationBand })),
)
const ResourceTabs = lazy(() =>
  import('../components/sections/ResourceTabs').then((m) => ({ default: m.ResourceTabs })),
)
const Testimonials = lazy(() =>
  import('../components/sections/Testimonials').then((m) => ({ default: m.Testimonials })),
)
const WhyChooseUs = lazy(() =>
  import('../components/sections/WhyChooseUs').then((m) => ({ default: m.WhyChooseUs })),
)
const CtaBand = lazy(() =>
  import('../components/sections/CtaBand').then((m) => ({ default: m.CtaBand })),
)

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
          { label: content.meta.breadcrumbSection },
          { label: content.meta.breadcrumbLabel },
        ]}
      />
      {content.hero && <ProductHero content={content.hero} />}
      {content.compliance && <ComplianceStrip content={content.compliance} />}
      <Suspense fallback={null}>
        {content.stats && <StatsBand content={content.stats} />}
        {content.capabilities && <CapabilityTabs content={content.capabilities} />}
        {content.process && <ProcessSteps content={content.process} />}
        {content.roles && <RoleCards content={content.roles} />}
        {content.addOns && <AddOnGrid content={content.addOns} />}
        {content.integration && <IntegrationBand content={content.integration} />}
        {content.resources && <ResourceTabs content={content.resources} />}
        {content.testimonials && <Testimonials content={content.testimonials} />}
        {content.whyUs && <WhyChooseUs content={content.whyUs} />}
        {content.cta && <CtaBand content={content.cta} />}
      </Suspense>
    </>
  )
}
