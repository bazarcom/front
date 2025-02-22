import '@/app/styles/main.css';

import { Footer } from '@organisms/Footer';
import type { Metadata } from 'next';
import { ReactNode } from "react";
import { Toaster } from 'react-hot-toast';

import { Heading } from '@/components/atomic/organisms/Heading/Heading';
import { Sidebar } from '@/components/atomic/organisms/Sidebar';
import { inter } from '@/constants/fonts';

export const metadata: Metadata = {
  title: 'Bazarkom.az - Agilli bazarliq burdan bashlayir',
  description: 'Agilli bazarliq burdan bashlayir',
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
      </body>
    </html>
  );
}
