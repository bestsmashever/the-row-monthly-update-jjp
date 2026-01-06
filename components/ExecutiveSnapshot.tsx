type ExecutiveSnapshotProps = {
  title: string
  items: string[]
}

export default function ExecutiveSnapshot({ title, items }: ExecutiveSnapshotProps) {
  return (
    <section className="mb-6 sm:mb-8">
      <div className="bg-primary-50 border-2 border-primary-200 rounded-xl shadow-lg p-6 sm:p-8">
        <div className="flex flex-col gap-2 sm:gap-3">
          <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold flex items-center gap-2">
            <span className="text-xl">🧠</span> Executive Snapshot
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            {title}
          </h3>
          <ul className="list-none space-y-2 text-base sm:text-lg text-gray-800">
            {items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary-600 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
