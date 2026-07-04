// import Link from "next/link";

// import {
//   ArrowRight,
//   Award,
//   CheckCircle2,
//   ChevronRight,
//   Clock3,
//   Laptop,
//   MapPin,
//   MessageCircle,
//   Navigation,
//   ShieldCheck,
//   Store,
//   Wrench,
// } from "lucide-react";

// import ContactForm from "@/components/ContactForm";

// const siteUrl = "https://yourdomain.com";

// const shopAddress = "SCO 66, 1st Floor, Sector 20-C, Chandigarh";

// const encodedAddress = encodeURIComponent(shopAddress);

// export const metadata = {
//   title: "Contact LaptopDoc | Laptop Repair in Sector 20 Chandigarh",
//   description:
//     "Contact LaptopDoc at SCO 66, 1st Floor, Sector 20-C, Chandigarh for laptop repair, desktop repair, upgrades, data recovery and used laptops.",

//   keywords: [
//     "LaptopDoc Chandigarh",
//     "laptop repair Sector 20 Chandigarh",
//     "laptop repair shop Chandigarh",
//     "computer repair Sector 20 Chandigarh",
//     "laptop service center Sector 20 Chandigarh",
//     "laptop repair near Sector 20 Chandigarh",
//     "laptop repair Tricity",
//   ],

//   alternates: {
//     canonical: `${siteUrl}/contact`,
//   },

//   openGraph: {
//     title: "Contact LaptopDoc | Sector 20-C Chandigarh",
//     description:
//       "Visit LaptopDoc at SCO 66, 1st Floor, Sector 20-C, Chandigarh for laptop and desktop repair services.",
//     url: `${siteUrl}/contact`,
//     siteName: "LaptopDoc",
//     type: "website",

//     images: [
//       {
//         url: `${siteUrl}/og/contact.jpg`,
//         width: 1200,
//         height: 630,
//         alt: "Contact LaptopDoc in Sector 20-C Chandigarh",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Contact LaptopDoc | Chandigarh",
//     description:
//       "Laptop and desktop repair services at SCO 66, 1st Floor, Sector 20-C, Chandigarh.",
//     images: [`${siteUrl}/og/contact.jpg`],
//   },
// };

// const contactHighlights = [
//   {
//     icon: Award,
//     title: "16+ Years Experience",
//     description:
//       "Practical experience in laptop, desktop and IT hardware repair.",
//   },
//   {
//     icon: Wrench,
//     title: "Complete Repair Support",
//     description: "Hardware repair, software support, maintenance and upgrades.",
//   },
//   {
//     icon: Laptop,
//     title: "Repair + Upgrade + Resale",
//     description:
//       "Laptop repair services and selected used laptop availability.",
//   },
// ];

// const localAreas = [
//   "Sector 20 Chandigarh",
//   "Sector 19 Chandigarh",
//   "Sector 21 Chandigarh",
//   "Sector 22 Chandigarh",
//   "Sector 30 Chandigarh",
//   "Sector 34 Chandigarh",
//   "Manimajra",
//   "Mohali",
//   "Panchkula",
//   "Zirakpur",
// ];

// const breadcrumbSchema = {
//   "@context": "https://schema.org",
//   "@type": "BreadcrumbList",
//   itemListElement: [
//     {
//       "@type": "ListItem",
//       position: 1,
//       name: "Home",
//       item: siteUrl,
//     },
//     {
//       "@type": "ListItem",
//       position: 2,
//       name: "Contact",
//       item: `${siteUrl}/contact`,
//     },
//   ],
// };

// const localBusinessSchema = {
//   "@context": "https://schema.org",
//   "@type": "ComputerStore",
//   name: "LaptopDoc",
//   url: siteUrl,

//   description:
//     "LaptopDoc provides laptop repair, desktop repair, data recovery, maintenance, RAM upgrades, SSD upgrades, software services and used laptop resale support in Chandigarh Tricity.",

//   address: {
//     "@type": "PostalAddress",
//     streetAddress: "SCO 66, 1st Floor, Sector 20-C",
//     addressLocality: "Chandigarh",
//     addressRegion: "Chandigarh",
//     addressCountry: "IN",
//   },

//   areaServed: ["Chandigarh", "Mohali", "Panchkula", "Zirakpur"],

//   knowsAbout: [
//     "Laptop Repair",
//     "Desktop Repair",
//     "Motherboard Repair",
//     "Laptop Screen Replacement",
//     "Laptop Hinge Repair",
//     "Data Recovery",
//     "RAM Upgrade",
//     "SSD Upgrade",
//     "Virus Removal",
//   ],
// };

