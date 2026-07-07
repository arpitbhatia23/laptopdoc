import Link from "next/link";
import { cache } from "react";
import { notFound } from "next/navigation";

import resellLaptopSchema from "@/models/resellLaptop.schema";
import dbConnect from "@/utils/dbConnect";
import LaptopGallery from "@/components/laptopGallery";
export const dynamic = "force-dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yourwebsite.com";

/* -------------------------------------------------------------------------- */
/*                               Helper Functions                             */
/* -------------------------------------------------------------------------- */

const getLaptopBySlug = cache(async (slug) => {
  await dbConnect();

  return resellLaptopSchema
    .findOne({
      slug: slug.toLowerCase(),
    })
    .lean();
});

function formatPrice(price) {
  const number = Number(price);

  if (Number.isNaN(number)) {
    return price;
  }

  return number.toLocaleString("en-IN");
}

function getDiscount(price, originalPrice) {
  const current = Number(price);
  const original = Number(originalPrice);

  if (
    !original ||
    Number.isNaN(current) ||
    Number.isNaN(original) ||
    original <= current
  ) {
    return null;
  }

  return Math.round(((original - current) / original) * 100);
}

function normalizeWhatsAppNumber(number) {
  if (!number) return null;

  const digits = String(number).replace(/\D/g, "");

  // Automatically add India's country code to a 10-digit number
  if (digits.length === 10) {
    return `91${digits}`;
  }

  return digits;
}

function getSeoDescription(laptop) {
  return (
    laptop.seoDescription ||
    `Buy ${laptop.title} with ${laptop.processor}, ${laptop.ram} RAM and ${
      laptop.storage
    } storage in ${laptop.location || "Chandigarh"} for ₹${formatPrice(
      laptop.price,
    )}. ${laptop.condition} condition.`
  );
}

