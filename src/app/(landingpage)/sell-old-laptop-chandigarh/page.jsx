import Link from "next/link";
import {
  Laptop,
  MessageCircle,
  Camera,
  ClipboardList,
  IndianRupee,
  CheckCircle,
  MapPin,
  ShieldCheck,
  Lock,
  Award,
  ArrowRight,
  RefreshCw,
  AlertTriangle,
  Zap,
} from "lucide-react";

const siteUrl = "https://laptopdoc.in";

export const metadata = {
  title: {
    absolute: "Sell Old Laptop in Chandigarh | Best Price | LaptopDoc",
  },
  description:
    "Sell old or used laptops in Chandigarh Sector 20. Best resale value for Dell, HP, Lenovo & Apple. Free data wipe, fast quote & instant cash or UPI payment.",
  keywords: [
    "sell old laptop Chandigarh",
    "sell used laptop Chandigarh",
    "old laptop buyer Chandigarh",
    "used laptop buyer Mohali",
    "sell laptop Tricity",
    "laptop resale Chandigarh Sector 20",
    "sell broken laptop Chandigarh",
    "cash for old laptops Chandigarh",
  ],
  alternates: {
    canonical: `${siteUrl}/sell-old-laptop-chandigarh`,
  },
  openGraph: {
    title: "Sell Old Laptop in Chandigarh | Best Price | LaptopDoc",
    description:
      "Get the highest resale value for your old or used laptop in Chandigarh, Mohali, Panchkula & Zirakpur. Instant evaluation and free data wipe.",
    url: `${siteUrl}/sell-old-laptop-chandigarh`,
    siteName: "LaptopDoc",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og/sell-old-laptop.jpg`,
        width: 1200,
        height: 630,
        alt: "Sell Old Laptop in Chandigarh Sector 20",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Old Laptop in Chandigarh | LaptopDoc",
    description:
      "Sell your old laptop at the best resale price in Chandigarh Sector 20. Free data wipe and instant cash/UPI payment.",
  },
};

const whatsappNumber = "919878224658";

const steps = [
  {
    icon: Laptop,
    title: "Share Laptop Model",
    desc: "Send brand and model name (Dell Inspiron, HP Pavilion, Lenovo ThinkPad, ASUS TUF, Acer Aspire, Apple MacBook, MSI etc.).",
  },
  {
    icon: ClipboardList,
    title: "Send Configuration",
    desc: "Mention processor generation (i3/i5/i7/Ryzen), RAM capacity, SSD/HDD storage, graphics card, and battery backup.",
  },
  {
    icon: Camera,
    title: "Upload Laptop Images",
    desc: "Send clear photos of laptop top lid, screen, keyboard, bottom casing, power adapter, and any cosmetic flaws.",
  },
  {
    icon: IndianRupee,
    title: "Get Best Valuation",
    desc: "Our hardware team evaluates current market resale value and provides an immediate, transparent price quote.",
  },
];

export default function SellOldLaptopPage() {
  const whatsappText =
    "Hi, I want to sell my old laptop.%0A%0ABrand/Model:%0AProcessor:%0ARAM:%0AStorage:%0AGraphics:%0ABattery Backup:%0ACondition:%0AExpected Price:%0ALocation:";

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
        name: "Sell Old Laptop",
        item: `${siteUrl}/sell-old-laptop-chandigarh`,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "LaptopDoc - Sell Old Laptop Chandigarh",
    description:
      "Sell used and old laptops in Chandigarh Sector 20. Fair valuations, free secure data wiping, and instant payments.",
    url: `${siteUrl}/sell-old-laptop-chandigarh`,
    telephone: "+919878224658",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "SCO 66, 1st Floor, Sector 20-C",
      addressLocality: "Chandigarh",
      addressRegion: "Chandigarh",
      postalCode: "160020",
      addressCountry: "IN",
    },
    areaServed: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur"],
  };

  const faqs = [
    {
      question: "How is the resale price of my old laptop determined?",
      answer:
        "Valuation depends on brand, processor generation (e.g. 8th Gen vs 12th Gen), RAM/SSD configuration, physical body condition, display health (no lines/spots), battery backup, and whether the original charger and purchase bill are available.",
    },
    {
      question: "Will my personal data and passwords be completely wiped?",
      answer:
        "Yes! At LaptopDoc, data security is our top priority. We perform cryptographic zero-fill formatting on storage drives before any device is refurbished or resold, guaranteeing that your personal files, banking sessions, and passwords can never be recovered.",
    },
    {
      question: "Can I sell a laptop that is completely dead or has a broken screen?",
      answer:
        "Yes. We buy dead, liquid-damaged, and physically cracked laptops for genuine salvageable spare parts (RAM, SSD, casing, hinges). Send photos on WhatsApp for an assessment.",
    },
    {
      question: "How do I receive payment when selling my laptop?",
      answer:
        "Payment is made instantly on the spot via Cash, UPI (Google Pay, PhonePe, Paytm), or Immediate Bank Transfer (IMPS) as soon as physical inspection is completed at our Sector 20-C Chandigarh store.",
    },
    {
      question: "What documents are required to sell an old laptop?",
      answer:
        "To comply with local regulations and prevent the resale of stolen goods, we require a valid government photo ID (Aadhaar Card or Driving License) and the original purchase invoice if available.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-black">
        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-br from-orange-50 via-white to-orange-100 px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-md bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
                <ShieldCheck className="h-4 w-4" />
                Trusted Old Laptop Buyer in Chandigarh
              </span>

              <h1 className="mt-6 text-3xl font-extrabold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
                Sell Your Old Laptop in Chandigarh at the Best Price
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
                Looking to sell your used, old, or broken laptop? Send us your laptop brand,
                configuration, and photos on WhatsApp. We provide fair market valuations, free
                secure data wiping, and instant cash/UPI payments across Chandigarh, Mohali, Panchkula, and Zirakpur.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-600 px-8 py-4 font-bold text-white shadow-lg hover:bg-orange-700 transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  Get Instant Price on WhatsApp
                </a>

                {/* Fixed Internal Link to /used-laptops */}
                <Link
                  href="/used-laptops"
                  className="inline-flex items-center justify-center rounded-md border border-orange-300 px-6 py-4 font-bold text-orange-700 hover:bg-orange-50 transition"
                >
                  View Used Laptops for Sale
                </Link>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-600">
                <MapPin className="h-4 w-4 text-orange-600" />
                Walk-in Store: SCO 66, 1st Floor, Sector 20-C, Chandigarh
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
              <div className="rounded-xl bg-gray-50 p-6 text-center">
                <Laptop className="mx-auto h-20 w-20 text-orange-600" />
                <h2 className="mt-4 text-2xl font-extrabold text-gray-900">
                  Quick WhatsApp Checklist
                </h2>
                <p className="mt-2 text-xs text-gray-500">
                  Send these details to +91 98782 24658 for a 15-minute valuation
                </p>

                <ul className="mt-6 space-y-3 text-left text-sm text-gray-700">
                  {[
                    "Laptop brand and exact model number",
                    "Processor (e.g. i3 / i5 / i7 / Ryzen 5)",
                    "Installed RAM and SSD/HDD storage capacity",
                    "Battery backup time & original charger availability",
                    "Physical condition & any screen/hinge faults",
                    "Original bill, box, or purchase year if available",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-center">
                      <CheckCircle className="h-4 w-4 shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Simple Steps */}
        <section className="px-6 py-20 border-t border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-orange-600">
                Transparent & Hassle-Free
              </span>
              <h2 className="mt-2 text-3xl font-black text-gray-950">
                How to Sell Your Old Laptop in 4 Steps
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                Get an instant quote online and visit our Sector 20-C store for immediate testing and payment.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="mt-6 block text-xs font-bold uppercase tracking-wider text-orange-600">
                      Step {index + 1}
                    </span>

                    <h3 className="mt-2 text-lg font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-3 text-xs leading-6 text-gray-600">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 100% Data Security & Drive Wiping Guarantee */}
        <section className="bg-gray-900 px-6 py-16 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-xs font-bold text-orange-400">
                  <Lock className="h-4 w-4" />
                  Zero Data Leak Guarantee
                </div>

                <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                  100% Permanent Data Security & Drive Sanitization
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-300">
                  The primary concern when selling an old computer is data security. At LaptopDoc,
                  we guarantee that your personal photos, confidential business documents, financial records,
                  and browser credentials will never fall into unauthorized hands.
                </p>

                <div className="mt-6 space-y-3 text-sm text-gray-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                    <span><strong>Cryptographic Zero-Fill Wiping:</strong> All storage drives undergo multi-pass sanitization that makes data recovery completely impossible.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                    <span><strong>Storage Removal Option:</strong> If you prefer, our technicians can hand over your original hard drive or SSD on the spot so you retain physical possession.</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <ShieldCheck className="mx-auto h-16 w-16 text-orange-400" />
                <h3 className="mt-4 text-xl font-bold text-white">Safe & Legal Resale</h3>
                <p className="mt-2 text-xs text-gray-400 leading-6">
                  We maintain strict verification protocols requiring valid government ID proofs, ensuring all device acquisitions are 100% legitimate and authorized.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valuation Factors & Conditions */}
        <section className="px-6 py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-black text-gray-950">
                How We Calculate Fair Market Valuation
              </h2>
              <p className="mt-3 text-base text-gray-600">
                We evaluate your laptop transparently across specific hardware components rather than giving lowball estimates.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg">Processor & Generation</h3>
                <p className="mt-2 text-sm text-gray-600 leading-6">
                  Intel Core i3, i5, i7, i9 (8th to 14th Gen), AMD Ryzen 3, 5, 7, and Apple M1/M2/M3 silicon retain the highest resale value.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg">Display & Physical Condition</h3>
                <p className="mt-2 text-sm text-gray-600 leading-6">
                  Screens free of white spots, scratches, or line defects, and bodies with intact hinges and minimal denting command premium prices.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg">Battery & Original Charger</h3>
                <p className="mt-2 text-sm text-gray-600 leading-6">
                  Laptops retaining over 75% battery backup and accompanied by original OEM power adapters receive higher immediate cash offers.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg">We Buy Broken & Dead Laptops</h3>
                <p className="mt-2 text-sm text-gray-600 leading-6">
                  Even if your laptop has a cracked screen, water damage, or a completely dead motherboard, we buy it for reusable parts and scrap value.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg">All Major Laptop Brands</h3>
                <p className="mt-2 text-sm text-gray-600 leading-6">
                  We purchase Dell, HP, Lenovo (ThinkPad/IdeaPad), ASUS (TUF/ROG), Acer, Apple MacBooks, MSI, Samsung, and Microsoft Surface devices.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg">Instant Cash or UPI Transfer</h3>
                <p className="mt-2 text-sm text-gray-600 leading-6">
                  No waiting for online buyers or shipping delays. Get paid immediately upon device verification at our Sector 20-C store.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Template Section */}
        <section className="px-6 py-20 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Quick Message Format
              </span>
              <h2 className="mt-2 text-3xl font-black text-gray-950">
                Send Laptop Specs on WhatsApp
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Copy and fill out this simple message format to get an accurate price quote within 15 minutes from our technician.
              </p>

              <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="font-mono text-sm leading-7 text-gray-800 space-y-1">
                  <p>Brand/Model: Dell Inspiron 15 / HP 14s / Lenovo ThinkPad</p>
                  <p>Processor: Intel Core i5 11th Gen</p>
                  <p>RAM: 8GB / 16GB</p>
                  <p>Storage: 512GB SSD</p>
                  <p>Battery Backup: Approx 2 Hours</p>
                  <p>Condition: Good / Minor Scratches / Broken Hinge</p>
                  <p>Expected Resale Price: ₹____</p>
                  <p>Location: Chandigarh / Mohali / Panchkula / Zirakpur</p>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white hover:bg-green-700 transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  Send Details on WhatsApp (+91 98782 24658)
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-950 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-black">
                Frequently Asked Questions
              </h3>
              <p className="mt-2 text-xs text-gray-400">
                Everything you need to know about selling your used laptop in Tricity
              </p>

              <div className="mt-6 divide-y divide-white/10">
                {faqs.map((faq) => (
                  <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                    <h4 className="font-bold text-sm text-white">{faq.question}</h4>
                    <p className="mt-2 text-xs leading-6 text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-orange-600 px-6 py-16 text-white text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-black md:text-4xl">
              Ready to Turn Your Old Laptop into Cash?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-orange-100 text-sm leading-7">
              Send your laptop model and photos now for an instant valuation, or visit our
              Sector 20-C Chandigarh store for immediate testing and cash/UPI settlement.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-extrabold text-orange-600 hover:bg-orange-50 transition"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Valuation Now
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-extrabold text-white hover:bg-white/20 transition"
              >
                <MapPin className="h-5 w-5" />
                Visit Store in Sector 20-C
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
