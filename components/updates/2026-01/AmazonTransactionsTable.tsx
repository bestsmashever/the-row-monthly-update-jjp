type Row2Col = { label: string; value: string }
type Row4Col = { label: string; before: string; paydown: string; after: string }

import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

function TwoColTable({
  rows,
  totalRowIndex,
}: {
  rows: Row2Col[]
  totalRowIndex?: number
}) {
  return (
    <table className="w-full table-fixed border-collapse text-sm sm:text-base">
      <colgroup>
        <col className="w-[72%]" />
        <col className="w-[28%]" />
      </colgroup>
      <tbody>
        {rows.map((r, idx) => {
          const isTotal = totalRowIndex === idx
          return (
            <tr
              key={r.label}
              className={isTotal ? 'bg-gray-50' : 'odd:bg-white even:bg-gray-50'}
            >
              <td
                className={[
                  'p-2 sm:p-3 border border-gray-200 font-medium',
                  isTotal ? 'font-semibold text-gray-900' : 'text-gray-900',
                ].join(' ')}
              >
                {r.label}
              </td>
              <td
                className={[
                  `p-2 sm:p-3 border border-gray-200 text-right whitespace-nowrap ${plexMono.className} tabular-nums`,
                  isTotal ? 'font-semibold text-gray-900' : 'text-gray-900',
                ].join(' ')}
              >
                {r.value}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function FourColTable({
  rows,
  totalRowIndex,
}: {
  rows: Row4Col[]
  totalRowIndex?: number
}) {
  return (
    <table className="w-full table-fixed border-collapse text-sm sm:text-base">
      <colgroup>
        <col className="w-[52%]" />
        <col className="w-[16%]" />
        <col className="w-[16%]" />
        <col className="w-[16%]" />
      </colgroup>
      <thead>
        <tr>
          <th className="bg-gray-100 text-gray-900 p-2 sm:p-3 font-semibold tracking-wide border border-gray-200 text-left">
            Capital Item
          </th>
          <th className={`bg-gray-100 text-gray-900 p-2 sm:p-3 font-semibold tracking-wide border border-gray-200 text-right whitespace-nowrap ${plexMono.className}`}>
            Before
          </th>
          <th className={`bg-gray-100 text-gray-900 p-2 sm:p-3 font-semibold tracking-wide border border-gray-200 text-right whitespace-nowrap ${plexMono.className}`}>
            Paydown
          </th>
          <th className={`bg-gray-100 text-gray-900 p-2 sm:p-3 font-semibold tracking-wide border border-gray-200 text-right whitespace-nowrap ${plexMono.className}`}>
            After
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, idx) => {
          const isTotal = totalRowIndex === idx
          return (
            <tr
              key={r.label}
              className={isTotal ? 'bg-gray-50' : 'odd:bg-white even:bg-gray-50'}
            >
              <td
                className={[
                  'p-2 sm:p-3 border border-gray-200 font-medium',
                  isTotal ? 'font-semibold text-gray-900' : 'text-gray-900',
                ].join(' ')}
              >
                {r.label}
              </td>
              {[r.before, r.paydown, r.after].map((v, i) => (
                <td
                  key={i}
                  className={[
                    `p-2 sm:p-3 border border-gray-200 text-right whitespace-nowrap ${plexMono.className} tabular-nums`,
                    isTotal ? 'font-semibold text-gray-900' : 'text-gray-900',
                  ].join(' ')}
                >
                  {v}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default function AmazonTransactionsTable() {
  const saleDate = 'August 31, 2026'

  const proceeds: Row2Col[] = [
    { label: 'Amazon Sale Proceeds (PSA – 53 Acres)', value: '33,336,904' },
    { label: 'Amazon Sale Proceeds (LOI – 25 Acres)', value: '14,701,500' },
    { label: 'Gross Sale Proceeds', value: '48,038,404' },
    { label: 'Less: Broker Fee (KBC – 3%)', value: '(1,441,152)' },
    { label: 'Less: Title', value: '(225,000)' },
    { label: 'Less: Legal', value: '(200,000)' },
    { label: 'Less: Misc. Closing Costs', value: '(250,000)' },
    { label: 'Less: Infrastructure Costs (Estimated)', value: '(7,500,000)' },
    { label: 'Total Net Sale Proceeds', value: '38,422,251' },
  ]

  const debt: Row4Col[] = [
    { label: 'Texas Heritage – Loan 1', before: '8,685,000', paydown: '—', after: '8,685,000' },
    {
      label: 'Texas Heritage – Loan 2 (RLOC)',
      before: '6,800,000',
      paydown: '(2,278,571)',
      after: '4,521,429',
    },
    { label: 'Texas Partners Bank', before: '9,000,000', paydown: '(9,000,000)', after: '—' },
    { label: 'Cadence Bank', before: '5,804,961', paydown: '(5,804,961)', after: '—' },
    { label: 'Prosperity', before: '11,613,112', paydown: '(4,840,729)', after: '6,772,383' },
    { label: 'Real International', before: '6,100,000', paydown: '(6,100,000)', after: '—' },
    {
      label: 'Accrued Interest – Real International',
      before: '1,921,252',
      paydown: '(1,921,252)',
      after: '—',
    },
    { label: 'Total Debt', before: '49,924,325', paydown: '(29,945,513)', after: '19,978,812' },
  ]

  const pref: Row4Col[] = [
    { label: 'C-1 Units', before: '4,500,000', paydown: '—', after: '4,500,000' },
    { label: 'Accrued – C-1', before: '1,693,749', paydown: '—', after: '1,693,749' },
    { label: 'C-2 Units', before: '7,500,000', paydown: '(7,500,000)', after: '—' },
    { label: 'Accrued – C-2', before: '976,739', paydown: '(976,739)', after: '—' },
    {
      label: 'Total Preferred Equity',
      before: '14,670,488',
      paydown: '(8,476,739)',
      after: '6,193,749',
    },
  ]

  const common: Row4Col[] = [
    { label: 'Common Equity', before: '32,570,001', paydown: '—', after: '32,570,001' },
  ]

  const recon: Row4Col[] = [
    {
      label: 'Total Capital',
      before: '97,164,814',
      paydown: '(38,422,251)',
      after: '58,742,563',
    },
    { label: 'Check', before: '—', paydown: '0', after: '—' },
  ]

  return (
    <div className={`${plexSans.className} space-y-4 sm:space-y-5 p-3 sm:p-4`}>
      <div className="flex flex-col gap-1">
        <div className="text-xs tracking-wide text-gray-500">
          Amazon Sale – Uses & Capital Paydown (One-Page Summary)
        </div>
        <div className="text-sm text-gray-800">
          <span className="font-semibold">Estimated Sale Date:</span>{' '}
          <span className="tabular-nums">{saleDate}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-sm font-semibold text-gray-900 tracking-wide">
          I. Sale Proceeds Summary
        </div>
        <TwoColTable rows={proceeds} totalRowIndex={proceeds.length - 1} />
      </div>

      <div className="space-y-3">
        <div className="text-sm font-semibold text-gray-900 tracking-wide">
          II. Capital Structure – Debt Paydown
        </div>
        <FourColTable rows={debt} totalRowIndex={debt.length - 1} />
      </div>

      <div className="space-y-3">
        <div className="text-sm font-semibold text-gray-900 tracking-wide">
          III. Capital Structure – Preferred Equity
        </div>
        <FourColTable rows={pref} totalRowIndex={pref.length - 1} />
      </div>

      <div className="space-y-3">
        <div className="text-sm font-semibold text-gray-900 tracking-wide">
          IV. Common Equity
        </div>
        <FourColTable rows={common} />
      </div>

      <div className="space-y-3">
        <div className="text-sm font-semibold text-gray-900 tracking-wide">
          V. Capital Stack Reconciliation
        </div>
        <FourColTable rows={recon} />
      </div>
    </div>
  )
}


