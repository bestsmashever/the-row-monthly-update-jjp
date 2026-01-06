import Image from 'next/image'

import retailCorePhasingImage from '@/public/Retail Core Phasing.jpg'

export default function RetailCorePhasing() {
  const fullWidthSizes = '(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px'

  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="chart-container">
        <h4>Retail Core Phasing</h4>
        <Image
          src={retailCorePhasingImage}
          alt="Retail Core Phasing"
          sizes={fullWidthSizes}
          className="h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
      </div>
    </section>
  )
}
