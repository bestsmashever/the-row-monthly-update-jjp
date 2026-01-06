export type ImageSectionVariant = 'chart' | 'section' | 'plain'

export type ImageSectionItem = {
  src: string
  alt: string
  height?: number
  caption?: string
}

export type ImageSectionConfig = {
  id: string
  title: string
  items: ImageSectionItem[]
  variant?: ImageSectionVariant
  showOnHome?: boolean
}

export const sections: ImageSectionConfig[] = [
  {
    id: 'masterPlan',
    title: 'Master Plan',
    variant: 'plain',
    showOnHome: true,
    items: [
      {
        src: '/The Row Master Plan.jpg',
        alt: 'The Row Master Plan',
      },
    ],
  },
  {
    id: 'retailDestination',
    title: 'Retail Destination',
    variant: 'plain',
    showOnHome: true,
    items: [
      {
        src: '/Submarket.jpg',
        alt: 'Submarket',
      },
    ],
  },
  {
    id: 'retailCoreHeading',
    title: 'Retail Core',
    variant: 'section',
    showOnHome: true,
    items: [],
  },
  {
    id: 'retailCorePhasing',
    title: 'Retail Core Phasing',
    variant: 'chart',
    showOnHome: true,
    items: [
      {
        src: '/Retail Core Phasing.jpg',
        alt: 'Retail Core Phasing',
      },
    ],
  },
  {
    id: 'retailCoreRendering',
    title: 'Retail Core Rendering',
    variant: 'chart',
    showOnHome: true,
    items: [
      {
        src: '/Retail Core Rendering.jpg',
        alt: 'Retail Core Rendering',
      },
      {
        src: '/P7 MF.jpg',
        alt: 'P7 MF',
      },
      {
        src: '/P7 Hotel.jpg',
        alt: 'P7 Hotel',
      },
    ],
  },
  {
    id: 'block2Retail',
    title: 'Block 2 Retail',
    variant: 'section',
    items: [
      {
        src: '/Block 2 Retail.jpg',
        alt: 'Block 2 Retail',
      },
    ],
  },
]

export type SectionId = (typeof sections)[number]['id']

export const homeSections = sections.filter((section) => section.showOnHome)

export const getSectionById = (id: SectionId) =>
  sections.find((section) => section.id === id)
