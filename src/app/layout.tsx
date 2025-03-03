import Footer from '@/components/ui/footer'
import './globals.css'

import Header from 'components/header'
import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Events Management',
  applicationName: 'Events Management',
  description:
    'Projeto de desenvolvimento da interface React para projeto da NLW Week 2025',
  authors: [
    { name: 'Fernando Aragão', url: 'https://github.com/fernandoarag' },
  ],
  icons: [
    { rel: 'icon', url: '/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'shortcut icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180' },
    { rel: 'manifest', url: '/site.webmanifest' },
  ],
  keywords: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
}

const oxanium = Oxanium({
  weight: ['500', '600', '800'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top">
        <Header />

        <main className="container">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
