import Image, { type StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

import { FULL_WIDTH_SIZES } from '@/constants/media'
import ChartContainer from '@/components/layout/ChartContainer'
import CompanyCard from '@/components/CompanyCard'
import abiaImage from '@/public/ABIA.png'
import appleCampusImage from '@/public/Apple Campus Austin.jpg'
import austinSurfClubImage from '@/public/Austin Surf Club.jpg'
import compalImage from '@/public/Compal.webp'
import delViaMultifamilyImage from '@/public/Del Via Multifamily.jpg'
import nvidiaImage from '@/public/NVIDIA AI Supercomputer.jpg'
import pegatronImage from '@/public/Pegatron.jpg'
import samsungPlantTaylorImage from '@/public/Samsung Plant Taylor.png'
import spaceXTerafabImage from '@/public/SpaceX Terafab Official Rendering.jpg'
import tdemInteriorImage from '@/public/TDEM Interior.jpg'
import tdemRenderingImage from '@/public/TDEM rendering.jpeg'
import teslaAiChipImage from '@/public/Tesla AI5 Chip.jpg'
import teslaDinerImage from '@/public/Tesla Diner.png'
import teslaGigaFactoryImage from '@/public/Tesla Giga Factory.png'
import teslaOptimusImage from '@/public/Tesla Optimus.jpg'
import teslaRobotaxiImage from '@/public/Tesla Robotaxi.jpg'

type CompanySectionCard = {
  title: string
  emoji?: string
  paragraphs: string[]
  images: { src: StaticImageData; alt: string }[]
  reverseOnDesktop?: boolean
  useDualImages?: boolean
}

type CompanySection = {
  heading: string
  cards: CompanySectionCard[]
  containerClass?: string
}

type MarketFundamentalsProps = {
  anchors?: {
    delViaId?: string
    austinMarketId?: string
  }
  austinMarketTitle?: string
  beforeAustinMarketContent?: ReactNode
  variant?: 'default' | 'agora'
  includeDelVia?: boolean
  includeAustinSurfClub?: boolean
  includeSpaceXTerafab?: boolean
  marketContentVariant?: 'default' | 'june2026'
}

export default function MarketFundamentals({
  anchors,
  austinMarketTitle = 'Employer Expansion & Economic Momentum',
  beforeAustinMarketContent,
  variant = 'default',
  includeDelVia = true,
  includeAustinSurfClub = false,
  includeSpaceXTerafab = false,
  marketContentVariant = 'default',
}: MarketFundamentalsProps) {
  const defaultCompanySections: CompanySection[] = [
    {
      heading: "Tesla: Anchoring Austin's Next Innovation Wave",
      cards: [
        {
          title: '20,000+ Employees. 10M SF Built. Another 5M SF on the Way.',
          emoji: '⚡',
          paragraphs: [
            "Tesla's footprint in Austin is massive and still accelerating. Giga Texas already spans roughly 10 million square feet, making it one of the largest manufacturing facilities in the world — and Tesla is now adding another 5 million square feet of new production and support space. This continued expansion reinforces Austin as a core hub for Tesla's long-term growth, innovation, and workforce scale.",
          ],
          images: [{ src: teslaGigaFactoryImage, alt: 'Tesla Giga Factory' }],
        },
        {
          title: 'Optimus Robot Factory Underway',
          emoji: '🤖',
          paragraphs: [
            'Tesla is preparing a dedicated manufacturing facility at Giga Texas for its humanoid robot Optimus, a multi-billion-dollar bet that positions Austin at the center of robotics and AI-driven automation.',
          ],
          images: [{ src: teslaOptimusImage, alt: 'Tesla Optimus Robot' }],
        },
        {
          title: 'Robotaxi Launch: Austin Leads the Future of Mobility',
          emoji: '🚕',
          paragraphs: [
            'In June 2025, Tesla launched its first robotaxi fleet in Austin — with plans to scale to 500+ autonomous vehicles by year-end and remove safety drivers in select zones.',
          ],
          images: [{ src: teslaRobotaxiImage, alt: 'Tesla Robotaxi' }],
        },
        {
          title: 'AI Chip Partnership with Samsung',
          emoji: '🧠',
          paragraphs: [
            "In a groundbreaking $16.5B deal, Tesla selected Samsung's new Taylor, TX fab to produce its next-generation AI6 chips — cementing Austin's position as a national hub for AI semiconductor manufacturing and reshoring.",
          ],
          images: [{ src: teslaAiChipImage, alt: 'Tesla AI Chip' }],
        },
        {
          title: "Tesla Diner: Expanding Austin's Lifestyle Footprint",
          emoji: '🍽️',
          paragraphs: [
            "Tesla is reportedly exploring a new \"Tesla Diner\" location near its Austin campus — a retro-futuristic restaurant concept with Supercharger stalls, drive-in movie screens, and ordering via Tesla vehicle interfaces. While it remains an announced intention rather than a confirmed build-out, the diner concept reinforces Tesla's strategy of making its Austin footprint more than just manufacturing — it is becoming a consumer-facing and lifestyle anchor as well.",
          ],
          images: [{ src: teslaDinerImage, alt: 'Tesla Diner' }],
        },
      ],
    },
    {
      heading: 'TDEM',
      cards: [
        {
          title: 'TDEM Headquarters Opening August 2026',
          emoji: '🏢',
          paragraphs: [
            "TDEM's $423M headquarters is opening in August 2026, expanding its presence in the Austin area and contributing to the region's growing economic momentum.",
          ],
          images: [
            { src: tdemInteriorImage, alt: 'TDEM Interior' },
            { src: tdemRenderingImage, alt: 'TDEM Rendering' },
          ],
          useDualImages: true,
        },
      ],
    },
    {
      heading: 'ABIA',
      cards: [
        {
          title: 'ABIA Journey With AUS Expansion',
          emoji: '🛫',
          paragraphs: [
            'Austin-Bergstrom International Airport is underway on a multi-year, $4–6 billion expansion known as "Journey With AUS," which includes new terminal infill projects, upgraded baggage systems, and major airfield work to support a new 20+ gate midfield Concourse B.',
            'Early-phase construction—such as the West Infill terminal expansion, new outbound baggage system, and new parking facilities—is progressing through 2026, while the signature capacity upgrades, including the new Arrivals and Departures Hall and Concourse B, are in design and expected to open in the early 2030s.',
          ],
          images: [{ src: abiaImage, alt: 'ABIA' }],
        },
      ],
    },
    ...(includeAustinSurfClub
      ? [
          {
            heading: 'Austin Surf Club',
            cards: [
              {
                title: 'Austin Surf Club',
                paragraphs: [
                  'Austin Surf Club is a surf-centric luxury residential community being developed in Del Valle by Discovery Land Company, in partnership with professional surfer Kelly Slater. The project spans more than 330 acres and includes 140 condominiums, along with a private clubhouse, brewery, and restaurant, anchored by a 2,220-square-foot surf basin powered by Kelly Slater Wave Company technology.',
                  'By late 2025, dozens of homes and memberships had reportedly been presold, with residential pricing generally ranging from the low-$2MMs to $4MM+, depending on unit type and proximity to the surf basin. Memberships are structured separately, with initiation fees reported in the low six figures, plus annual dues.',
                  'High-profile early buyers and members are widely reported to include Matthew McConaughey, Tony Hawk, and Drew Brees. The site is located approximately 3–5 miles (7–10 minutes by car) from The Row.',
                ],
                images: [{ src: austinSurfClubImage, alt: 'Austin Surf Club' }],
              },
            ],
          },
        ]
      : []),
    {
      heading: 'NVIDIA',
      containerClass: 'mt-8 sm:mt-12 md:mt-16',
      cards: [
        {
          title: 'Doubling Austin Presence & U.S. Manufacturing',
          emoji: '💻',
          paragraphs: [
            'NVIDIA is doubling its Austin presence with a ~100,000 sq ft lease at One Uptown, expanding its engineering and R&D footprint near The Domain.',
            'The company announced over 1 million sq ft of U.S. manufacturing capacity (including Texas sites) to produce AI supercomputers and Blackwell chips — positioning Austin as a crucial node for domestic AI hardware production.',
            "Texas leadership has publicly welcomed NVIDIA's strategic investment, reinforcing the state's rise as an AI and next-gen computing hub.",
          ],
          images: [{ src: nvidiaImage, alt: 'NVIDIA AI Supercomputer' }],
        },
      ],
    },
    {
      heading: 'Apple Inc.',
      cards: [
        {
          title: 'Austin as a Core Hub for Apple',
          emoji: '🍎',
          paragraphs: [
            'Apple announced a $600 billion U.S. investment plan, with a significant portion directed to Texas — including ongoing expansion in Austin.',
            "Apple's second Austin campus is under construction, supporting more than 13,000 team members across hardware, software, and silicon engineering teams.",
            'Recent rezoning activity at the original Riata Campus signals potential mixed-use redevelopment, creating additional opportunities for tech-driven community building.',
          ],
          images: [{ src: appleCampusImage, alt: 'Apple Campus Austin' }],
        },
      ],
    },
    {
      heading: 'Samsung Electronics',
      cards: [
        {
          title: 'Taylor Advanced Chip Campus',
          emoji: '🧪',
          paragraphs: [
            "Samsung's Taylor facility—a $40B+ (potentially up to $44B with expansions) advanced chip manufacturing campus—is in the final stages of construction, with operations ramping up in late 2026.",
            'The Texas Semiconductor Innovation Fund awarded Samsung a $250 million grant in 2025 to accelerate build-out.',
            'The first phase includes a new office building and migration of up to 1,000 employees by late 2025, with thousands more expected as production scales.',
          ],
          images: [{ src: samsungPlantTaylorImage, alt: 'Samsung Plant Taylor' }],
        },
      ],
    },
    {
      heading: 'Compal USA Technology Inc.',
      cards: [
        {
          title: 'Reshoring Device Assembly',
          emoji: '🛠️',
          paragraphs: [
            'Compal announced a $94 million U.S. expansion, leasing 600,000 sq ft across Taylor and Georgetown to localize device assembly and supply-chain operations near major customers like Dell, Tesla, and Apple.',
            'The project is expected to create up to 1,000 high-tech jobs, supporting the reshoring of server and AI hardware manufacturing.',
            "This move highlights Austin's appeal as a strategic site for Asian electronic manufacturers adapting to U.S. supply-chain policy shifts.",
          ],
          images: [{ src: compalImage, alt: 'Compal USA Technology' }],
        },
      ],
    },
    {
      heading: 'Pegatron Corporation',
      cards: [
        {
          title: 'First U.S. Manufacturing Facility',
          emoji: '🏭',
          paragraphs: [
            'Pegatron is establishing its first U.S. manufacturing facility in Georgetown, acquiring a 168,000 sq ft building at Blue Springs Business Park.',
            'The company is investing at least $35 million and plans to hire 100+ employees in the first three years, with further growth expected as it ramps AI and electronics production.',
            "Pegatron's U.S. footprint will support major clients like Apple, Dell, and Tesla — illustrating the deepening tech manufacturing ecosystem in the Austin MSA.",
          ],
          images: [{ src: pegatronImage, alt: 'Pegatron Corporation' }],
        },
      ],
    },
  ]

  const june2026CompanySections: CompanySection[] = [
    {
      heading: 'Aviation & Civic Infrastructure',
      cards: [
        {
          title: 'Southwest Expands Its AUS Operating Base',
          emoji: '🛫',
          paragraphs: [
            'Southwest is establishing a full crew base at AUS, relocating its station Command Center, investing more than $8.4 million in airport improvements, and committing to 2,000 new full-time jobs while retaining 840 existing positions.',
            'AUS airline agreements now support the multi-billion-dollar Journey With AUS program, including a new 26-gate Concourse B planned for Southwest, United, and domestic common-use gates.',
          ],
          images: [{ src: abiaImage, alt: 'ABIA' }],
        },
        {
          title: 'TDEM State Emergency Operations Center Near AUS',
          emoji: '🏢',
          paragraphs: [
            'The Texas A&M University System approved a $370 million TDEM headquarters and State Emergency Operations Center just east of Austin-Bergstrom International Airport.',
            'The project includes a 295,978-square-foot facility with a 90,068-square-foot State Emergency Operations Center, with substantial completion expected in August 2026.',
          ],
          images: [
            { src: tdemInteriorImage, alt: 'TDEM Interior' },
            { src: tdemRenderingImage, alt: 'TDEM Rendering' },
          ],
          useDualImages: true,
        },
      ],
    },
    {
      heading: 'Semiconductor and Advanced Manufacturing',
      cards: [
        {
          title: 'Tesla Remains The Major East Austin Manufacturing Anchor',
          emoji: '⚡',
          paragraphs: [
            'Tesla identifies Giga Texas as its global headquarters and U.S. manufacturing hub for Model Y and Cybertruck, covering 2,500 acres with more than 10 million square feet of factory floor.',
            'For this June update, we are not using unsupported headcount, robotaxi scale, or diner claims; the market takeaway is the confirmed scale of the Giga Texas manufacturing campus and its role as an employment anchor east of Austin.',
          ],
          images: [{ src: teslaGigaFactoryImage, alt: 'Tesla Giga Factory' }],
        },
        {
          title: 'Arm, SpaceX, and Samsung Reinforce The Regional Chip Cluster',
          emoji: '🧪',
          paragraphs: [
            'Arm is expanding its Austin campus with a new semiconductor lab expected to create more than 320 jobs and more than $71 million in capital investment.',
            'SpaceX received a Texas Semiconductor Innovation Fund grant for a Bastrop semiconductor R&D and advanced-packaging expansion expected to create more than 400 jobs and more than $280 million in capital investment.',
            'Samsung Austin Semiconductor received a $250 million Texas Semiconductor Innovation Fund grant tied to more than $4.73 billion of capital investment at its Taylor fabrication facility.',
          ],
          images: [{ src: samsungPlantTaylorImage, alt: 'Samsung Plant Taylor' }],
        },
        ...(includeSpaceXTerafab
          ? [
              {
                title: "SpaceX Terafab Extends Texas' Semiconductor Corridor",
                emoji: '🚀',
                paragraphs: [
                  'On August 6, 2026, SpaceX announced that it will construct Terafab, a vertically integrated semiconductor fabrication plant in Grimes County. The first phase represents more than $16.8 billion in capital investment and 3,000 new jobs, supported by a $30 million Texas Enterprise Fund grant.',
                  "Although the site is well outside the core Austin commuter market, the project broadens Texas' semiconductor and advanced-manufacturing ecosystem and could deepen supplier, engineering, and institutional-investment linkages across Central and Southeast Texas. It should be viewed as a long-term regional industry signal rather than a direct near-term demand driver for The Row.",
                ],
                images: [{ src: spaceXTerafabImage, alt: 'Official rendering of the SpaceX Terafab campus' }],
              },
            ]
          : []),
        {
          title: 'Supplier Growth Is Extending North Of Austin',
          emoji: '🏭',
          paragraphs: [
            'Pegatron has committed to at least $35 million of capital investment for its Georgetown manufacturing facility and must create 100 full-time jobs within three years of certificate of occupancy under the Williamson County agreement.',
            'Compal has been reported as leasing major Taylor and Georgetown facilities for device and server-related operations; because investment figures vary by source, the June report treats Compal as a directional supply-chain signal rather than a precise capital-investment metric.',
          ],
          images: [{ src: pegatronImage, alt: 'Pegatron Corporation' }],
        },
      ],
    },
    {
      heading: 'Life Sciences and Grid Infrastructure',
      cards: [
        {
          title: '3billion US Adds A Rare-Disease Genomics Lab In Austin',
          emoji: '🧬',
          paragraphs: [
            'Austin City Council approved a performance-based agreement for 3billion US, Inc., a rare-disease genomics company launching a 12,994-square-foot genetic testing lab in Austin.',
            'The project is expected to create 200 full-time jobs with average annual salary above $95,000 and generate approximately $8.1 million of capital investment.',
          ],
          images: [{ src: appleCampusImage, alt: 'Austin tech campus' }],
        },
        {
          title: 'Austin Energy Adds Distributed Battery Capacity',
          emoji: '🔋',
          paragraphs: [
            'Austin Energy is contracting with Base Power for up to 40 MW of distribution-connected battery capacity across aggregated residential batteries in its service area.',
            'The agreement gives Austin Energy operational control over the reserved capacity for system operations, wholesale price-risk mitigation, and local reliability.',
          ],
          images: [{ src: nvidiaImage, alt: 'Austin energy and technology infrastructure' }],
        },
      ],
    },
    ...(includeAustinSurfClub
      ? [
          {
            heading: 'Austin Surf Club',
            cards: [
              {
                title: 'Lifestyle-Led Residential Demand Near Del Valle',
                paragraphs: [
                  'Discovery Land Company describes Austin Surf Club as a Kelly Slater partnership built around a roughly 2,200-foot surf basin and private-club residential amenities.',
                  'Third-party reporting indicates the project includes more than 140 residential units and private membership demand; because pricing and buyer names rely on media reporting, the June update treats those details as market color rather than underwriting-grade evidence.',
                ],
                images: [{ src: austinSurfClubImage, alt: 'Austin Surf Club' }],
              },
            ],
          },
        ]
      : []),
  ]

  const companySections =
    marketContentVariant === 'june2026' ? june2026CompanySections : defaultCompanySections

  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      {includeDelVia ? (
        <>
          {anchors?.delViaId ? <div id={anchors.delViaId} className="scroll-mt-24" /> : null}
          <h3 className="section-title">Del Via Multifamily</h3>

          <ChartContainer className="mb-4">
            <Image
              src={delViaMultifamilyImage}
              alt="Del Via Multifamily"
              sizes={FULL_WIDTH_SIZES}
              className="h-auto w-full rounded-lg object-contain"
              loading="lazy"
            />
          </ChartContainer>
        </>
      ) : null}

      {anchors?.austinMarketId ? <div id={anchors.austinMarketId} className="scroll-mt-24" /> : null}
      <h3 className={['section-title', includeDelVia ? 'mt-4 sm:mt-6 md:mt-8' : ''].filter(Boolean).join(' ')}>
        {austinMarketTitle}
      </h3>

      {beforeAustinMarketContent ? <div className="mt-4 sm:mt-6 md:mt-8">{beforeAustinMarketContent}</div> : null}

      <div className={['mt-6 sm:mt-8 md:mt-10', beforeAustinMarketContent ? '' : ''].filter(Boolean).join(' ')}>
        {companySections.map(({ cards, containerClass, heading }) => (
          <div key={heading} className={containerClass ?? 'mt-6 sm:mt-8 md:mt-10'}>
            {variant === 'agora' ? (
              <h4 className="company-section-title">
                {heading}
              </h4>
            ) : (
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center">
                {heading}
              </h4>
            )}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
              {cards.map((card) => (
                <CompanyCard key={card.title} {...card} variant={variant} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
