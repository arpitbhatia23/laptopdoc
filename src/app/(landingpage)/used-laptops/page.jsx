import resellLaptopSchema from "@/models/resellLaptop.schema";
import dbConnect from "@/utils/dbConnect";
import Link from "next/link";

export const metadata = {
  title: "Used Laptops for Sale in Chandigarh | Refurbished Laptops Tricity",
  description:
    "Buy tested used laptops in Chandigarh, Mohali, Panchkula and Zirakpur. View available Dell, HP, Lenovo, ASUS, Acer and MSI laptops with price, configuration and warranty.",
};

// Replace with the real WhatsApp number
const WHATSAPP_NUMBER = "919876543210";

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

function getImageUrl(image) {
  if (!image) return null;

  // Supports old string-based image arrays
  if (typeof image === "string") {
    return image;
  }

  // Your current Cloudinary schema uses image.url
  return image.url || image.secure_url || null;
}

function formatPrice(price) {
  const numericPrice = Number(price);

  if (Number.isNaN(numericPrice)) {
    return price;
  }

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

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      {/* -------------------------------------------------------------------- */}
      {/* Hero                                                                 */}
      {/* -------------------------------------------------------------------- */}

      <section className="relative overflow-hidden bg-linear-to-br from-orange-500 via-orange-500 to-orange-600 text-white">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-black/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              Tested • Verified • Ready to Use
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Used Laptops for Sale in Chandigarh
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-orange-50 sm:text-lg">
              Buy tested used and refurbished laptops in Chandigarh, Mohali,
              Panchkula and Zirakpur at competitive prices.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium">
              {[
                "Tested Devices",
                "Verified Condition",
                "Affordable Prices",
                "Local Support",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white px-4 py-2 text-gray-900 shadow-sm"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* Product Listing                                                       */}
      {/* -------------------------------------------------------------------- */}

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Current Stock
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-950">
              Available Laptops
            </h2>
          </div>

          {laptops.length > 0 && (
            <p className="text-sm font-medium text-gray-500">
              {laptops.length} {laptops.length === 1 ? "laptop" : "laptops"}{" "}
              available
            </p>
          )}
        </div>

        {/* Laptop Grid */}
        {laptops.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {laptops.map((laptop) => {
              const imageUrl = getImageUrl(laptop.images?.[0]);

              const discount = getDiscount(laptop.price, laptop.originalPrice);

              const productUrl = `/used-laptops/${laptop.slug}`;

              const whatsappMessage = encodeURIComponent(
                `Hi, I am interested in the ${laptop.title} listed for ₹${formatPrice(
                  laptop.price,
                )}. Is it still available?`,
              );

              const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

              return (
                <article
                  key={laptop._id.toString()}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* -------------------------------------------------------- */}
                  {/* Clickable Product Image                                  */}
                  {/* -------------------------------------------------------- */}

                  <Link
                    href={productUrl}
                    className="block"
                    aria-label={`View details for ${laptop.title}`}
                  >
                    <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={`${laptop.title} used laptop for sale`}
                          loading="lazy"
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

                      {/* Condition Badge */}
                      {laptop.condition && (
                        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-gray-900 shadow-sm backdrop-blur">
                          {laptop.condition}
                        </span>
                      )}

                      {/* Discount Badge */}
                      {discount !== null && (
                        <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                          {discount}% OFF
                        </span>
                      )}
                    </div>
                  </Link>

                  {/* -------------------------------------------------------- */}
                  {/* Product Content                                          */}
                  {/* -------------------------------------------------------- */}

                  <div className="p-5">
                    {/* Brand */}
                    {laptop.brand && (
                      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-600">
                        {laptop.brand}
                      </p>
                    )}

                    {/* Clickable Product Title */}
                    <Link href={productUrl} className="block">
                      <h3 className="line-clamp-2 min-h-14 text-xl font-black leading-7 text-gray-950 transition-colors hover:text-orange-600">
                        {laptop.title}
                      </h3>
                    </Link>

                    {/* ------------------------------------------------------ */}
                    {/* Main Specifications                                    */}
                    {/* ------------------------------------------------------ */}

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

                    {/* ------------------------------------------------------ */}
                    {/* Additional Specifications                              */}
                    {/* ------------------------------------------------------ */}

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

                    {/* ------------------------------------------------------ */}
                    {/* Price                                                  */}
                    {/* ------------------------------------------------------ */}

                    <div>
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

                    {/* ------------------------------------------------------ */}
                    {/* Action Buttons                                         */}
                    {/* ------------------------------------------------------ */}

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {/* Internal Next.js Link */}
                      <Link
                        href={productUrl}
                        className="flex min-h-12 items-center justify-center rounded-xl border-2 border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-900 transition hover:border-orange-500 hover:text-orange-600 active:scale-[0.98]"
                      >
                        View Details
                      </Link>

                      {/* External link: normal <a>, not Next.js Link */}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ask about ${laptop.title} on WhatsApp`}
                        className="flex min-h-12 items-center justify-center rounded-xl bg-green-600 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-green-700 active:scale-[0.98]"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* ---------------------------------------------------------------- */
          /* Empty State                                                      */
          /* ---------------------------------------------------------------- */

          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="text-5xl" aria-hidden="true">
              💻
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              No laptops available right now
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              New tested used laptops are added regularly. Please check again
              soon or contact us for current stock.
            </p>
          </div>
        )}
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* Trust Section                                                        */}
      {/* -------------------------------------------------------------------- */}

      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          <TrustItem icon="✓" title="Tested" text="Hardware inspected" />

          <TrustItem icon="⚡" title="Ready to Use" text="Setup and checked" />

          <TrustItem icon="₹" title="Fair Pricing" text="Competitive deals" />

          <TrustItem icon="📍" title="Local Support" text="Tricity service" />
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* SEO Content                                                          */}
      {/* -------------------------------------------------------------------- */}

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          {/* Why Choose Us */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-600">
              Why Choose Us?
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-950">
              Why Buy a Used Laptop From Laptop Doc?
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
              <p>
                Laptop Doc offers tested used and refurbished laptops for
                customers in Chandigarh, Mohali, Panchkula and Zirakpur.
              </p>

              <p>
                Every available device is inspected for important hardware and
                performance factors before it is listed for sale. You can view
                the configuration, condition and current price before making an
                enquiry.
              </p>

              <p>
                Our stock may include popular brands such as Dell, HP, Lenovo,
                ASUS, Acer, Apple and MSI depending on current availability.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-2xl bg-gray-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-orange-400">
              FAQs
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Frequently Asked Questions
            </h2>

            <div className="mt-7 divide-y divide-white/10">
              <FAQ
                question="Do you sell used laptops in Chandigarh?"
                answer="Yes. We offer tested used and refurbished laptops based on current stock availability."
              />

              <FAQ
                question="Do used laptops come with a warranty?"
                answer="Warranty terms can vary by laptop. Check the individual listing or contact us to confirm the warranty details before purchase."
              />

              <FAQ
                question="Can I sell my old laptop?"
                answer="Yes. Old laptops can be evaluated after inspection, and an offer can be provided based on condition and market value."
              />

              <FAQ
                question="Which laptop brands are available?"
                answer="Stock may include Dell, HP, Lenovo, ASUS, Acer, Apple and MSI, depending on availability."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Helper Components                             */
/* -------------------------------------------------------------------------- */

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

function TrustItem({ icon, title, text }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-lg font-black text-orange-600">
        {icon}
      </div>

      <h3 className="mt-3 font-bold text-gray-950">{title}</h3>

      <p className="mt-1 text-xs text-gray-500">{text}</p>
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <div className="py-5 first:pt-0 last:pb-0">
      <h3 className="font-bold leading-6">{question}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-400">{answer}</p>
    </div>
  );
}
