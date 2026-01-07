import type { Metadata } from 'next'

import MonthlyUpdateShell from '@/components/pages/MonthlyUpdateShell'
import Jan2026Body from '@/components/updates/2026-01/Jan2026Body'
import SectionNav, { type MonthlyUpdateLink, type NavSection } from '@/components/navigation/SectionNav'
import { MONTHLY_UPDATES } from '@/constants/monthlyUpdates'

export const metadata: Metadata = {
  title: 'The Row Monthly Update - Jan 2026',
  description: 'January 2026 Market Intelligence Report',
}

export default function Jan2026UpdatePage() {
  const sections: NavSection[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'potential-land-sales', label: 'Potential Land Sales' },
    { id: 'block-2-retail', label: 'Block 2 Retail' },
    { id: 'retail-core-master-plan', label: 'Retail Core & Master Plan' },
    { id: 'del-via-multifamily', label: 'Del Via Multifamily' },
    { id: 'austin-market', label: 'Austin Market' },
  ]

  const monthlyUpdates: MonthlyUpdateLink[] = [
    {
      label: 'Home (Latest)',
      href: '/',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    ...MONTHLY_UPDATES.map((u) => ({ label: u.label, href: u.href })),
  ]

  return (
    <MonthlyUpdateShell
      theme="agora"
      headerTitle="The Row Monthly Update - Jan 2026"
      sideNav={
        <SectionNav
          sections={sections}
          monthlyUpdates={monthlyUpdates}
          monthlyUpdatesLabel="Monthly Updates"
        />
      }
    >
      <Jan2026Body />
    </MonthlyUpdateShell>
  )
}


