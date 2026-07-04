import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const Herosection = () => {
  return (
    <section className="relative min-h-190 overflow-hidden bg-black text-white">
      {/* Background Image */}
      <Image
        src="/heroimage.png"
        alt="LaptopDoc - Best laptop repair shop in Tricity Chandigarh"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Light Overlay - keeps background clear */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Left Dark Gradient - text readable, image still clear */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/55 to-black/10" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/20" />

      {/* Orange Glow Effects */}
      <div className="pointer-events-none absolute left-20 top-24 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-32 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-190 max-w-7xl items-center px-4 py-28 lg:px-8">
        <div className="max-w-3xl text-left">
          {/* Trust Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-gray-200 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-orange-400" />
              Laptop Repair • Resale • Accessories
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-xl font-extrabold leading-tight tracking-tight sm:whitespace-nowrap md:text-2xl lg:text-3xl">
            LaptopDoc — Trusted Laptop Repair Specialists in Tricity
          </h1>

          {/* Paragraph */}
          <p className="mt-6 max-w-2xl text-xs font-medium leading-normal text-gray-200 md:text-sm">
            LaptopDoc provides professional laptop repair in Chandigarh, Mohali,
            Panchkula and Zirakpur. We repair hinges, screens, motherboards,
            chargers, keyboards, batteries, heating issues and also provide
            tested used laptops.
          </p>

          {/* Location Badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-bold text-gray-200 backdrop-blur-md">
            <MapPin className="h-4 w-4 text-orange-400" />
            Chandigarh • Mohali • Panchkula • Zirakpur
          </div>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/919878224658"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-8 py-4 text-base font-extrabold text-white shadow-2xl shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Book Repair Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+919878224658"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-8 py-4 text-base font-extrabold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
            >
              <PhoneCall className="h-5 w-5 text-orange-400" />
              Call Now
            </a>
          </div>

          {/* Trust Points */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Diagnosis",
              "Fast Repair",
              "Genuine Parts",
              "Tricity Service",
            ].map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-gray-200 backdrop-blur-md"
              >
                <CheckCircle2 className="h-4 w-4 text-orange-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;

