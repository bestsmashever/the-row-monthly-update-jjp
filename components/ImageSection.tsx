import Image, { type StaticImageData } from 'next/image'

import { FULL_WIDTH_SIZES } from '@/constants/media'
import ChartContainer from '@/components/layout/ChartContainer'

type ImageItem = {
  src: StaticImageData | string
  alt: string
  className?: string
}

type ImageSectionProps = {
  title?: string
  images: ImageItem[]
  className?: string
}

export default function ImageSection({ title, images, className }: ImageSectionProps) {
  const sectionClassName = ['mb-8 sm:mb-10 md:mb-12', className].filter(Boolean).join(' ')

  return (
    <section className={sectionClassName}>
      <ChartContainer title={title}>
        {images.map(({ src, alt, className: imageClass }, index) => (
          <Image
            key={`${alt}-${index}`}
            src={src}
            alt={alt}
            sizes={FULL_WIDTH_SIZES}
            className={['h-auto w-full rounded-lg object-contain', imageClass].filter(Boolean).join(' ')}
            loading="lazy"
          />
        ))}
      </ChartContainer>
    </section>
  )
}
