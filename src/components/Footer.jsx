import { ArrowUpRight, BadgeCheck, Laptop, MapPin, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Repair Services",
    href: "/services",
  },
  {
    label: "Used Laptops",
    href: "/used-laptops",
  },
  {
    label: "Sell Old Laptop",
    href: "/sell-old-laptop-chandigarh",
  },
  {
    label: "Blogs & Tech Tips",
    href: "/blogs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const topServices = [
  {
    label: "Motherboard Repair",
    href: "/laptop-motherboard-repair-chandigarh",
  },
  {
    label: "Screen Replacement",
    href: "/laptop-screen-replacement-chandigarh",
  },
  {
    label: "Hinge & Body Repair",
    href: "/laptop-hinge-repair-chandigarh",
  },
  {
    label: "Data Recovery",
    href: "/data-recovery-chandigarh",
  },
  {
    label: "OS Installation",
    href: "/laptop-os-installation-chandigarh",
  },
  {
    label: "Thermal Paste Service",
    href: "/laptop-cleaning-thermal-paste-chandigarh",
  },
  {
    label: "RAM Upgrade",
    href: "/laptop-ram-upgrade-chandigarh",
  },
  {
    label: "SSD Upgrade",
    href: "/laptop-ssd-upgrade-chandigarh",
  },
];

const serviceAreas = [
  {
    label: "Chandigarh",
    href: "/laptop-repair-chandigarh",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#151515] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      {/* Top CTA */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="flex flex-col gap-6 rounded-md border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-extrabold text-orange-400">
                <Wrench className="h-4 w-4" />
                LaptopDoc Repair Specialists
              </div>

              <h2 className="mt-3 max-w-2xl text-xl font-extrabold tracking-tight md:text-2xl">
                Laptop repair, upgrades and resale support under one roof.
              </h2>

              <p className="mt-3 max-w-2xl text-xs font-medium leading-7 text-gray-400 md:text-dm">
                LaptopDoc provides laptop and desktop repair, data recovery,
                upgrades, maintenance and tested used laptop resale across
                Chandigarh Tricity.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-orange-500 px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Contact LaptopDoc
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_0.85fr]">
          {/* Brand Column */}
          <div>
            {/* Clear Logo Card */}
            <Link
              href="/"
              className="inline-flex rounded-md border border-gray-200 bg-white p-5 shadow-2xl shadow-black/20 transition-transform hover:-translate-y-1"
            >
              <div className="relative h-24 w-72">
                <Image
                  src="/logo.png"
                  alt="LaptopDoc repair specialists"
                  fill
                  sizes="288px"
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="mt-7 max-w-md text-sm font-medium leading-7 text-gray-400">
              LaptopDoc provides professional laptop and desktop repair with
              more than 16 years of practical experience in hardware,
              maintenance, upgrades and IT support.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-4 py-3">
                <BadgeCheck className="h-5 w-5 shrink-0 text-orange-400" />

                <div>
                  <p className="text-sm font-extrabold text-white">
                    16+ Years Experience
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-gray-500">
                    Practical repair and IT hardware experience
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-4 py-3">
                <Laptop className="h-5 w-5 shrink-0 text-orange-400" />

                <div>
                  <p className="text-sm font-extrabold text-white">
                    Repair + Upgrade + Resale
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-gray-500">
                    Complete laptop and desktop support
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-4 py-3">
                <MapPin className="h-5 w-5 shrink-0 text-orange-400" />

                <div>
                  <p className="text-sm font-extrabold text-white">
                    Chandigarh Tricity
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-gray-500">
                    Chandigarh, Mohali, Panchkula and nearby areas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-extrabold text-white">Quick Links</h3>

            <div className="mt-3 h-0.5 w-10 rounded-md bg-orange-500" />

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition-colors hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-md bg-gray-700 transition-colors group-hover:bg-orange-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-extrabold text-white">
              Repair Services
            </h3>

            <div className="mt-3 h-0.5 w-10 rounded-md bg-orange-500" />

            <ul className="mt-6 grid gap-3">
              {topServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition-colors hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-md bg-gray-700 transition-colors group-hover:bg-orange-500" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-base font-extrabold text-white">
              Service Areas
            </h3>

            <div className="mt-3 h-0.5 w-10 rounded-md bg-orange-500" />

            <ul className="mt-6 space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition-colors hover:text-white"
                  >
                    <MapPin className="h-3.5 w-3.5 text-gray-600 transition-colors group-hover:text-orange-500" />
                    Laptop Repair in {area.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-md border border-orange-500/20 bg-orange-500/10 p-4">
              <p className="text-sm font-extrabold text-orange-300">
                Need help choosing a service?
              </p>

              <p className="mt-2 text-xs font-medium leading-6 text-gray-400">
                View all repair, software, upgrade and maintenance services.
              </p>

              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-white transition-colors hover:text-orange-400"
              >
                Explore Services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm font-medium text-gray-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} LaptopDoc. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-5">
            <Link href="/blogs" className="transition-colors hover:text-white">
              Tech Tips
            </Link>

            <Link
              href="/services"
              className="transition-colors hover:text-white"
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
