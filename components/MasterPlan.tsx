import ImageSection from '@/components/ImageSection'
import masterPlanImage from '@/public/The Row Master Plan.jpg'

export default function MasterPlan() {
  return <ImageSection images={[{ src: masterPlanImage, alt: 'The Row Master Plan' }]} />
}
