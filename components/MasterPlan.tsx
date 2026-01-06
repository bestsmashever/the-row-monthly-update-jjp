import ImageSection from './ImageSection'
import { getSectionById } from '@/app/data/sections'

export default function MasterPlan() {
  const section = getSectionById('masterPlan')

  if (!section) {
    return null
  }

  return <ImageSection {...section} />
}
