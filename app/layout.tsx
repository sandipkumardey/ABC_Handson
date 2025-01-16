import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  title: 'Sarah Chen - Product Designer',
  description: 'Product Designer & Art Director crafting intuitive digital experiences.',
  keywords: ['Product Designer', 'UX Designer', 'UI Designer', 'Art Director'],
  authors: [{ name: 'Sarah Chen' }],
  openGraph: {
    title: 'Sarah Chen - Product Designer',
    description: 'Product Designer & Art Director crafting intuitive digital experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarah Chen - Product Designer',
    description: 'Product Designer & Art Director crafting intuitive digital experiences.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body>
        {children}
      </body>
    </html>
  )
}



import './globals.css'