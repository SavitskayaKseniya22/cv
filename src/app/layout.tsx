import React from 'react';
import { Jura } from 'next/font/google';
import MainLayout from './components/main-layout';
import 'normalize.css/normalize.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './globals.scss';
import Status from './components/status';
import StyledComponentsRegistry from './components/registry';

const inter = Jura({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '700'],
});

export const metadata = {
  title: 'CV',
  description: 'Ksenia Savitskaia"s portfolio',
  icons: {
    icon: './favicon.ico',
  },
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
