import ImageSection from './ImageSection'
import { getSectionById } from '@/app/data/sections'

import retailCorePhasingImage from '@/public/Retail Core Phasing.jpg'

export default function RetailCorePhasing() {
  const section = getSectionById('retailCorePhasing')

  if (!section) {
    return null
  }

  return <ImageSection {...section} />
}
