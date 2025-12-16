import type { Metadata } from 'next';
import './globals.css';
import { DarkModeProvider } from './providers/DarkModeProvider';
import { NavProvider } from './providers/NavProvider';
import { DesktopNav } from '@/components/layout/DesktopNav';
import { MobileBottomNav } from '@/components/layout/MobileBottomNav';

export const metadata: Metadata = {
  title: 'Design Logo',
  description: 'Design Logo Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <NavProvider>
          <body suppressHydrationWarning>
            <DesktopNav />
            {children}
            <MobileBottomNav />
          </body>
        </NavProvider>
      </DarkModeProvider>
    </html>
  );
}

