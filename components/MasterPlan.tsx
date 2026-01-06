import ImageSection from './ImageSection'
import { getSectionById } from '@/app/data/sections'

import masterPlanImage from '@/public/The Row Master Plan.jpg'

export default function MasterPlan() {
  const section = getSectionById('masterPlan')

  if (!section) {
    return null
  }

  return <ImageSection {...section} />
}
