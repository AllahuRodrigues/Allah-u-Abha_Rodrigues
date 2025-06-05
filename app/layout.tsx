import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Allah-u-Abha Rodrigues | ML Engineer & Software Developer",
  description: "Portfolio website of Allah-u-Abha Rodrigues, showcasing ML research, software development, and quantitative analysis work.",
  keywords: ["Machine Learning", "Software Development", "AI Research", "Portfolio", "Yale University"],
  authors: [{ name: 'Allah-u-Abha Rodrigues' }],
  metadataBase: new URL('https://allahurodrigues.com'),
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Allah-u-Abha Rodrigues | ML Engineer & Software Developer',
    description: 'Turning data into actionable insights and powerful software',
    url: 'https://allahurodrigues.com',
    siteName: 'Allah-u-Abha Rodrigues Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Allah-u-Abha Rodrigues Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allah-u-Abha Rodrigues | ML Engineer & Software Developer',
    description: 'Turning data into actionable insights and powerful software',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://allahurodrigues.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
