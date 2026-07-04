import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    template: "%s | TricityTech Chandigarh",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className}bg-gray-50 text-gray-900 antialiased `}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
