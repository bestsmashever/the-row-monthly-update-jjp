import Image from 'next/image'

export default function RetailCorePhasing() {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="chart-container">
        <h4>Retail Core Phasing</h4>
        <div className="relative w-full" style={{ height: '800px' }}>
          <Image
            src="/Retail Core Phasing.jpg"
            alt="Retail Core Phasing"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

