import ImageSection from './ImageSection'
import { getSectionById } from '@/app/data/sections'

export default function RetailCoreRendering() {
  const section = getSectionById('retailCoreRendering')

  if (!section) {
    return null
  }

  return <ImageSection {...section} />
}
