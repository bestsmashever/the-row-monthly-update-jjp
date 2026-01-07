import Image, { StaticImageData } from 'next/image'

import { HALF_WIDTH_SIZES } from '@/constants/media'

type CompanyImage = {
  alt: string
  src: StaticImageData
}

type CompanyCardProps = {
  emoji?: string
  images: CompanyImage[]
  paragraphs: string[]
  reverseOnDesktop?: boolean
  title: string
  useDualImages?: boolean
  variant?: 'default' | 'agora'
}

export default function CompanyCard({
  emoji,
  images,
  paragraphs,
  reverseOnDesktop = false,
  title,
  useDualImages = false,
  variant = 'default',
}: CompanyCardProps) {
  if (variant === 'agora') {
    const cleanParagraphs = paragraphs.filter((p) => p.trim().length > 0)
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          <div className={`p-5 sm:p-6 ${reverseOnDesktop ? 'md:order-2' : ''}`}>
            <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 tracking-wide">
              {title}
            </h5>
            <div className="space-y-2">
              {cleanParagraphs.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {useDualImages ? (
            <div className={`grid grid-cols-2 gap-0 ${reverseOnDesktop ? 'md:order-1' : ''}`}>
              {images.map(({ alt, src }) => (
                <div key={alt} className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes={HALF_WIDTH_SIZES}
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={`relative w-full aspect-[16/10] overflow-hidden ${reverseOnDesktop ? 'md:order-1' : ''}`}>
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                sizes={HALF_WIDTH_SIZES}
                className="object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="grid md:grid-cols-2 gap-0 company-card-grid">
        <div
          className={`p-4 sm:p-6 md:p-8 flex flex-col justify-center ${
            reverseOnDesktop ? 'md:order-2' : ''
          }`}
        >
          <h5 className="text-xl sm:text-2xl font-bold text-primary-700 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
            {emoji ? <span className="text-2xl sm:text-3xl md:text-4xl">{emoji}</span> : null}
            <span>{title}</span>
          </h5>
          <div className="space-y-3 sm:space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg leading-relaxed text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {useDualImages ? (
          <div className="grid grid-cols-2 gap-0">
            {images.map(({ alt, src }, index) => (
              <div
                key={alt}
                className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden"
              >
                <Image src={src} alt={alt} sizes={HALF_WIDTH_SIZES} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-auto min-h-[192px] sm:min-h-[224px] md:min-h-[256px] lg:min-h-[320px] overflow-hidden rounded-b-xl md:rounded-bl-none md:rounded-br-xl ${
              reverseOnDesktop ? 'md:order-1' : ''
            }`}
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              sizes={HALF_WIDTH_SIZES}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  )
}
