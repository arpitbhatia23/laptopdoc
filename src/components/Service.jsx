import {
  ArrowRight,
  Battery,
  Cpu,
  Monitor,
  Wrench,
  CheckCircle2,
  MessageCircle,
  HardDrive,
  Database,
  Laptop,
  Fan,
  MemoryStick,
  Settings,
  ShieldCheck,
  Bug,
  Computer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Motherboard Repair",
    description:
      "Chip-level motherboard repair for dead laptops, no-power issues, charging IC faults, short circuits, and no-display problems.",
    image: "/services/motherboardrepair.png",
    href: "/laptop-motherboard-repair-chandigarh",
    icon: Cpu,
    tag: "Chip Level Repair",
    points: ["Dead laptop fixing", "Charging IC repair", "No display repair"],
  },
  {
    title: "Screen Replacement",
    description:
      "Laptop display replacement for cracked screens, flickering panels, black display, dead pixels, and 14-inch or 15.6-inch panels.",
    image: "/services/screenreplacement.png",
    href: "/laptop-screen-replacement-chandigarh",
    icon: Monitor,
    tag: "Display Repair",
    points: ["Cracked screen", "Flickering display", "144Hz panel support"],
  },
  {
    title: "Hinge & Body Repair",
    description:
      "Strong hinge repair, laptop body replacement, palm-rest replacement, broken mount fixing, and loose screen frame repair.",
    image: "/services/hingbodyrepair.png",
    href: "/laptop-hinge-repair-chandigarh",
    icon: Wrench,
    tag: "Body Repair",
    points: ["Hinge repair", "Body replacement", "Palm-rest repair"],
  },
  {
    title: "Battery & Charger Repair",
    description:
      "Laptop battery replacement, charger wire repair, charging pin repair, adapter diagnosis, and charging issue inspection.",
    image: "/services/batteryrepair.png",
    href: "/laptop-battery-replacement-chandigarh",
    icon: Battery,
    tag: "Power Issue",
    points: ["Battery replacement", "Charger repair", "Charging pin repair"],
  },
  {
    title: "Data Recovery",
    description:
      "Recover important files from corrupted hard drives, SSDs, crashed Windows systems, accidental deletion, or non-booting laptops.",
    image: "/services/datarecovery.png",
    href: "/data-recovery-chandigarh",
    icon: Database,
    tag: "File Recovery",
    points: ["HDD recovery", "SSD recovery", "Deleted file recovery"],
  },
  {
    title: "OS Installation",
    description:
      "Windows installation, driver setup, software configuration, system formatting, virus cleanup, and fresh laptop setup.",
    image: "/services/os.png",
    href: "/laptop-os-installation-chandigarh",
    icon: Laptop,
    tag: "Windows Setup",
    points: ["Windows install", "Driver setup", "System formatting"],
  },
  {
    title: "Regular Laptop Service",
    description:
      "Complete laptop servicing with dust cleaning, fan cleaning, internal inspection, performance check, and basic maintenance.",
    image: "/services/regularservices.png",
    href: "/laptop-service-chandigarh",
    icon: Settings,
    tag: "Maintenance",
    points: ["Dust cleaning", "Fan cleaning", "Performance check"],
  },
  {
    title: "Thermal Paste Change",
    description:
      "Thermal paste replacement for overheating laptops, gaming laptops, noisy fans, CPU/GPU heating, and performance throttling.",
    image: "/services/thermalpaste.png",
    href: "/laptop-cleaning-thermal-paste-chandigarh",
    icon: Fan,
    tag: "Heating Fix",
    points: ["CPU thermal paste", "GPU thermal paste", "Heating solution"],
  },
  {
    title: "RAM Upgrade",
    description:
      "Upgrade your laptop RAM for faster multitasking, better browser performance, smooth office work, coding, and gaming support.",
    image: "/services/ram.png",
    href: "/laptop-ram-upgrade-chandigarh",
    icon: MemoryStick,
    tag: "Speed Upgrade",
    points: ["4GB to 8GB", "8GB to 16GB", "Performance boost"],
  },
  {
    title: "SSD Upgrade",
    description:
      "Replace slow hard drives with SSD storage for faster boot time, quick app loading, smooth Windows performance, and better reliability.",
    image: "/services/ssd.png",
    href: "/laptop-ssd-upgrade-chandigarh",
    icon: HardDrive,
    tag: "Storage Upgrade",
    points: ["HDD to SSD", "NVMe SSD upgrade", "Fast boot speed"],
  },
  {
    title: "Desktop Repair",
    description:
      "Desktop PC repair for no-display issues, SMPS faults, motherboard problems, RAM issues, SSD upgrades, cabinet cleaning, and Windows setup.",
    image: "/services/desktop.png",
    href: "/desktop-repair-chandigarh",
    icon: Computer,
    tag: "PC Repair",
    points: ["No display repair", "SMPS issue", "Desktop upgrade"],
  },
  {
    title: "Virus Removal",
    description:
      "Virus, malware, adware and unwanted software removal with system cleanup, browser cleanup, startup optimization and security check.",
    image: "/services/virusremoval.png",
    href: "/virus-removal-chandigarh",
    icon: Bug,
    tag: "Security Cleanup",
    points: ["Virus removal", "Malware cleanup", "System optimization"],
  },
];

