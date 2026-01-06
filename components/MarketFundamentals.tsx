import Image from 'next/image'

import { FULL_WIDTH_SIZES } from '@/constants/media'
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
  const halfWidthSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px'

  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <h3 className="section-title">Del Via Multifamily</h3>
      
      <div className="chart-container mb-4">
        <Image
          src={delViaMultifamilyImage}
          alt="Del Via Multifamily"
          sizes={FULL_WIDTH_SIZES}
          className="h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
      </div>
      
      <h3 className="section-title mt-4 sm:mt-6 md:mt-8">Employer Expansion & Economic Momentum</h3>
      
      <div className="mt-6 sm:mt-8 md:mt-10">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center">Tesla: Anchoring Austin's Next Innovation Wave</h4>
        
        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          {/* Giga Factory */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <h5 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl">⚡</span>
                  <span>20,000+ Employees. 10M SF Built. Another 5M SF on the Way.</span>
                </h5>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  Tesla's footprint in Austin is massive and still accelerating. Giga Texas already spans roughly 10 million square feet, making it one of the largest manufacturing facilities in the world — and Tesla is now adding another 5 million square feet of new production and support space. This continued expansion reinforces Austin as a core hub for Tesla's long-term growth, innovation, and workforce scale.
                </p>
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-br-xl">
                <Image
                  src={teslaGigaFactoryImage}
                  alt="Tesla Giga Factory"
                  sizes={halfWidthSizes}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Optimus Robot */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-8 flex flex-col justify-center">
                <h5 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl">🤖</span>
                  <span>Optimus Robot Factory Underway</span>
                </h5>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  Tesla is preparing a dedicated manufacturing facility at Giga Texas for its humanoid robot Optimus, a multi-billion-dollar bet that positions Austin at the center of robotics and AI-driven automation.
                </p>
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-br-xl">
                <Image
                  src={teslaOptimusImage}
                  alt="Tesla Optimus Robot"
                  sizes={halfWidthSizes}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Robotaxi */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-8 flex flex-col justify-center">
                <h5 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl">🚕</span>
                  <span>Robotaxi Launch: Austin Leads the Future of Mobility</span>
                </h5>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  In June 2025, Tesla launched its first robotaxi fleet in Austin — with plans to scale to 500+ autonomous vehicles by year-end and remove safety drivers in select zones.
                </p>
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-br-xl">
                <Image
                  src={teslaRobotaxiImage}
                  alt="Tesla Robotaxi"
                  sizes={halfWidthSizes}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* AI Chip */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-8 flex flex-col justify-center">
                <h5 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl">🧠</span>
                  <span>AI Chip Partnership with Samsung</span>
                </h5>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  In a groundbreaking $16.5B deal, Tesla selected Samsung's new Taylor, TX fab to produce its next-generation AI6 chips — cementing Austin's position as a national hub for AI semiconductor manufacturing and reshoring.
                </p>
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-br-xl">
                <Image
                  src={teslaAiChipImage}
                  alt="Tesla AI Chip"
                  sizes={halfWidthSizes}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Tesla Diner */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-8 flex flex-col justify-center">
                <h5 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl">🍽️</span>
                  <span>Tesla Diner: Expanding Austin's Lifestyle Footprint</span>
                </h5>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  Tesla is reportedly exploring a new "Tesla Diner" location near its Austin campus — a retro-futuristic restaurant concept with Supercharger stalls, drive-in movie screens, and ordering via Tesla vehicle interfaces. While it remains an announced intention rather than a confirmed build-out, the diner concept reinforces Tesla's strategy of making its Austin footprint more than just manufacturing — it's becoming a consumer-facing and lifestyle anchor as well.
                </p>
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-br-xl">
                <Image
                  src={teslaDinerImage}
                  alt="Tesla Diner"
                  sizes={halfWidthSizes}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* TDEM Section */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center">TDEM</h4>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    TDEM's $423M headquarters is opening in August 2026, expanding its presence in the Austin area and contributing to the region's growing economic momentum.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-0">
                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden">
                  <Image
                    src={tdemInteriorImage}
                    alt="TDEM Interior"
                    sizes={halfWidthSizes}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden">
                  <Image
                    src={tdemRenderingImage}
                    alt="TDEM Rendering"
                    sizes={halfWidthSizes}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ABIA Section */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center">ABIA</h4>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    Austin-Bergstrom International Airport is underway on a multi-year, $4–6 billion expansion known as "Journey With AUS," which includes new terminal infill projects, upgraded baggage systems, and major airfield work to support a new 20+ gate midfield Concourse B.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    Early-phase construction—such as the West Infill terminal expansion, new outbound baggage system, and new parking facilities—is progressing through 2026, while the signature capacity upgrades, including the new Arrivals and Departures Hall and Concourse B, are in design and expected to open in the early 2030s.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-br-xl">
                <Image
                  src={abiaImage}
                  alt="ABIA"
                  sizes={halfWidthSizes}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* NVIDIA Section */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center">NVIDIA</h4>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    NVIDIA is doubling its Austin presence with a ~100,000 sq ft lease at One Uptown, expanding its engineering and R&D footprint near The Domain.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    The company announced over 1 million sq ft of U.S. manufacturing capacity (including Texas sites) to produce AI supercomputers and Blackwell chips — positioning Austin as a crucial node for domestic AI hardware production.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    Texas leadership has publicly welcomed NVIDIA's strategic investment, reinforcing the state's rise as an AI and next-gen computing hub.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-br-xl">
                <Image
                  src={nvidiaImage}
                  alt="NVIDIA AI Supercomputer"
                  sizes={halfWidthSizes}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Apple Inc. Section */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center">Apple Inc.</h4>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    Apple announced a $600 billion U.S. investment plan, with a significant portion directed to Texas — including ongoing expansion in Austin.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    Apple's second Austin campus is under construction, supporting more than 13,000 team members across hardware, software, and silicon engineering teams.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    Recent rezoning activity at the original Riata Campus signals potential mixed-use redevelopment, creating additional opportunities for tech-driven community building.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-br-xl">
                <Image
                  src={appleCampusImage}
                  alt="Apple Campus Austin"
                  sizes={halfWidthSizes}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Samsung Electronics Section */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center">Samsung Electronics</h4>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    Samsung's Taylor facility—a $40B+ (potentially up to $44B with expansions) advanced chip manufacturing campus—is in the final stages of construction, with operations ramping up in late 2026.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    The Texas Semiconductor Innovation Fund awarded Samsung a $250 million grant in 2025 to accelerate build-out.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    The first phase includes a new office building and migration of up to 1,000 employees by late 2025, with thousands more expected as production scales.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-br-xl">
                <Image
                  src={samsungPlantTaylorImage}
                  alt="Samsung Plant Taylor"
                  sizes={halfWidthSizes}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Compal USA Technology Inc. Section */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center">Compal USA Technology Inc.</h4>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    Compal announced a $94 million U.S. expansion, leasing 600,000 sq ft across Taylor and Georgetown to localize device assembly and supply-chain operations near major customers like Dell, Tesla, and Apple.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    The project is expected to create up to 1,000 high-tech jobs, supporting the reshoring of server and AI hardware manufacturing.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    This move highlights Austin's appeal as a strategic site for Asian electronic manufacturers adapting to U.S. supply-chain policy shifts.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-br-xl">
                <Image
                  src={compalImage}
                  alt="Compal USA Technology"
                  sizes={halfWidthSizes}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pegatron Corporation Section */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center">Pegatron Corporation</h4>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    Pegatron is establishing its first U.S. manufacturing facility in Georgetown, acquiring a 168,000 sq ft building at Blue Springs Business Park.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    The company is investing at least $35 million and plans to hire 100+ employees in the first three years, with further growth expected as it ramps AI and electronics production.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                    Pegatron's U.S. footprint will support major clients like Apple, Dell, and Tesla — illustrating the deepening tech manufacturing ecosystem in the Austin MSA.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-br-xl">
                <Image
                  src={pegatronImage}
                  alt="Pegatron Corporation"
                  sizes={halfWidthSizes}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
