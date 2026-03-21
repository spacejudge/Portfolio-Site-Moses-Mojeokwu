import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist"
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'Moses Mojeokwu | Creative Visual Storyteller & High-Conversion Video Creator',
  description: 'Creative visual storyteller and high-conversion video creator-editor, specializing in both high-impact short-form content and comprehensive long-form campaigns.',
  keywords: ['video editor', 'content strategist', 'motion graphics', 'color grading', 'visual storyteller', 'video creator'],
  generator: 'v0.app',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOSES%20MOJEOKWU%20FAVICON-UoPy7rkSnJ7xGrJ8AVqnTfhosRT5Bs.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOSES%20MOJEOKWU%20FAVICON-UoPy7rkSnJ7xGrJ8AVqnTfhosRT5Bs.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
