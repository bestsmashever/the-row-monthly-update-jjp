import Image, { type StaticImageData } from 'next/image'

import afterAmazonOneImage from '@/public/The Row Debt Map_After Amazon 1.0 Sale.jpg'
import afterAmazonOneAndTwoImage from '@/public/The Row Debt Map_After Amazon 1.0 and 2.0 Sales.jpg'
import afterAmazonOneAndTwoAndHebImage from '@/public/The Row Debt Map_After Amazon 1.0 and 2.0 Sales and HEB Repurchase.jpg'

type DebtMapStage = {
  title: string
  image: StaticImageData
  pdfHref: string
}

const stages: DebtMapStage[] = [
  {
    title: 'Illustrative Debt Map – After Amazon 1.0 Sale',
    image: afterAmazonOneImage,
    pdfHref: '/Map_AMZN%201.0%20Sale_209%20acres.pdf',
  },
  {
    title: 'Illustrative Debt Map – After Amazon 1.0 + 2.0 Sales',
    image: afterAmazonOneAndTwoImage,
    pdfHref: '/Map_AMZN%202.0%20Sale.pdf',
  },
  {
    title:
      'Illustrative Debt Map – After Amazon 1.0 + 2.0 Sales and HEB Site Repurchase',
    image: afterAmazonOneAndTwoAndHebImage,
    pdfHref: '/Map_HEB%20Site%20Repurchase.pdf',
  },
]

export default function DebtMapSequence() {
  return (
    <div>
      {stages.map(({ image, pdfHref, title }) => (
        <section key={title} aria-label={title}>
          <h4 className="report-subtitle">{title}</h4>
          <a
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="report-media-frame mb-8 block sm:mb-10 md:mb-12"
            aria-label={`Open ${title} as a full-size PDF`}
          >
            <Image
              src={image}
              alt={`The Row debt map ${title.toLowerCase()}`}
              sizes="(min-width: 1280px) 1080px, (min-width: 1024px) 75vw, 100vw"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </a>
        </section>
      ))}
    </div>
  )
}
