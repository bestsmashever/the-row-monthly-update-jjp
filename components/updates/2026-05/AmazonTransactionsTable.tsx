import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'

type Row2Col = { label: string; value: string }
type Row4Col = { label: string; before: string; paydown: string; after: string }
type SectionedRows = {
  section: string
  rows: Row4Col[]
  totalRowIndex?: number
}

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
        <col className="w-[68%]" />
        <col className="w-[32%]" />
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
          <th
            className={`bg-gray-100 text-gray-900 p-2 sm:p-3 font-semibold tracking-wide border border-gray-200 text-right whitespace-nowrap ${plexMono.className}`}
          >
            Before
          </th>
          <th
            className={`bg-gray-100 text-gray-900 p-2 sm:p-3 font-semibold tracking-wide border border-gray-200 text-right whitespace-nowrap ${plexMono.className}`}
          >
            Paydown
          </th>
          <th
            className={`bg-gray-100 text-gray-900 p-2 sm:p-3 font-semibold tracking-wide border border-gray-200 text-right whitespace-nowrap ${plexMono.className}`}
          >
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

function SectionedCapitalTable({ sections }: { sections: SectionedRows[] }) {
  return (
    <div className="space-y-3">
      {sections.map(({ rows, section, totalRowIndex }) => (
        <div key={section} className="space-y-2">
          <div className="text-sm font-semibold text-gray-900 underline underline-offset-4">
            {section}
          </div>
          <FourColTable rows={rows} totalRowIndex={totalRowIndex} />
        </div>
      ))}
    </div>
  )
}

export default function AmazonTransactionsTable() {
  const saleDate = '08/31/2026'

  const proceeds: Row2Col[] = [
    { label: 'Amazon Sales Proceeds (PSA) - 53 Acres', value: '$33,336,904' },
    { label: 'Soft Cost Reim', value: '$276,080' },
    { label: 'Less: KBC Broker Fee (3%)', value: '($1,000,107)' },
    { label: 'Less: Title', value: '($225,000)' },
    { label: 'Less: Legal', value: '($200,000)' },
    { label: 'Less: Misc. Closing Costs', value: '($350,000)' },
    {
      label: "Less: Infrastructure Costs - 1.0 - Presidium's Share",
      value: '($10,473,408)',
    },
    { label: 'Total Net Sale Proceeds', value: '$21,364,469' },
  ]

  const capitalSections: SectionedRows[] = [
    {
      section: 'Debt',
      rows: [
        {
          label: 'Texas Heritage - Loan 1',
          before: '$8,685,000',
          paydown: '-',
          after: '$8,685,000',
        },
        {
          label: 'Texas Heritage - Loan 2 - RLOC',
          before: '$6,800,000',
          paydown: '-',
          after: '$6,800,000',
        },
        {
          label: 'Bank of Austin',
          before: '$9,000,000',
          paydown: '($9,000,000)',
          after: '-',
        },
        {
          label: 'Cadence Bank',
          before: '$5,804,961',
          paydown: '($5,804,961)',
          after: '-',
        },
        {
          label: 'Prosperity',
          before: '$11,613,112',
          paydown: '($2,337,624)',
          after: '$9,275,488',
        },
        {
          label: 'Real International',
          before: '$6,100,000',
          paydown: '($2,300,632)',
          after: '$3,799,368',
        },
        {
          label: 'Accrual - Real International',
          before: '$1,921,252',
          paydown: '($1,921,252)',
          after: '-',
        },
        {
          label: 'Total Debt',
          before: '$49,924,325',
          paydown: '($21,364,469)',
          after: '$28,559,856',
        },
      ],
      totalRowIndex: 7,
    },
    {
      section: 'Pref Equity',
      rows: [
        { label: 'C-1 Units', before: '$4,500,000', paydown: '-', after: '$4,500,000' },
        { label: 'Accrual - C1', before: '$1,693,749', paydown: '-', after: '$1,693,749' },
        { label: 'C-2 Units', before: '$7,500,000', paydown: '-', after: '$7,500,000' },
        { label: 'Accrual - C2', before: '$976,739', paydown: '-', after: '$976,739' },
        {
          label: 'Total Pref',
          before: '$14,670,488',
          paydown: '-',
          after: '$14,670,488',
        },
      ],
      totalRowIndex: 4,
    },
    {
      section: 'Common Equity',
      rows: [
        {
          label: 'Common Equity',
          before: '$32,570,001',
          paydown: '-',
          after: '$32,570,001',
        },
        {
          label: 'Total',
          before: '$97,164,814',
          paydown: '($21,364,469)',
          after: '$75,800,345',
        },
      ],
      totalRowIndex: 1,
    },
  ]

  const landAnalysis: Row4Col[] = [
    { label: 'Acres', before: '307.0', paydown: '53.0', after: '254.0' },
    {
      label: 'Remaining Debt',
      before: '$49,924,325',
      paydown: '',
      after: '$28,559,856',
    },
    { label: 'Debt / SF', before: '$3.73', paydown: '', after: '$2.58' },
    { label: 'Debt / Acre', before: '$162,620', paydown: '', after: '$112,440' },
  ]

  return (
    <div className={`${plexSans.className} space-y-4 sm:space-y-5 p-3 sm:p-4`}>
      <div className="space-y-3 border border-gray-200 p-3 sm:p-4">
        <div className="flex flex-col gap-1 border-b border-gray-200 pb-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm font-semibold text-gray-900">Amazon Sale</div>
          <div className="text-sm text-gray-800">
            <span className="font-semibold">Estimated Sale Date:</span>{' '}
            <span className={`${plexMono.className} tabular-nums`}>{saleDate}</span>
          </div>
        </div>

        <TwoColTable rows={proceeds} totalRowIndex={proceeds.length - 1} />
      </div>

      <div className="space-y-3">
        <div className="text-sm font-semibold text-gray-900 tracking-wide">
          Capital Structure
        </div>
        <SectionedCapitalTable sections={capitalSections} />
      </div>

      <div className="grid grid-cols-[1fr_auto] border border-gray-200 bg-green-50 px-3 py-2 text-sm font-semibold text-gray-900">
        <div>Cash Remaining</div>
        <div className={`${plexMono.className} tabular-nums`}>($0)</div>
      </div>

      <div className="space-y-3">
        <div className="text-sm font-semibold text-gray-900 tracking-wide">
          Land Analysis
        </div>
        <FourColTable rows={landAnalysis} />
      </div>
    </div>
  )
}
