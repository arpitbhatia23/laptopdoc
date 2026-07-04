"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, PhoneCall, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Repair Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-36 sm:h-20 sm:w-44">
            <Image
              src="/logo.png"
              alt="Laptop repair and resale shop logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-1 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:bg-white hover:text-orange-600 hover:shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919878224658"
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-black transition-all hover:border-orange-200 hover:text-orange-600 hover:shadow-sm"
          >
            <PhoneCall className="h-4 w-4 text-orange-500" />
            +91 98782 24658
          </a>

          <a
            href="https://wa.me/919878224658"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/35"
          >
            <MessageCircle className="h-4 w-4" />
            Get Free Quote
          </a>
        </div>

        {/* Same Mobile Button: Menu / X */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow-sm transition-all hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown - No Black Overlay */}
      {open && (
        <div className="border-t border-gray-100 bg-white shadow-xl lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-5">
            <nav className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-bold text-gray-800 transition-all hover:bg-orange-50 hover:text-orange-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-5 rounded-xl bg-gray-50 p-4">
              <p className="text-sm font-semibold text-gray-500">
                Need laptop repair?
              </p>

              <p className="mt-1 text-xl font-extrabold text-black">
                Get quick diagnosis
              </p>

              <div className="mt-4 grid gap-3">
                <a
                  href="tel:+919878224658"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-extrabold text-black transition-all hover:border-orange-200 hover:text-orange-600"
                >
                  <PhoneCall className="h-4 w-4 text-orange-500" />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919878224658"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

