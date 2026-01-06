import Image from 'next/image'

export default function RetailCoreRendering() {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="chart-container">
        <h4>Retail Core Rendering</h4>
        <div className="relative w-full" style={{ height: '500px' }}>
          <Image
            src="/Retail Core Rendering.jpg"
            alt="Retail Core Rendering"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
        <p className="text-xs text-gray-600 mt-3 text-center">
          What this shows: Retail core massing and streetscape character across the central spine.
        </p>
        <div className="relative w-full mt-8" style={{ height: '480px' }}>
          <Image
            src="/P7 MF.jpg"
            alt="P7 MF"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
        <p className="text-xs text-gray-600 mt-3 text-center">
          What this shows: Multifamily massing adjacent to the retail program to support activation.
        </p>
        <div className="relative w-full mt-8" style={{ height: '480px' }}>
          <Image
            src="/P7 Hotel.jpg"
            alt="P7 Hotel"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
        <p className="text-xs text-gray-600 mt-3 text-center">
          What this shows: Hospitality positioning that complements retail programming and arrival sequence.
        </p>
      </div>
    </section>
  )
}
