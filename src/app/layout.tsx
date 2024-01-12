import React from 'react';
import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/components/registry';
import { Jura } from 'next/font/google';

import MainLayout from './components/main-layout';
import 'normalize.css/normalize.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './globals.scss';
import Status from './components/status';

const inter = Jura({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CV',
  description: 'Ksenia Savitskaia"s portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <MainLayout>{children}</MainLayout>
          <Status />
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
