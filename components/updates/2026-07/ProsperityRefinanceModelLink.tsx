const workbookPath = '/Prosperity%20Refinance_2026.07.01.xlsx'
const workbookName = 'Prosperity Refinance_2026.07.01.xlsx'

export default function ProsperityRefinanceModelLink() {
  return (
    <a
      href={workbookPath}
      download={workbookName}
      aria-label="Download Prosperity Refinance Excel model"
      className="group flex flex-col gap-5 p-5 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-600 sm:flex-row sm:items-center sm:justify-between sm:p-7 md:p-8"
    >
      <span className="flex min-w-0 items-center gap-4 sm:gap-5">
        <span
          aria-hidden="true"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white shadow-sm sm:h-16 sm:w-16"
        >
          <svg viewBox="0 0 48 48" className="h-8 w-8 sm:h-9 sm:w-9" fill="none">
            <path
              d="M16 7h18l7 7v27H16V7Z"
              fill="currentColor"
              fillOpacity="0.2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M34 7v8h7" stroke="currentColor" strokeWidth="2" />
            <path d="m8 18 17-3v22L8 34V18Z" fill="currentColor" />
            <path
              d="m13 23 3 4.5-3 4.5h3l1.7-2.8 1.8 2.8h3l-3.1-4.6 2.9-4.4h-3l-1.5 2.6-1.6-2.6H13Z"
              fill="#047857"
            />
          </svg>
        </span>

        <span className="min-w-0">
          <span className="block break-words text-base font-bold text-slate-900 sm:text-lg">
            {workbookName}
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-slate-600">
            Excel workbook · Download and open in Microsoft Excel
          </span>
        </span>
      </span>

      <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-md border border-emerald-700 px-4 py-2.5 text-sm font-bold text-emerald-800 transition-colors group-hover:bg-emerald-700 group-hover:text-white sm:self-auto">
        Open Excel Model
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
          <path
            d="M10 3v9m0 0 3.5-3.5M10 12 6.5 8.5M4 15.5h12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  )
}
