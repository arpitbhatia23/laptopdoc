import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import { getBlogBySlug, blogs } from "@/data/blogs/data";
const siteUrl = "https://yourdomain.com";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | LaptopDoc",
    };
  }

  return {
    title: blog.metaTitle,

    description: blog.metaDescription,

    keywords: blog.keywords,

    alternates: {
      canonical: `${siteUrl}/blogs/${blog.slug}`,
    },

    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      url: `${siteUrl}/blogs/${blog.slug}`,
      siteName: "LaptopDoc",
      type: "article",

      publishedTime: blog.publishedAt,

      modifiedTime: blog.updatedAt,

      images: [
        {
          url: `${siteUrl}${blog.image}`,
          width: 1200,
          height: 900,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [`${siteUrl}${blog.image}`],
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const Icon = blog.icon;

  const currentIndex = blogs.findIndex((item) => item.slug === blog.slug);

  const relatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "BlogPosting",

    headline: blog.title,

    description: blog.metaDescription,

    image: `${siteUrl}${blog.image}`,

    datePublished: blog.publishedAt,

    dateModified: blog.updatedAt,

    author: {
      "@type": "Organization",
      name: "LaptopDoc",
    },

    publisher: {
      "@type": "Organization",
      name: "LaptopDoc",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blogs/${blog.slug}`,
    },
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
        name: "Blogs",
        item: `${siteUrl}/blogs`,
      },

      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `${siteUrl}/blogs/${blog.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
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
        <section className="relative overflow-hidden bg-black text-white">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/75" />

          <div className="absolute inset-0 bg-linear-to-r from-black via-black/85 to-black/30" />

          <div className="relative mx-auto flex min-h-162.5 max-w-7xl items-center px-4 py-20 lg:px-8">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-gray-300">
                <Link
                  href="/"
                  className="transition-colors hover:text-orange-400"
                >
                  Home
                </Link>

                <span>/</span>

                <Link
                  href="/blogs"
                  className="transition-colors hover:text-orange-400"
                >
                  Blogs
                </Link>

                <span>/</span>

                <span className="text-orange-400">{blog.category}</span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2.5 text-sm font-extrabold text-orange-300 backdrop-blur-md">
                <Icon className="h-4 w-4" />

                {blog.category}
              </div>

              <h1 className="mt-6 text-lg font-extrabold leading-tight tracking-tight md:text-xl lg:text-3xl">
                {blog.title}
              </h1>

              <p className="mt-6 max-w-3xl text-sm font-medium leading-8 text-gray-300 md:text-lg">
                {blog.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold text-gray-300">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-400" />

                  {blog.readTime}
                </span>

                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-orange-400" />

                  {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_320px] lg:px-8">
            <article className="max-w-4xl">
              {/* Introduction */}
              <div className="border-l-4 border-orange-500 pl-6">
                <p className="text-lg font-medium leading-9 text-gray-700">
                  {blog.introduction}
                </p>
              </div>

              {/* Sections */}
              <div className="mt-12 space-y-14">
                {blog.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-lg font-semibold tracking-tight text-black md:text-xl">
                      {section.heading}
                    </h2>

                    <div className="mt-5 space-y-4">
                      {section.content.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-xs font-medium leading-8 text-gray-600 md:text-sm"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.points && (
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 rounded-md bg-gray-50 p-4 text-sm font-bold text-gray-700"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />

                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              {/* Related Services */}
              <section className="mt-16 rounded-md bg-black p-7 text-white md:p-10">
                <ShieldCheck className="h-10 w-10 text-orange-400" />

                <h2 className="mt-5 text-2xl font-extrabold md:text-4xl">
                  Related LaptopDoc Services
                </h2>

                <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-gray-400">
                  Explore services related to this guide.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {blog.relatedServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3.5 text-sm font-extrabold text-white transition-all hover:bg-orange-600"
                    >
                      {service.title}

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-md bg-black p-6 text-white">
                <MessageCircle className="h-9 w-9 text-orange-400" />

                <h2 className="mt-5 text-2xl font-extrabold">
                  Need help with your laptop?
                </h2>

                <p className="mt-4 text-sm font-medium leading-7 text-gray-400">
                  Tell LaptopDoc about your laptop problem and ask about the
                  relevant repair or upgrade option.
                </p>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-4 text-sm font-extrabold text-white transition-colors hover:bg-orange-600"
                >
                  Ask on WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-5 rounded-md border border-gray-200 bg-gray-50 p-6">
                <h2 className="text-lg font-extrabold text-black">
                  More Laptop Guides
                </h2>

                <div className="mt-5 space-y-4">
                  {blogs
                    .filter((item) => item.slug !== blog.slug)
                    .slice(0, 4)
                    .map((item) => (
                      <Link
                        key={item.slug}
                        href={`/blogs/${item.slug}`}
                        className="group block border-b border-gray-200 pb-4 last:border-none last:pb-0"
                      >
                        <p className="text-xs font-extrabold uppercase tracking-wider text-orange-500">
                          {item.category}
                        </p>

                        <h3 className="mt-2 text-sm font-extrabold leading-6 text-black transition-colors group-hover:text-orange-600">
                          {item.title}
                        </h3>
                      </Link>
                    ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Related Blogs */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
                  Continue Reading
                </p>

                <h2 className="mt-3 text-lg font-extrabold text-black md:text-xl">
                  Related Laptop Guides
                </h2>
              </div>

              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 font-extrabold text-orange-500"
              >
                View All Blogs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-7 md:grid-cols-3">
              {relatedBlogs.map((item) => (
                <article
                  key={item.slug}
                  className="group overflow-hidden rounded-md border border-gray-200 bg-white"
                >
                  <Link
                    href={`/blogs/${item.slug}`}
                    className="relative block h-56 overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 32px), 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  <div className="p-6">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-orange-500">
                      {item.category}
                    </p>

                    <h3 className="mt-3 text-xl font-extrabold leading-tight text-black">
                      <Link href={`/blogs/${item.slug}`}>{item.title}</Link>
                    </h3>

                    <Link
                      href={`/blogs/${item.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-orange-500"
                    >
                      Read Guide
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Back */}
        <section className="bg-white py-10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 font-extrabold text-gray-700 transition-colors hover:text-orange-500"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Blogs
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