// export default function ContactPage() {
//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(breadcrumbSchema),
//         }}
//       />

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(localBusinessSchema),
//         }}
//       />

//       <main className="overflow-hidden bg-white">
//         {/* Hero */}
//         <section className="relative overflow-hidden bg-black py-24 text-white">
//           <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

//           <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

//           <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
//             <nav
//               aria-label="Breadcrumb"
//               className="flex items-center gap-2 text-sm font-semibold text-gray-400"
//             >
//               <Link href="/" className="transition-colors hover:text-white">
//                 Home
//               </Link>

//               <ChevronRight className="h-4 w-4" />

//               <span className="text-orange-400">Contact LaptopDoc</span>
//             </nav>

//             <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
//               <div>
//                 <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2.5 text-sm font-extrabold text-orange-300">
//                   <MapPin className="h-4 w-4" />
//                   Sector 20-C, Chandigarh
//                 </div>

//                 <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
//                   Contact <span className="text-orange-500">LaptopDoc</span>
//                 </h1>

//                 <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-gray-300 md:text-xl">
//                   Visit LaptopDoc for laptop repair, desktop repair, motherboard
//                   diagnosis, screen replacement, hinge repair, maintenance, data
//                   recovery, software support, RAM upgrades and SSD upgrades.
//                 </p>

//                 <div className="mt-8 flex items-start gap-4 rounded-md border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
//                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white">
//                     <Store className="h-6 w-6" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-bold text-gray-400">
//                       Visit LaptopDoc
//                     </p>

//                     <address className="mt-1 not-italic text-lg font-extrabold leading-7 text-white">
//                       SCO 66, 1st Floor,
//                       <br />
//                       Sector 20-C, Chandigarh
//                     </address>
//                   </div>
//                 </div>

//                 <div className="mt-8 flex flex-col gap-4 sm:flex-row">
//                   <a
//                     href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-base font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-orange-600"
//                   >
//                     Get Directions
//                     <Navigation className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//                   </a>

//                   <Link
//                     href="/services"
//                     className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-8 py-4 text-base font-extrabold text-white transition-all hover:bg-white hover:text-black"
//                   >
//                     View Repair Services
//                     <ArrowRight className="h-5 w-5" />
//                   </Link>
//                 </div>
//               </div>

//               {/* Highlights */}
//               <div className="grid gap-4">
//                 {contactHighlights.map((item) => {
//                   const Icon = item.icon;

//                   return (
//                     <div
//                       key={item.title}
//                       className="rounded-md border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
//                     >
//                       <div className="flex gap-4">
//                         <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
//                           <Icon className="h-6 w-6" />
//                         </div>

//                         <div>
//                           <h2 className="text-xl font-extrabold text-white">
//                             {item.title}
//                           </h2>

//                           <p className="mt-2 text-sm font-medium leading-7 text-gray-400">
//                             {item.description}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Form + Information */}
//         <section className="relative py-20">
//           <div className="absolute inset-0 bg-linear-to-b from-orange-50/50 via-white to-white" />

//           <div className="relative mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
//             <ContactForm />

//             <div className="space-y-6">
//               {/* Address */}
//               <div className="rounded-md bg-black p-7 text-white md:p-8">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500">
//                   <MapPin className="h-7 w-7" />
//                 </div>

//                 <h2 className="mt-6 text-2xl font-extrabold md:text-3xl">
//                   LaptopDoc Shop Location
//                 </h2>

//                 <address className="mt-4 not-italic text-lg font-medium leading-8 text-gray-300">
//                   SCO 66, 1st Floor,
//                   <br />
//                   Sector 20-C,
//                   <br />
//                   Chandigarh
//                 </address>

//                 <a
//                   href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-orange-600"
//                 >
//                   Open in Google Maps
//                   <Navigation className="h-4 w-4" />
//                 </a>
//               </div>

//               {/* Experience */}
//               <div className="rounded-md border border-gray-200 bg-white p-7">
//                 <ShieldCheck className="h-9 w-9 text-orange-500" />

//                 <h2 className="mt-5 text-2xl font-extrabold text-black">
//                   Before You Visit
//                 {/* </h2> */}

