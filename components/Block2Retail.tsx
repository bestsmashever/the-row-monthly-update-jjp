import Image from 'next/image'

export default function Block2Retail() {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <h3 className="section-title">Block 2 Retail</h3>
      
      <div className="chart-container mb-8">
        <div className="relative w-full" style={{ height: '800px' }}>
          <Image
            src="/Block 2 Retail.jpg"
            alt="Block 2 Retail"
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

