import Link from "next/link";

import resellLaptopSchema from "@/models/resellLaptop.schema";
import dbConnect from "@/utils/dbConnect";

const DEFAULT_WHATSAPP_NUMBER = "919876543210";

/* -------------------------------------------------------------------------- */
/*                                  Helpers                                   */
/* -------------------------------------------------------------------------- */

function formatPrice(price) {
  const value = Number(price);

  if (Number.isNaN(value)) {
    return price;
  }

  return value.toLocaleString("en-IN");
}

function getDiscount(price, originalPrice) {
  const current = Number(price);
  const original = Number(originalPrice);

  if (
    !originalPrice ||
    Number.isNaN(current) ||
    Number.isNaN(original) ||
    original <= current
  ) {
    return null;
  }

  return Math.round(((original - current) / original) * 100);
}

function getImageUrl(image) {
  if (!image) return null;

  if (typeof image === "string") {
    return image;
  }

  return image.url || image.secure_url || null;
}

function normalizeWhatsAppNumber(number) {
  if (!number) {
    return DEFAULT_WHATSAPP_NUMBER;
  }

  const digits = String(number).replace(/\D/g, "");

  if (digits.length === 10) {
    return `91${digits}`;
  }

  return digits;
}

function createWhatsAppUrl(laptop) {
  const number = normalizeWhatsAppNumber(laptop.whatsappNumber);

  const message = encodeURIComponent(
    `Hi, I am interested in the ${laptop.title} listed for ₹${formatPrice(
      laptop.price,
    )}. Is it still available?`,
  );

  return `https://wa.me/${number}?text=${message}`;
}

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

