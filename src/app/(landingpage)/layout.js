import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: {
    template: "%s | laptopdoc  Chandigarh",
    default:
      "Best Laptop Repair Shop & Used Laptops in Chandigarh Tricity | TricityTech",
  },
  description:
    "Professional laptop repair, used laptop resale, motherboard and hinge repair, and authorized accessories in Chandigarh, Mohali, Panchkula, and Zirakpur.",
};
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});
const siteUrl = "https://laptopdoc.in";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ComputerStore",
  "@id": `${siteUrl}/#business`,

  name: "LaptopDoc",

  url: siteUrl,

  telephone: "+919878224658",

  priceRange: "₹₹",

  image: `${siteUrl}/heroimage.png`,

  logo: `${siteUrl}/logo.png`,

  description:
    "LaptopDoc provides professional laptop repair, desktop repair, data recovery, maintenance, RAM upgrades, SSD upgrades, software services and tested used laptop resale in Chandigarh, Mohali, Panchkula and Zirakpur.",

  address: {
    "@type": "PostalAddress",
    streetAddress: "SCO 66, 1st Floor, Sector 20-C",
    addressLocality: "Chandigarh",
    addressRegion: "Chandigarh",
    addressCountry: "IN",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",

      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],

      opens: "11:00",
      closes: "20:00",
    },
  ],

  areaServed: [
    {
      "@type": "City",
      name: "Chandigarh",
    },
    {
      "@type": "City",
      name: "Mohali",
    },
    {
      "@type": "City",
      name: "Panchkula",
    },
    {
      "@type": "City",
      name: "Zirakpur",
    },
  ],

  knowsAbout: [
    "Laptop Repair",
    "Desktop Repair",
    "Motherboard Repair",
    "Laptop Screen Replacement",
    "Laptop Hinge Repair",
    "Laptop Keyboard Replacement",
    "Laptop Battery Replacement",
    "Laptop Heating Repair",
    "Data Recovery",
    "RAM Upgrade",
    "SSD Upgrade",
    "Virus Removal",
    "Windows Installation",
    "Laptop Software Repair",
    "Used Laptop Sales",
    "Refurbished Laptops",
  ],

  currenciesAccepted: "INR",

  paymentAccepted: ["Cash", "UPI"],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className}bg-gray-50 text-gray-900 antialiased `}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
