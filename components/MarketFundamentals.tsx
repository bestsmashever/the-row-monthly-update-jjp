import Image from 'next/image'

export default function MarketFundamentals() {
  return (
    <section className="mb-12">
      <h3 className="section-title">Market Fundamentals</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="metric-card enhanced">
          <div className="metric-value">33.3%</div>
          <div className="metric-label">POPULATION GROWTH</div>
          <div className="metric-context">2015-2025 | #1 Nationally</div>
          
          <div className="metric-details">
            <ul className="clean-list">
              <li><strong>13,620 new young adults (20-34)</strong> added YoY, representing core renter demographic</li>
              <li>Austin forecasted to reach <strong>3M population by 2033</strong></li>
              <li>Continued strong in-migration from gateway markets experiencing net outflows</li>
            </ul>
          </div>
        </div>
        
        <div className="metric-card enhanced">
          <div className="metric-value">48%</div>
          <div className="metric-label">EMPLOYMENT GROWTH</div>
          <div className="metric-context">10-year | Leading All Major US Cities</div>
          
          <div className="metric-details">
            <ul className="clean-list">
              <li>Robust employment base led by <strong>tech, government, and professional services</strong></li>
              <li>Major employers: <strong>UT System (19,514), Dell (18,371), Apple (10,004), Amazon (8,294)</strong></li>
              <li>Employment stability across economic cycles</li>
            </ul>
          </div>
        </div>
        
        <div className="metric-card enhanced">
          <div className="metric-value">$104,066</div>
          <div className="metric-label">MEDIAN HOUSEHOLD INCOME</div>
          <div className="metric-context">25% Above National Average</div>
          
          <div className="metric-details">
            <ul className="clean-list">
              <li>Austin maintains <strong>lowest rent-to-income ratio</strong> among major US metros at <strong>16.8%</strong></li>
              <li><strong>42% renter population</strong> provides substantial addressable market for multifamily investment strategies</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 className="section-title mt-12">Employer Expansion & Economic Momentum</h3>
      
      <div className="mt-10">
        <h4 className="text-3xl font-bold text-primary-700 mb-10 text-center">Tesla: Anchoring Austin's Next Innovation Wave</h4>
        
        <div className="space-y-10">
          {/* Giga Factory */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <h5 className="text-2xl font-bold text-primary-700 mb-4 flex items-center gap-3">
                  <span className="text-4xl">⚡</span>
                  <span>20,000+ Employees and Counting</span>
                </h5>
                <p className="text-lg leading-relaxed text-gray-700">
                  Giga Texas is already one of Austin's largest employers — and continues scaling with new lines, R&D, and strategic hires.
                </p>
              </div>
              <div className="relative w-full h-80 md:h-auto min-h-[320px]">
                <Image
                  src="/Tesla Giga Factory.png"
                  alt="Tesla Giga Factory"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Optimus Robot */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <h5 className="text-2xl font-bold text-primary-700 mb-4 flex items-center gap-3">
                  <span className="text-4xl">🤖</span>
                  <span>Optimus Robot Factory Underway</span>
                </h5>
                <p className="text-lg leading-relaxed text-gray-700">
                  Tesla is preparing a dedicated manufacturing facility at Giga Texas for its humanoid robot Optimus, a multi-billion-dollar bet that positions Austin at the center of robotics and AI-driven automation.
                </p>
              </div>
              <div className="relative w-full h-80 md:h-auto min-h-[320px]">
                <Image
                  src="/Tesla Optimus.jpg"
                  alt="Tesla Optimus Robot"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                />
              </div>
            </div>
          </div>

          {/* Robotaxi */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <h5 className="text-2xl font-bold text-primary-700 mb-4 flex items-center gap-3">
                  <span className="text-4xl">🚕</span>
                  <span>Robotaxi Launch: Austin Leads the Future of Mobility</span>
                </h5>
                <p className="text-lg leading-relaxed text-gray-700">
                  In June 2025, Tesla launched its first robotaxi fleet in Austin — with plans to scale to 500+ autonomous vehicles by year-end and remove safety drivers in select zones.
                </p>
              </div>
              <div className="relative w-full h-80 md:h-auto min-h-[320px]">
                <Image
                  src="/Tesla Robotaxi.jpg"
                  alt="Tesla Robotaxi"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* AI Chip */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <h5 className="text-2xl font-bold text-primary-700 mb-4 flex items-center gap-3">
                  <span className="text-4xl">🧠</span>
                  <span>AI Chip Partnership with Samsung</span>
                </h5>
                <p className="text-lg leading-relaxed text-gray-700">
                  In a groundbreaking $16.5B deal, Tesla selected Samsung's new Taylor, TX fab to produce its next-generation AI6 chips — cementing Austin's position as a national hub for AI semiconductor manufacturing and reshoring.
                </p>
              </div>
              <div className="relative w-full h-80 md:h-auto min-h-[320px]">
                <Image
                  src="/Tesla AI5 Chip.jpg"
                  alt="Tesla AI Chip"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Tesla Diner */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <h5 className="text-2xl font-bold text-primary-700 mb-4 flex items-center gap-3">
                  <span className="text-4xl">🍽️</span>
                  <span>Tesla Diner: Expanding Austin's Lifestyle Footprint</span>
                </h5>
                <p className="text-lg leading-relaxed text-gray-700">
                  Tesla is reportedly exploring a new "Tesla Diner" location near its Austin campus — a retro-futuristic restaurant concept with Supercharger stalls, drive-in movie screens, and ordering via Tesla vehicle interfaces. While it remains an announced intention rather than a confirmed build-out, the diner concept reinforces Tesla's strategy of making its Austin footprint more than just manufacturing — it's becoming a consumer-facing and lifestyle anchor as well.
                </p>
              </div>
              <div className="relative w-full h-80 md:h-auto min-h-[320px]">
                <Image
                  src="/Tesla Diner.png"
                  alt="Tesla Diner"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* NVIDIA Section */}
        <div className="mt-16">
          <h4 className="text-3xl font-bold text-primary-700 mb-10 text-center">NVIDIA</h4>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    NVIDIA is doubling its Austin presence with a ~100,000 sq ft lease at One Uptown, expanding its engineering and R&D footprint near The Domain.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    The company announced over 1 million sq ft of U.S. manufacturing capacity (including Texas sites) to produce AI supercomputers and Blackwell chips — positioning Austin as a crucial node for domestic AI hardware production.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Texas leadership has publicly welcomed NVIDIA's strategic investment, reinforcing the state's rise as an AI and next-gen computing hub.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-80 md:h-auto min-h-[320px]">
                <Image
                  src="/NVIDIA AI Supercomputer.jpg"
                  alt="NVIDIA AI Supercomputer"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Apple Inc. Section */}
        <div className="mt-10">
          <h4 className="text-3xl font-bold text-primary-700 mb-10 text-center">Apple Inc.</h4>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Apple announced a $600 billion U.S. investment plan, with a significant portion directed to Texas — including ongoing expansion in Austin.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Apple's second Austin campus is under construction, supporting more than 13,000 team members across hardware, software, and silicon engineering teams.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Recent rezoning activity at the original Riata Campus signals potential mixed-use redevelopment, creating additional opportunities for tech-driven community building.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-80 md:h-auto min-h-[320px]">
                <Image
                  src="/Apple Campus Austin.jpg"
                  alt="Apple Campus Austin"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Samsung Electronics Section */}
        <div className="mt-10">
          <h4 className="text-3xl font-bold text-primary-700 mb-10 text-center">Samsung Electronics</h4>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Samsung's Taylor facility—a $40B+ (potentially up to $44B with expansions) advanced chip manufacturing campus—is in the final stages of construction, with operations ramping up in late 2026.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    The Texas Semiconductor Innovation Fund awarded Samsung a $250 million grant in 2025 to accelerate build-out.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    The first phase includes a new office building and migration of up to 1,000 employees by late 2025, with thousands more expected as production scales.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-80 md:h-auto min-h-[320px]">
                <Image
                  src="/Samsung Plant Taylor.png"
                  alt="Samsung Plant Taylor"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Compal USA Technology Inc. Section */}
        <div className="mt-10">
          <h4 className="text-3xl font-bold text-primary-700 mb-10 text-center">Compal USA Technology Inc.</h4>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Compal announced a $94 million U.S. expansion, leasing 600,000 sq ft across Taylor and Georgetown to localize device assembly and supply-chain operations near major customers like Dell, Tesla, and Apple.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    The project is expected to create up to 1,000 high-tech jobs, supporting the reshoring of server and AI hardware manufacturing.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    This move highlights Austin's appeal as a strategic site for Asian electronic manufacturers adapting to U.S. supply-chain policy shifts.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-80 md:h-auto min-h-[320px]">
                <Image
                  src="/Compal.webp"
                  alt="Compal USA Technology"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pegatron Corporation Section */}
        <div className="mt-10">
          <h4 className="text-3xl font-bold text-primary-700 mb-10 text-center">Pegatron Corporation</h4>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Pegatron is establishing its first U.S. manufacturing facility in Georgetown, acquiring a 168,000 sq ft building at Blue Springs Business Park.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    The company is investing at least $35 million and plans to hire 100+ employees in the first three years, with further growth expected as it ramps AI and electronics production.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Pegatron's U.S. footprint will support major clients like Apple, Dell, and Tesla — illustrating the deepening tech manufacturing ecosystem in the Austin MSA.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-80 md:h-auto min-h-[320px]">
                <Image
                  src="/Pegatron.jpg"
                  alt="Pegatron Corporation"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
