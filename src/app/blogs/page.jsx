import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  BookOpen,
  CheckCircle2,
  Clock,
  Cpu,
  Fan,
  Laptop,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

const siteUrl = "https://yourdomain.com";

export const metadata = {
  title: "Laptop Repair & Maintenance Tips | LaptopDoc Blog",
  description:
    "Read laptop maintenance, battery care, body protection, thermal paste, performance and used laptop buying guides from LaptopDoc.",
  alternates: {
    canonical: `${siteUrl}/blogs`,
  },
  openGraph: {
    title: "Laptop Repair & Maintenance Tips | LaptopDoc",
    description:
      "Practical guides for laptop maintenance, battery life, thermal care, body protection and performance.",
    url: `${siteUrl}/blogs`,
    siteName: "LaptopDoc",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og/blogs.jpg`,
        width: 1200,
        height: 630,
        alt: "LaptopDoc laptop repair and maintenance blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laptop Repair & Maintenance Tips | LaptopDoc",
    description:
      "Practical laptop care, maintenance and repair guides from LaptopDoc.",
    images: [`${siteUrl}/og/blogs.jpg`],
  },
};

const blogs = [
  {
    title: "How to Maintain Your Laptop for a Longer Life",
    excerpt:
      "Learn simple laptop maintenance habits that can reduce overheating, dust buildup, hinge damage and everyday performance problems.",
    image: "/blogs/maintainlaptop.png",
    href: "/blogs/how-to-maintain-your-laptop",
    category: "Maintenance",
    icon: Wrench,
    readTime: "7 min read",
    date: "July 2026",
    keywords: [
      "Laptop cleaning",
      "Safe charging",
      "Hinge care",
      "Regular servicing",
    ],
  },
  {
    title: "How to Increase Laptop Battery Life and Battery Health",
    excerpt:
      "Understand charging habits, heat management and everyday settings that may help preserve your laptop battery for longer.",
    image: "/blogs/increasebatterylife.png",
    href: "/blogs/how-to-increase-laptop-battery-life",
    category: "Battery Care",
    icon: BatteryCharging,
    readTime: "8 min read",
    date: "July 2026",
    keywords: [
      "Battery health",
      "Charging habits",
      "Heat control",
      "Battery backup",
    ],
  },
  {
    title: "Why Your Laptop Body and Hinges Are More Important Than You Think",
    excerpt:
      "A damaged laptop body can affect hinges, screen frames, cables and internal components. Learn why early repair matters.",
    image: "/blogs/hinges.png",
    href: "/blogs/importance-of-laptop-body-and-hinge-care",
    category: "Body & Hinges",
    icon: Laptop,
    readTime: "7 min read",
    date: "July 2026",
    keywords: ["Hinge damage", "Broken mounts", "Laptop body", "Screen frame"],
  },
  {
    title: "When Should You Change Laptop Thermal Paste?",
    excerpt:
      "Learn what thermal paste does, the signs of poor cooling and when thermal servicing may be worth considering.",
    image: "/blogs/thermalpaste.png",
    href: "/blogs/when-to-change-laptop-thermal-paste",
    category: "Cooling",
    icon: Fan,
    readTime: "8 min read",
    date: "July 2026",
    keywords: ["Overheating", "Thermal paste", "Fan noise", "CPU cooling"],
  },
  {
    title: "Why Is My Laptop Slow? 10 Common Reasons and Practical Fixes",
    excerpt:
      "Slow startup, low RAM, hard-drive problems, overheating and unnecessary software can all affect laptop performance.",
    image: "/blogs/laptopslow.png",
    href: "/blogs/why-is-my-laptop-slow",
    category: "Performance",
    icon: Cpu,
    readTime: "9 min read",
    date: "July 2026",
    keywords: ["Slow laptop", "SSD upgrade", "RAM upgrade", "Performance"],
  },
  {
    title: "How to Check a Used Laptop Before Buying",
    excerpt:
      "Check battery health, display quality, keyboard, ports, SSD, RAM, heating and physical condition before buying a used laptop.",
    image: "/blogs/beforebuying.png",
    href: "/blogs/how-to-check-used-laptop-before-buying",
    category: "Buying Guide",
    icon: ShieldCheck,
    readTime: "10 min read",
    date: "July 2026",
    keywords: ["Used laptop", "Battery check", "Display test", "Hardware test"],
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "LaptopDoc Laptop Repair and Maintenance Blog",
  numberOfItems: blogs.length,
  itemListElement: blogs.map((blog, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteUrl}${blog.href}`,
    name: blog.title,
  })),
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
  ],
};

