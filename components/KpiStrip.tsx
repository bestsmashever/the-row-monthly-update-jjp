type KpiStripProps = {
  kpis: Record<string, number>
}

const formatValue = (value: number) => {
  if (Math.abs(value) >= 100) return value.toLocaleString(undefined, { maximumFractionDigits: 1 })
  return value.toLocaleString(undefined, { maximumFractionDigits: 2 })
}

export default function KpiStrip({ kpis }: KpiStripProps) {
  const entries = Object.entries(kpis)
  if (!entries.length) return null

  return (
    <section className="mb-6 sm:mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {entries.map(([label, value]) => (
          <div
            key={label}
            className="bg-white border-2 border-primary-500 rounded-lg shadow-lg p-4 sm:p-5"
          >
            <p className="text-xs uppercase tracking-wide text-gray-600 font-semibold mb-1">
              {label.replace(/([A-Z])/g, ' $1').replace(/^\w/, (c) => c.toUpperCase())}
            </p>
            <p className="text-2xl font-bold text-primary-700">{formatValue(value)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
