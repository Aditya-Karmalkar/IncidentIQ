import type { Metadata } from 'next';
import 'allo-font/allo.css';
import './globals.css';
import { SmoothScrollProvider } from '@/components/shared/smooth-scroll';

export const metadata: Metadata = {
  title: 'IncidentIQ — Technical Support Intelligence & Collective Agent Memory',
  description:
    'Every incident teaches the system how to solve the next one. Multi-agent technical support intelligence powered by Meko persistent context.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
