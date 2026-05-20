type HeaderProps = {
  title?: string
  theme?: 'default' | 'agora'
}

function getReportPeriod(title: string) {
  const match = title.match(/-\s*([A-Za-z]{3,9}\s+\d{4})$/)
  return match?.[1] ?? ''
}

export default function Header({
  title = 'The Row Monthly Update - Dec 2025',
  theme = 'default',
}: HeaderProps) {
  if (theme === 'agora') {
    const reportPeriod = getReportPeriod(title)

    return (
      <header className="site-header site-header--agora">
        <div className="report-title-block">
          <h1>{title}</h1>
          <p>
            Prepared by{' '}
            <a
              href="https://www.presidiumre.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Presidium
            </a>
          </p>
        </div>

        {reportPeriod ? (
          <dl className="report-meta">
            <div>
              <dt>Reporting Period</dt>
              <dd>{reportPeriod}</dd>
            </div>
          </dl>
        ) : null}
      </header>
    )
  }

  return (
    <div className="site-header text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 py-6 sm:py-8 md:py-10 lg:py-12 border-b-3 border-primary-500 bg-primary-500 text-white -mx-4 sm:-mx-6 lg:-mx-8 -mt-4 sm:-mt-6 lg:-mt-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 text-white tracking-wide">
          {title}
        </h1>
        <div className="text-sm text-white font-normal mt-2 italic">
          Prepared by{' '}
          <a 
            href="https://www.presidiumre.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white underline hover:no-underline hover:opacity-80 transition-opacity duration-300"
          >
            Presidium
          </a>
        </div>
      </div>
    </div>
  )
}
