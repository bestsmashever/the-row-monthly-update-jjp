import Image from 'next/image'

import { FULL_WIDTH_SIZES } from '@/constants/media'
import block2RetailImage from '@/public/Block 2 Retail.jpg'

export default function Block2Retail() {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <h3 className="section-title">Block 2 Retail</h3>
      
      <div className="chart-container mb-8">
        <Image
          src={block2RetailImage}
          alt="Block 2 Retail"
          sizes={FULL_WIDTH_SIZES}
          className="h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
      </div>
    </section>
  )
}
