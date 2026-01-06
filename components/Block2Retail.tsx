import ImageSection from './ImageSection'
import { getSectionById } from '@/app/data/sections'

export default function Block2Retail() {
  const section = getSectionById('block2Retail')

  if (!section) {
    return null
  }

  return <ImageSection {...section} />
}
