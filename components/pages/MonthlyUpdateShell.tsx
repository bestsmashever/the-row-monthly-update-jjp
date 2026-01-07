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
  const containerClassName =
    theme === 'agora'
      ? 'max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-10'
      : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'

  return (
    <div className={['min-h-screen bg-white', themeClassName].filter(Boolean).join(' ')}>
      <div className={containerClassName}>
        <Header title={headerTitle} />
        <div id="top" className="scroll-mt-24" />
        {sideNav ? (
          <div className={['lg:grid lg:grid-cols-[240px_1fr] lg:gap-10', theme === 'agora' ? 'agora-content' : ''].filter(Boolean).join(' ')}>
            <aside className="hidden lg:block">
              <div className="sticky top-6">{sideNav}</div>
            </aside>
            <main className="min-w-0">{children}</main>
          </div>
        ) : (
          <div className={theme === 'agora' ? 'agora-content' : undefined}>{children}</div>
        )}
        <Footer />
      </div>
    </div>
  )
}


