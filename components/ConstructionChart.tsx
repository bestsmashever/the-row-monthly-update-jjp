import Image from 'next/image'

export default function ConstructionChart() {
  return (
    <section className="mb-12">
      <div className="chart-container">
        <h4>Shrinking Construction Pipeline</h4>
        <div className="relative w-full" style={{ height: '600px' }}>
          <Image
            src="/Austin Construction Pipeline v2.jpg"
            alt="Austin Construction Pipeline"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
