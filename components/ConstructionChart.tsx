import Image from 'next/image'

import submarketImage from '@/public/Submarket.jpg'

export default function ConstructionChart() {
  const fullWidthSizes = '(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px'

  return (
    <section className="mb-12">
      <div className="chart-container">
        <h4>Submarket</h4>
        <Image
          src={submarketImage}
          alt="Submarket"
          sizes={fullWidthSizes}
          className="h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
      </div>
    </section>
  )
}
