export type MonthlyUpdate = {
  /** YYYY-MM */
  id: string
  label: string
  href: string
}

// Keep this list in reverse-chronological order (latest first).
export const MONTHLY_UPDATES: MonthlyUpdate[] = [
  { id: '2026-01', label: 'Jan 2026', href: '/updates/2026-01' },
  { id: '2025-12', label: 'Dec 2025', href: '/updates/2025-12' },
]

export const LATEST_UPDATE = MONTHLY_UPDATES[0]


