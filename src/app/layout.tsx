import type { Metadata } from 'next';
import './globals.css';

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
      <body  suppressHydrationWarning>{children}</body>
    </html>
  );
}

