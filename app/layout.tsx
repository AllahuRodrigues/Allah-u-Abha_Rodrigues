import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://allahurodrigues.com"),
  title: {
    default: "Allah-u-Abha Rodrigues — engineer & artist",
    template: "%s | Allah-u-Abha Rodrigues",
  },
  description:
    "Engineer and artist from Maputo, Mozambique — the first person from Mozambique to attend Yale. Senior doing a B.S. in Computer Science + Statistics & Data Science, now at the Yale Hacker House in San Francisco. Graphite drawings and software, side by side.",
  keywords: [
    "Allah-u-Abha Rodrigues",
    "Allahu Rodrigues",
    "artist",
    "engineer",
    "Maputo",
    "Mozambique",
    "Yale University",
    "Yale Hacker House",
    "San Francisco",
    "graphite drawing",
    "software engineer",
    "machine learning",
  ],
  authors: { name: "Allah-u-Abha Rodrigues", url: "https://allahurodrigues.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://allahurodrigues.com",
    siteName: "Allah-u-Abha Rodrigues",
    title: "Allah-u-Abha Rodrigues — engineer & artist",
    description:
      "Graphite drawings from Maputo, software from everywhere. Yale senior, currently at the Yale Hacker House in San Francisco.",
    images: [
      {
        url: "/art/capulana.jpg",
        width: 1800,
        height: 1290,
        alt: "Capulana — graphite drawing by Allah-u-Abha Rodrigues",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allah-u-Abha Rodrigues — engineer & artist",
    description:
      "Graphite drawings from Maputo, software from everywhere. Yale senior, currently at the Yale Hacker House in San Francisco.",
    images: ["/art/capulana.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Allah-u-Abha Rodrigues",
  jobTitle: ["Software Engineer", "Artist"],
  description:
    "Engineer and artist from Maputo, Mozambique — the first person from Mozambique to attend Yale. B.S. in Computer Science + Statistics & Data Science; graphite drawings and software.",
  birthPlace: { "@type": "Place", name: "Maputo, Mozambique" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Yale University" },
  knowsAbout: [
    "graphite drawing",
    "fine art",
    "machine learning",
    "software engineering",
    "statistics",
  ],
  sameAs: [
    "https://www.linkedin.com/in/allahu-rodrigues/",
    "https://github.com/AllahuRodrigues",
  ],
  url: "https://allahurodrigues.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="grain font-body antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