//                 <div className="mt-5 space-y-4">
//                   {[
//                     "Note your laptop brand and model",
//                     "Explain when the problem started",
//                     "Bring the charger for power-related issues",
//                     "Back up important files when possible",
//                   ].map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-start gap-3 text-sm font-bold leading-6 text-gray-700"
//                     >
//                       <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Hours placeholder */}
//               <div className="rounded-md border border-orange-200 bg-orange-50 p-7">
//                 <Clock3 className="h-9 w-9 text-orange-600" />

//                 <h2 className="mt-5 text-2xl font-extrabold text-black">
//                   Shop Timings
//                 </h2>

//                 <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
//                   Add your confirmed opening days and shop timings here before
//                   publishing.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Map */}
//         <section className="bg-gray-50 py-20">
//           <div className="mx-auto max-w-7xl px-4 lg:px-8">
//             <div className="mb-10 max-w-3xl">
//               <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-extrabold text-orange-600">
//                 <Navigation className="h-4 w-4" />
//                 Find LaptopDoc
//               </div>

//               <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-black md:text-5xl">
//                 Laptop Repair Shop in{" "}
//                 <span className="text-orange-500">Sector 20-C Chandigarh</span>
//               </h2>

//               <p className="mt-5 text-base font-medium leading-8 text-gray-600 md:text-lg">
//                 LaptopDoc is located at SCO 66, 1st Floor, Sector 20-C,
//                 Chandigarh.
//               </p>
//             </div>

//             <div className="overflow-hidden rounded-md border border-gray-200 bg-white p-2 shadow-xl shadow-black/5">
//               <iframe
//                 title="LaptopDoc location at SCO 66 Sector 20-C Chandigarh"
//                 src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
//                 width="100%"
//                 height="520"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="rounded-[1.6rem] border-0"
//               />
//             </div>
//           </div>
//         </section>

//         {/* SEO Content */}
//         <section className="bg-white py-20">
//           <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
//             <article>
//               <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-orange-500">
//                 Laptop Repair in Chandigarh
//               </p>

//               <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-black md:text-5xl">
//                 Visit LaptopDoc in Sector 20-C, Chandigarh
//               </h2>

//               <div className="mt-7 space-y-5 text-base font-medium leading-8 text-gray-600">
//                 <p>
//                   LaptopDoc is located at SCO 66, 1st Floor, Sector 20-C,
//                   Chandigarh. The shop provides laptop and desktop repair
//                   support for customers looking for hardware diagnosis, software
//                   services, maintenance and performance upgrades.
//                 </p>

//                 <p>
//                   Available services include laptop motherboard repair, screen
//                   replacement, hinge and body repair, battery and charger
//                   support, data recovery, OS installation, virus removal,
//                   regular laptop servicing, thermal paste change, RAM upgrades
//                   and SSD upgrades.
//                 </p>

//                 <p>
//                   LaptopDoc brings more than 16 years of practical experience in
//                   laptop, desktop and IT hardware repair. The focus is on
//                   understanding the device problem first and then suggesting a
//                   practical repair, replacement, maintenance or upgrade option.
//                 </p>

//                 <p>
//                   Customers from Chandigarh and nearby Tricity areas can use the
//                   contact form to explain their device issue before visiting the
//                   shop.
//                 </p>
//               </div>
//             </article>

//             <aside className="rounded-md bg-gray-50 p-7">
//               <h2 className="text-2xl font-extrabold text-black">
//                 Nearby Areas
//               </h2>

//               <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
//                 {localAreas.map((area) => (
//                   <div
//                     key={area}
//                     className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-gray-700"
//                   >
//                     <MapPin className="h-4 w-4 shrink-0 text-orange-500" />
//                     {area}
//                   </div>
//                 ))}
//               </div>
//             </aside>
//           </div>
//         </section>

//         {/* Final CTA */}
//         <section className="bg-black py-16 text-white">
//           <div className="mx-auto max-w-7xl px-4 lg:px-8">
//             <div className="rounded-md border border-white/10 bg-white/5 p-8 md:p-12">
//               <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
//                 <div>
//                   <Wrench className="h-10 w-10 text-orange-400" />

//                   <h2 className="mt-5 max-w-3xl text-3xl font-extrabold md:text-5xl">
//                     Tell LaptopDoc what is wrong with your device.
//                   </h2>

//                   <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-gray-400">
//                     Visit SCO 66, 1st Floor, Sector 20-C, Chandigarh or send
//                     your repair enquiry online.
//                   </p>
//                 </div>

//                 <a
//                   href="https://wa.me/919876543210"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-base font-extrabold text-white transition-all hover:bg-orange-600"
//                 >
//                   Contact on WhatsApp
//                   <MessageCircle className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }
