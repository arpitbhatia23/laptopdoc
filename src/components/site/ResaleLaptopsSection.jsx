import dbConnect from "@/shared/utils/dbConnect";
import ResaleLaptop from "@/models/resaleLaptop.model";
import Link from "next/link";

export default async function ResaleLaptopsSection() {
  await dbConnect();
  // Fetch a limited number for the homepage (e.g., top 6)
  const laptops = await ResaleLaptop.find({ available: true })
    .sort({ featured: -1, createdAt: -1 })
    .limit(6);

  if (laptops.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Used Laptops for Sale
            </h2>
            <p className="text-gray-600">
              Top quality refurbished laptops in Chandigarh
            </p>
          </div>
          <Link
            href="/used-laptops-chandigarh"
            className="text-orange-600 hover:text-orange-700 font-medium hidden sm:block"
          >
            View All &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {laptops.map((laptop) => (
            <div
              key={laptop._id}
              className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-48 bg-gray-100 overflow-hidden relative rounded-t-lg">
                {laptop.featured && (
                  <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded z-10">
                    Featured
                  </div>
                )}
                {laptop.images && laptop.images.length > 0 ? (
                  <img
                    src={laptop.images[0]}
                    alt={laptop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 truncate pr-2">
                    {laptop.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <span className="font-medium text-gray-900">
                    {laptop.brand}
                  </span>
                  <span>•</span>
                  <span>{laptop.condition} Condition</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-4">
                  <div className="bg-gray-50 p-1.5 rounded">
                    {laptop.processor || "CPU N/A"}
                  </div>
                  <div className="bg-gray-50 p-1.5 rounded">
                    {laptop.ram || "RAM N/A"}
                  </div>
                  <div className="bg-gray-50 p-1.5 rounded">
                    {laptop.storage || "Storage N/A"}
                  </div>
                  <div className="bg-gray-50 p-1.5 rounded truncate">
                    {laptop.operatingSystem || "OS N/A"}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-xl font-bold text-orange-600">
                    ₹{laptop.price}
                  </span>
                  <a
                    href={`https://wa.me/919878224658?text=Hi, I am interested in ${laptop.title} for ₹${laptop.price}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/used-laptops-chandigarh"
            className="inline-block border-2 border-orange-500 text-orange-600 font-medium px-6 py-2 rounded-md hover:bg-orange-50 transition-colors"
          >
            View All Laptops
          </Link>
        </div>
      </div>
    </section>
  );
}
