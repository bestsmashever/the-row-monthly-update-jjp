type RiskCardProps = {
  risks: string[]
}

export default function RiskCard({ risks }: RiskCardProps) {
  if (!risks.length) return null

  return (
    <section className="mb-6 sm:mb-8">
      <div className="bg-white border-2 border-primary-500 rounded-xl shadow-lg p-5 sm:p-6 space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">⚠️</span>
          <p className="text-lg font-bold text-gray-900">Risks</p>
        </div>
        <ul className="list-none space-y-2 text-sm sm:text-base text-gray-800 leading-relaxed">
          {risks.map((risk) => (
            <li key={risk} className="flex gap-2">
              <span className="text-primary-500 font-bold">•</span>
              <span>{risk}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
