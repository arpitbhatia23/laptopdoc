import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock3,
  Laptop,
  ShieldCheck,
  Star,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const trustPoints = [
  {
    title: "16+ Years of Repair Experience",
    description:
      "Hands-on experience diagnosing and repairing laptops, desktops, motherboards, screens, hinges, chargers, batteries and performance issues.",
    icon: Award,
  },
  {
    title: "Advanced Hardware Diagnosis",
    description:
      "From no-power faults and motherboard issues to overheating, broken hinges and damaged displays, every repair starts with proper diagnosis.",
    icon: Wrench,
  },
  {
    title: "Transparent Repair Process",
    description:
      "We explain the issue, repair option and estimated cost before starting work, helping customers make informed decisions.",
    icon: ShieldCheck,
  },
  {
    title: "Laptop & Desktop Support",
    description:
      "LaptopDoc provides repair, upgrades, servicing, software support and maintenance for both laptops and desktop computers.",
    icon: Laptop,
  },
];

const Whyus = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-md bg-orange-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-md bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-orange-100 px-5 py-2 text-sm font-extrabold text-orange-600">
            <ShieldCheck className="h-4 w-4" />
            Why Choose LaptopDoc
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-black md:text-5xl">
            16+ Years of Trusted Laptop Repair Experience in{" "}
            <span className="text-orange-500">Tricity</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-gray-600 md:text-lg">
            LaptopDoc brings more than 16 years of hands-on experience in laptop
            repair, desktop repair, component diagnosis, laptop upgrades and
            regular computer maintenance across Chandigarh Tricity.
          </p>
        </div>

        {/* Main Experience Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative">
            <div className="relative min-h-130 overflow-hidden rounded-md">
              <Image
                src="/heroimage.png"
                alt="Experienced LaptopDoc laptop repair technician in Chandigarh Tricity"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

              {/* 16 Years Badge */}
              <div className="absolute left-6 top-6 rounded-md border border-white/15 bg-black/70 p-5 text-white shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white">
                    <Award className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-3xl font-extrabold">16+</p>

                    <p className="text-sm font-bold text-gray-300">
                      Years of Experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Image Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-orange-400">
                  Experienced Repair Specialists
                </p>

                <h3 className="mt-2 max-w-lg text-2xl font-extrabold text-white md:text-3xl">
                  Practical experience matters when your laptop stops working.
                </h3>
              </div>
            </div>

            {/* Floating Review Card */}
            <div className="absolute -bottom-8 right-4 rounded-md border border-gray-200 bg-white p-5 shadow-2xl md:right-8">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    className="h-4 w-4 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              <p className="mt-2 font-extrabold text-black">
                Repair. Upgrade. Maintain.
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-500">
                Complete computer care
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-extrabold text-gray-700">
              <Clock3 className="h-4 w-4 text-orange-500" />
              Serving computer users for over 16 years
            </div>

            <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-black md:text-4xl">
              Experience You Can Trust for Laptop and Desktop Repair
            </h3>

            <p className="mt-6 text-base font-medium leading-8 text-gray-600 md:text-lg">
              A laptop repair is not just about replacing parts. Correct
              diagnosis, repair experience and understanding the actual cause of
              the fault are equally important.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-600">
              With more than 16 years of experience in computer repair,
              LaptopDoc has handled common and complex issues including dead
              laptops, motherboard faults, broken hinges, damaged laptop bodies,
              screen problems, charging faults, overheating, slow systems, data
              loss, virus infections and hardware upgrade requirements.
            </p>

            {/* Trust Points */}
            <div className="mt-8 grid gap-4">
              {trustPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-md border border-gray-200 bg-white p-5 transition-all hover:border-orange-200 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h4 className="text-lg font-extrabold text-black">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm font-medium leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/919878224658"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Get Repair Advice
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-7 py-4 text-sm font-extrabold text-black transition-all hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 overflow-hidden rounded-md border border-gray-200 bg-black text-white md:grid-cols-4">
          <div className="border-b border-white/10 p-6 text-center md:border-b-0 md:border-r">
            <p className="text-3xl font-extrabold text-orange-500 md:text-4xl">
              16+
            </p>

            <p className="mt-2 text-sm font-bold text-gray-300">
              Years Experience
            </p>
          </div>

          <div className="border-b border-white/10 p-6 text-center md:border-b-0 md:border-r">
            <p className="text-3xl font-extrabold text-orange-500 md:text-4xl">
              12+
            </p>

            <p className="mt-2 text-sm font-bold text-gray-300">
              Repair Services
            </p>
          </div>

          <div className="border-r border-white/10 p-6 text-center">
            <p className="text-3xl font-extrabold text-orange-500 md:text-4xl">
              Laptop
            </p>

            <p className="mt-2 text-sm font-bold text-gray-300">
              Repair & Upgrade
            </p>
          </div>

          <div className="p-6 text-center">
            <p className="text-3xl font-extrabold text-orange-500 md:text-4xl">
              Desktop
            </p>

            <p className="mt-2 text-sm font-bold text-gray-300">
              Repair & Service
            </p>
          </div>
        </div>

        {/* Detailed SEO Content */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-extrabold text-black md:text-3xl">
              Experienced Laptop Repair in Chandigarh Tricity
            </h3>

            <p className="mt-5 text-base font-medium leading-8 text-gray-600">
              LaptopDoc provides laptop repair services for customers in
              Chandigarh, Mohali, Panchkula, Zirakpur and nearby Tricity areas.
              Our repair experience covers many common laptop problems including
              laptops that do not power on, charging faults, broken laptop
              hinges, cracked bodies, damaged screens, overheating, slow
              performance, battery issues and software problems.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-600">
              We also support laptop RAM upgrades, SSD upgrades, thermal paste
              replacement, regular laptop servicing, operating system
              installation, virus removal and data recovery requirements.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-black md:text-3xl">
              Repair Decisions Based on Diagnosis, Not Guesswork
            </h3>

            <p className="mt-5 text-base font-medium leading-8 text-gray-600">
              Experience helps identify whether a laptop really needs a major
              component replacement or whether the problem can be solved with a
              smaller repair. LaptopDoc focuses on diagnosis first so customers
              can understand the practical repair options available.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-600">
              Where repair is not economical, we explain the alternative,
              whether that means body replacement, screen replacement, storage
              upgrade or purchasing another suitable laptop.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 overflow-hidden rounded-md bg-orange-500 p-8 text-white md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <h3 className="text-2xl font-extrabold md:text-4xl">
                Have a laptop or desktop problem?
              </h3>

              <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-orange-50 md:text-lg">
                Share the issue with LaptopDoc and get guidance from a repair
                specialist with more than 16 years of experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Laptop Repair",
                  "Desktop Repair",
                  "Hardware Upgrades",
                  "Software Support",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-md bg-white/15 px-4 py-2 text-sm font-bold"
                  >
                    <CheckCircle2 className="h-4 w-4" />
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-black px-8 py-4 text-base font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-gray-900 sm:w-auto"
              >
                Talk to LaptopDoc
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;

