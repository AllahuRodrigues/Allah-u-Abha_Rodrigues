import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://allahurodrigues.com"),
  title: {
    default: "Allah‑u‑Abha Rodrigues | ML Engineer • SWE",
    template: "%s | Allah‑u‑Abha Rodrigues",
  },
  description:
    "Portfolio of Allah‑u‑Abha Rodrigues — Machine Learning Engineer, Software Developer & Quantitative Analyst. Building reliable systems that turn data into value.",
  keywords: [
    "Allah-u-Abha Rodrigues",
    "Machine Learning Engineer",
    "Software Engineer",
    "Full‑Stack Developer",
    "Quantitative Analyst",
    "AI Research",
    "Data Science",
    "Tech Portfolio",
    "Yale University",
    "Porto",
    "Portugal",
    "Yale University Computer Science",
    "Lisbon",
    "New York",
    "San Francisco",
    "California",
  ],
  authors: { name: "Allah‑u‑Abha Rodrigues", url: "https://allahurodrigues.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://allahurodrigues.com",
    siteName: "Allah‑u‑Abha Rodrigues Portfolio",
    title: "Allah‑u‑Abha Rodrigues | ML Engineer • SWE • Quant",
    description:
      "Turning data into actionable insights and powerful software.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Allah‑u‑Abha Rodrigues Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitter",
    creator: "@yourTwitter",
    title: "Allah‑u‑Abha Rodrigues | ML Engineer • SWE • Quant",
    description:
      "Turning data into actionable insights and powerful software.",
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
  verification: {
    google: "your-google-verification-code",
    other: { bing: "your-bing-code" },
  },
  category: "technology",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Allah‑u‑Abha Rodrigues",
      jobTitle: [
        "Machine Learning Engineer",
        "Software Developer",
        "Quantitative Analyst",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Yale University",
      },
      sameAs: [
        "https://www.linkedin.com/in/allahurodrigues",
        "https://github.com/allahurodrigues",
      ],
      url: "https://allahurodrigues.com",
      address: [
        {
          "@type": "PostalAddress",
          addressCountry: "PT",
          addressRegion: "Lisbon",
        },
        {
          "@type": "PostalAddress",
          addressCountry: "US",
          addressRegion: "California",
        },
      ],
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