/* -------------------------------------------------------------------------- */
/*                              Dynamic Metadata                              */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const laptop = await getLaptopBySlug(slug);

  if (!laptop) {
    return {
      title: "Laptop Not Found | Laptop Doc",
      description: "This laptop listing is no longer available.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title =
    laptop.seoTitle ||
    `${laptop.title} for Sale in ${
      laptop.location || "Chandigarh"
    } | Laptop Doc`;

  const description = getSeoDescription(laptop);

  const canonicalUrl = `${SITE_URL}/used-laptops/${laptop.slug}`;

  const mainImage = laptop.images?.[0]?.url;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Laptop Doc",
      type: "website",

      images: mainImage
        ? [
            {
              url: mainImage,
              alt: laptop.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: mainImage ? [mainImage] : [],
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                                Product Page                                */
/* -------------------------------------------------------------------------- */

export default async function LaptopDetailsPage({ params }) {
  const { slug } = await params;

  const laptop = await getLaptopBySlug(slug);

  if (!laptop) {
    notFound();
  }

  const discount = getDiscount(laptop.price, laptop.originalPrice);

  /*
   * Only send required image data to the Client Component.
   *
   * Do not send the full Mongoose image object because it contains
   * public_id and may also contain MongoDB _id values.
   */
  const galleryImages = (laptop.images || [])
    .filter((image) => image?.url)
    .map((image) => ({
      url: image.url,
    }));

  const features = (laptop.features || []).filter(Boolean);

  const whatsappNumber = normalizeWhatsAppNumber(
    laptop.whatsappNumber || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  );

  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in the ${laptop.title} listed for ₹${formatPrice(
      laptop.price,
    )}. Is it still available?`,
  );

  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : null;

  const canonicalUrl = `${SITE_URL}/used-laptops/${laptop.slug}`;

  const specifications = [
    {
      label: "Brand",
      value: laptop.brand,
    },
    {
      label: "Category",
      value: laptop.category,
    },
    {
      label: "Processor",
      value: laptop.processor,
    },
    {
      label: "RAM",
      value: laptop.ram,
    },
    {
      label: "Storage",
      value: laptop.storage,
    },
    {
      label: "Graphics",
      value: laptop.graphics,
    },
    {
      label: "Display",
      value: laptop.display,
    },
    {
      label: "Operating System",
      value: laptop.operatingSystem,
    },
    {
      label: "Battery Health",
      value: laptop.batteryHealth,
    },
    {
      label: "Condition",
      value: laptop.condition,
    },
    {
      label: "Warranty",
      value: laptop.warranty,
    },
    {
      label: "Location",
      value: laptop.location,
    },
  ].filter((item) => item.value);

  /* ------------------------------------------------------------------------ */
  /*                             Structured Data                              */
  /* ------------------------------------------------------------------------ */

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Product",

        name: laptop.title,

        description: getSeoDescription(laptop),

        image: galleryImages.map((image) => image.url),

        category: laptop.category,

        brand: {
          "@type": "Brand",
          name: laptop.brand,
        },

        itemCondition: "https://schema.org/UsedCondition",

        offers: {
          "@type": "Offer",

          url: canonicalUrl,

          priceCurrency: "INR",

          price: laptop.price,

          availability: laptop.available
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",

          seller: {
            "@type": "Organization",
            name: "Laptop Doc",
          },
        },
      },

      {
        "@type": "BreadcrumbList",

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Used Laptops",
            item: `${SITE_URL}/used-laptops`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: laptop.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm"
            >
              <Link
                href="/"
                className="font-medium text-gray-500 transition hover:text-orange-600"
              >
                Home
              </Link>

              <span className="text-gray-300">/</span>

              <Link
                href="/used-laptops"
                className="font-medium text-gray-500 transition hover:text-orange-600"
              >
                Used Laptops
              </Link>

              <span className="text-gray-300">/</span>

              <span className="max-w-xs truncate font-semibold text-gray-900">
                {laptop.title}
              </span>
            </nav>
          </div>
        </section>

        {/* Main Product */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left: Images */}
            <div>
              <LaptopGallery images={galleryImages} title={laptop.title} />
            </div>

            {/* Right: Product Details */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {laptop.featured && (
                  <span className="rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-orange-700">
                    ★ Featured
                  </span>
                )}

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide ${
                    laptop.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {laptop.available ? "● Available" : "● Sold Out"}
                </span>

                {laptop.condition && (
                  <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-gray-700">
                    {laptop.condition} Condition
                  </span>
                )}
              </div>

              {/* Brand */}
              <p className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-orange-600">
                {laptop.brand}
              </p>

              {/* Title */}
              <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                {laptop.title}
              </h1>

              {/* Quick information */}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
                {laptop.location && <span>📍 {laptop.location}</span>}

                {laptop.category && <span>💻 {laptop.category}</span>}

                {laptop.views > 0 && (
                  <span>👁 {formatPrice(laptop.views)} views</span>
                )}
              </div>

              {/* Main Specs */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                <QuickSpec label="Processor" value={laptop.processor} />

                <QuickSpec label="RAM" value={laptop.ram} />

                <QuickSpec label="Storage" value={laptop.storage} />

                <QuickSpec label="Graphics" value={laptop.graphics} />
              </div>

              {/* Price */}
              <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50 p-5">
                <p className="text-sm font-semibold text-gray-500">
                  Selling Price
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <span className="text-4xl font-black text-gray-950">
                    ₹{formatPrice(laptop.price)}
                  </span>

                  {laptop.originalPrice &&
                    Number(laptop.originalPrice) > Number(laptop.price) && (
                      <span className="text-lg font-semibold text-gray-400 line-through">
                        ₹{formatPrice(laptop.originalPrice)}
                      </span>
                    )}

                  {discount && (
                    <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-black text-white">
                      {discount}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Warranty */}
              {laptop.warranty && (
                <div className="mt-5 flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">
                    🛡️
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                      Warranty
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      {laptop.warranty}
                    </p>
                  </div>
                </div>
              )}

              {/* CTA buttons */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {laptop.available && whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-14 items-center justify-center rounded-xl bg-green-600 px-6 py-4 text-center font-black text-white transition hover:bg-green-700 active:scale-[0.98]"
                  >
                    WhatsApp Enquiry
                  </a>
                ) : (
                  <div className="flex min-h-14 items-center justify-center rounded-xl bg-gray-200 px-6 py-4 text-center font-black text-gray-500">
                    {laptop.available
                      ? "Contact Number Unavailable"
                      : "Currently Sold Out"}
                  </div>
                )}

                <Link
                  href="/used-laptops"
                  className="flex min-h-14 items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-6 py-4 text-center font-black text-gray-900 transition hover:border-orange-500 hover:text-orange-600"
                >
                  View More Laptops
                </Link>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-gray-400 sm:text-left">
                Confirm current stock, exact condition, warranty and included
                accessories before purchase.
              </p>
            </div>
          </div>
        </section>

        {/* Description + Specifications */}
        <section className="border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              {/* Description */}
              <div>
                <p className="text-sm font-black uppercase tracking-wider text-orange-600">
                  Product Details
                </p>

                <h2 className="mt-3 text-3xl font-black text-gray-950">
                  About This {laptop.category}
                </h2>

                {laptop.description ? (
                  <div className="mt-6 whitespace-pre-line text-base leading-8 text-gray-600">
                    {laptop.description}
                  </div>
                ) : (
                  <p className="mt-6 text-base leading-8 text-gray-600">
                    This {laptop.title} comes with a {laptop.processor},{" "}
                    {laptop.ram} RAM and {laptop.storage} storage. It is
                    available in {laptop.condition.toLowerCase()} condition for
                    ₹{formatPrice(laptop.price)}.
                  </p>
                )}

                {/* Features */}
                {features.length > 0 && (
                  <div className="mt-10">
                    <h2 className="text-2xl font-black text-gray-950">
                      Key Features
                    </h2>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {features.map((feature, index) => (
                        <div
                          key={`${feature}-${index}`}
                          className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4"
                        >
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white">
                            ✓
                          </span>

                          <span className="text-sm font-semibold leading-6 text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Specifications */}
              <div>
                <div className="overflow-hidden rounded-2xl border border-gray-200">
                  <div className="bg-gray-950 px-6 py-5 text-white">
                    <h2 className="text-2xl font-black">Full Specifications</h2>

                    <p className="mt-1 text-sm text-gray-400">
                      Complete configuration and product details
                    </p>
                  </div>

                  <dl className="divide-y divide-gray-100 bg-white">
                    {specifications.map((specification) => (
                      <SpecificationRow
                        key={specification.label}
                        label={specification.label}
                        value={specification.value}
                      />
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO section */}
        <section className="bg-gray-950 text-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-400">
                Laptop Doc
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Buy Tested Used Laptops in Chandigarh
              </h2>

              <p className="mt-5 leading-8 text-gray-400">
                Looking for a used or refurbished laptop in Chandigarh, Mohali,
                Panchkula or Zirakpur? Browse our current stock and contact us
                to confirm availability, condition and warranty details.
              </p>

              <Link
                href="/used-laptops"
                className="mt-8 inline-flex rounded-xl bg-orange-500 px-6 py-3.5 font-black text-white transition hover:bg-orange-600"
              >
                Browse All Available Laptops
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Small Components                              */
/* -------------------------------------------------------------------------- */

function QuickSpec({ label, value }) {
  if (!value) return null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
        {label}
      </p>

      <p className="mt-2 line-clamp-2 text-sm font-black leading-5 text-gray-900">
        {value}
      </p>
    </div>
  );
}

function SpecificationRow({ label, value }) {
  return (
    <div className="grid grid-cols-[0.8fr_1.2fr] gap-4 px-5 py-4 sm:px-6">
      <dt className="text-sm font-semibold text-gray-500">{label}</dt>

      <dd className="text-sm font-black text-gray-900">{value}</dd>
    </div>
  );
}