export default async function FeaturedLaptops() {
  await dbConnect();

  const laptops = await resellLaptopSchema
    .find({
      featured: true,
      available: true,
    })
    .sort({
      createdAt: -1,
    })
    .limit(4)
    .lean();

  // Do not show an empty section
  if (!laptops.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#f8f8f6] py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ------------------------------------------------------------------ */}
        {/* Header                                                             */}
        {/* ------------------------------------------------------------------ */}

        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-orange-500" />

              <span className="text-xs font-black uppercase tracking-[0.18em] text-orange-700">
                Handpicked Deals
              </span>
            </div>

            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Featured Laptops Worth Checking Out
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Selected used laptops with strong specifications, verified
              condition and competitive pricing.
            </p>
          </div>

          <Link
            href="/used-laptops"
            className="inline-flex w-fit items-center gap-2 font-bold text-gray-900 transition hover:text-orange-600"
          >
            View all laptops
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Adaptive Layout                                                    */}
        {/* ------------------------------------------------------------------ */}

        {laptops.length === 1 ? (
          <SingleFeaturedLaptop laptop={laptops[0]} />
        ) : (
          <FeaturedLaptopGrid laptops={laptops} />
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                       One Featured Laptop Layout                           */
/* -------------------------------------------------------------------------- */

function SingleFeaturedLaptop({ laptop }) {
  const imageUrl = getImageUrl(laptop.images?.[0]);

  const discount = getDiscount(laptop.price, laptop.originalPrice);

  const productUrl = `/used-laptops/${laptop.slug}`;

  const whatsappUrl = createWhatsAppUrl(laptop);

  return (
    <article className="group overflow-hidden rounded-md border border-gray-200 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
      <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
        {/* ------------------------------------------------------------------ */}
        {/* Image                                                              */}
        {/* ------------------------------------------------------------------ */}

        <Link
          href={productUrl}
          className="relative block min-h-85 overflow-hidden bg-gray-100 sm:min-h-112.5 lg:min-h-142.5"
          aria-label={`View ${laptop.title}`}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${laptop.title} used laptop`}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
              <span className="text-8xl" aria-hidden="true">
                💻
              </span>
            </div>
          )}

          {/* Image overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/0 to-black/5" />

          {/* Featured badge */}
          <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-gray-950 shadow-lg backdrop-blur">
              <span className="text-orange-500">★</span>
              Featured Pick
            </span>
          </div>

          {/* Discount */}
          {discount !== null && (
            <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
              <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-black text-white shadow-lg">
                Save {discount}%
              </span>
            </div>
          )}

          {/* Image count */}
          {laptop.images?.length > 1 && (
            <span className="absolute bottom-5 right-5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-bold text-white backdrop-blur sm:bottom-7 sm:right-7">
              {laptop.images.length} Photos
            </span>
          )}
        </Link>

        {/* ------------------------------------------------------------------ */}
        {/* Content                                                            */}
        {/* ------------------------------------------------------------------ */}

        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-green-700">
              ● Available Now
            </span>

            {laptop.condition && (
              <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-gray-700">
                {laptop.condition} Condition
              </span>
            )}
          </div>

          {/* Brand */}
          <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-orange-600">
            {laptop.brand}
          </p>

          {/* Title */}
          <Link href={productUrl}>
            <h3 className="mt-3 text-3xl font-black leading-tight tracking-tight text-gray-950 transition hover:text-orange-600 sm:text-4xl lg:text-5xl">
              {laptop.title}
            </h3>
          </Link>

          {/* Location */}
          {laptop.location && (
            <p className="mt-4 text-sm font-medium text-gray-500">
              📍 Available in {laptop.location}
            </p>
          )}

          {/* Specs */}
          <div className="mt-7 grid grid-cols-2 gap-3">
            <PremiumSpec label="Processor" value={laptop.processor} />

            <PremiumSpec label="RAM" value={laptop.ram} />

            <PremiumSpec label="Storage" value={laptop.storage} />

            <PremiumSpec label="Graphics" value={laptop.graphics} />
          </div>

          {/* Extra details */}
          <div className="mt-5 flex flex-wrap gap-2">
            {laptop.operatingSystem && (
              <SmallBadge>{laptop.operatingSystem}</SmallBadge>
            )}

            {laptop.display && (
              <SmallBadge>{laptop.display}&quot; Display</SmallBadge>
            )}

            {laptop.batteryHealth && (
              <SmallBadge>🔋 {laptop.batteryHealth}% Battery</SmallBadge>
            )}

            {laptop.warranty && laptop.warranty !== "No Warranty" && (
              <SmallBadge>🛡️ {laptop.warranty}</SmallBadge>
            )}
          </div>

          {/* Price */}
          <div className="mt-8 border-t border-gray-100 pt-7">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Special Selling Price
            </p>

            <div className="mt-2 flex flex-wrap items-end gap-3">
              <span className="text-4xl font-black tracking-tight text-gray-950">
                ₹{formatPrice(laptop.price)}
              </span>

              {laptop.originalPrice &&
                Number(laptop.originalPrice) > Number(laptop.price) && (
                  <span className="pb-1 text-lg font-semibold text-gray-400 line-through">
                    ₹{formatPrice(laptop.originalPrice)}
                  </span>
                )}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <Link
              href={productUrl}
              className="flex min-h-14 items-center justify-center rounded-xl bg-gray-950 px-6 py-4 text-center font-black text-white transition hover:bg-orange-500 active:scale-[0.98]"
            >
              View Full Details
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-center rounded-xl bg-green-600 px-6 py-4 text-center font-black text-white transition hover:bg-green-700 active:scale-[0.98]"
            >
              WhatsApp Enquiry
            </a>
          </div>

          <p className="mt-4 text-center text-xs leading-5 text-gray-400 sm:text-left">
            Confirm availability, exact condition and warranty before purchase.
          </p>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                       Multiple Featured Laptops                            */
/* -------------------------------------------------------------------------- */

function FeaturedLaptopGrid({ laptops }) {
  return (
    <div
      className={`grid gap-6 ${
        laptops.length === 2
          ? "md:grid-cols-2"
          : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {laptops.map((laptop) => (
        <FeaturedLaptopCard key={laptop._id.toString()} laptop={laptop} />
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Standard Card                                   */
/* -------------------------------------------------------------------------- */

function FeaturedLaptopCard({ laptop }) {
  const imageUrl = getImageUrl(laptop.images?.[0]);

  const discount = getDiscount(laptop.price, laptop.originalPrice);

  const productUrl = `/used-laptops/${laptop.slug}`;

  const whatsappUrl = createWhatsAppUrl(laptop);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
      {/* Image */}
      <Link
        href={productUrl}
        className="relative block aspect-4/3 overflow-hidden bg-gray-100"
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${laptop.title} used laptop`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-7xl">💻</span>
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-gray-900 shadow-sm">
          ★ Featured
        </span>

        {discount !== null && (
          <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-black text-white shadow-sm">
            {discount}% OFF
          </span>
        )}
      </Link>

      {/* Details */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
          {laptop.brand}
        </p>

        <Link href={productUrl}>
          <h3 className="mt-2 line-clamp-2 text-2xl font-black leading-tight text-gray-950 transition hover:text-orange-600">
            {laptop.title}
          </h3>
        </Link>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <CompactSpec label="Processor" value={laptop.processor} />

          <CompactSpec label="RAM" value={laptop.ram} />

          <CompactSpec label="Storage" value={laptop.storage} />

          <CompactSpec label="Graphics" value={laptop.graphics} />
        </div>

        {/* Push price/buttons to bottom */}
        <div className="mt-auto pt-6">
          <div className="border-t border-gray-100 pt-5">
            <p className="text-xs font-semibold text-gray-400">Selling Price</p>

            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="text-3xl font-black text-gray-950">
                ₹{formatPrice(laptop.price)}
              </span>

              {laptop.originalPrice &&
                Number(laptop.originalPrice) > Number(laptop.price) && (
                  <span className="text-sm font-semibold text-gray-400 line-through">
                    ₹{formatPrice(laptop.originalPrice)}
                  </span>
                )}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <Link
              href={productUrl}
              className="flex items-center justify-center rounded-xl border-2 border-gray-200 px-4 py-3 text-center text-sm font-black text-gray-900 transition hover:border-orange-500 hover:text-orange-600"
            >
              View Details
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl bg-green-600 px-4 py-3 text-center text-sm font-black text-white transition hover:bg-green-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                            Small Components                                */
/* -------------------------------------------------------------------------- */

function PremiumSpec({ label, value }) {
  if (!value) return null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
        {label}
      </p>

      <p className="mt-2 line-clamp-2 text-sm font-black leading-5 text-gray-900">
        {value}
      </p>
    </div>
  );
}

function CompactSpec({ label, value }) {
  if (!value) return null;

  return (
    <div className="rounded-xl bg-gray-50 p-3">
      <p className="text-[9px] font-black uppercase tracking-wider text-gray-400">
        {label}
      </p>

      <p className="mt-1 line-clamp-2 text-xs font-black leading-5 text-gray-800">
        {value}
      </p>
    </div>
  );
}

function SmallBadge({ children }) {
  return (
    <span className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold text-gray-600">
      {children}
    </span>
  );
}
