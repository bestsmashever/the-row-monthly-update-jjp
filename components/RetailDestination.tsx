import Image from 'next/image'

export default function RetailDestination() {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="chart-container">
        <p className="text-center text-sm font-semibold text-primary-600 mb-3 uppercase tracking-wide">
          Key Visual
        </p>
        <div className="relative w-full" style={{ height: '500px' }}>
          <Image
            src="/Submarket.jpg"
            alt="Submarket"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
        <p className="text-xs text-gray-600 mt-3 text-center">
          What this shows: Submarket positioning and retail destination context relative to surrounding growth.
        </p>
      </div>
    </section>
  )
}
