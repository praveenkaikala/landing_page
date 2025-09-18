import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'IPIXELZEN - CRM Tool',
  description: 'A modern CRM tool to manage leads, sales, and workflows efficiently.',
  keywords: [
    'CRM',
    'Customer Relationship Management',
    'Sales Tool',
    'Lead Management',
    'Workflow Automation',
    'Analytics',
    'IPIXELZEN',
  ],
  authors: [{ name: 'IPIXELZEN Team', url: 'https://ipixelzen.com' }],
  openGraph: {
    title: 'IPIXELZEN - Modern CRM Tool',
    description: 'Streamline your sales, leads, and workflows with IPIXELZEN.',
    url: 'https://ipixelzen.com',
    siteName: 'IPIXELZEN',
    images: [
      {
        url: '/og-image.png', // Add your OG image in public/
        width: 1200,
        height: 630,
        alt: 'IPIXELZEN CRM Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPIXELZEN - CRM Tool',
    description: 'Boost productivity with IPIXELZEN CRM.',
    images: ['/og-image.png'], // Same OG image
    creator: '@ipixelzen',
  },
  metadataBase: new URL('https://ipixelzen.com'),
  alternates: {
    canonical: 'https://ipixelzen.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className='px-5'>
          <Header/>
          {children}
          <Footer/>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