const brands = [
  { name: "ASUS", logo: "/brands/asus.png" },
  { name: "MSI", logo: "/brands/msi.png" },
  { name: "TUF", logo: "/brands/tuf.png" },
  { name: "ROG", logo: "/brands/rog.png" },
  { name: "HP", logo: "/brands/hp.png" },
  { name: "Dell", logo: "/brands/dell.png" },
  { name: "Lenovo", logo: "/brands/lenovo.png" },
  { name: "Acer", logo: "/brands/acer.png" },
  { name: "Apple", logo: "/brands/mac.png" },
];

const Service = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-orange-50/70 via-white to-gray-50" />
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-orange-100 px-5 py-2 text-xs font-extrabold text-orange-600">
            <Wrench className="h-4 w-4" />
            LaptopDoc Services
          </div>

          <h2 className="text-xl font-extrabold tracking-tight text-black md:text-3xl">
            Complete Laptop & Desktop Repair Services in Tricity
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-xs font-medium leading-normal text-gray-600 md:text-sm">
            From laptop repair and desktop repair to OS installation, virus
            removal, data recovery, thermal paste change, RAM upgrade and SSD
            upgrade — LaptopDoc handles complete computer care under one roof.
          </p>
        </div>

        {/* Infinite Brand Logo Scroll */}
        <div className="mb-16 overflow-hidden  py-6">
          <div className="mb-5 flex items-center justify-center gap-2 text-sm font-extrabold text-gray-500">
            <ShieldCheck className="h-4 w-4 text-orange-500" />
            Brands We Work With
          </div>

          <div className="relative overflow-hidden">
            <div className="flex w-max animate-brand-scroll items-center gap-8">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex h-20 w-40 shrink-0 items-center justify-center  px-6"
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} laptop repair service`}
                    width={120}
                    height={80}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} by LaptopDoc in Chandigarh Tricity`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />

                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-extrabold text-black shadow-lg">
                    <Icon className="h-3.5 w-3.5 text-orange-500" />
                    {service.tag}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-2xl font-extrabold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="min-h-24 text-sm font-medium leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-5 space-y-3">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-sm font-bold text-gray-700"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between gap-3">
                    <Link
                      href={service.href}
                      className="group/link inline-flex items-center gap-1 text-sm font-extrabold text-orange-500 transition-all hover:text-orange-600"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    <a
                      href="https://wa.me/919878224658"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all hover:bg-orange-500"
                      aria-label={`Get quote for ${service.title}`}
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 overflow-hidden rounded-md bg-black p-8 text-white shadow-2xl md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <h3 className="text-2xl font-extrabold md:text-4xl">
                Need repair, upgrade or virus cleanup?
              </h3>

              <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-gray-300 md:text-lg">
                Send your laptop or desktop issue on WhatsApp. LaptopDoc will
                help you understand the problem, possible repair options,
                upgrade suggestions and estimated cost before you visit.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Diagnosis",
                  "Hardware + Software Support",
                  "Laptop + Desktop Repair",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-gray-200"
                  >
                    <CheckCircle2 className="h-4 w-4 text-orange-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex lg:justify-end">
              <a
                href="https://wa.me/919878224658"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-600 sm:w-auto"
              >
                WhatsApp Now
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

