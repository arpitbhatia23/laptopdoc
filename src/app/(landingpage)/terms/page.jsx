import Link from "next/link";
import { ShieldCheck, Scale, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Terms of Service | LaptopDoc Chandigarh",
  description:
    "Terms of Service and Repair Conditions for LaptopDoc Chandigarh. Understand diagnostic procedures, repair quotes, and customer obligations.",
};

export default function TermsPage() {
  return (
    <main className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-bold text-orange-700">
            <Scale className="h-4 w-4" />
            Repair Agreement & Terms
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: November 2026 | LaptopDoc (SCO 66, Sector 20-C, Chandigarh)
          </p>
        </div>

        <div className="mt-8 space-y-8 text-gray-700 leading-relaxed text-base">
          <section>
            <h2 className="text-xl font-bold text-black">1. Diagnostic & Quotation Process</h2>
            <p className="mt-3">
              Every device submitted to LaptopDoc undergoes a preliminary hardware diagnostic. We identify the root cause of the fault (e.g. charging IC failure, display panel fault, motherboard short circuit) and provide an estimated cost before proceeding with any repair work.
            </p>
            <p className="mt-2 text-gray-600">
              No major repair or part replacement is executed without explicit customer approval via phone, WhatsApp, or in-person confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black">2. Pre-Existing Conditions & Liquid Damage</h2>
            <p className="mt-3">
              Devices that have suffered from severe liquid spills, physical drops, or prior third-party repair attempts may have hidden or unstable faults. Liquid corrosion can cause unpredictable failures across internal circuit traces when power is reapplied. While our technicians take utmost precautions, LaptopDoc is not liable for latent component failures caused by pre-existing corrosion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black">3. Device Collection & Storage Policy</h2>
            <p className="mt-3">
              Customers are requested to collect repaired or inspected devices within 30 days of notification. Devices uncollected after 60 days without prior notice or communication may be subject to nominal storage handling fees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black">4. Used & Refurbished Laptop Purchases</h2>
            <p className="mt-3">
              All used and refurbished laptops sold by LaptopDoc are inspected through our 25-point hardware check (screen, battery, keyboard, ports, thermals, SSD/RAM). Each device includes a specified testing warranty period as detailed in our Warranty Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black">5. Contact Information</h2>
            <div className="mt-4 rounded-xl bg-gray-50 border border-gray-200 p-5 text-sm">
              <p className="font-bold text-black">LaptopDoc</p>
              <p className="text-gray-600 mt-1">SCO 66, 1st Floor, Sector 20-C, Chandigarh, 160020</p>
              <p className="text-gray-600 mt-1">Direct Helpline: +91 98782 24658</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
