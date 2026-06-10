import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://allahurodrigues.com"),
  title: {
    default: "Allah‑u‑Abha Rodrigues | Founder, Regilon • Software Engineer",
    template: "%s | Allah‑u‑Abha Rodrigues",
  },
  description:
    "Allah‑u‑Abha Rodrigues — Founder of Regilon (property-tax intelligence for CRE), senior at Yale studying CS & Statistics. Building at the intersection of machine learning, document intelligence, and real estate data.",
  keywords: [
    "Allah-u-Abha Rodrigues",
    "Regilon",
    "Property Tax Intelligence",
    "Commercial Real Estate",
    "Tenure",
    "PropTech",
    "Machine Learning Engineer",
    "Software Engineer",
    "Full‑Stack Developer",
    "Yale University",
    "Computer Science",
    "Statistics",
    "New Haven",
    "San Francisco",
    "Yale Hacker House",
  ],
  authors: { name: "Allah‑u‑Abha Rodrigues", url: "https://allahurodrigues.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://allahurodrigues.com",
    siteName: "Allah‑u‑Abha Rodrigues",
    title: "Allah‑u‑Abha Rodrigues | Founder, Regilon",
    description:
      "Founder of Regilon — property-tax intelligence for commercial real estate portfolios. Senior at Yale, CS & Statistics.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Allah‑u‑Abha Rodrigues — Founder, Regilon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allah‑u‑Abha Rodrigues | Founder, Regilon",
    description:
      "Founder of Regilon — property-tax intelligence for commercial real estate portfolios. Senior at Yale, CS & Statistics.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Allah‑u‑Abha Rodrigues",
      jobTitle: [
        "Founder",
        "Software Engineer",
        "Machine Learning Engineer",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Regilon",
        url: "https://regilon.com",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Yale University",
      },
      sameAs: [
        "https://www.linkedin.com/in/allahu-rodrigues",
        "https://github.com/AllahuRodrigues",
      ],
      url: "https://allahurodrigues.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
        addressRegion: "Connecticut",
        addressLocality: "New Haven",
      },
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
