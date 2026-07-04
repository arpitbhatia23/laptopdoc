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

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Herosection />
      {/* Services Section */}
      <Service />
      {/* Why Choose Us Section */}
      <Whyus />
      {/* laptop resell */}
      <LaptopResale />
    </div>
  );
}
