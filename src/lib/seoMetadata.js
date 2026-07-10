// SEO Metadata Generator Component
// Helps generate consistent, keyword-optimized metadata across pages

export const generatePageMetadata = ({
  title = "",
  description = "",
  keywords = [],
  image = "",
  url = "",
  type = "website",
  alternates = {},
}) => ({
  title,
  description,
  keywords: Array.isArray(keywords) ? keywords.join(", ") : keywords,
  openGraph: {
    title,
    description,
    type,
    url,
    image: image || "https://laptopdoc.com/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    image: image || "https://laptopdoc.com/twitter-image.png",
  },
  alternates,
  robots: {
    index: true,
    follow: true,
    googlebot: "index, follow",
  },
});

// SEO-optimized breadcrumb schema
export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// FAQ Schema for common repair questions
export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// Service Area Schema
export const generateServiceAreaSchema = () => ({
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  name: "LaptopDoc",
  serviceArea: {
    "@type": "City",
    name: "Chandigarh",
  },
  areaServed: [
    { "@type": "City", name: "Chandigarh" },
    { "@type": "City", name: "Mohali" },
    { "@type": "City", name: "Panchkula" },
    { "@type": "City", name: "Zirakpur" },
  ],
});
