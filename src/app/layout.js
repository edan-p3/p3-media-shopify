import './globals.css'

export const metadata = {
  title: 'P3 Media - Shopify Growth Partnership',
  description: 'Strategic CRO & Managed Development Services for Shopify Stores',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
