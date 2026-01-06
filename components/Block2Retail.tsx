import Image from 'next/image'

import block2RetailImage from '@/public/Block 2 Retail.jpg'

export default function Block2Retail() {
  const fullWidthSizes = '(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px'

  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <h3 className="section-title">Block 2 Retail</h3>
      
      <div className="chart-container mb-8">
        <Image
          src={block2RetailImage}
          alt="Block 2 Retail"
          sizes={fullWidthSizes}
          className="h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
      </div>
    </section>
  )
}
