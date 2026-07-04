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

const siteUrl = "https://yourdomain.com";

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
      "@type": "Organization",
      name: "LaptopDoc",
      url: siteUrl,
    },

    areaServed: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur"],

    serviceType: service.shortTitle,
  };

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

      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <section className="relative min-h-170 overflow-hidden bg-black text-white">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="absolute inset-0 bg-linear-to-r from-black via-black/85 to-black/20" />

          <div className="relative mx-auto flex min-h-170 max-w-7xl items-center px-4 py-20 lg:px-8">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-gray-300"
              >
                <Link
                  href="/"
                  className="transition-colors hover:text-orange-400"
                >
                  Home
                </Link>

                <ChevronRight className="h-4 w-4" />

                <Link
                  href="/services"
                  className="transition-colors hover:text-orange-400"
                >
                  Services
                </Link>

                <ChevronRight className="h-4 w-4" />

                <span className="text-orange-400">{service.shortTitle}</span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2.5 text-sm font-extrabold text-orange-300 backdrop-blur-md">
                <Icon className="h-4 w-4" />

                {service.tag}
              </div>

              <h1 className="mt-6 text-lg font-extrabold leading-tight tracking-tight md:text-xl lg:text-3xl">
                {service.title}
              </h1>

              <p className="mt-6 max-w-3xl text-sm  leading-8 text-gray-300 md:text-lg">
                {service.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "16+ Years Experience",
                  "Chandigarh Tricity",
                  "Practical Diagnosis",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-gray-200 backdrop-blur-md"
                  >
                    <CheckCircle2 className="h-4 w-4 text-orange-400" />

                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/919878224658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-8 py-4 text-base font-extrabold text-white transition-all hover:bg-orange-600"
                >
                  Ask About This Service
                  <MessageCircle className="h-5 w-5" />
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-8 py-4 text-base font-extrabold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
                >
                  All Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_360px] lg:px-8">
            <article>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
                LaptopDoc Service Guide
              </p>

              <h2 className="mt-3 text-lg font-extrabold tracking-tight text-black md:text-xl">
                Professional {service.shortTitle} Support
              </h2>

              <p className="mt-7 text-sm font-medium leading-9 text-gray-600">
                {service.introduction}
              </p>

              {/* Problems */}
              <div className="mt-10 rounded-md bg-gray-50 p-6 md:p-8">
                <h3 className="text-xl font-extrabold text-black">
                  Common Problems We Inspect
                </h3>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.problems.map((problem) => (
                    <div
                      key={problem}
                      className="flex items-center gap-3 rounded-md bg-white p-4 text-sm font-bold text-gray-700"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-500" />

                      {problem}
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed sections */}
              <div className="mt-14 space-y-14">
                {service.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-lg font-extrabold text-black md:text-xl">
                      {section.heading}
                    </h2>

                    <div className="mt-5 space-y-4">
                      {section.content.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-xs  leading-8 text-gray-600 md:text-sm"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-md bg-black p-6 text-white">
                <Icon className="h-10 w-10 text-orange-400" />

                <h2 className="mt-5 text-2xl font-extrabold">
                  Need {service.shortTitle}?
                </h2>

                <p className="mt-4 text-sm font-medium leading-7 text-gray-400">
                  Explain your device problem and ask LaptopDoc about the
                  relevant repair or service option.
                </p>

                <a
                  href="https://wa.me/919878224658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-4 text-sm font-extrabold text-white transition-colors hover:bg-orange-600"
                >
                  Ask on WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-5 rounded-md border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-orange-500" />

                  <h2 className="font-extrabold text-black">Why LaptopDoc?</h2>
                </div>

                <div className="mt-5 space-y-4">
                  {[
                    "16+ years of practical experience",
                    "Clear repair guidance",
                    "Hardware and software support",
                    "Chandigarh Tricity service",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm font-bold leading-6 text-gray-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />

                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Process */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
                Service Process
              </p>

              <h2 className="mt-3 text-lg font-extrabold text-black md:text-xl">
                How the Service Process Works
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {service.process.map((step, index) => (
                <div
                  key={step}
                  className="rounded-md border border-gray-200 bg-white p-6"
                >
                  <span className="text-lg font-semibold text-orange-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold text-black">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local SEO */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="rounded-md bg-black p-8 text-white md:p-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400">
                    <MapPin className="h-4 w-4" />
                    Chandigarh Tricity
                  </div>

                  <h2 className="mt-4 text-lg font-extrabold md:text-xl">
                    {service.shortTitle} Across Chandigarh Tricity
                  </h2>

                  <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-gray-400">
                    LaptopDoc provides service support for customers from
                    Chandigarh, Mohali, Panchkula, Zirakpur and nearby Tricity
                    areas.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {["Chandigarh"].map((area) => (
                    <div
                      key={area}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 font-bold text-gray-200"
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
                  Related Services
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-black md:text-5xl">
                  Explore More LaptopDoc Services
                </h2>
              </div>

              <Link
                href="/services"
                className="hidden items-center gap-2 font-extrabold text-orange-500 sm:inline-flex"
              >
                All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-7 md:grid-cols-3">
              {relatedServices.map((item) => {
                const RelatedIcon = item.icon;

                return (
                  <article
                    key={item.slug}
                    className="group overflow-hidden rounded-md border border-gray-200 bg-white"
                  >
                    <Link
                      href={`/${item.slug}`}
                      className="relative block h-60 overflow-hidden"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 767px) calc(100vw - 32px), 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="mb-3 inline-flex rounded-xl bg-orange-500 p-2 text-white">
                          <RelatedIcon className="h-5 w-5" />
                        </div>

                        <h3 className="text-2xl font-extrabold text-white">
                          {item.shortTitle}
                        </h3>
                      </div>
                    </Link>

                    <div className="p-6">
                      <p className="text-sm font-medium leading-7 text-gray-600">
                        {item.heroDescription}
                      </p>

                      <Link
                        href={`/${item.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-orange-500"
                      >
                        View Service
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-black py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="rounded-md border border-white/10 bg-white/5 p-8 md:p-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <ShieldCheck className="h-10 w-10 text-orange-400" />

                  <h2 className="mt-5 max-w-3xl text-xl font-extrabold md:text-2xl">
                    Ask LaptopDoc about your device problem.
                  </h2>

                  <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-gray-400">
                    Describe the symptoms and ask about the relevant repair,
                    maintenance or upgrade option.
                  </p>
                </div>

                <a
                  href="https://wa.me/919878224658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-orange-500 px-8 py-4 text-base font-extrabold text-white transition-all hover:bg-orange-600"
                >
                  Contact on WhatsApp
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-extrabold text-gray-700 transition-colors hover:text-orange-500"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Services
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
