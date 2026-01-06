import Image from 'next/image'
import type {
  ImageSectionItem,
  ImageSectionVariant,
} from '@/app/data/sections'

export type ImageSectionProps = {
  title: string
  items: ImageSectionItem[]
  variant?: ImageSectionVariant
}

export default function ImageSection({
  title,
  items,
  variant = 'chart',
}: ImageSectionProps) {
  const hasItems = items.length > 0

  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      {variant === 'section' && <h3 className="section-title">{title}</h3>}

      {hasItems && (
        <div className="chart-container">
          {variant === 'chart' && <h4>{title}</h4>}

          {items.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className={index > 0 ? 'mt-8' : ''}
            >
              <div
                className="relative w-full"
                style={{ height: `${item.height ?? 800}px` }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                />
              </div>

              {item.caption && (
                <p className="text-sm text-gray-600 text-center mt-3">
                  {item.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
