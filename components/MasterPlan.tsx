import Image from 'next/image'

import masterPlanImage from '@/public/The Row Master Plan.jpg'

export default function MasterPlan() {
  const fullWidthSizes = '(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px'

  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="chart-container">
        <Image
          src={masterPlanImage}
          alt="The Row Master Plan"
          sizes={fullWidthSizes}
          className="h-auto w-full rounded-lg object-contain"
          loading="lazy"
        />
      </div>
    </section>
  )
}
