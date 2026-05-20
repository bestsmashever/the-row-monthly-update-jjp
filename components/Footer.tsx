type FooterProps = {
  theme?: 'default' | 'agora'
}

export default function Footer({ theme = 'default' }: FooterProps) {
  if (theme === 'agora') {
    return <footer className="agora-footer" aria-label="Report footer" />
  }

  return (
    <footer className="bg-primary-500 text-white py-8 -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        </div>
      </div>
    </footer>
  )
}
