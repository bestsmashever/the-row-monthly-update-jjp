import Image from 'next/image'

export default function RetailCoreRendering() {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="chart-container">
        <h4>Retail Core Rendering</h4>
        <div className="relative w-full" style={{ height: '800px' }}>
          <Image
            src="/Retail Core Rendering.jpg"
            alt="Retail Core Rendering"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full mt-8" style={{ height: '800px' }}>
          <Image
            src="/P7 MF.jpg"
            alt="P7 MF"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full mt-8" style={{ height: '800px' }}>
          <Image
            src="/P7 Hotel.jpg"
            alt="P7 Hotel"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