export default function BlogsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
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
        <section className="relative overflow-hidden bg-black py-24 text-white">
          <Image
            src="/heroimage.png"
            alt="Laptop repair and maintenance tips from LaptopDoc"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/85 to-black/40" />

          <div className="pointer-events-none absolute -left-20 top-16 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-md border border-orange-500/30 bg-orange-500/10 px-5 py-2.5 text-sm font-extrabold text-orange-300 backdrop-blur-md">
                <BookOpen className="h-4 w-4" />
                LaptopDoc Guides & Tech Tips
              </div>

              <h1 className="mt-6 text-lg font-extrabold leading-tight tracking-tight md:text-xl lg:text-3xl">
                Practical Laptop Care &{" "}
                <span className="text-orange-500">Repair Guides</span>
              </h1>

              <p className="mt-6 max-w-3xl text-xs font-medium leading-8 text-gray-300 md:text-sm">
                Simple, practical guides about laptop maintenance, battery
                health, hinge and body care, thermal paste, performance and
                buying used laptops.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Maintenance Tips",
                  "Battery Care",
                  "Cooling Advice",
                  "Buying Guides",
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
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-linear-to-b from-orange-50/60 via-white to-white" />

          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-md bg-orange-100 px-5 py-2 text-sm font-extrabold text-orange-600">
                <Sparkles className="h-4 w-4" />
                LaptopDoc Knowledge Hub
              </div>

              <h2 className="mt-5 text-lg font-semibold tracking-tight text-black md:text-xl">
                Learn How to Protect and Maintain Your{" "}
                <span className="text-orange-500">Laptop</span>
              </h2>

              <p className="mt-5 text-xs font-medium leading-8 text-gray-600 md:text-sm">
                Laptop problems often become expensive because early warning
                signs are ignored. These guides explain practical maintenance,
                cooling, battery care and hardware protection in simple
                language.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Cards */}
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => {
                const Icon = blog.icon;

                return (
                  <article
                    key={blog.href}
                    className="group flex h-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* Image */}
                    <Link
                      href={blog.href}
                      className="relative block h-64 overflow-hidden"
                    >
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 32px), 400px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />

                      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-2 text-xs font-semibold text-black shadow-lg">
                        <Icon className="h-4 w-4 text-orange-500" />
                        {blog.category}
                      </div>

                      <div className="absolute bottom-5 left-5 flex items-center gap-2 text-sm font-bold text-white">
                        <Clock className="h-4 w-4 text-orange-400" />
                        {blog.readTime}
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-500">
                        {blog.date}
                      </p>

                      <h2 className="mt-3 text-xl font-extrabold leading-tight text-black">
                        <Link
                          href={blog.href}
                          className="transition-colors hover:text-orange-600"
                        >
                          {blog.title}
                        </Link>
                      </h2>

                      <p className="mt-4 text-sm font-medium leading-7 text-gray-600">
                        {blog.excerpt}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {blog.keywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-600"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-7">
                        <Link
                          href={blog.href}
                          className="group/link inline-flex items-center gap-2 font-semibold text-orange-500 transition-colors hover:text-orange-600"
                        >
                          Read Full Guide
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <article>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
                Laptop Maintenance Knowledge
              </p>

              <h2 className="mt-3 text-lg font-extrabold tracking-tight text-black md:text-xl">
                Simple Laptop Care Can Help Prevent Bigger Problems
              </h2>

              <div className="mt-7 space-y-5 text-xs font-medium leading-8 text-gray-600">
                <p>
                  A laptop contains many connected components, including the
                  motherboard, battery, cooling system, display assembly,
                  storage device, memory and charging system. A problem in one
                  area can sometimes affect another part of the device.
                </p>

                <p>
                  Regular laptop maintenance can help reduce dust buildup,
                  overheating and cooling problems. Careful handling can also
                  reduce unnecessary stress on laptop hinges, screen frames and
                  body mounts.
                </p>

                <p>
                  Battery health is another important part of laptop ownership.
                  High heat, damaged chargers and poor charging habits can
                  affect everyday battery performance. Users should also watch
                  for signs such as battery swelling, unusual heat or sudden
                  shutdowns.
                </p>

                <p>
                  Performance problems are not always caused by an old
                  processor. Limited RAM, slow storage, overheating, unnecessary
                  software or operating system issues can also make a laptop
                  feel slow.
                </p>

                <p>
                  The LaptopDoc blog focuses on practical information to help
                  laptop users in Chandigarh Tricity understand common laptop
                  problems, maintenance needs and upgrade options.
                </p>
              </div>
            </article>

            {/* Side CTA */}
            <aside className="rounded-md bg-black p-7 text-white lg:self-start">
              <ShieldCheck className="h-10 w-10 text-orange-400" />

              <h3 className="mt-5 text-lg font-extrabold md:text-xl">
                Need professional laptop help?
              </h3>

              <p className="mt-4 text-xs font-medium leading-7 text-gray-400">
                Explore LaptopDoc repair, maintenance, data recovery, RAM
                upgrade, SSD upgrade and thermal service options.
              </p>

              <Link
                href="/services"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-4 text-xs font-extrabold text-white transition-all hover:bg-orange-600"
              >
                Explore Repair Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="overflow-hidden rounded-md bg-black p-8 text-white md:p-12">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-400">
                    LaptopDoc
                  </p>

                  <h2 className="mt-3 max-w-3xl text-lg font-extrabold md:text-xl">
                    Read, maintain and make better decisions for your laptop.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm font-medium leading-8 text-gray-400">
                    Explore practical guides or view LaptopDoc repair and
                    upgrade services across Chandigarh Tricity.
                  </p>
                </div>

                <Link
                  href="/services"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-orange-500 px-8 py-4 text-base font-extrabold text-white transition-all hover:bg-orange-600"
                >
                  View All Services
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
