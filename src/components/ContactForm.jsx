"use client";

import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";

const repairTypes = [
  "Motherboard Repair",
  "Screen Replacement",
  "Hinge & Body Repair",
  "Battery & Charger Repair",
  "Data Recovery",
  "OS Installation",
  "Regular Laptop Service",
  "Thermal Paste Change",
  "RAM Upgrade",
  "SSD Upgrade",
  "Desktop Repair",
  "Virus & Malware Removal",
  "Used Laptop Enquiry",
  "Sell Old Laptop",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      device: formData.get("device"),
      message: formData.get("message"),
    };

    try {
      setStatus("loading");
      setErrorMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your enquiry.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );

      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-155 flex-col items-center justify-center rounded-md border border-green-200 bg-green-50 p-8 text-center shadow-xl shadow-black/5">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <h2 className="mt-7 text-2xl font-extrabold tracking-tight text-black md:text-4xl">
          Enquiry Sent Successfully
        </h2>

        <p className="mt-4 max-w-md text-sm font-medium leading-7 text-gray-600 md:text-base">
          Thank you for contacting LaptopDoc. Your device and repair details
          have been received.
        </p>

        <p className="mt-2 max-w-md text-sm font-medium leading-7 text-gray-500">
          You can also contact LaptopDoc directly on WhatsApp for a faster
          response.
        </p>

        <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
          <a
            href="https://wa.me/919878224658"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-orange-600"
          >
            <MessageCircle className="h-4 w-4" />
            Contact on WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-4 text-sm font-extrabold text-black transition-all hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
          >
            Send Another Enquiry
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md border border-gray-200 bg-white p-6 shadow-xl shadow-black/5 md:p-8 lg:p-10"
    >
      {/* Form Header */}
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
          Send an Enquiry
        </p>

        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-black md:text-4xl">
          Tell Us About Your Device Problem
        </h2>

        <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-gray-600 md:text-base">
          Share your laptop or desktop details and explain the problem you are
          facing. LaptopDoc will review your enquiry.
        </p>
      </div>

      {/* Name + Phone */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-extrabold text-gray-800"
          >
            Your Name
            <span className="ml-1 text-orange-500">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your name"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm font-semibold text-black outline-none transition-all placeholder:font-medium placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-extrabold text-gray-800"
          >
            Phone Number
            <span className="ml-1 text-orange-500">*</span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 98782 24658"
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm font-semibold text-black outline-none transition-all placeholder:font-medium placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
          />
        </div>
      </div>

      {/* Email */}
      <div className="mt-5">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-extrabold text-gray-800"
        >
          Email Address
          <span className="ml-2 text-xs font-semibold text-gray-400">
            Optional
          </span>
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm font-semibold text-black outline-none transition-all placeholder:font-medium placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
        />
      </div>

      {/* Service */}
      <div className="mt-5">
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-extrabold text-gray-800"
        >
          Service Required
          <span className="ml-1 text-orange-500">*</span>
        </label>

        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full cursor-pointer rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm font-semibold text-black outline-none transition-all focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
        >
          <option value="" disabled>
            Select a service
          </option>

          {repairTypes.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Device */}
      <div className="mt-5">
        <label
          htmlFor="device"
          className="mb-2 block text-sm font-extrabold text-gray-800"
        >
          Device Brand & Model
        </label>

        <input
          id="device"
          name="device"
          type="text"
          placeholder="Example: ASUS TUF F15 FX506LH"
          className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm font-semibold text-black outline-none transition-all placeholder:font-medium placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
        />
      </div>

      {/* Problem Description */}
      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-extrabold text-gray-800"
        >
          Describe the Problem
          <span className="ml-1 text-orange-500">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder="Example: My laptop hinge is broken on the left side and the screen body is opening when I lift the lid..."
          className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm font-semibold leading-7 text-black outline-none transition-all placeholder:font-medium placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div
          role="alert"
          className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700"
        >
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending Enquiry...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Repair Enquiry
          </>
        )}
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919878224658"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-4 text-sm font-extrabold text-black transition-all hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
      >
        <MessageCircle className="h-4 w-4 text-orange-500" />
        Contact on WhatsApp Instead
      </a>

      {/* Privacy note */}
      <p className="mt-5 text-center text-xs font-medium leading-6 text-gray-400">
        Your information is used only to respond to your LaptopDoc service
        enquiry.
      </p>
    </form>
  );
}

