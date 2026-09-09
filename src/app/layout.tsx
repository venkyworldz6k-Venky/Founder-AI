import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'KEDARI SRI VENKATESH — Data Analyst · AI Engineer · Founder',
  description:
    'Portfolio of Kedari Sri Venkatesh: Data Analyst, AI Engineer & Founder. Building intelligent AI systems, data-driven applications, healthcare automation, and scalable digital products.',
  keywords: [
    'Data Analyst',
    'AI Engineer',
    'Founder',
    'Kedari Sri Venkatesh',
    'Data Analytics',
    'Machine Learning',
    'Computer Vision',
    'Healthcare AI',
    'Full Stack Development',
    'Three.js',
    'Next.js 15',
  ],
  authors: [{ name: 'Kedari Sri Venkatesh' }],
  openGraph: {
    title: 'KEDARI SRI VENKATESH — Data Analyst · AI Engineer · Founder',
    description:
      'Data Analyst, AI Engineer, and Founder passionate about building intelligent software, data analytics platforms, computer vision solutions, and healthcare AI products.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="bg-[#0A0A08] text-[#D8D2C4] antialiased"
    >
      <body
        suppressHydrationWarning
        className="relative bg-[#0A0A08] min-h-screen text-[#D8D2C4] font-inter overflow-x-hidden"
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <div className="film-grain" aria-hidden="true" />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
