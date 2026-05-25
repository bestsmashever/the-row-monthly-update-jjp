import Image from 'next/image'
import type { ImageProps } from 'next/image'

import { FULL_WIDTH_SIZES } from '@/constants/media'
import ChartContainer from '@/components/layout/ChartContainer'
import block2RetailImage from '@/public/Block 2 Retail.jpg'

type Block2RetailProps = {
  additionalImages?: Array<{
    alt: string
    src: ImageProps['src']
  }>
  title?: string
}

export default function Block2Retail({
  additionalImages = [],
  title = 'Block 2 Retail',
}: Block2RetailProps) {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <h3 className="section-title">{title}</h3>
      
      <ChartContainer className="mb-8">
        <Image
          src={block2RetailImage}
          alt="Block 2 Retail"
          sizes={FULL_WIDTH_SIZES}
          className="h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
      </ChartContainer>

      {additionalImages.map((image) => (
        <ChartContainer key={image.alt} className="mb-8">
          <Image
            src={image.src}
            alt={image.alt}
            sizes={FULL_WIDTH_SIZES}
            className="h-auto w-full rounded-lg object-contain"
            loading="lazy"
          />
        </ChartContainer>
      ))}
    </section>
  )
}
