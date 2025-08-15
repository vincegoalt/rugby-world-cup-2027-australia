import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import TicketCTA from './components/TicketCTA';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rugbyaustralia2027.com'),
  title: {
    default: "Rugby World Cup 2027 Australia | First 24-Team Tournament",
    template: "%s | Rugby World Cup 2027 Australia"
  },
  description: "Experience the historic first 24-team Rugby World Cup in Australia! October 1 - November 13, 2027 across 7 host cities. Get tickets, view match schedules, team information, and plan your rugby adventure.",
  keywords: ["Rugby World Cup 2027", "Australia", "24 teams", "rugby", "tickets", "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Newcastle", "Townsville", "All Blacks", "Springboks", "Wallabies"],
  authors: [{ name: "Rugby World Cup 2027 Australia" }],
  creator: "Rugby World Cup 2027 Australia",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
        color: '#8B4513',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://rugbyaustralia2027.com",
    title: "Rugby World Cup 2027 Australia | First 24-Team Tournament",
    description: "Experience the historic first 24-team Rugby World Cup in Australia! October 1 - November 13, 2027 across 7 host cities.",
    siteName: "Rugby World Cup 2027 Australia",
    images: [
      {
        url: "https://rugbyaustralia2027.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rugby World Cup 2027 Australia",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rugby World Cup 2027 Australia | 24 Teams",
    description: "Experience the historic first 24-team Rugby World Cup in Australia! October 1 - November 13, 2027.",
    images: ["https://rugbyaustralia2027.com/images/og-image.jpg"],
    creator: "@rugbyworldcup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rugbyaustralia2027.com'
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body className="font-inter antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <TicketCTA />
      </body>
    </html>
  );
}
