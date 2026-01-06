import ImageSection from '@/components/ImageSection'
import submarketImage from '@/public/Submarket.jpg'

export default function RetailDestination() {
  return <ImageSection images={[{ src: submarketImage, alt: 'Submarket' }]} />
}
