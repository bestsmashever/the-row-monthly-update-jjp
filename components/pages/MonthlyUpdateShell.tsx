import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IBM_Plex_Sans } from 'next/font/google'

type MonthlyUpdateShellProps = {
  headerTitle: string
  children: React.ReactNode
  theme?: 'default' | 'agora'
  sideNav?: React.ReactNode
}

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function MonthlyUpdateShell({
  headerTitle,
  children,
  theme = 'default',
  sideNav,
}: MonthlyUpdateShellProps) {
  const themeClassName = theme === 'agora' ? `agora-theme ${plexSans.className}` : ''

  if (theme === 'agora') {
    return (
      <div className={['min-h-screen', themeClassName].filter(Boolean).join(' ')}>
        <div className={sideNav ? 'agora-shell agora-shell--with-rail' : 'agora-shell'}>
          {sideNav ? (
            <aside className="agora-rail hidden lg:block">
              <div className="sticky top-6">{sideNav}</div>
            </aside>
          ) : null}

          <div className="agora-document min-w-0">
            <Header title={headerTitle} theme="agora" />
            <div id="top" className="scroll-mt-24" />
            {sideNav ? <div className="agora-mobile-nav lg:hidden">{sideNav}</div> : null}
            <main className="agora-content">{children}</main>
            <Footer theme="agora" />
          </div>
        </div>
      </div>
    )
  }

  const containerClassName = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'

  return (
    <div className={['min-h-screen bg-white', themeClassName].filter(Boolean).join(' ')}>
      <div className={containerClassName}>
        <Header title={headerTitle} />
        <div id="top" className="scroll-mt-24" />
        {sideNav ? (
          <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-10">
            <aside className="hidden lg:block">
              <div className="sticky top-6">{sideNav}</div>
            </aside>
            <main className="min-w-0">{children}</main>
          </div>
        ) : (
          <div>{children}</div>
        )}
        <Footer />
      </div>
    </div>
  )
}
