import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Laptop,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  "Complete hardware inspection",
  "Battery and charging check",
  "Display and keyboard testing",
  "SSD and RAM health check",
  "Clean OS installation",
  "Performance-tested before sale",
];

const categories = [
  {
    title: "Student Laptops",
    description: "Affordable laptops for study, coding, classes and daily use.",
  },
  {
    title: "Office Laptops",
    description:
      "Reliable systems for business, work-from-home and productivity.",
  },
  {
    title: "Performance Laptops",
    description:
      "Higher-spec laptops for developers, designers and professionals.",
  },
];

const LaptopResale = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left image */}
          <div className="relative">
            <div className="relative min-h-130 overflow-hidden rounded-md border border-white/10">
              <Image
                src="/services/resale.png"
                alt="Tested used and refurbished laptops available at LaptopDoc in Chandigarh Tricity"
                fill
                sizes="(max-width: 1023px) calc(100vw - 32px), 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

              {/* Image bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-extrabold text-white">
                  <BadgeCheck className="h-4 w-4" />
                  Tested Before Sale
                </div>

                <h3 className="mt-4 text-lg font-extrabold md:text-xl">
                  Quality Used & Refurbished Laptops
                </h3>

                <p className="mt-3 max-w-xl text-xs font-regular leading-7 text-gray-300 md:text-sm">
                  Every available laptop is checked for condition, performance
                  and everyday usability before being listed for sale.
                </p>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-14 left-4 right-4 rounded-md border border-gray-200 bg-white p-5 text-black shadow-2xl sm:left-8 sm:right-auto sm:w-80">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-orange-100 text-orange-600">
                  <RefreshCw className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-semilbold text-gray-500">
                    Upgrade Available
                  </p>
                  <p className="text-lg font-semibold">
                    RAM • SSD • Fresh Setup
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-extrabold text-orange-300">
              <Laptop className="h-4 w-4" />
              LaptopDoc Resale
            </div>

            <h2 className="mt-6 text-xl font-extrabold tracking-tight md:text-3xl">
              Buy Tested Used Laptops in Tricity
            </h2>

            <p className="mt-6 text-xs font-medium leading-8 text-gray-300 md:text-sm">
              LaptopDoc also sells selected used and refurbished laptops for
              students, working professionals, businesses and everyday users.
              Instead of simply listing a device, we inspect its important
              hardware and performance before offering it for resale.
            </p>

            <p className="mt-4 text-xs font-medium leading-8 text-gray-300 md:text-sm">
              Available laptops may include models from brands such as Dell, HP,
              Lenovo, ASUS, Acer and other popular manufacturers, depending on
              current stock.
            </p>

            {/* Benefits */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-400" />
                  <span className="text-sm font-bold text-gray-200">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Categories */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className="rounded-md border border-white/10 bg-white/5 p-5"
                >
                  <Sparkles className="h-5 w-5 text-orange-400" />

                  <h3 className="mt-4 text-lg font-extrabold">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-6 text-gray-400">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/used-laptops"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
              >
                View Available Laptops
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-8 py-4 text-base font-extrabold text-white transition-all hover:bg-white hover:text-black"
              >
                <MessageCircle className="h-5 w-5 text-orange-400" />
                Ask for Current Stock
              </a>
            </div>

            {/* Small trust note */}
            <div className="mt-8 flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-orange-400" />

              <p className="text-sm font-medium leading-7 text-gray-300">
                Stock, specifications, condition, pricing and warranty terms can
                vary from one laptop to another. Always show the exact details
                of each available device on its product page.
              </p>
            </div>
          </div>
        </div>

        {/* Sell old laptop strip */}
        <div className="mt-20 rounded-md bg-white p-7 text-black md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange-500">
                Upgrade your device
              </p>

              <h3 className="mt-2 text-2xl font-extrabold md:text-4xl">
                Have an old laptop you want to sell?
              </h3>

              <p className="mt-3 max-w-2xl text-base font-medium leading-7 text-gray-600">
                Share the laptop brand, model, specifications and condition with
                LaptopDoc to request a resale evaluation.
              </p>
            </div>

            <Link
              href="/sell-old-laptop-chandigarh"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-black px-8 py-4 text-base font-extrabold text-white transition-all hover:bg-orange-500"
            >
              Sell Your Old Laptop
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaptopResale;
