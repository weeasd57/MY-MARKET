import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import './globals.css';
import ClientLayout from '../components/ClientLayout';
import { AppProvider } from '../providers/AppProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'My Market - Modern E-commerce Platform',
  description: 'احدث منصة تجارة إلكترونية بتقنيات متقدمة وتصميم عصري',
  keywords: 'e-commerce, online shopping, تسوق أونلاين, متجر إلكتروني',
  authors: [{ name: 'My Market Team' }],
  creator: 'My Market',
  publisher: 'My Market',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'My Market - Modern E-commerce Platform',
    description: 'احدث منصة تجارة إلكترونية بتقنيات متقدمة وتصميم عصري',
    url: 'https://mymarket.com',
    siteName: 'My Market',
    images: [
      {
        url: 'https://mymarket.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My Market',
      },
    ],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Market - Modern E-commerce Platform',
    description: 'احدث منصة تجارة إلكترونية بتقنيات متقدمة وتصميم عصري',
    images: ['https://mymarket.com/og-image.jpg'],
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
  // manifest: '/manifest.json', // Commented out to resolve 404 error
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <AppProvider>
          <ClientLayout>{children}</ClientLayout>
        </AppProvider>
      </body>
    </html>
  );
}
