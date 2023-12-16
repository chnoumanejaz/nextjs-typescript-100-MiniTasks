import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import DesktopHeader from './components/layout/header/DesktopHeader';
import MobileHeader from './components/layout/header/MobileHeader';
import SideBar from './components/layout/sidebar/SideBar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mini Solutions - Nouman Ejaz',
  description:
    'A website which contains 100+ mini solutions of most used components using nextjs and typescript.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-white ${inter.className}`}
        suppressHydrationWarning={true}>
        <aside>
          <SideBar />
        </aside>

        <header>
          <DesktopHeader />
          <MobileHeader />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
