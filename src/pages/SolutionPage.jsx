import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { solutions } from '../content/solutions'
import { Breadcrumb } from '../components/layout/Breadcrumb'
import {
  SolutionCapabilities,
  SolutionCTA,
  SolutionHero,
  SolutionPlatformConnection,
  SolutionWorkflow,
} from '../components/sections/solutions/SolutionSections'
import { NotFoundPage } from './NotFoundPage'

export function SolutionPage() {
  const { slug } = useParams()
  const content = solutions[slug]

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
          { label: 'Solutions' },
          { label: content.breadcrumb },
        ]}
      />
      <SolutionHero content={content.hero} />
      <SolutionCapabilities content={content.capabilities} />
      <SolutionWorkflow content={content.workflow} />
      <SolutionPlatformConnection currentSlug={content.slug} />
      <SolutionCTA content={content.cta} />
    </>
  )
}
