export type ReleaseStatus = 'complete' | 'in_progress' | 'pending'

export type AuditCheckpoint = {
  label: string
  owner: string
  status: ReleaseStatus
  date?: string
  notes?: string
}

export type Release = {
  slug: string
  monthLabel: string
  title: string
  publishedAt: string
  summary: string
  highlights: string[]
  changesSincePrevious: string[]
  rollbackPlan: string
  auditCheckpoints: AuditCheckpoint[]
  owner: string
}

export const releases: Release[] = [
  {
    slug: '2025-12',
    monthLabel: 'December 2025',
    title: 'The Row Monthly Update',
    publishedAt: '2025-12-18',
    summary:
      'Monthly stakeholder briefing covering Amazon transaction progress, retail pipeline momentum, and economic tailwinds for the site.',
    highlights: [
      'Amazon PSA executed with $500k earnest money deposited; preliminary site plan submitted and under review.',
      'Block 2 shovel-ready with new anchor candidate (Shiner Smokehouse) and active negotiations for inline space.',
      'Retail core design and permitting pacing to April 2026 approvals; multifamily occupancy and leasing metrics refreshed.',
      'Regional momentum spotlight on Tesla, Samsung, NVIDIA, Apple, and airport expansion to anchor long-term demand.',
    ],
    changesSincePrevious: [
      'Added December-specific retail leasing updates (anchor replacement, inline space negotiations, and new leasing agent target).',
      'Documented Amazon diligence milestones with non-refundable and closing target dates.',
      'Refreshed market momentum section with Tesla robotaxi launch and AI chip partnership details.',
      'Clarified multifamily occupancy, rent, and concession figures for the Del Via asset.',
    ],
    rollbackPlan:
      'Revert to the November 2025 release (2025-11) content pack and imagery; retain prior commit hash and assets to restore the last stable state.',
    auditCheckpoints: [
      {
        label: 'Content freeze',
        owner: 'Investments',
        status: 'complete',
        date: '2025-12-14',
        notes: 'Narrative locked after incorporating latest PSA milestones and Del Via metrics.',
      },
      {
        label: 'Data QA',
        owner: 'Research',
        status: 'complete',
        date: '2025-12-15',
        notes: 'Cross-checked Amazon PSA dates and Del Via rent/occupancy figures.',
      },
      {
        label: 'Design QA',
        owner: 'Design',
        status: 'complete',
        date: '2025-12-16',
        notes: 'Image aspect ratios and typography verified for desktop and mobile breakpoints.',
      },
      {
        label: 'Stakeholder sign-off',
        owner: 'Leadership',
        status: 'in_progress',
        notes: 'Final confirmation pending distribution email.',
      },
    ],
    owner: 'Presidium',
  },
  {
    slug: '2025-11',
    monthLabel: 'November 2025',
    title: 'The Row Monthly Update',
    publishedAt: '2025-11-20',
    summary:
      'Baseline version capturing pre-PSA Amazon status, early retail outreach, and initial regional employer expansion notes.',
    highlights: [
      'Amazon LOI stage with diligence checklist drafted.',
      'Retail core design packages submitted for preliminary review.',
      'Initial multifamily lease-up snapshot and airport expansion overview.',
    ],
    changesSincePrevious: [
      'Preliminary milestones and outreach summaries set the baseline for December change tracking.',
      'Retail narrative focused on early activator tenant conversations.',
      'Economic momentum section outlined initial Tesla and Samsung expansion notes.',
    ],
    rollbackPlan:
      'Use November assets and copy as the last frozen state before the Amazon PSA execution; align with commit tagged 2025-11.',
    auditCheckpoints: [
      {
        label: 'Content freeze',
        owner: 'Investments',
        status: 'complete',
        date: '2025-11-14',
      },
      {
        label: 'Data QA',
        owner: 'Research',
        status: 'complete',
        date: '2025-11-15',
      },
      {
        label: 'Design QA',
        owner: 'Design',
        status: 'complete',
        date: '2025-11-16',
      },
      {
        label: 'Stakeholder sign-off',
        owner: 'Leadership',
        status: 'complete',
        date: '2025-11-18',
      },
    ],
    owner: 'Presidium',
  },
]

export const currentRelease = releases[0]
export const previousRelease = releases[1]
