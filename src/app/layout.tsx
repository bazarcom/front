import '@/app/styles/main.css';

import { Footer } from '@organisms/Footer';
import type { Metadata } from 'next';
import Script from 'next/script';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { Heading } from '@/components/atomic/organisms/Heading/Heading';
import { Sidebar } from '@/components/atomic/organisms/Sidebar';
import { inter } from '@/constants/fonts';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: 'Bazarkom.az - Ağıllı bazarlıq buradan başlayır!',
  description: 'Ağıllı bazarlıq buradan başlayır!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="az">
      <body className={inter.className}>
        <Heading />
        <Sidebar />
        {children}
        <Toaster
          containerStyle={{
            zIndex: 10001,
          }}
        />
        <Footer />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
