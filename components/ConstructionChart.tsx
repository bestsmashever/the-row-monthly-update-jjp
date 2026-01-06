import Image from 'next/image'

import { FULL_WIDTH_SIZES } from '@/constants/media'
import submarketImage from '@/public/Submarket.jpg'

export default function ConstructionChart() {
  return (
    <section className="mb-12">
      <div className="chart-container">
        <h4>Submarket</h4>
        <Image
          src={submarketImage}
          alt="Submarket"
          sizes={FULL_WIDTH_SIZES}
          className="h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
      </div>
    </section>
  )
}
