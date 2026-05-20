'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()

  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    let frame = 0

    const updateActiveSection = () => {
      frame = 0
      const activationOffset = 150
      const current = elements.reduce((active, element) => {
        return element.getBoundingClientRect().top <= activationOffset ? element.id : active
      }, elements[0].id)

      setActiveId(current)
    }

    const scheduleUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [sectionIds])

  return (
    <nav className="section-nav" aria-label="Report navigation">
      <a className="section-nav-brand" href="#top" aria-label="Back to report top">
        <span className="section-nav-brand-mark">The Row</span>
        <span className="section-nav-brand-meta">Austin, Texas</span>
      </a>

      <div className="section-nav-group">
        <div className="section-nav-label">Report Sections</div>
        <ul className="section-nav-list">
          {sections.map(({ id, label }, index) => {
            const active = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active ? 'section-nav-link is-active' : 'section-nav-link'}
                >
                  <span className="section-nav-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      {monthlyUpdates?.length ? (
        <details className="section-nav-updates">
          <summary>
            <span>{monthlyUpdatesLabel}</span>
            <span className="section-nav-chevron" aria-hidden="true" />
          </summary>
          <div className="section-nav-update-list">
            {monthlyUpdates.map(({ href, label, rel, target }) => {
              const isCurrent = pathname === href

              return (
                <a
                  key={href}
                  href={href}
                  target={target}
                  rel={rel}
                  className={isCurrent ? 'section-nav-update is-current' : 'section-nav-update'}
                >
                  {label}
                </a>
              )
            })}
          </div>
        </details>
      ) : null}
    </nav>
  )
}
