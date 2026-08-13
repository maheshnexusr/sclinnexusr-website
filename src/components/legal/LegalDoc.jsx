import { useEffect } from 'react'
import { Breadcrumb } from '../layout/Breadcrumb'

/* Minimal markdown renderer for our legal documents: supports #/## headings,
   paragraphs, "- " lists, **bold** and [text](url) links. */
function renderInline(text) {
  const tokens = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return tokens.map((token, i) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-[#1A2831]">
          {token.slice(2, -2)}
        </strong>
      )
    }
    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      return (
        <a
          key={i}
          href={link[2]}
          className="font-medium text-primary-700 underline decoration-primary-600/40 underline-offset-2 hover:text-primary-800"
        >
          {link[1]}
        </a>
      )
    }
    return token
  })
}

function renderMarkdown(md) {
  const blocks = md.replace(/\r\n/g, '\n').trim().split(/\n{2,}/)
  return blocks.map((block, i) => {
    if (block.startsWith('# ')) {
      return (
        <h1 key={i} className="text-3xl font-bold tracking-tight text-[#1A2831] sm:text-4xl">
          {renderInline(block.slice(2))}
        </h1>
      )
    }
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="mt-10 text-xl font-bold tracking-tight text-[#1A2831] sm:text-2xl">
          {renderInline(block.slice(3))}
        </h2>
      )
    }
    const lines = block.split('\n')
    if (lines.every((line) => line.startsWith('- '))) {
      return (
        <ul key={i} className="mt-4 space-y-2">
          {lines.map((line, j) => (
            <li key={j} className="flex gap-3 text-sm leading-relaxed text-stone-600 sm:text-base">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600"
              />
              <span>{renderInline(line.slice(2))}</span>
            </li>
          ))}
        </ul>
      )
    }
    return (
      <p key={i} className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">
        {renderInline(lines.join(' '))}
      </p>
    )
  })
}

export function LegalDoc({ md, pageTitle, breadcrumbLabel }) {
  useEffect(() => {
    document.title = pageTitle
    window.scrollTo(0, 0)
  }, [pageTitle])

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: 'Legal' },
          { label: breadcrumbLabel },
        ]}
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 via-white to-white">
        <div className="mx-auto max-w-3xl px-6 py-14 lg:px-8 lg:py-16">{renderMarkdown(md)}</div>
      </section>
    </>
  )
}
