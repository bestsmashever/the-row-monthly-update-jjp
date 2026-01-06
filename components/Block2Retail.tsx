import ImageSection from './ImageSection'
import { getSectionById } from '@/app/data/sections'

import block2RetailImage from '@/public/Block 2 Retail.jpg'

export default function Block2Retail() {
  const section = getSectionById('block2Retail')

  if (!section) {
    return null
  }

  return <ImageSection {...section} />
}
