'use client'

import { useEffect, useMemo, useState } from 'react'

export type NavSection = {
  id: string
  label: string
}

export type MonthlyUpdateLink = {
  label: string
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
}

type SectionNavProps = {
  sections: NavSection[]
  monthlyUpdates?: MonthlyUpdateLink[]
  monthlyUpdatesLabel?: string
}

export default function SectionNav({
  sections,
  monthlyUpdates,
  monthlyUpdatesLabel = 'Monthly Updates',
}: SectionNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '')

  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the top-most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0))[0]
        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      {
        root: null,
        // Bias toward picking the section as it reaches the top-ish area
        rootMargin: '-20% 0px -70% 0px',
        threshold: [0, 0.1, 0.25],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <nav className="section-nav">
      <div className="text-xs tracking-wide text-gray-500 mb-3 uppercase">Navigation</div>
      {monthlyUpdates?.length ? (
        <details className="mb-3 rounded-md border border-gray-200 bg-white">
          <summary className="cursor-pointer list-none px-3 py-2 text-sm font-semibold text-gray-900 flex items-center justify-between">
            <span>{monthlyUpdatesLabel}</span>
            <span className="text-gray-500">▾</span>
          </summary>
          <div className="border-t border-gray-200 py-2">
            {monthlyUpdates.map(({ href, label, rel, target }) => (
              <a
                key={href}
                href={href}
                target={target}
                rel={rel}
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                {label}
              </a>
            ))}
          </div>
        </details>
      ) : null}
      <ul className="space-y-1">
        {sections.map(({ id, label }) => {
          const active = activeId === id
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={[
                  'block rounded-md px-3 py-2 text-sm transition-colors',
                  active
                    ? 'bg-gray-100 text-gray-900 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900',
                ].join(' ')}
              >
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}


