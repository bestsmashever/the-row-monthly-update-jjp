import Image from 'next/image'
import type { Section } from '@/lib/updates'

type UpdateCardProps = {
  section: Section
}

export default function UpdateCard({ section }: UpdateCardProps) {
  return (
    <div className="bg-white border-2 border-primary-500 rounded-xl shadow-lg p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-xl font-bold text-gray-900">{section.title}</h4>
        {section.statusSnapshot ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 text-primary-700 px-3 py-1 text-xs font-semibold border border-primary-100">
            {section.statusSnapshot.title}
          </span>
        ) : null}
      </div>

      {section.statusSnapshot ? (
        <ul className="list-none space-y-2 text-sm sm:text-base text-gray-800">
          {section.statusSnapshot.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.visuals && section.visuals.length ? (
        <div className="space-y-4">
          {section.visuals.slice(0, 1).map((visual) => (
            <div key={visual.title} className="chart-container">
              <p className="text-center text-sm font-semibold text-primary-600 mb-3 uppercase tracking-wide">
                {visual.title}
              </p>
              <div className="relative w-full" style={{ height: '420px' }}>
                <Image
                  src={visual.image}
                  alt={visual.caption || visual.title}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                />
              </div>
              {visual.caption ? (
                <p className="text-xs text-gray-600 mt-3 text-center">What this shows: {visual.caption}</p>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      {section.commentary && section.commentary.length ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-5">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-2 flex items-center gap-2">
            <span className="text-lg">📝</span> Commentary
          </p>
          <ul className="list-none space-y-2 text-sm sm:text-base text-gray-800 leading-relaxed">
            {section.commentary.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary-500 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
