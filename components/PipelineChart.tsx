import Image from 'next/image'

export default function PipelineChart() {
  return (
    <section className="mb-12">
      <div className="chart-container">
        <h4>Delivery Pipeline Exhaustion</h4>
        <div className="relative w-full" style={{ height: '500px' }}>
          <Image
            src="/Delivery Pipeline v2.jpg"
            alt="Delivery Pipeline Exhaustion"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
