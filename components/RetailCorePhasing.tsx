import ImageSection from '@/components/ImageSection'
import retailCorePhasingImage from '@/public/Retail Core Phasing.jpg'

export default function RetailCorePhasing() {
  return (
    <ImageSection
      title="Retail Core Phasing"
      images={[{ src: retailCorePhasingImage, alt: 'Retail Core Phasing' }]}
    />
  )
}
