import Image from 'next/image'

import p7HotelImage from '@/public/P7 Hotel.jpg'
import p7MultifamilyImage from '@/public/P7 MF.jpg'
import retailCoreRenderingImage from '@/public/Retail Core Rendering.jpg'

export default function RetailCoreRendering() {
  const fullWidthSizes = '(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px'

  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="chart-container">
        <h4>Retail Core Rendering</h4>
        <Image
          src={retailCoreRenderingImage}
          alt="Retail Core Rendering"
          sizes={fullWidthSizes}
          className="h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
        <Image
          src={p7MultifamilyImage}
          alt="P7 MF"
          sizes={fullWidthSizes}
          className="mt-8 h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
        <Image
          src={p7HotelImage}
          alt="P7 Hotel"
          sizes={fullWidthSizes}
          className="mt-8 h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
      </div>
    </section>
  )
}
