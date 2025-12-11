import Image from 'next/image'

export default function RetailDestination() {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="chart-container">
        <div className="relative w-full" style={{ height: '800px' }}>
          <Image
            src="/Submarket.jpg"
            alt="Submarket"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

