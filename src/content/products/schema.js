/**
 * Product page content schema.
 *
 * A product page renders entirely from one of these objects. Every section is
 * optional — a section a content object omits simply does not render. Section
 * components receive their slice of this object via props and hardcode nothing
 * product-specific.
 *
 * Icon fields hold string keys resolved through `src/utils/icons.js`, so
 * content objects stay serialisable.
 *
 * @typedef {Object} ProductContent
 * @property {string} slug                       Route segment: /solutions/<slug>
 * @property {Object} meta
 * @property {string} meta.title                 Document title
 * @property {string} meta.breadcrumbSection     Middle breadcrumb crumb (e.g. "Solutions")
 * @property {string} meta.breadcrumbLabel       Final crumb, the page itself
 *
 * @property {Object} [hero]
 * @property {{icon: string, label: string}} hero.eyebrow
 * @property {string} hero.title
 * @property {string} hero.description
 * @property {{label: string, targetId: string}} hero.primaryCta   Smooth-scrolls to a section id
 * @property {{label: string, href: string}} hero.secondaryCta
 * @property {{label: string, videoTitle: string}} hero.media      Screenshot placeholder + video modal title
 *
 * @property {Object} [compliance]
 * @property {string} compliance.label
 * @property {string[]} compliance.items         Compliance framework names, rendered as logo placeholders
 *
 * @property {Object} [stats]
 * @property {Array<{value: number, suffix: string, label: string}>} stats.items
 * @property {string} stats.context              One paragraph putting the numbers in context
 *
 * @property {Object} [capabilities]
 * @property {string} capabilities.eyebrow
 * @property {string} capabilities.title
 * @property {string} capabilities.sub
 * @property {Array<{id: string, label: string, title: string, intro: string,
 *   bullets: string[], screenshot: string}>} capabilities.tabs
 * @property {{label: string, href: string}} capabilities.cta
 *
 * @property {Object} [process]
 * @property {string} process.title
 * @property {string} process.sub
 * @property {Array<{title: string, description: string}>} process.steps
 *
 * @property {Object} [roles]
 * @property {string} roles.title
 * @property {string} roles.sub
 * @property {Array<{icon: string, title: string, body: string}>} roles.items
 *
 * @property {Object} [addOns]
 * @property {string} addOns.title
 * @property {string} addOns.sub
 * @property {Array<{image: string, title: string, description: string, href: string}>} addOns.items
 *
 * @property {Object} [integration]
 * @property {string} integration.title
 * @property {string} integration.body
 * @property {{label: string, href: string}} integration.primaryCta
 * @property {{label: string, href: string}} integration.secondaryCta
 *
 * @property {Object} [resources]
 * @property {string} resources.title
 * @property {string} resources.sub
 * @property {Array<{thumbnail: string, title: string, href: string}>} resources.caseStudies
 * @property {Array<{thumbnail: string, title: string, href: string}>} resources.factsheets
 * @property {Array<{thumbnail: string, title: string, readMinutes: number,
 *   excerpt: string, href: string}>} resources.articles
 *
 * @property {Object} [testimonials]
 * @property {string} testimonials.title
 * @property {Array<{quote: string, role: string, org: string}>} testimonials.items
 *
 * @property {Object} [whyUs]
 * @property {string} whyUs.title
 * @property {Array<{icon: string, title: string, body: string}>} whyUs.items
 *
 * @property {Object} [cta]
 * @property {string} cta.title
 * @property {string} cta.tagline
 * @property {{label: string, href: string}} cta.button
 */

export {}
