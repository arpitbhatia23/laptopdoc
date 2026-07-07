import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Wrench,
  Battery,
  Monitor,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Herosection from "@/components/Herosection";
import Service from "@/components/Service";
import Whyus from "@/components/Whyus";
import LaptopResale from "@/components/LaptopResell";
import ReviewsSection from "@/components/reviews";
import FeaturedLaptops from "@/components/featuredlaptop";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Herosection />
      {/* Services Section */}
      <Service />
      {/* fearured laptop */}
      <FeaturedLaptops />
      {/* Why Choose Us Section */}
      <Whyus />
      {/* laptop resell */}
      <LaptopResale />
      {/* review */}
      <ReviewsSection />
    </div>
  );
}
