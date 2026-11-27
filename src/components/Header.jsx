"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, PhoneCall, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Repair Services", href: "/services" },
  { label: "Used Laptops", href: "/used-laptops" },
  { label: "Sell Old Laptop", href: "/sell-old-laptop-chandigarh" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-1"
          aria-label="LaptopDoc Home"
        >
          <div className="relative h-10 w-32 sm:h-12 sm:w-44 md:h-14 md:w-52">
            <Image
              src="/logo.png"
              alt="LaptopDoc - Laptop Repair and Resale Chandigarh"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-1 rounded-full border border-gray-200/90 bg-gray-50/80 px-3 py-1.5 shadow-xs backdrop-blur-md lg:flex"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-xs font-bold text-gray-700 transition-all hover:bg-white hover:text-orange-600 hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919878224658"
            aria-label="Call shop at +91 98782 24658"
            className="flex items-center gap-2 rounded-full border border-gray-200/80 bg-white px-3.5 py-2 text-xs font-bold text-gray-800 transition-all hover:border-orange-300 hover:text-orange-600 hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <PhoneCall className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
            +91 98782 24658
          </a>

          <a
            href="https://wa.me/919878224658?text=Hi%20LaptopDoc,%20I%20need%20laptop%20repair%20service."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-extrabold text-white shadow-sm shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 shadow-xs transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Slideout / Dropdown Menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white shadow-xl lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="mx-auto max-w-7xl px-4 py-5">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-bold text-gray-800 transition-colors hover:bg-orange-50 hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 rounded-xl border border-orange-100 bg-orange-50/60 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Direct Help & Diagnosis
              </p>
              <p className="mt-1 text-base font-extrabold text-gray-900">
                SCO 66, Sector 20-C, Chandigarh
              </p>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href="tel:+919878224658"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs font-extrabold text-gray-900 transition-colors hover:border-orange-300 hover:text-orange-600"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
                  Call Now
                </a>

                <a
                  href="https://wa.me/919878224658?text=Hi%20LaptopDoc,%20I%20need%20laptop%20repair%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-lg bg-orange-500 px-3 py-2.5 text-xs font-extrabold text-white shadow-sm transition-colors hover:bg-orange-600"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
