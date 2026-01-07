import type { Metadata } from 'next'

import MonthlyUpdateShell from '@/components/pages/MonthlyUpdateShell'
import Dec2025Body from '@/components/updates/2025-12/Dec2025Body'

export const metadata: Metadata = {
  title: 'The Row Monthly Update - Dec 2025',
  description:
    'December 2025 Market Intelligence Report - Strategic positioning at market inflection point',
}

export default function Dec2025UpdatePage() {
  return (
    <MonthlyUpdateShell headerTitle="The Row Monthly Update - Dec 2025">
      <Dec2025Body />
    </MonthlyUpdateShell>
  )
}


