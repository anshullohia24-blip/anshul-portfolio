import './globals.css'

export const metadata = {
  title: 'Anshul Lohia Portfolio',
  description: 'AI Automation Portfolio',
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
