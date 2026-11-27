import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import { getServiceBySlug, services } from "@/data/services/data";

const siteUrl = "https://laptopdoc.in";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | LaptopDoc",
    };
  }

  return {
    title: service.metaTitle,

    description: service.metaDescription,

    keywords: service.keywords,

    alternates: {
      canonical: `${siteUrl}/${service.slug}`,
    },

    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteUrl}/${service.slug}`,
      siteName: "LaptopDoc",
      type: "website",

      images: [
        {
          url: `${siteUrl}${service.image}`,
          width: 1600,
          height: 900,
          alt: service.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${siteUrl}${service.image}`],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  const serviceSchema = {
    "@context": "https://schema.org",

    "@type": "Service",

    name: service.title,

    description: service.metaDescription,

    url: `${siteUrl}/${service.slug}`,

    image: `${siteUrl}${service.image}`,

    provider: {
      "@type": "LocalBusiness",
      name: "LaptopDoc",
      url: siteUrl,
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
    },

    areaServed: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur"],

    serviceType: service.shortTitle,
  };

  const faqSchema = service.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

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
        name: "Services",
        item: `${siteUrl}/services`,
      },

      {
        "@type": "ListItem",
        position: 3,
        name: service.shortTitle,
        item: `${siteUrl}/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-black/30" />
          <div className="pointer-events-none absolute -left-20 top-12 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex flex-wrap items-center gap-2 text-xs font-bold text-gray-300"
              >
                <Link
                  href="/"
                  className="transition-colors hover:text-orange-400"
                >
                  Home
                </Link>

                <ChevronRight className="h-3.5 w-3.5 text-gray-500" aria-hidden="true" />

                <Link
                  href="/services"
                  className="transition-colors hover:text-orange-400"
                >
                  Services
                </Link>

                <ChevronRight className="h-3.5 w-3.5 text-gray-500" aria-hidden="true" />

                <span className="text-orange-400">{service.shortTitle}</span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-extrabold text-orange-300 backdrop-blur-md">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {service.tag}
              </div>

              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                {service.title}
              </h1>

              <p className="mt-5 max-w-3xl text-sm font-medium leading-relaxed text-gray-300 sm:text-base md:text-lg">
                {service.heroDescription}
              </p>

              {/* Trust Badges */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {[
                  "16+ Years Experience",
                  service.turnaround || "Fast Turnaround",
                  service.warranty || "Service Warranty",
                  "Sector 20 Chandigarh",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-gray-200 backdrop-blur-md"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-orange-400" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                <a
                  href={`https://wa.me/919878224658?text=Hi%20LaptopDoc,%20I%20have%20an%20enquiry%20regarding%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Ask About This Service
                </a>

                <a
                  href="tel:+919878224658"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-extrabold text-white backdrop-blur-md transition-all hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Call +91 98782 24658
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction & Content */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
            <article>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-700">
                Diagnostic & Repair Overview
              </span>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Professional {service.shortTitle} in Chandigarh Tricity
              </h2>

              <p className="mt-5 text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
                {service.introduction}
              </p>

              {/* Problems Checked */}
              <div className="mt-10 rounded-2xl border border-gray-100 bg-gray-50/80 p-6 sm:p-8">
                <h3 className="text-lg font-extrabold text-gray-950 sm:text-xl">
                  Common Symptoms & Faults We Address
                </h3>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.problems.map((problem) => (
                    <div
                      key={problem}
                      className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white p-3.5 text-xs font-bold text-gray-800 shadow-2xs"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
                      {problem}
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Technical Sections */}
              <div className="mt-12 space-y-10">
                {service.sections.map((section) => (
                  <section key={section.heading} className="border-b border-gray-100 pb-10 last:border-b-0">
                    <h2 className="text-xl font-extrabold text-gray-950 sm:text-2xl">
                      {section.heading}
                    </h2>

                    <div className="mt-4 space-y-3.5">
                      {section.content.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm font-medium leading-relaxed text-gray-600 sm:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            {/* Sticky Action Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-gray-900 bg-gray-950 p-6 text-white shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-white">
                  Need {service.shortTitle}?
                </h3>

                <p className="mt-2 text-xs font-medium leading-relaxed text-gray-400">
                  Describe your device issue on WhatsApp for quick diagnostic advice and cost estimate from our senior technicians.
                </p>

                <a
                  href={`https://wa.me/919878224658?text=Hi%20LaptopDoc,%20I%20need%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-xs font-extrabold text-white transition-all hover:bg-orange-600 shadow-md shadow-orange-500/20"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-300">
                    <span>Turnaround</span>
                    <span className="text-orange-400 font-bold">{service.turnaround || "Fast Service"}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs font-semibold text-gray-300">
                    <span>Warranty</span>
                    <span className="text-orange-400 font-bold">{service.warranty || "Covered"}</span>
                  </div>
                </div>
              </div>

              {/* Trust Box */}
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-500" aria-hidden="true" />
                  <h3 className="font-extrabold text-sm text-gray-900">Why LaptopDoc Chandigarh?</h3>
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    "16+ years of component-level experience",
                    "Direct technician diagnosis, no middleman",
                    "Original OEM spare parts with warranty",
                    "Walk-in workshop in Sector 20-C",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-xs font-semibold leading-snug text-gray-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-500" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Process Steps */}
        <section className="border-t border-gray-100 bg-gray-50/70 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-orange-100 px-3.5 py-1 text-xs font-extrabold text-orange-700">
                Step-by-Step Workflow
              </span>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl">
                How Our Repair Process Works
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {service.process.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-2xs hover:border-orange-200 transition-colors"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-xs font-black text-orange-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 text-sm font-extrabold leading-snug text-gray-900">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gray-950 p-8 text-white sm:p-10 lg:p-12 shadow-xl">
              <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    Chandigarh Tricity Coverage
                  </div>

                  <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                    {service.shortTitle} in Chandigarh, Mohali & Panchkula
                  </h2>

                  <p className="mt-3 text-xs font-medium leading-relaxed text-gray-400 sm:text-sm">
                    Visit our walk-in service center in Sector 20-C Chandigarh or get in touch for device inspection across Tricity.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Chandigarh (Sector 20)",
                    "Mohali",
                    "Panchkula",
                    "Zirakpur",
                  ].map((area) => (
                    <div
                      key={area}
                      className="rounded-xl border border-white/10 bg-white/5 p-3.5 text-center text-xs font-extrabold text-gray-200 backdrop-blur-xs"
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="border-t border-gray-100 bg-gray-50/50 py-16 sm:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <span className="inline-flex rounded-full bg-orange-100 px-3.5 py-1 text-xs font-extrabold text-orange-700">
                  Got Questions?
                </span>

                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl">
                  {service.shortTitle} FAQs
                </h2>
              </div>

              <div className="mt-10 space-y-3">
                {service.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl border border-gray-200/80 bg-white p-5 transition-colors hover:border-orange-200"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold text-gray-900">
                      {faq.question}

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xs font-bold text-orange-600 transition-transform group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </summary>

                    <p className="mt-3 text-xs font-medium leading-relaxed text-gray-600 sm:text-sm">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-orange-600">
                  Other Solutions
                </span>

                <h2 className="mt-1 text-2xl font-extrabold text-gray-950 sm:text-3xl">
                  Related Repair Services
                </h2>
              </div>

              <Link
                href="/services"
                className="hidden items-center gap-1.5 text-xs font-extrabold text-orange-600 sm:inline-flex hover:text-orange-700"
              >
                All Services
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((item) => {
                const RelatedIcon = item.icon;

                return (
                  <article
                    key={item.slug}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
                  >
                    <div>
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 767px) calc(100vw - 32px), 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white shadow-sm">
                            <RelatedIcon className="h-4 w-4" aria-hidden="true" />
                          </div>

                          <h3 className="text-base font-extrabold text-white">
                            {item.shortTitle}
                          </h3>
                        </div>
                      </div>

                      <div className="p-5">
                        <p className="line-clamp-2 text-xs font-medium leading-relaxed text-gray-600">
                          {item.heroDescription}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 bg-gray-50/50 px-5 py-3.5">
                      <Link
                        href={`/${item.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-gray-900 transition-colors hover:text-orange-600"
                      >
                        Explore Service
                        <ArrowRight className="h-3.5 w-3.5 text-orange-500 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Back Link */}
        <section className="border-t border-gray-100 py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-extrabold text-gray-700 transition-colors hover:text-orange-600"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to All Services
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
