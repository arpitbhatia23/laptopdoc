import Link from "next/link";
import { ShieldCheck, Award, Wrench, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Warranty Policy | LaptopDoc Chandigarh",
  description:
    "Warranty Policy for laptop repairs and used laptops at LaptopDoc Chandigarh. Transparent terms for screen, motherboard, battery, and SSD repairs.",
};

export default function WarrantyPolicyPage() {
  return (
    <main className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-bold text-orange-700">
            <Award className="h-4 w-4" />
            Customer Protection & Guarantee
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Warranty Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: November 2026 | LaptopDoc (SCO 66, Sector 20-C, Chandigarh)
          </p>
        </div>

        <div className="mt-8 space-y-8 text-gray-700 leading-relaxed text-base">
          <section>
            <h2 className="text-xl font-bold text-black flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-orange-600" />
              1. Repair Warranty Coverage
            </h2>
            <p className="mt-3">
              We stand firmly behind the quality of our craftsmanship and replacement components. At LaptopDoc in Sector 20-C Chandigarh, repairs carry the following transparent warranty terms:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-bold text-black">Screen & Display Replacement</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Up to 3 to 6 months replacement warranty covering manufacturing defects, flickering, or line distortion (excludes physical cracks or liquid ingress).
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-bold text-black">New Battery & Adapter</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Up to 6 to 12 months manufacturer warranty against charging failure, battery backup defects, or dead adapter faults.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-bold text-black">SSD & RAM Upgrades</h3>
                <p className="mt-1 text-sm text-gray-600">
                  3 to 5 years brand manufacturer warranty for original, high-speed Kingston, Crucial, WD, or Samsung SSDs and RAM modules.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-bold text-black">Motherboard & Chip-Level Repair</h3>
                <p className="mt-1 text-sm text-gray-600">
                  30 to 90 days service warranty for the specific component repaired (e.g. charging IC, short circuit repair, power rail MOSFET).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black flex items-center gap-2">
              <Wrench className="h-5 w-5 text-orange-600" />
              2. Used & Refurbished Laptop Warranty
            </h2>
            <p className="mt-3">
              Every pre-owned and refurbished laptop purchased from LaptopDoc is tested through our 25-point quality checklist. Laptops include a testing warranty (typically 1 to 3 months depending on model grade) covering major hardware components including the motherboard, display, and keyboard.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black">3. Exclusions from Warranty</h2>
            <p className="mt-3">Warranty coverage does not apply to damages resulting from:</p>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600 text-sm">
              <li>Physical drops, impact cracks, screen breakage, or severe chassis trauma occurring after delivery.</li>
              <li>Water, liquid, beverage, or chemical spillage onto the device.</li>
              <li>Unauthorized third-party tampering, customer disassembly, or burned components caused by severe electrical power surges.</li>
              <li>Software-related issues (viruses, malware, third-party software corruption, OS reformatting).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black">4. How to Claim Warranty</h2>
            <p className="mt-3 text-sm text-gray-600">
              To claim warranty support, simply bring your device and repair receipt / job card to our shop at <strong>SCO 66, 1st Floor, Sector 20-C, Chandigarh</strong> or contact us via WhatsApp at <strong>+91 98782 24658</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

