import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Award,
  Battery,
  Bug,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Computer,
  Cpu,
  Database,
  Fan,
  HardDrive,
  Laptop,
  MapPin,
  MemoryStick,
  MessageCircle,
  Monitor,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const siteUrl = "https://yourdomain.com";

export const metadata = {
  title: "Laptop Repair Services in Chandigarh Tricity | LaptopDoc",
  description:
    "Explore LaptopDoc repair services including motherboard repair, screen replacement, hinge repair, data recovery, SSD and RAM upgrades in Tricity.",
  keywords: [
    "laptop repair services Chandigarh",
    "laptop repair Tricity",
    "laptop repair Mohali",
    "laptop repair Panchkula",
    "laptop repair Zirakpur",
    "motherboard repair Chandigarh",
    "laptop screen replacement Chandigarh",
    "laptop hinge repair Chandigarh",
    "data recovery Chandigarh",
    "SSD upgrade Chandigarh",
    "RAM upgrade Chandigarh",
    "desktop repair Chandigarh",
  ],
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Laptop Repair Services in Tricity | LaptopDoc",
    description:
      "Laptop and desktop repair, upgrades, maintenance, data recovery and software services across Chandigarh Tricity.",
    url: `${siteUrl}/services`,
    siteName: "LaptopDoc",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og/services.jpg`,
        width: 1200,
        height: 630,
        alt: "LaptopDoc repair services in Chandigarh Tricity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laptop Repair Services in Tricity | LaptopDoc",
    description:
      "Explore complete laptop repair, maintenance and upgrade services from LaptopDoc.",
    images: [`${siteUrl}/og/services.jpg`],
  },
};

const services = [
  {
    title: "Motherboard Repair",
    shortTitle: "Motherboard",
    description:
      "Diagnosis and chip-level repair for dead laptops, no-power faults, charging issues, short circuits and no-display problems.",
    image: "/services/motherboardrepair.png",
    href: "/laptop-motherboard-repair-chandigarh",
    icon: Cpu,
    tag: "Chip-Level Repair",
    points: [
      "Dead laptop diagnosis",
      "Charging IC faults",
      "No-display issues",
      "Short-circuit tracing",
    ],
  },
  {
    title: "Laptop Screen Replacement",
    shortTitle: "Screen",
    description:
      "Display replacement for cracked screens, black panels, flickering displays, dead pixels and faulty laptop screens.",
    image: "/services/screenreplacement.png",
    href: "/laptop-screen-replacement-chandigarh",
    icon: Monitor,
    tag: "Display Service",
    points: [
      "Cracked screens",
      "Flickering display",
      "Black screen faults",
      "Common panel sizes",
    ],
  },
  {
    title: "Hinge & Body Repair",
    shortTitle: "Hinge & Body",
    description:
      "Repair support for broken hinges, damaged mounts, cracked palm rests, loose display frames and damaged laptop body sections.",
    image: "/services/hingbodyrepair.png",
    href: "/laptop-hinge-repair-chandigarh",
    icon: Wrench,
    tag: "Body Repair",
    points: [
      "Broken hinge repair",
      "Mount restoration",
      "Palm-rest repair",
      "Body replacement guidance",
    ],
  },
  {
    title: "Battery & Charger Repair",
    shortTitle: "Battery & Charger",
    description:
      "Battery replacement, charger wire repair, charging port checks, adapter diagnosis and laptop charging issue support.",
    image: "/services/batteryrepair.png",
    href: "/laptop-battery-replacement-chandigarh",
    icon: Battery,
    tag: "Power Issues",
    points: [
      "Battery replacement",
      "Charger inspection",
      "Charging pin repair",
      "Power issue diagnosis",
    ],
  },
  {
    title: "Data Recovery",
    shortTitle: "Data Recovery",
    description:
      "Recovery support for important files from damaged storage devices, corrupted systems, non-booting laptops and accidental deletion.",
    image: "/services/datarecovery.png",
    href: "/data-recovery-chandigarh",
    icon: Database,
    tag: "File Recovery",
    points: [
      "HDD recovery",
      "SSD recovery support",
      "Deleted file recovery",
      "Non-booting systems",
    ],
  },
  {
    title: "OS Installation",
    shortTitle: "OS Installation",
    description:
      "Fresh operating system installation, driver configuration, system formatting and clean laptop setup.",
    image: "/services/os.png",
    href: "/laptop-os-installation-chandigarh",
    icon: Laptop,
    tag: "Software Setup",
    points: [
      "OS installation",
      "Driver configuration",
      "System formatting",
      "Fresh setup",
    ],
  },
  {
    title: "Regular Laptop Service",
    shortTitle: "Regular Service",
    description:
      "Routine laptop maintenance with internal dust cleaning, fan inspection, vent cleaning and general hardware checks.",
    image: "/services/regularservices.png",
    href: "/laptop-service-chandigarh",
    icon: Settings,
    tag: "Maintenance",
    points: [
      "Internal cleaning",
      "Fan cleaning",
      "Vent inspection",
      "Routine maintenance",
    ],
  },
  {
    title: "Thermal Paste Change",
    shortTitle: "Thermal Service",
    description:
      "Cooling-system servicing and thermal paste replacement for overheating laptops, noisy fans and thermal performance problems.",
    image: "/services/thermalpaste.png",
    href: "/laptop-cleaning-thermal-paste-chandigarh",
    icon: Fan,
    tag: "Cooling Service",
    points: [
      "CPU thermal paste",
      "GPU thermal support",
      "Heating diagnosis",
      "Cooling maintenance",
    ],
  },
  {
    title: "RAM Upgrade",
    shortTitle: "RAM Upgrade",
    description:
      "Memory upgrade support for improved multitasking, smoother everyday use and better application performance.",
    image: "/services/ram.png",
    href: "/laptop-ram-upgrade-chandigarh",
    icon: MemoryStick,
    tag: "Memory Upgrade",
    points: [
      "Compatibility check",
      "Memory expansion",
      "Multitasking boost",
      "Upgrade guidance",
    ],
  },
  {
    title: "SSD Upgrade",
    shortTitle: "SSD Upgrade",
    description:
      "Upgrade from a slower hard drive to SSD or expand existing storage for faster boot and application performance.",
    image: "/services/ssd.png",
    href: "/laptop-ssd-upgrade-chandigarh",
    icon: HardDrive,
    tag: "Storage Upgrade",
    points: [
      "HDD to SSD",
      "NVMe support",
      "Storage expansion",
      "Faster boot performance",
    ],
  },
  {
    title: "Desktop Repair",
    shortTitle: "Desktop Repair",
    description:
      "Repair and upgrade support for desktop computers, including no-display issues, power faults, cleaning and component upgrades.",
    image: "/services/desktop.png",
    href: "/desktop-repair-chandigarh",
    icon: Computer,
    tag: "PC Repair",
    points: [
      "No-display faults",
      "Power issues",
      "Desktop upgrades",
      "Routine servicing",
    ],
  },
  {
    title: "Virus & Malware Removal",
    shortTitle: "Virus Removal",
    description:
      "System cleanup for malware, unwanted software, browser redirects, pop-ups and performance problems.",
    image: "/services/virusremoval.png",
    href: "/virus-removal-chandigarh",
    icon: Bug,
    tag: "Security Cleanup",
    points: [
      "Malware cleanup",
      "Browser cleanup",
      "Unwanted software removal",
      "System optimization",
    ],
  },
];

const repairProcess = [
  {
    number: "01",
    title: "Explain the Problem",
    description:
      "Tell LaptopDoc what happened, what symptoms you noticed and when the issue started.",
  },
  {
    number: "02",
    title: "Device Inspection",
    description:
      "The laptop or desktop is inspected to identify the likely hardware or software fault.",
  },
  {
    number: "03",
    title: "Repair Guidance",
    description:
      "You receive an explanation of the problem and the practical repair, replacement or upgrade option.",
  },
  {
    number: "04",
    title: "Service & Testing",
    description:
      "After approval, the required work is completed and the relevant functions are checked.",
  },
];

const areas = [
  {
    title: "Chandigarh",
    href: "/laptop-repair-chandigarh",
  },
  {
    title: "Mohali",
    href: "/laptop-repair-mohali",
  },
  {
    title: "Panchkula",
    href: "/laptop-repair-panchkula",
  },
  {
    title: "Zirakpur",
    href: "/laptop-repair-zirakpur",
  },
];

const faqs = [
  {
    question: "What laptop repair services does LaptopDoc provide?",
    answer:
      "LaptopDoc provides motherboard repair, screen replacement, hinge and body repair, battery and charger support, data recovery, OS installation, regular servicing, thermal paste change, RAM upgrades, SSD upgrades, desktop repair and virus removal.",
  },
  {
    question: "Which areas does LaptopDoc serve?",
    answer:
      "LaptopDoc focuses on Chandigarh Tricity and nearby areas, including Chandigarh, Mohali, Panchkula and Zirakpur.",
  },
  {
    question: "Can LaptopDoc repair both laptops and desktop computers?",
    answer:
      "Yes. LaptopDoc provides services for laptops and desktop computers, including hardware repair, maintenance, upgrades and software support.",
  },
  {
    question: "Should I repair or replace my laptop?",
    answer:
      "The better option depends on the fault, age, condition and cost of the required work. A proper diagnosis helps determine whether repair, component replacement or device replacement is more practical.",
  },
  {
    question: "Can LaptopDoc upgrade laptop RAM and SSD storage?",
    answer:
      "Yes. RAM and SSD upgrade support is available. Compatibility should be checked for the specific laptop model before purchasing or installing a component.",
  },
  {
    question: "Does LaptopDoc also sell used laptops?",
    answer:
      "Yes. LaptopDoc also offers selected used and refurbished laptops depending on current stock.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Repair Services",
      item: `${siteUrl}/services`,
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Laptop and Desktop Repair Services",
  provider: {
    "@type": "Organization",
    name: "LaptopDoc",
    url: siteUrl,
  },
  areaServed: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur"],
  serviceType: [
    "Laptop Repair",
    "Desktop Repair",
    "Motherboard Repair",
    "Laptop Screen Replacement",
    "Laptop Hinge Repair",
    "Data Recovery",
    "RAM Upgrade",
    "SSD Upgrade",
    "Virus Removal",
  ],
  url: `${siteUrl}/services`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black text-white">
          <div className="absolute inset-0">
            <Image
              src="/heroimage.png"
              alt="Laptop repair services at LaptopDoc in Chandigarh Tricity"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 bg-linear-to-r from-black via-black/85 to-black/20" />
          </div>

          <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative mx-auto flex min-h-162.5 max-w-7xl items-center px-4 py-20 lg:px-8">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="mb-7 flex items-center gap-2 text-sm font-semibold text-gray-300"
              >
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>

                <ChevronRight className="h-4 w-4" />

                <span className="text-orange-400">Repair Services</span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-extrabold text-orange-300 backdrop-blur-md">
                <Wrench className="h-4 w-4" />
                Complete Repair & Upgrade Support
              </div>

              <h1 className="mt-6 text-xl font-extrabold leading-tight tracking-tight md:text-xl lg:text-3xl">
                Laptop Repair Services in{" "}
                <span className="text-orange-500">Chandigarh Tricity</span>
              </h1>

              <p className="mt-6 max-w-2xl text-xs font-medium leading-8 text-gray-300 md:text-sm">
                From motherboard repair and screen replacement to data recovery,
                OS installation, thermal servicing, RAM upgrades and SSD
                upgrades, LaptopDoc provides complete laptop and desktop support
                under one roof.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "16+ Years Experience",
                  "Laptop + Desktop Support",
                  "Hardware + Software",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-gray-200 backdrop-blur-md"
                  >
                    <CheckCircle2 className="h-4 w-4 text-orange-400" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/919878224658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Ask About Your Repair
                  <MessageCircle className="h-5 w-5" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-8 py-4 text-base font-extrabold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
                >
                  Contact LaptopDoc
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service overview */}
        <section className="relative bg-white py-20">
          <div className="absolute inset-0 bg-linear-to-b from-orange-50/50 via-white to-white" />

          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-extrabold text-orange-600">
                <Settings className="h-4 w-4" />
                All LaptopDoc Services
              </div>

              <h2 className="mt-5 text-lg font-extrabold tracking-tight text-black md:text-2xl">
                Hardware, Software, Maintenance &{" "}
                <span className="text-orange-500">Upgrades</span>
              </h2>

              <p className="mt-5 text-xs font-medium leading-8 text-gray-600 md:text-sm">
                Different laptop problems require different solutions. LaptopDoc
                provides repair, maintenance, upgrade and software services for
                common and complex computer issues.
              </p>
            </div>

            {/* Services */}
            <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group flex h-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} by LaptopDoc in Chandigarh Tricity`}
                        fill
                        sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 32px), 400px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-extrabold text-black shadow-lg">
                        <Icon className="h-4 w-4 text-orange-500" />
                        {service.tag}
                      </div>

                      <div className="absolute bottom-5 left-5 right-5">
                        <h2 className="text-2xl font-extrabold text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-sm font-medium leading-7 text-gray-600">
                        {service.description}
                      </p>

                      <ul className="mt-5 grid gap-3">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-center gap-2 text-sm font-bold text-gray-700"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-7">
                        <Link
                          href={service.href}
                          className="group/link inline-flex items-center gap-2 font-extrabold text-orange-500 transition-colors hover:text-orange-600"
                        >
                          Explore {service.shortTitle}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 16 years experience */}
        <section className="bg-[#111111] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-extrabold text-orange-300">
                  <Award className="h-4 w-4" />
                  16+ Years of Experience
                </div>

                <h2 className="mt-6 text-xl font-extrabold tracking-tight md:text-2xl">
                  Experience Matters When Your{" "}
                  <span className="text-orange-500">Device Stops Working</span>
                </h2>

                <p className="mt-6 text-xs font-medium leading-8 text-gray-300 md:text-sm">
                  A laptop can stop working for many reasons. A charging problem
                  may come from the adapter, charging port, battery or
                  motherboard. A black screen may be related to the display,
                  cable, RAM or board. Proper inspection helps avoid replacing
                  the wrong component.
                </p>

                <p className="mt-4 text-xs font-medium leading-8 text-gray-300 md:text-sm">
                  LaptopDoc brings more than 16 years of practical experience in
                  laptop, desktop and IT hardware service. The aim is to
                  understand the issue first and then suggest a practical
                  repair, replacement, maintenance or upgrade option.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Practical Diagnosis",
                    text: "Inspection focused on identifying the real problem before recommending work.",
                  },
                  {
                    icon: Wrench,
                    title: "Hardware Support",
                    text: "Repair support for screens, bodies, boards, batteries, chargers and cooling.",
                  },
                  {
                    icon: Settings,
                    title: "Software Support",
                    text: "OS installation, system cleanup and virus-removal services.",
                  },
                  {
                    icon: HardDrive,
                    title: "Upgrade Support",
                    text: "RAM and SSD upgrade guidance based on device compatibility.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-md border border-white/10 bg-white/5 p-6"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="mt-5 text-lg font-extrabold">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm font-medium leading-7 text-gray-400">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed SEO Content */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
              <article className="max-w-4xl">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
                  Complete Computer Care
                </p>

                <h2 className="mt-3 text-lg font-extrabold tracking-tight text-black md:text-xl">
                  Laptop Repair Services for Chandigarh, Mohali, Panchkula &
                  Zirakpur
                </h2>

                <div className="mt-8 space-y-6 text-xs font-medium leading-8 text-gray-600">
                  <p>
                    LaptopDoc provides laptop repair services for customers
                    across Chandigarh Tricity, including Chandigarh, Mohali,
                    Panchkula and Zirakpur. Modern laptops combine compact
                    hardware, delicate display assemblies, batteries, cooling
                    systems, storage devices and complex motherboard components.
                    Because several different faults can create the same
                    symptom, proper diagnosis is an important part of any repair
                    process.
                  </p>

                  <p>
                    A laptop that does not turn on, for example, may have an
                    adapter issue, charging-port problem, battery fault or
                    motherboard failure. Similarly, a laptop with no display may
                    require screen replacement, but the issue can also be
                    connected to RAM, display cables or other hardware.
                    LaptopDoc provides motherboard repair and diagnosis support
                    for dead laptops, charging faults, no-power conditions,
                    short circuits and no-display problems.
                  </p>

                  <h3 className="pt-4 text-xl font-extrabold text-black">
                    Screen, Hinge and Laptop Body Repair
                  </h3>

                  <p>
                    Physical damage is another common laptop problem. Screen
                    replacement services are available for cracked panels,
                    flickering displays, black screens and other display faults.
                    Laptop hinge and body damage can also become worse when
                    ignored. A broken mount or stiff hinge may place extra
                    pressure on the display frame, palm rest or laptop body.
                    Depending on the condition, the practical solution may be a
                    hinge repair, mount restoration or replacement of a damaged
                    body section.
                  </p>

                  <h3 className="pt-4 text-xl font-extrabold text-black">
                    Battery, Charger and Power Issues
                  </h3>

                  <p>
                    Battery backup problems and charging faults can affect daily
                    use. LaptopDoc provides battery replacement support,
                    charging-pin inspection, charger repair and adapter
                    diagnosis. The correct solution depends on the exact source
                    of the power issue, so inspection is useful before replacing
                    a battery or charger unnecessarily.
                  </p>

                  <h3 className="pt-4 text-xl font-extrabold text-black">
                    Laptop Maintenance and Thermal Service
                  </h3>

                  <p>
                    Dust, blocked vents and ageing thermal material can affect
                    laptop cooling. Regular laptop servicing includes internal
                    cleaning, fan and vent inspection and basic maintenance.
                    Thermal paste change is also available for suitable devices
                    where cooling maintenance is required. Gaming and
                    performance laptops can especially benefit from careful
                    maintenance when they show signs of unusual heat, loud fan
                    activity or reduced performance.
                  </p>

                  <h3 className="pt-4 text-xl font-extrabold text-black">
                    RAM and SSD Upgrades
                  </h3>

                  <p>
                    Not every slow laptop needs to be replaced. Some systems can
                    become more useful with a compatible RAM or SSD upgrade.
                    Increasing memory can improve multitasking, while replacing
                    an older hard drive with an SSD can improve boot time and
                    application responsiveness. Compatibility should always be
                    checked for the specific laptop model before buying a new
                    component.
                  </p>

                  <h3 className="pt-4 text-xl font-extrabold text-black">
                    Data Recovery and Software Services
                  </h3>

                  <p>
                    LaptopDoc also provides data recovery support, OS
                    installation and virus-removal services. Data recovery may
                    be required after accidental deletion, storage failure,
                    system corruption or a laptop that no longer boots. Recovery
                    possibilities depend on the condition of the storage device,
                    so no result should be assumed before evaluation.
                  </p>

                  <p>
                    OS installation and system setup can help when software is
                    corrupted or a fresh installation is required. Virus and
                    malware removal services can help with unwanted software,
                    browser redirects, pop-ups and certain performance problems.
                    Hardware and software issues sometimes overlap, which is
                    another reason accurate diagnosis is useful.
                  </p>

                  <h3 className="pt-4 text-xl font-extrabold text-black">
                    Desktop Repair and Used Laptop Resale
                  </h3>

                  <p>
                    In addition to laptop services, LaptopDoc provides desktop
                    repair and upgrade support. Services include desktop
                    diagnosis, no-display issues, power faults, maintenance and
                    component upgrades. LaptopDoc also offers selected used and
                    refurbished laptops depending on current stock, helping
                    customers looking for devices for study, office work and
                    everyday use.
                  </p>

                  <p>
                    With more than 16 years of practical experience, LaptopDoc
                    provides repair, maintenance, upgrade and resale support
                    under one roof for customers across Chandigarh Tricity.
                  </p>
                </div>
              </article>

              {/* Sticky side CTA */}
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-md bg-black p-6 text-white">
                  <CircleHelp className="h-9 w-9 text-orange-400" />

                  <h3 className="mt-5 text-2xl font-extrabold">
                    Not sure which service you need?
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-gray-400">
                    Explain the symptoms you are seeing and ask LaptopDoc about
                    the relevant repair or upgrade service.
                  </p>

                  <a
                    href="https://wa.me/919878224658"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-4 text-sm font-extrabold text-white transition-colors hover:bg-orange-600"
                  >
                    Ask on WhatsApp
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-5 rounded-md border border-gray-200 bg-gray-50 p-6">
                  <h3 className="font-extrabold text-black">
                    Popular Services
                  </h3>

                  <div className="mt-4 space-y-3">
                    {services.slice(0, 6).map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="group flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 text-sm font-bold text-gray-700 transition-all hover:text-orange-600"
                      >
                        {service.shortTitle}

                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
                Repair Process
              </p>

              <h2 className="mt-3 text-lg font-extrabold tracking-tight text-black md:text-xl">
                A Clear Approach to{" "}
                <span className="text-orange-500">Device Repair</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {repairProcess.map((step) => (
                <div
                  key={step.number}
                  className="rounded-md border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <span className="text-4xl font-extrabold text-orange-500">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-lg font-extrabold text-black">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service areas */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-extrabold text-orange-600">
                  <MapPin className="h-4 w-4" />
                  Tricity Service Areas
                </div>

                <h2 className="mt-5 text-lg font-extrabold tracking-tight text-black md:text-xl">
                  Laptop Repair Across{" "}
                  <span className="text-orange-500">Tricity</span>
                </h2>

                <p className="mt-5 text-sm font-medium leading-8 text-gray-600">
                  Explore location-specific LaptopDoc service information for
                  Chandigarh, Mohali, Panchkula and Zirakpur.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {areas.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="group flex items-center justify-between rounded-md border border-gray-200 bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50"
                  >
                    <div>
                      <p className="text-sm font-bold text-gray-500">
                        Laptop Repair in
                      </p>

                      <h3 className="mt-1 text-xl font-extrabold text-black">
                        {area.title}
                      </h3>
                    </div>

                    <ArrowRight className="h-5 w-5 text-orange-500 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
                Frequently Asked Questions
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black md:text-5xl">
                Laptop Repair Service FAQs
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-3xl border border-gray-200 bg-white p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-extrabold text-black">
                    {faq.question}

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

