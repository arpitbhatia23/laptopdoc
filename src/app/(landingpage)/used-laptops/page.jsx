import resellLaptopSchema from "@/models/resellLaptop.schema";
import dbConnect from "@/utils/dbConnect";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Award,
  Cpu,
  Battery,
  Monitor,
  HardDrive,
  Sparkles,
  MapPin,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const siteUrl = "https://laptopdoc.in";

export const metadata = {
  title: {
    absolute: "Used Laptops for Sale in Chandigarh | LaptopDoc",
  },
  description:
    "Buy tested used & refurbished laptops in Chandigarh Sector 20. Certified Dell, HP, Lenovo & Apple laptops with 25-point check, SSD speed & warranty.",
  keywords: [
    "used laptops in Chandigarh",
    "second hand laptops Chandigarh",
    "refurbished laptops Chandigarh Sector 20",
    "buy used laptop Mohali Panchkula",
    "used Dell laptop Chandigarh",
    "second hand Lenovo ThinkPad Chandigarh",
    "used HP laptop price Tricity",
    "refurbished laptops with warranty",
  ],
  alternates: {
    canonical: `${siteUrl}/used-laptops`,
  },
  openGraph: {
    title: "Used Laptops for Sale in Chandigarh | LaptopDoc",
    description:
      "Buy tested used & refurbished laptops in Chandigarh Sector 20 with 25-point inspection, clean OS & testing warranty.",
    url: `${siteUrl}/used-laptops`,
    siteName: "LaptopDoc",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og/used-laptops.jpg`,
        width: 1200,
        height: 630,
        alt: "Tested Used Laptops in Chandigarh Sector 20",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Used Laptops for Sale in Chandigarh | LaptopDoc",
    description:
      "Tested second hand and refurbished laptops with 25-point hardware check and warranty in Sector 20 Chandigarh.",
  },
};

const WHATSAPP_NUMBER = "919878224658";

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

function getImageUrl(image) {
  if (!image) return null;
  if (typeof image === "string") return image;
  return image.url || image.secure_url || null;
}

function formatPrice(price) {
  const numericPrice = Number(price);
  if (Number.isNaN(numericPrice)) return price;
  return numericPrice.toLocaleString("en-IN");
}

function getDiscount(price, originalPrice) {
  const current = Number(price);
  const original = Number(originalPrice);
  if (
    Number.isNaN(current) ||
    Number.isNaN(original) ||
    original <= current ||
    original <= 0
  ) {
    return null;
  }
  return Math.round(((original - current) / original) * 100);
}

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

export default async function UsedLaptopsPage() {
  await dbConnect();

  const laptops = await resellLaptopSchema
    .find({
      available: true,
    })
    .sort({
      createdAt: -1,
    })
    .lean();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Used Laptops",
        item: `${siteUrl}/used-laptops`,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tested Used & Refurbished Laptops in Chandigarh",
    itemListElement: laptops.slice(0, 15).map((laptop, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: laptop.title,
        description: `${laptop.brand || ""} laptop with ${laptop.processor || ""}, ${laptop.ram || ""}, ${laptop.storage || ""}. Condition: ${laptop.condition || "Used - Excellent"}.`,
        image: getImageUrl(laptop.images?.[0]) || `${siteUrl}/logo.png`,
        url: `${siteUrl}/used-laptops/${laptop.slug}`,
        offers: {
          "@type": "Offer",
          price: laptop.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/UsedCondition",
          seller: {
            "@type": "LocalBusiness",
            name: "LaptopDoc",
            address: {
              "@type": "PostalAddress",
              streetAddress: "SCO 66, 1st Floor, Sector 20-C",
              addressLocality: "Chandigarh",
              postalCode: "160020",
              addressCountry: "IN",
            },
          },
        },
      },
    })),
  };

  const faqs = [
    {
      question: "What warranty comes with used laptops at LaptopDoc Chandigarh?",
      answer:
        "Every used and refurbished laptop from LaptopDoc in Sector 20-C Chandigarh includes our 30 to 90 days hardware testing warranty covering the motherboard, screen, keyboard, and power delivery, backed by direct in-person walk-in store support.",
    },
    {
      question: "How are second-hand laptops tested before being put up for sale?",
      answer:
        "All laptops undergo our thorough 25-point hardware check: battery health test via command line report, SSD SMART health check via CrystalDiskInfo, display dead pixel and backlight bleed tests, keyboard key-by-key test, port validation, and heavy CPU/GPU thermal stress testing.",
    },
    {
      question: "Can I inspect and test the laptop in person before buying?",
      answer:
        "Yes! We strongly encourage customers from Chandigarh, Mohali, Panchkula, and Zirakpur to visit our store at SCO 66, 1st Floor, Sector 20-C, Chandigarh to physically inspect, type on, benchmark, and test any laptop before purchasing.",
    },
    {
      question: "Can I exchange or sell my old laptop here?",
      answer:
        "Yes. We offer fair-market trade-in and resale value for your old laptop. Bring your device or send specs and photos on WhatsApp (+91 98782 24658) for a rapid evaluation.",
    },
  ];

  const faqSchema = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-[#f7f7f7]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-br from-orange-500 via-orange-500 to-orange-600 text-white">
          <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4" />
                25-Point Checked • 100% Tested • Ready to Use
              </span>

              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Used Laptops for Sale in Chandigarh
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-orange-50 sm:text-lg">
                Buy certified second-hand & refurbished laptops in Chandigarh, Mohali,
                Panchkula, and Zirakpur with original chargers, fast SSDs, and warranty.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium">
                {[
                  "25-Point Hardware Tested",
                  "Original OEM Charger Included",
                  "Clean Windows OS & SSD Setup",
                  "30–90 Days Testing Warranty",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-4 py-2 text-gray-900 shadow-sm font-bold"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Listing */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
                Verified Stock in Sector 20-C
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-950">
                Available Laptops
              </h2>
            </div>

            {laptops.length > 0 && (
              <p className="text-sm font-medium text-gray-500">
                {laptops.length} {laptops.length === 1 ? "laptop" : "laptops"} ready for immediate pickup
              </p>
            )}
          </div>

          {laptops.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {laptops.map((laptop) => {
                const imageUrl = getImageUrl(laptop.images?.[0]);
                const discount = getDiscount(laptop.price, laptop.originalPrice);
                const productUrl = `/used-laptops/${laptop.slug}`;
                const whatsappMessage = encodeURIComponent(
                  `Hi, I am interested in the ${laptop.title} listed for ₹${formatPrice(
                    laptop.price,
                  )} at LaptopDoc Sector 20 Chandigarh. Is it still available?`,
                );
                const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

                return (
                  <article
                    key={laptop._id.toString()}
                    className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
                  >
                    <Link
                      href={productUrl}
                      className="block relative aspect-4/3 overflow-hidden bg-gray-100"
                      aria-label={`View details for ${laptop.title}`}
                    >
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={`${laptop.title} used laptop for sale in Chandigarh`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-gray-100 text-gray-400">
                          <span className="text-4xl" aria-hidden="true">
                            💻
                          </span>
                          <span className="mt-2 text-sm font-medium">
                            No image available
                          </span>
                        </div>
                      )}

                      {laptop.condition && (
                        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-gray-900 shadow-sm backdrop-blur">
                          {laptop.condition}
                        </span>
                      )}

                      {discount !== null && (
                        <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                          {discount}% OFF
                        </span>
                      )}
                    </Link>

                    <div className="p-5 flex-1 flex flex-col">
                      {laptop.brand && (
                        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-600">
                          {laptop.brand}
                        </p>
                      )}

                      <Link href={productUrl} className="block">
                        <h3 className="line-clamp-2 min-h-14 text-xl font-black leading-7 text-gray-950 transition-colors hover:text-orange-600">
                          {laptop.title}
                        </h3>
                      </Link>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        {laptop.processor && (
                          <SpecItem label="Processor" value={laptop.processor} />
                        )}
                        {laptop.ram && (
                          <SpecItem label="RAM" value={laptop.ram} />
                        )}
                        {laptop.storage && (
                          <SpecItem label="Storage" value={laptop.storage} />
                        )}
                        {laptop.graphics && (
                          <SpecItem label="Graphics" value={laptop.graphics} />
                        )}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {laptop.operatingSystem && (
                          <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">
                            {laptop.operatingSystem}
                          </span>
                        )}
                        {laptop.display && (
                          <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600">
                            {laptop.display}&quot; Display
                          </span>
                        )}
                        {laptop.batteryHealth != null &&
                          laptop.batteryHealth !== "" && (
                            <span className="rounded-md bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                              🔋 {laptop.batteryHealth}% Battery
                            </span>
                          )}
                      </div>

                      <div className="my-5 border-t border-gray-100" />

                      <div className="mt-auto">
                        <p className="text-xs font-medium text-gray-500">
                          Selling Price
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-2">
                          <span className="text-2xl font-black text-gray-950">
                            ₹{formatPrice(laptop.price)}
                          </span>
                          {laptop.originalPrice &&
                            Number(laptop.originalPrice) >
                              Number(laptop.price) && (
                              <span className="text-sm font-medium text-gray-400 line-through">
                                ₹{formatPrice(laptop.originalPrice)}
                              </span>
                            )}
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <Link
                          href={productUrl}
                          className="flex min-h-12 items-center justify-center rounded-xl border-2 border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-900 transition hover:border-orange-500 hover:text-orange-600 active:scale-[0.98]"
                        >
                          View Details
                        </Link>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ask about ${laptop.title} on WhatsApp`}
                          className="flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-green-600 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-green-700 active:scale-[0.98]"
                        >
                          <MessageCircle className="h-4 w-4" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
              <div className="text-5xl" aria-hidden="true">
                💻
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                New Stock Arriving Soon
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                Fresh batches of tested business laptops are arriving weekly.
                Contact our Sector 20-C shop directly on WhatsApp for incoming stock alerts.
              </p>
            </div>
          )}
        </section>

        {/* 25-Point Inspection Protocol */}
        <section className="border-t border-gray-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-extrabold text-orange-700">
                <Award className="h-4 w-4" />
                The LaptopDoc Difference
              </span>
              <h2 className="mt-4 text-3xl font-black text-gray-950 sm:text-4xl">
                Our 25-Point Hardware Quality Gate
              </h2>
              <p className="mt-3 text-base text-gray-600">
                Unlike private peer-to-peer sellers, every laptop sold at LaptopDoc Sector 20-C Chandigarh is bench-tested before being listed.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white font-bold">
                  <Battery className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-950">
                  1. Battery & Power Diagnostics
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We generate an official command-line battery report (`powercfg /batteryreport`) to measure design vs full-charge capacity, verify minimum 75% battery health, and test charging stability with original adapters.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white font-bold">
                  <HardDrive className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-950">
                  2. SSD SMART & Health Testing
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We scan the storage drive with CrystalDiskInfo to verify zero bad sectors, 90%+ health status, read/write endurance, and install fresh high-speed NVMe or SATA SSDs for instant 15-second boot times.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white font-bold">
                  <Monitor className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-950">
                  3. Display & Hinge Integrity
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Full-screen color tests inspect for dead pixels, white pressure marks, and backlight bleeding. Hinges are torque-calibrated and inspected to guarantee smooth, crack-free opening.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white font-bold">
                  <Cpu className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-950">
                  4. Thermal Burn-In & Stress Test
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We run a 15-minute 100% CPU/GPU stress test (Cinebench/AIDA64) to ensure the cooling fan operates quietly, internal temperatures stay under 80°C, and there are no unexpected thermal shutdowns.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white font-bold">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-950">
                  5. Keyboard, Ports, Wi-Fi & Audio
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Every key is tested for responsive actuation on a key-by-key utility. All USB ports, HDMI, headphone jack, webcam, microphone, and dual-band Wi-Fi/Bluetooth connections are verified.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white font-bold">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-950">
                  6. Clean OS & Testing Warranty
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Laptops are delivered with a freshly formatted, clean Windows operating system, original manufacturer drivers, and our 30 to 90 days hardware testing warranty backed by our physical store in Sector 20.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Category Buying Guide */}
        <section className="bg-gray-100 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black text-gray-950">
                Which Used Laptop Is Right for You?
              </h2>
              <p className="mt-3 text-base text-gray-600">
                We organize our inventory by workload and budget to help you choose the best configuration.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Under ₹18,000
                </span>
                <h3 className="mt-2 text-xl font-extrabold text-black">
                  Students & Daily Browsing
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  Ideal for school, online classes, MS Office, YouTube, and web browsing. Features Core i3 / i5 processors, 8GB RAM, and 256GB SSD storage.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm border-2 border-orange-500">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  ₹18,000 – ₹32,000 (Popular)
                </span>
                <h3 className="mt-2 text-xl font-extrabold text-black">
                  Business & Professional Work
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  Commercial-grade Lenovo ThinkPad, Dell Latitude, and HP EliteBook models with magnesium-alloy durability, 8GB/16GB RAM, Full HD screens, and fast NVMe SSDs.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  ₹32,000 and Above
                </span>
                <h3 className="mt-2 text-xl font-extrabold text-black">
                  Coding, Editing & Gaming
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  High-performance machines: Core i7, AMD Ryzen 7, Apple MacBook Air/Pro, or laptops with dedicated NVIDIA graphics for software development and creative editing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
                Store Location & In-Person Testing
              </p>
              <h2 className="mt-3 text-3xl font-black text-gray-950">
                Visit LaptopDoc in Sector 20-C Chandigarh
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                <p>
                  Buying a used laptop online from classifieds or unverified sellers carries the risk of hidden faults, liquid damage, or fake battery reports.
                </p>
                <p>
                  At LaptopDoc, you are invited to visit our walk-in shop at <strong>SCO 66, 1st Floor, Sector 20-C, Chandigarh</strong>. You can sit down, inspect the physical machine, test the keyboard and screen, check battery health, and test performance before spending a single rupee.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/919878224658"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-bold text-white shadow-lg hover:bg-orange-600 transition"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Enquire on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3.5 font-bold text-gray-800 hover:bg-gray-50 transition"
                  >
                    <MapPin className="h-5 w-5 text-orange-500" />
                    View Store Address
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-950 p-6 text-white shadow-sm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-orange-400">
                Buyer FAQs
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Frequently Asked Questions
              </h2>
              <div className="mt-7 divide-y divide-white/10">
                {faqs.map((faq) => (
                  <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                    <h3 className="font-bold leading-6 text-lg text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function SpecItem({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50 p-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
        {label}
      </p>
      <p className="mt-1 line-clamp-2 text-sm font-bold text-gray-800">
        {value}
      </p>
    </div>
  );
}
