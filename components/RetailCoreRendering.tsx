import ImageSection from '@/components/ImageSection'
import p7HotelImage from '@/public/P7 Hotel.jpg'
import p7MultifamilyImage from '@/public/P7 MF.jpg'
import retailCoreRenderingImage from '@/public/Retail Core Rendering.jpg'

export default function RetailCoreRendering() {
  return (
    <ImageSection
      title="Retail Core Rendering"
      images={[
        { src: retailCoreRenderingImage, alt: 'Retail Core Rendering' },
        { src: p7MultifamilyImage, alt: 'P7 MF', className: 'mt-8' },
        { src: p7HotelImage, alt: 'P7 Hotel', className: 'mt-8' },
      ]}
    />
  )
}
