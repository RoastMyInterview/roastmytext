import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#09090b',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://roastmytext.me'),
  title: 'RoastMyText.me | Face Dick Headerson',
  description: 'Submit your text to the hot seat. Dick Headerson provides tough love, zero fluff, and instant reality checks.',
  keywords: ['Text roast', 'Dick Headerson'],
  openGraph: {
    title: 'RoastMyText.me | Face Dick Headerson',
    description: 'Think your text is ready? Face Dick Headerson and see if you survive the hot seat.',
    url: 'https://roastmytext.me',
    siteName: 'RoastMyText.me',
    images: [{ url: 'https://roastmyinterview.me/dick-avatar.jpg', width: 1200, height: 630, alt: 'Dick Headerson' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoastMyText.me | Face Dick Headerson',
    description: 'Dick Headerson shreds weak text. Step into the hot seat.',
    images: ['https://roastmyinterview.me/dick-avatar.jpg'],
  },
  icons: { icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🔥</text></svg>' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased selection:bg-orange-500 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
