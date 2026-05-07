import './globals.css'

export const metadata = {
  title: 'Profolio Report',
  description: 'Profolio Owner Property Report',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
