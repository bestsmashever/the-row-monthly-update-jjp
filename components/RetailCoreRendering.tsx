import ImageSection from './ImageSection'
import { getSectionById } from '@/app/data/sections'

import p7HotelImage from '@/public/P7 Hotel.jpg'
import p7MultifamilyImage from '@/public/P7 MF.jpg'
import retailCoreRenderingImage from '@/public/Retail Core Rendering.jpg'

export default function RetailCoreRendering() {
  const section = getSectionById('retailCoreRendering')

  if (!section) {
    return null
  }

  return <ImageSection {...section} />
}
