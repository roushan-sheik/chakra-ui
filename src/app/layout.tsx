import type { Metadata } from 'next';

import Footer from '../components/layout/Footer';
import { QueryProvider } from '@/providers/QueryProvider';
import { SSDesignSystemProvider } from '@/styles/SSDesignSystemProvider';

import './reset.css';
import Header from '@/components/layout/Header';
import Subscribe from '@/components/layout/Subscribe';
import React from 'react';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'SkinSeoul',
  description: 'Generated by create next app',
};

const plusJakartaSans = localFont({
  variable: '--plus-jakarta-sans',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/PlusJakartaSans-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/PlusJakartaSans-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/PlusJakartaSans-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={plusJakartaSans.className} lang="en" suppressHydrationWarning>
      <body>
        <SSDesignSystemProvider>
          <QueryProvider>
            <Header />
            {children}
            <Subscribe />
            <Footer />
          </QueryProvider>
        </SSDesignSystemProvider>
      </body>
    </html>
  );
}
