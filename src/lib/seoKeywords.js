// SEO Keywords Database for LaptopDoc Chandigarh
// Organized by priority and target page

export const seoKeywords = {
  homepage: {
    primary: [
      "laptop repair in Chandigarh",
      "laptop repair Chandigarh",
      "best laptop repair shop in Chandigarh",
      "laptop repair shop in Chandigarh",
      "laptop repair Chandigarh Sector 20",
    ],
    secondary: [
      "laptop repair near me",
      "reliable laptop repair Chandigarh",
      "affordable laptop repair Chandigarh",
      "used laptops in Chandigarh",
      "second hand laptops in Chandigarh",
    ],
  },
  motherboard: {
    primary: [
      "laptop motherboard repair Chandigarh",
      "chip level laptop repair Chandigarh",
      "dead laptop repair Chandigarh",
      "laptop no power repair Chandigarh",
    ],
  },
  screen: {
    primary: [
      "laptop screen replacement Chandigarh",
      "laptop display repair Chandigarh",
      "broken laptop screen repair Chandigarh",
      "laptop black screen repair Chandigarh",
    ],
  },
  hinge: {
    primary: [
      "laptop hinge repair Chandigarh",
      "laptop body repair Chandigarh",
      "laptop body replacement Chandigarh",
    ],
  },
  keyboard: {
    primary: [
      "laptop keyboard replacement Chandigarh",
      "laptop keyboard repair Chandigarh",
      "laptop touchpad repair Chandigarh",
    ],
  },
  battery: {
    primary: [
      "laptop battery replacement Chandigarh",
      "laptop battery repair Chandigarh",
      "laptop charger repair Chandigarh",
    ],
  },
  charging: {
    primary: [
      "laptop charging port repair Chandigarh",
      "laptop not charging repair Chandigarh",
    ],
  },
  cooling: {
    primary: [
      "laptop fan repair Chandigarh",
      "laptop overheating repair Chandigarh",
      "gaming laptop overheating repair Chandigarh",
      "laptop cleaning service Chandigarh",
      "laptop thermal paste change Chandigarh",
    ],
  },
  waterDamage: {
    primary: ["laptop water damage repair Chandigarh"],
  },
  general: {
    primary: [
      "laptop speaker repair Chandigarh",
      "laptop camera repair Chandigarh",
      "laptop WiFi repair Chandigarh",
      "laptop USB port repair Chandigarh",
      "computer repair in Chandigarh",
      "PC repair in Chandigarh",
      "desktop repair Chandigarh",
    ],
  },
  software: {
    primary: [
      "laptop virus removal Chandigarh",
      "malware removal Chandigarh",
      "slow laptop repair Chandigarh",
      "laptop formatting Chandigarh",
      "Windows installation Chandigarh",
      "laptop OS installation Chandigarh",
      "Windows 11 installation Chandigarh",
    ],
  },
  dataRecovery: {
    primary: [
      "laptop data recovery Chandigarh",
      "hard disk data recovery Chandigarh",
      "SSD data recovery Chandigarh",
    ],
  },
  upgrades: {
    primary: [
      "laptop SSD upgrade Chandigarh",
      "laptop RAM upgrade Chandigarh",
      "laptop storage upgrade Chandigarh",
      "laptop speed upgrade Chandigarh",
    ],
  },
  brands: {
    hp: ["HP laptop repair Chandigarh"],
    dell: ["Dell laptop repair Chandigarh"],
    lenovo: ["Lenovo laptop repair Chandigarh"],
    asus: ["ASUS laptop repair Chandigarh"],
    acer: ["Acer laptop repair Chandigarh"],
    msi: ["MSI laptop repair Chandigarh"],
    gaming: ["gaming laptop repair Chandigarh"],
    macbook: [
      "MacBook repair Chandigarh",
      "MacBook screen repair Chandigarh",
      "MacBook battery replacement Chandigarh",
    ],
  },
  usedLaptops: {
    primary: [
      "used laptops in Chandigarh",
      "second hand laptops in Chandigarh",
      "refurbished laptops in Chandigarh",
      "used laptop shop in Chandigarh",
      "used laptops Chandigarh Sector 20",
      "buy used laptop in Chandigarh",
    ],
    budget: [
      "cheap used laptops in Chandigarh",
      "used laptop under 15000 Chandigarh",
      "used laptop under 20000 Chandigarh",
      "used laptop under 30000 Chandigarh",
    ],
    gaming: ["used gaming laptops Chandigarh"],
    brands: [
      "used Dell laptops Chandigarh",
      "used HP laptops Chandigarh",
      "used Lenovo laptops Chandigarh",
      "used ASUS laptops Chandigarh",
      "refurbished business laptops Chandigarh",
    ],
  },
  sellLaptop: {
    primary: [
      "sell old laptop in Chandigarh",
      "sell used laptop in Chandigarh",
      "used laptop buyer Chandigarh",
      "sell laptop for cash Chandigarh",
      "laptop exchange in Chandigarh",
    ],
  },
};

// Generate meta description with keywords
export const generateMetaDescription = (baseDescription, keywords = []) => {
  // Keep description under 160 characters
  const keywords_str = keywords.slice(0, 2).join(", ");
  return `${baseDescription.substring(0, 120)}...${keywords_str}`;
};

// Generate structured data for LocalBusiness
export const generateLocalBusinessSchema = {
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  name: "LaptopDoc",
  image: "https://laptopdoc.in/logo.png",
  description:
    "Professional laptop repair, used laptop resale, motherboard and hinge repair in Chandigarh",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector 20, Chandigarh",
    addressLocality: "Chandigarh",
    addressRegion: "Chandigarh",
    postalCode: "160020",
    addressCountry: "IN",
  },
  telephone: "+91-XXXXXXXXXX",
  url: "https://laptopdoc.in",
  sameAs: [
    "https://www.facebook.com/laptopdoc",
    "https://www.instagram.com/laptopdoc",
  ],
};

// Generate Service schema
export const generateServiceSchema = (
  serviceName,
  description,
  areaServed = "Chandigarh",
) => ({
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  name: `${serviceName} - LaptopDoc`,
  description,
  areaServed: {
    "@type": "City",
    name: areaServed,
  },
  image: "https://laptopdoc.in/service-image.png",
  url: "https://laptopdoc.in",
});
