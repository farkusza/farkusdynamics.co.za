import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FarkusDynamics — AI-Augmented Operations for Modern Businesses',
  description: 'FarkusDynamics builds intelligent automation, analytics, and AI-powered tools that help businesses operate smarter, faster, and more efficiently.',
  keywords: ['AI', 'automation', 'analytics', 'business intelligence', 'machine learning', 'South Africa'],
  openGraph: {
    title: 'FarkusDynamics — AI-Augmented Operations',
    description: 'Intelligent automation, analytics, and AI-powered tools for modern businesses.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'FarkusDynamics',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FarkusDynamics — AI-Augmented Operations',
    description: 'Intelligent automation, analytics, and AI-powered tools for modern businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
