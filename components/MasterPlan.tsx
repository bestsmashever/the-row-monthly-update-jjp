import Image from 'next/image'

export default function MasterPlan() {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="chart-container">
        <p className="text-center text-sm font-semibold text-primary-600 mb-3 uppercase tracking-wide">
          Key Visual
        </p>
        <div className="relative w-full" style={{ height: '500px' }}>
          <Image
            src="/The Row Master Plan.jpg"
            alt="The Row Master Plan"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
        <p className="text-xs text-gray-600 mt-3 text-center">
          What this shows: Overall site master plan with retail core, Amazon tract, and multifamily positioning.
        </p>
      </div>
    </section>
  )
}
