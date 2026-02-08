import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Space_Grotesk } from 'next/font/google'
import './globals.css'
import './camp.css'
import { FishBackground } from '@/components/fish-background'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'VIBE CODING CAMP in NAGASAKI',
  description: '2026.2.13-15 | 2泊3日 長崎市茂木地区 — バイブコーディング合宿',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${spaceGrotesk.variable} camp-base`}>
        <FishBackground />
        {children}
      </body>
    </html>
  )
}
