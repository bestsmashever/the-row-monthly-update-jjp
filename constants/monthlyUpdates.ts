export type MonthlyUpdate = {
  /** YYYY-MM */
  id: string
  label: string
  href: string
}

// Keep this list in reverse-chronological order (latest first).
export const MONTHLY_UPDATES: MonthlyUpdate[] = [
  { id: '2026-07', label: 'Jul 2026', href: '/updates/2026-07' },
  { id: '2026-06', label: 'Jun 2026', href: '/updates/2026-06' },
  { id: '2026-05', label: 'May 2026', href: '/updates/2026-05' },
  { id: '2026-04', label: 'Apr 2026', href: '/updates/2026-04' },
  { id: '2026-03', label: 'Mar 2026', href: '/updates/2026-03' },
  { id: '2026-02', label: 'Feb 2026', href: '/updates/2026-02' },
  { id: '2026-01', label: 'Jan 2026', href: '/updates/2026-01' },
  { id: '2025-12', label: 'Dec 2025', href: '/updates/2025-12' },
]

export const LATEST_UPDATE = MONTHLY_UPDATES[0]
