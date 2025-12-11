import Image from 'next/image'

export default function MasterPlan() {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="chart-container">
        <div className="relative w-full" style={{ height: '800px' }}>
          <Image
            src="/The Row Master Plan.jpg"
            alt="The Row Master Plan"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

