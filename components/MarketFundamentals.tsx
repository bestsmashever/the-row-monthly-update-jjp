import Image from 'next/image'

import { FULL_WIDTH_SIZES } from '@/constants/media'
import ChartContainer from '@/components/layout/ChartContainer'
import CompanyCard from '@/components/CompanyCard'
import abiaImage from '@/public/ABIA.png'
import appleCampusImage from '@/public/Apple Campus Austin.jpg'
import compalImage from '@/public/Compal.webp'
import delViaMultifamilyImage from '@/public/Del Via Multifamily.jpg'
import nvidiaImage from '@/public/NVIDIA AI Supercomputer.jpg'
import pegatronImage from '@/public/Pegatron.jpg'
import samsungPlantTaylorImage from '@/public/Samsung Plant Taylor.png'
import tdemInteriorImage from '@/public/TDEM Interior.jpg'
import tdemRenderingImage from '@/public/TDEM rendering.jpeg'
import teslaAiChipImage from '@/public/Tesla AI5 Chip.jpg'
import teslaDinerImage from '@/public/Tesla Diner.png'
import teslaGigaFactoryImage from '@/public/Tesla Giga Factory.png'
import teslaOptimusImage from '@/public/Tesla Optimus.jpg'
import teslaRobotaxiImage from '@/public/Tesla Robotaxi.jpg'

export default function MarketFundamentals() {
  const companySections = [
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

  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
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
      
      <h3 className="section-title mt-4 sm:mt-6 md:mt-8">Employer Expansion & Economic Momentum</h3>

      <div className="mt-6 sm:mt-8 md:mt-10">
        {companySections.map(({ cards, containerClass, heading }) => (
          <div key={heading} className={containerClass ?? 'mt-6 sm:mt-8 md:mt-10'}>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center">
              {heading}
            </h4>
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
              {cards.map((card) => (
                <CompanyCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
