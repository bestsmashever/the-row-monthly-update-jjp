import Image from 'next/image'

export default function ConstructionChart() {
  return (
    <section className="mb-12">
      <div className="chart-container">
        <h4>Submarket</h4>
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
