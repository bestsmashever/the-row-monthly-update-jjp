import ImageSection from './ImageSection'
import { getSectionById } from '@/app/data/sections'

export default function RetailDestination() {
  const section = getSectionById('retailDestination')

  if (!section) {
    return null
  }

  return <ImageSection {...section} />
}
