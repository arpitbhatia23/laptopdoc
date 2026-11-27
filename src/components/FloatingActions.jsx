import { MessageCircle, PhoneCall } from "lucide-react";

export default function FloatingActions() {
  return (
    <aside
      aria-label="Quick contact shortcuts"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
    >
      {/* Direct Call Quick Action */}
      <a
        href="tel:+919878224658"
        aria-label="Call LaptopDoc directly at +91 98782 24658"
        className="group hidden sm:flex items-center gap-2 rounded-full border border-orange-200 bg-white/95 px-4 py-2.5 text-xs font-bold text-gray-900 shadow-lg shadow-black/5 backdrop-blur-md transition-all hover:border-orange-500 hover:text-orange-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
          <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <span className="pr-1 font-extrabold">+91 98782 24658</span>
      </a>

      {/* Primary WhatsApp Quick Chat */}
      <a
        href="https://wa.me/919878224658?text=Hi%20LaptopDoc,%20I%20have%20an%20enquiry%20regarding%20laptop%20repair%20or%20purchase."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with LaptopDoc on WhatsApp"
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] p-3.5 sm:px-5 sm:py-3.5 text-white shadow-xl shadow-green-600/30 transition-all hover:-translate-y-1 hover:bg-[#20ba5a] hover:shadow-2xl hover:shadow-green-600/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
      >
        {/* Pulsing indicator ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-orange-500 ring-2 ring-white" />
        </span>

        <MessageCircle className="h-6 w-6 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
        <span className="hidden sm:inline-block text-sm font-extrabold tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
