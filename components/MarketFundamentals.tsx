import Image from 'next/image'

export default function MarketFundamentals() {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <h3 className="section-title">Del Via Multifamily</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white border-2 border-primary-500 shadow-lg rounded-lg p-5 sm:p-6 space-y-3">
          <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold flex items-center gap-2">
            <span className="text-lg">📌</span> Metrics Snapshot
          </p>
          <ul className="list-none space-y-2 text-sm sm:text-base text-gray-800">
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span><strong>Occupancy:</strong> 14.3%</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span><strong>Leased:</strong> 19.21%</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span><strong>Market Rent:</strong> $2.19/sf | $1,796/unit</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span><strong>Concessions:</strong> 6–10 weeks free (12.5%–20.8%)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span><strong>Status:</strong> Lease-up underway; retail activation supports absorption</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="chart-container">
            <p className="text-center text-sm font-semibold text-primary-600 mb-3 uppercase tracking-wide">
              Key Visual
            </p>
            <div className="relative w-full" style={{ height: '420px' }}>
              <Image
                src="/Del Via Multifamily.jpg"
                alt="Del Via multifamily overview"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
            <p className="text-xs text-gray-600 mt-3 text-center">
              What this shows: Current lease-up positioning and unit delivery phasing for Del Via.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 sm:p-6">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="text-lg">📝</span> Commentary
            </p>
            <ul className="list-none space-y-3 text-sm sm:text-base text-gray-800 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span>Lease-up continues with concessions supporting early absorption while retail activation advances.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span>Stabilization depends on synchronized retail delivery and sustained employer-driven demand.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 md:mt-12">
        <h3 className="section-title">Regional &amp; Macro Context (Appendix)</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
          Provided as regional context; not directly tied to current underwriting assumptions.
        </p>

        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          {/* Tesla */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <h5 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl">⚡</span>
                  <span>Tesla: Anchoring Austin&apos;s Next Innovation Wave</span>
                </h5>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  20,000+ employees on ~10M SF built, with another 5M SF underway; robotaxi launch scaling; Optimus factory and AI chip partnership reinforce Austin as a core hub.
                </p>
              </div>
              <div className="relative w-full h-52 sm:h-60 md:h-64 lg:h-72 xl:h-auto min-h-[208px] sm:min-h-[240px] md:min-h-[256px] lg:min-h-[288px]">
                <Image
                  src="/Tesla Giga Factory.png"
                  alt="Tesla Giga Factory"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <p className="text-xs text-gray-600 px-5 sm:px-6 py-3 border-t border-gray-100">
              What this shows: Tesla&apos;s growing production footprint and its role in Austin&apos;s mobility and AI ecosystem.
            </p>
          </div>

          {/* NVIDIA */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <h5 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl">🧠</span>
                  <span>NVIDIA</span>
                </h5>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  Doubling Austin presence with ~100k SF lease and &gt;1M SF U.S. manufacturing capacity for AI supercomputers/Blackwell chips; Texas positioned as an AI hardware hub.
                </p>
              </div>
              <div className="relative w-full h-52 sm:h-60 md:h-64 lg:h-72 xl:h-auto min-h-[208px] sm:min-h-[240px] md:min-h-[256px] lg:min-h-[288px]">
                <Image
                  src="/NVIDIA AI Supercomputer.jpg"
                  alt="NVIDIA AI Supercomputer"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <p className="text-xs text-gray-600 px-5 sm:px-6 py-3 border-t border-gray-100">
              What this shows: NVIDIA expanding R&amp;D and manufacturing capacity that supports AI hardware demand near Austin.
            </p>
          </div>

          {/* Samsung */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <h5 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl">🏭</span>
                  <span>Samsung Electronics</span>
                </h5>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  $40B+ Taylor campus nearing late-2026 operations; $250M state grant; first office phase moving ~1,000 employees by late 2025 with further scaling expected.
                </p>
              </div>
              <div className="relative w-full h-52 sm:h-60 md:h-64 lg:h-72 xl:h-auto min-h-[208px] sm:min-h-[240px] md:min-h-[256px] lg:min-h-[288px]">
                <Image
                  src="/Samsung Plant Taylor.png"
                  alt="Samsung Plant Taylor"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <p className="text-xs text-gray-600 px-5 sm:px-6 py-3 border-t border-gray-100">
              What this shows: Advanced chip manufacturing build-out that strengthens Austin&apos;s semiconductor corridor.
            </p>
          </div>

          {/* ABIA */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <h5 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl">✈️</span>
                  <span>ABIA</span>
                </h5>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  $4–6B Journey With AUS expansion: terminal infill, baggage upgrades, new parking, and design for 20+ gate Concourse B (early 2030s opening target).
                </p>
              </div>
              <div className="relative w-full h-52 sm:h-60 md:h-64 lg:h-72 xl:h-auto min-h-[208px] sm:min-h-[240px] md:min-h-[256px] lg:min-h-[288px]">
                <Image
                  src="/ABIA.png"
                  alt="ABIA expansion"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <p className="text-xs text-gray-600 px-5 sm:px-6 py-3 border-t border-gray-100">
              What this shows: Airport capacity expansion supporting long-term regional growth.
            </p>
          </div>

          {/* Apple */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <h5 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl">🍏</span>
                  <span>Apple Inc.</span>
                </h5>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  $600B U.S. investment plan with significant Texas allocation; second Austin campus under construction supporting 13,000+ team members; Riata rezoning signals mixed-use potential.
                </p>
              </div>
              <div className="relative w-full h-52 sm:h-60 md:h-64 lg:h-72 xl:h-auto min-h-[208px] sm:min-h-[240px] md:min-h-[256px] lg:min-h-[288px]">
                <Image
                  src="/Apple Campus Austin.jpg"
                  alt="Apple Campus Austin"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <p className="text-xs text-gray-600 px-5 sm:px-6 py-3 border-t border-gray-100">
              What this shows: Apple&apos;s sustained expansion that underpins long-term tech employment in Austin.
            </p>
          </div>

          {/* Compal */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <h5 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl">💻</span>
                  <span>Compal USA Technology Inc.</span>
                </h5>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  $94M U.S. expansion with 600,000 SF across Taylor and Georgetown for localized device assembly near Dell, Tesla, Apple; ~1,000 jobs expected as AI/server manufacturing reshoring accelerates.
                </p>
              </div>
              <div className="relative w-full h-52 sm:h-60 md:h-64 lg:h-72 xl:h-auto min-h-[208px] sm:min-h-[240px] md:min-h-[256px] lg:min-h-[288px]">
                <Image
                  src="/Compal.webp"
                  alt="Compal USA Technology"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <p className="text-xs text-gray-600 px-5 sm:px-6 py-3 border-t border-gray-100">
              What this shows: Supply-chain localization and electronics manufacturing growth supporting regional employment.
            </p>
          </div>

          {/* Pegatron */}
          <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2 gap-0 company-card-grid">
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <h5 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl">🔧</span>
                  <span>Pegatron Corporation</span>
                </h5>
                <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                  First U.S. manufacturing facility in Georgetown (168,000 SF); $35M+ investment with 100+ hires in first three years to support clients like Apple, Dell, Tesla.
                </p>
              </div>
              <div className="relative w-full h-52 sm:h-60 md:h-64 lg:h-72 xl:h-auto min-h-[208px] sm:min-h-[240px] md:min-h-[256px] lg:min-h-[288px]">
                <Image
                  src="/Pegatron.jpg"
                  alt="Pegatron Corporation"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <p className="text-xs text-gray-600 px-5 sm:px-6 py-3 border-t border-gray-100">
              What this shows: Additional electronics manufacturing momentum reinforcing Austin&apos;s tech ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
