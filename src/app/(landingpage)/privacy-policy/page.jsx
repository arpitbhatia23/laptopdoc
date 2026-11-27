import Link from "next/link";
import { ShieldCheck, Lock, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | LaptopDoc Chandigarh",
  description:
    "Privacy Policy for LaptopDoc Chandigarh. Learn how we handle customer data, diagnostic privacy, and contact information with strict confidentiality.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="border-b border-gray-200 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-bold text-orange-700">
            <ShieldCheck className="h-4 w-4" />
            Customer Data Protection
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last Updated: November 2026 | LaptopDoc (SCO 66, Sector 20-C,
            Chandigarh)
          </p>
        </div>

        <div className="mt-8 space-y-8 text-gray-700 leading-relaxed text-base">
          <section>
            <h2 className="text-xl font-bold text-black flex items-center gap-2">
              <Lock className="h-5 w-5 text-orange-600" />
              1. Customer Data Confidentiality & Device Privacy
            </h2>
            <p className="mt-3">
              At LaptopDoc, we recognize that your computer contains sensitive
              personal, financial, and professional data. When you submit your
              laptop, desktop, or storage drive for repair, diagnostics, or data
              recovery at our Sector 20-C shop, our technicians adhere to strict
              privacy standards.
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-600">
              <li>
                Technicians only access software and directories strictly
                necessary to diagnose hardware faults, driver conflicts, or
                power circuitry.
              </li>
              <li>
                We never copy, browse, transfer, or share your personal files,
                photographs, documents, or browsing history.
              </li>
              <li>
                Customers are welcome and encouraged to password-protect
                sensitive folders or remove confidential storage drives prior to
                physical repairs (screen replacement, hinge fixing, keyboard
                replacement, etc.) where OS access is not required.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black flex items-center gap-2">
              <FileText className="h-5 w-5 text-orange-600" />
              2. Information We Collect
            </h2>
            <p className="mt-3">
              When you book a repair, request a quotation, or contact us via
              phone or WhatsApp, we collect minimal operational information:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-600">
              <li>
                Name, contact phone number, and general location (Chandigarh,
                Mohali, Panchkula, Zirakpur).
              </li>
              <li>
                Device details: Brand, model number, serial number, and reported
                symptoms.
              </li>
              <li>
                We do not sell, rent, or trade your contact information with any
                third-party marketing agencies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black">
              3. Data Recovery Protocols
            </h2>
            <p className="mt-3">
              For specialized data recovery services (recovering files from
              corrupted drives, water-damaged laptops, or non-booting storage),
              recovered data is temporarily transferred to an encrypted transfer
              drive for client handover. Once the client verifies and accepts
              their recovered data, temporary recovery caches are securely
              purged from our bench workstations within 7 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black">
              4. Contact & Inquiries
            </h2>
            <p className="mt-3">
              If you have any questions regarding our privacy practices or
              device handling protocols, please contact us directly:
            </p>
            <div className="mt-4 rounded-xl bg-gray-50 border border-gray-200 p-5 text-sm">
              <p className="font-bold text-black">LaptopDoc Chandigarh</p>
              <p className="text-gray-600 mt-1">
                SCO 66, 1st Floor, Sector 20-C, Chandigarh, 160020
              </p>
              <p className="text-gray-600 mt-1">
                Phone: +91 98782 24658 / +91 76965 13535
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
