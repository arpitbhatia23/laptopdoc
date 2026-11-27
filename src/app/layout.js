import "./globals.css";
import { Manrope } from "next/font/google";

export const metadata = {
  metadataBase: new URL("https://laptopdoc.in"),
  title: {
    template: "%s | LaptopDoc Chandigarh",
    default:
      "Laptop Repair in Chandigarh | Trusted Shop | LaptopDoc",
  },
  description:
    "Best laptop repair shop in Chandigarh Sector 20. Expert motherboard, screen, hinge & battery repair, plus certified used laptops. Same-day service in Tricity.",
  keywords: [
    "laptop repair in Chandigarh",
    "laptop repair Chandigarh",
    "best laptop repair shop",
    "laptop repair near me",
    "laptop repair Sector 20 Chandigarh",
    "used laptops in Chandigarh",
    "second hand laptops Chandigarh",
    "refurbished laptops",
    "sell old laptop Chandigarh",
    "laptop motherboard repair",
    "laptop screen replacement",
    "laptop hinge repair",
  ],
  authors: [{ name: "Gurpreet Singh (LaptopDoc)" }],
  creator: "LaptopDoc",
  publisher: "LaptopDoc",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://laptopdoc.in",
    siteName: "LaptopDoc",
    title:
      "Laptop Repair in Chandigarh | Best Repair Shop & Used Laptops | LaptopDoc",
    description:
      "Best laptop repair shop in Chandigarh Sector 20. Professional repair for all brands. Buy quality used laptops. Expert technicians with 16+ years experience.",
    images: [
      {
        url: "https://laptopdoc.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "LaptopDoc - Laptop Repair Chandigarh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laptop Repair in Chandigarh | LaptopDoc",
    description:
      "Best laptop repair shop in Chandigarh Sector 20. Professional repair for all brands with 16+ years experience.",
    creator: "@laptopdoc",
  },
  robots: {
    index: true,
    follow: true,
    googlebot:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    bingbot: "index, follow",
  },
  alternates: {
    canonical: "https://laptopdoc.in",
  },
  verification: {
    google: "97XZTgoqem_XxDZ9AQ5StL9m7MHidljsAytU1TAVXfA",
  },
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "LaptopDoc",
    image: "https://www.laptopdoc.in/logo.png",
    description:
      "Best laptop repair shop in Chandigarh Sector 20. Professional motherboard, screen, hinge repair and used laptop resale.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "SCO 66, 1st Floor, Sector 20-C",
      addressLocality: "Chandigarh",
      addressRegion: "Chandigarh",
      postalCode: "160020",
      addressCountry: "IN",
    },
    priceRange: "$$",
    telephone: "+919878224658",
    url: "https://laptopdoc.in",
    sameAs: [
      "https://www.facebook.com/laptopdoc",
      "https://www.instagram.com/laptopdoc",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Chandigarh",
      },
      {
        "@type": "City",
        name: "Mohali",
      },
      {
        "@type": "City",
        name: "Panchkula",
      },
      {
        "@type": "City",
        name: "Zirakpur",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="EHnBNfpBXl8AA1uNt3uvsezSZzy2XGFXr-qrvBHjrEM"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <link rel="canonical" href="https://laptopdoc.in" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1f2937" />
      </head>
      <body
        className={`${manrope.className}bg-gray-50 text-gray-900 antialiased `}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
