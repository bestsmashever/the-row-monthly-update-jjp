import Image from 'next/image'

export default function Block2Retail() {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <h3 className="section-title">Block 2 Retail</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white border-2 border-primary-500 shadow-lg rounded-lg p-5 sm:p-6 space-y-3">
          <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold flex items-center gap-2">
            <span className="text-lg">📌</span> Status Snapshot
          </p>
          <ul className="list-none space-y-2 text-sm sm:text-base text-gray-800">
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span><strong>Readiness:</strong> Shovel-ready</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span><strong>Anchor:</strong> Negotiating with Shiner Smokehouse (replacing Portillo's)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span><strong>Inline space:</strong> 22,000 SF active negotiations</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span><strong>Capital:</strong> Construction lender ready; equity raise progressing with two groups</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="chart-container">
            <p className="text-center text-sm font-semibold text-primary-600 mb-3 uppercase tracking-wide">
              Key Visual
            </p>
            <div className="relative w-full" style={{ height: '480px' }}>
              <Image
                src="/Block 2 Retail.jpg"
                alt="Block 2 retail plan and site context"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
            <p className="text-xs text-gray-600 mt-3 text-center">
              What this shows: Block 2 retail layout, pad readiness, and anchor/inline tenant positioning.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 sm:p-6">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2 flex items-center gap-2">
              <span className="text-lg">📝</span> Commentary
            </p>
            <ul className="list-none space-y-3 text-sm sm:text-base text-gray-800 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span>Negotiations advancing with Shiner Smokehouse for anchor replacement; inline prospects engaged for 22,000 SF.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span>Lender is ready to close; equity raise moving forward with two strong investor groups.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span>Site is fully prepped, allowing rapid mobilization once anchors and capital stack finalize.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
