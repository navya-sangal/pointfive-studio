import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import { site } from "@/content/site";
import { rupees } from "@/lib/links";
import "./globals.css";

// Headlines
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

// The italic is only used for the hero's highlighted word, so it isn't preloaded:
// that keeps it off the critical path for the first paint.
const displayItalic = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-italic",
  display: "swap",
  preload: false,
});

// Body text and buttons
const body = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Just the ₹ sign from Bricolage Grotesque (1.6 KB). Google's "latin" files don't include it,
// so without this, prices would show ₹ in a different system font.
const rupee = localFont({
  src: "../fonts/bricolage-rupee.woff2",
  variable: "--font-rupee",
  weight: "200 800",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [{ prop: "unicode-range", value: "U+20B9" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  colorScheme: "light",
};

// Structured data so Google understands who we are, where we work and what we offer.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      email: site.email,
      slogan: site.tagline,
      description: site.seo.description,
      logo: `${site.url}/icon.svg`,
      image: `${site.url}/opengraph-image.png`,
      priceRange: `${rupees(site.packages.items[0].price)}+`,
      areaServed: [
        { "@type": "City", name: "Gurugram", alternateName: "Gurgaon" },
        { "@type": "City", name: "Mumbai" },
      ],
      knowsAbout: site.services.items.map((s) => s.name),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Packages",
        itemListElement: site.packages.items.map((p) => ({
          "@type": "Offer",
          name: `${p.name} package`,
          description: p.features.join(", "),
          priceSpecification: { "@type": "PriceSpecification", minPrice: p.price, priceCurrency: "INR" },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "en-IN",
      publisher: { "@id": `${site.url}/#business` },
    },
    {
      "@type": "FAQPage",
      mainEntity: site.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${display.variable} ${displayItalic.variable} ${body.variable} ${rupee.variable}`}>
      <body className="min-h-dvh font-sans">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-ink px-5 py-3 font-semibold text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {site.labels.skipLink}
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
