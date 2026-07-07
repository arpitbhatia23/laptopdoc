import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Gift,
  Sparkles,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import Offer from "@/models/offer.model";
import dbConnect from "@/utils/dbConnect";

export const dynamic = "force-dynamic";

/* -------------------------------------------------------------------------- */
/*                            Get Highest Priority Offer                      */
/* -------------------------------------------------------------------------- */

async function getActiveOffer() {
  await dbConnect();

  const now = new Date();

  const offer = await Offer.findOne({
    active: true,

    $and: [
      // Offer has started, or no start date was provided
      {
        $or: [
          { startDate: { $exists: false } },
          { startDate: null },
          { startDate: { $lte: now } },
        ],
      },

      // Offer has not expired, or no end date was provided
      {
        $or: [
          { endDate: { $exists: false } },
          { endDate: null },
          { endDate: { $gte: now } },
        ],
      },
    ],
  })
    // Highest priority always wins
    .sort({
      priority: -1,
      createdAt: -1,
    })
    .lean();

  return offer;
}

/* -------------------------------------------------------------------------- */
/*                                 Hero Section                               */
/* -------------------------------------------------------------------------- */

const Herosection = async () => {
  const activeOffer = await getActiveOffer();

  return (
    <section className="relative min-h-190 overflow-hidden bg-black text-white">
      {/* -------------------------------------------------------------------- */}
      {/* Background Image                                                     */}
      {/* -------------------------------------------------------------------- */}

      <Image
        src="/heroimage.png"
        alt="LaptopDoc - Best laptop repair shop in Tricity Chandigarh"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Base overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Left readability gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/65 to-black/10" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />

      {/* -------------------------------------------------------------------- */}
      {/* Highest Priority Offer                                               */}
      {/* -------------------------------------------------------------------- */}

      {activeOffer && <OfferBanner offer={activeOffer} />}

      {/* -------------------------------------------------------------------- */}
      {/* Glow Effects                                                         */}
      {/* -------------------------------------------------------------------- */}

      <div className="pointer-events-none absolute left-20 top-24 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-32 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

      {/* -------------------------------------------------------------------- */}
      {/* Main Hero Content                                                    */}
      {/* -------------------------------------------------------------------- */}

      <div
        className={`relative z-10 mx-auto flex min-h-190 max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-8 ${
          activeOffer ? "pt-52 sm:pt-48 lg:pt-44" : ""
        }`}
      >
        <div className="max-w-3xl text-left">
          {/* Trust Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-gray-200 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-orange-400" />
              Laptop Repair • Resale • Accessories
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-xl font-extrabold leading-tight tracking-tight sm:whitespace-nowrap md:text-2xl lg:text-3xl">
            LaptopDoc — Trusted Laptop Repair Specialists in Tricity
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-xs font-medium leading-normal text-gray-200 md:text-sm">
            LaptopDoc provides professional laptop repair in Chandigarh, Mohali,
            Panchkula and Zirakpur. We repair hinges, screens, motherboards,
            chargers, keyboards, batteries, heating issues and also provide
            tested used laptops.
          </p>

          {/* Locations */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-bold text-gray-200 backdrop-blur-md">
            <MapPin className="h-4 w-4 text-orange-400" />
            Chandigarh • Mohali • Panchkula • Zirakpur
          </div>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/919878224658"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-8 py-4 text-base font-extrabold text-white shadow-2xl shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Book Repair Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+919878224658"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-8 py-4 text-base font-extrabold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
            >
              <PhoneCall className="h-5 w-5 text-orange-400" />
              Call Now
            </a>
          </div>

          {/* Trust Points */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Diagnosis",
              "Fast Repair",
              "Genuine Parts",
              "Tricity Service",
            ].map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-gray-200 backdrop-blur-md"
              >
                <CheckCircle2 className="h-4 w-4 text-orange-400" />

                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

/* -------------------------------------------------------------------------- */
/*                                Offer Banner                                */
/* -------------------------------------------------------------------------- */

function OfferBanner({ offer }) {
  const hasImage = Boolean(offer.image);
  const hasDiscount = Boolean(offer.discountText);

  return (
    <div className="absolute bottom-5 left-4 right-4 z-30 sm:bottom-8 sm:left-auto sm:right-6 sm:w-95 lg:bottom-10 lg:right-10 lg:w-105">
      <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-black/55 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {/* Subtle orange glow */}
        <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-orange-500/25 blur-3xl" />

        {/* Orange accent */}
        <div className="absolute inset-y-0 left-0 w-1 bg-orange-500" />

        <div className="relative p-4 sm:p-5">
          {/* Top row */}
          <div className="flex items-start gap-4">
            {/* Optional image */}
            {hasImage ? (
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:h-20 sm:w-20">
                <img
                  src={offer.image}
                  alt=""
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            ) : (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
                <Gift className="h-5 w-5" />
              </div>
            )}

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-orange-400">
                  <Sparkles className="h-3 w-3" />
                  Special Offer
                </span>

                {hasDiscount && (
                  <span className="rounded-full bg-orange-500 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                    {offer.discountText} %
                  </span>
                )}
              </div>

              <h2 className="mt-2 text-base font-black leading-tight text-white sm:text-lg">
                {offer.title}
              </h2>

              {offer.description && (
                <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-gray-300 sm:text-sm">
                  {offer.description}
                </p>
              )}
            </div>
          </div>

          {/* Bottom */}
          {offer.link && (
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
              <p className="text-[11px] font-semibold text-gray-400">
                Limited-time deal
              </p>

              <OfferLink href={offer.link} title={offer.title} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
/* -------------------------------------------------------------------------- */
/*                                Offer Link                                  */
/* -------------------------------------------------------------------------- */

function OfferLink({ href, title }) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  const className =
    "group flex min-h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-orange-500 px-5 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 active:scale-[0.98] sm:w-auto";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View offer: ${title}`}
        className={className}
      >
        View Offer
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <Link href={href} aria-label={`View offer: ${title}`} className={className}>
      View Offer
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
