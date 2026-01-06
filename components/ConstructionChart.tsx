import Image from 'next/image'

import { FULL_WIDTH_SIZES } from '@/constants/media'
import ChartContainer from '@/components/layout/ChartContainer'
import submarketImage from '@/public/Submarket.jpg'

export default function ConstructionChart() {
  return (
    <section className="mb-12">
      <h3 className="section-title">Submarket</h3>
      <ChartContainer>
        <Image
          src={submarketImage}
          alt="Submarket"
          sizes={FULL_WIDTH_SIZES}
          className="h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
      </ChartContainer>
    </section>
  )
}
