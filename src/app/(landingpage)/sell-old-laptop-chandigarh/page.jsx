import Link from "next/link";
import {
  Laptop,
  MessageCircle,
  Camera,
  ClipboardList,
  IndianRupee,
  CheckCircle,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Sell Old Laptop in Chandigarh | Get Best Price for Used Laptop",
  description:
    "Sell your old laptop in Chandigarh, Mohali, Panchkula and Zirakpur. Send laptop model, images, condition and configuration on WhatsApp to get the best resale value.",
  keywords: [
    "sell old laptop Chandigarh",
    "sell used laptop Chandigarh",
    "old laptop buyer Chandigarh",
    "used laptop buyer Mohali",
    "sell laptop Tricity",
    "laptop resale Chandigarh",
  ],
};

const whatsappNumber = "+919878224658";

const steps = [
  {
    icon: Laptop,
    title: "Share Laptop Model",
    desc: "Send brand and model name like Dell Inspiron, HP Pavilion, Lenovo ThinkPad, ASUS TUF, Acer Aspire, MSI etc.",
  },
  {
    icon: ClipboardList,
    title: "Send Configuration",
    desc: "Mention processor, RAM, storage, graphics card, screen size, battery backup and purchase year.",
  },
  {
    icon: Camera,
    title: "Upload Laptop Images",
    desc: "Send clear photos of laptop front, back, keyboard, screen, charger and any damage if available.",
  },
  {
    icon: IndianRupee,
    title: "Get Best Price",
    desc: "Our team checks the condition and resale value, then shares the best possible price.",
  },
];

export default function SellOldLaptopPage() {
  const whatsappText =
    "Hi, I want to sell my old laptop.%0A%0ABrand/Model:%0AProcessor:%0ARAM:%0AStorage:%0AGraphics:%0ABattery Backup:%0ACondition:%0AExpected Price:%0ALocation:";

  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-orange-50 via-white to-orange-100 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center rounded-md bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
              Sell Used Laptop in Chandigarh
            </span>

            <h1 className="mt-6 text-xl font-extrabold leading-tight md:text-3xl">
              Sell Your Old Laptop in Chandigarh at the Best Price
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600">
              Want to sell your old laptop? Send us your laptop model,
              configuration, images and condition on WhatsApp. We buy used
              laptops in Chandigarh, Mohali, Panchkula and Zirakpur.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-600 px-6 py-4 font-bold text-white shadow-lg hover:bg-orange-700"
              >
                <MessageCircle className="h-5 w-5" />
                Sell on WhatsApp
              </a>

              <Link
                href="/used-laptops-chandigarh"
                className="inline-flex items-center justify-center rounded-md border border-orange-300 px-6 py-4 font-bold text-orange-700 hover:bg-orange-50"
              >
                View Used Laptops
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-gray-600">
              <MapPin className="h-4 w-4 text-orange-600" />
              Available in Chandigarh, Mohali, Panchkula & Zirakpur
            </div>
          </div>

          <div className="rounded-md border bg-white p-6 shadow-xl">
            <div className="rounded-md bg-gray-100 p-8 text-center">
              <Laptop className="mx-auto h-24 w-24 text-orange-600" />
              <h2 className="mt-6 text-2xl font-extrabold">
                What Details to Send?
              </h2>

              <ul className="mt-6 space-y-4 text-left text-gray-700">
                {[
                  "Laptop brand and model",
                  "Processor, RAM and storage",
                  "Laptop images and bill if available",
                  "Battery backup and condition",
                  "Any damage or repair history",
                  "Expected selling price",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-lg font-extrabold md:text-xl">
              How to Sell Your Old Laptop?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Follow these simple steps to get a quick valuation for your used
              laptop.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-md border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-orange-100 text-orange-600">
                    <Icon className="h-7 w-7" />
                  </div>

                  <span className="mt-6 block text-sm font-semibold text-orange-600">
                    Step {index + 1}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-xs leading-7 text-gray-600">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp Form Style Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-lg font-extrabold md:text-xl">
              Send Laptop Details on WhatsApp
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-600">
              To get the best price, send complete laptop details. Clear photos
              and correct configuration help us give faster and better pricing.
            </p>

            <div className="mt-8 rounded-md border bg-white p-6">
              <h3 className="text-xl font-semibold">Message Format</h3>

              <div className="mt-4 rounded-md bg-gray-100 p-5 text-sm leading-7 text-gray-700">
                <p>Brand/Model: Dell Inspiron 15</p>
                <p>Processor: i5 10th Gen</p>
                <p>RAM: 8GB</p>
                <p>Storage: 512GB SSD</p>
                <p>Graphics: Intel / NVIDIA</p>
                <p>Battery Backup: 2 Hours</p>
                <p>Condition: Good / Average / Damaged</p>
                <p>Expected Price: ₹____</p>
                <p>Location: Chandigarh / Mohali / Panchkula / Zirakpur</p>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-6 py-4 font-bold text-white hover:bg-green-700"
              >
                <MessageCircle className="h-5 w-5" />
                Send Details on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-md bg-white p-8 shadow-xl">
            <h3 className="text-xl font-extrabold">
              Important Things We Check
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Laptop physical condition",
                "Display and keyboard condition",
                "Battery health and charger availability",
                "Processor generation and performance",
                "RAM, SSD/HDD and graphics card",
                "Bill, box and warranty if available",
                "Repair history or damaged parts",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-md bg-gray-50 p-4"
                >
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-600" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-extrabold">
            Best Place to Sell Old Laptop in Chandigarh
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-gray-600">
            <p>
              If you are looking to sell your old laptop in Chandigarh, we help
              you get a fair resale price based on laptop brand, model,
              configuration and condition. Whether you have a Dell, HP, Lenovo,
              ASUS, Acer, MSI or Apple laptop, you can share your details with
              us for quick valuation.
            </p>

            <p>
              We also serve nearby Tricity areas including Mohali, Panchkula and
              Zirakpur. Customers can send laptop images, configuration and
              condition directly on WhatsApp to get a fast response.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-orange-600 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-xl font-extrabold md:text-3xl">
            Ready to Sell Your Laptop?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-orange-100">
            Send your laptop model, images and configuration now. We will review
            it and share the best possible price.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white px-8 py-4 font-extrabold text-orange-600 hover:bg-orange-50"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Now
          </a>
        </div>
      </section>
    </main>
  );
}
