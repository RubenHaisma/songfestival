import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Analytics from '@/components/analytics';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

// SEO metadata with structured data
export const metadata: Metadata = {
  metadataBase: new URL('https://songfestival2025.nl'),
  title: {
    default: 'Eurovision Songfestival 2025 | Unofficial Fan Site',
    template: '%s | Eurovision 2025 Unofficial Fan Site'
  },
  description: 'Unofficial fan site for Eurovision Song Contest 2025 in Basel, Switzerland. Explore participating countries, artists, songs, and event information. Not affiliated with the EBU or official Eurovision.',
  keywords: ['Eurovision 2025', 'Basel', 'Switzerland', 'Eurovision fan site', 'Eurovision songs', 'Eurovision artists', 'Eurovision schedule', 'unofficial Eurovision', 'fan site'],
  authors: [{ name: 'Eurovision Fan Community' }],
  creator: 'Eurovision Fan Community',
  publisher: 'Eurovision Fan Community',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://songfestival2025.nl',
    title: 'Eurovision Songfestival 2025 | Unofficial Fan Site',
    description: 'Unofficial fan site for Eurovision Song Contest 2025 in Basel, Switzerland. Explore participating countries, artists, songs, and event information.',
    siteName: 'Eurovision 2025 Unofficial Fan Site',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Eurovision 2025 Unofficial Fan Site',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eurovision Songfestival 2025 | Unofficial Fan Site',
    description: 'Unofficial fan site for Eurovision Song Contest 2025 in Basel, Switzerland. Explore participating countries, artists, songs, and event information.',
    images: ['https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&h=630&fit=crop'],
    creator: '@eurovisionfans',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured data for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Eurovision 2025 Unofficial Fan Site",
              "url": "https://songfestival2025.nl",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://songfestival2025.nl/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "description": "Unofficial fan site for Eurovision Song Contest 2025 in Basel, Switzerland. Explore participating countries, artists, songs, and event information.",
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Unofficial site disclaimer banner */}
          <div className="bg-yellow-500/10 border-b border-yellow-500/30 py-2 px-4 text-center text-sm">
            <strong>UNOFFICIAL FAN SITE:</strong> This is an unofficial Eurovision fan website with no affiliation to the European Broadcasting Union (EBU) or the official Eurovision Song Contest.
          </div>
          
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <SonnerToaster />
        </ThemeProvider>

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>      
        </body>
    </html>
  );
}