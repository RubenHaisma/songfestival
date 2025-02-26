import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Analytics from '@/components/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eurovision Songfestival 2025 | Basel, Switzerland',
  description: 'The official website for Eurovision Songfestival 2025 in Basel, Switzerland. Discover the participating countries, artists, songs, and vote for your favorites.',
  keywords: 'Eurovision 2025 Basel, Songfestival 2025 lineup, Eurovision fan vote, Eurovision 2025 tickets, Eurovision 2025 dates',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <SonnerToaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}