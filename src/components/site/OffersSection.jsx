import dbConnect from "@/shared/utils/dbConnect";
import Offer from "@/models/offer.model";

export default async function OffersSection() {
  await dbConnect();
  const offers = await Offer.find({ active: true }).sort({
    priority: -1,
    createdAt: -1,
  });

  if (offers.length === 0) return null;

  return (
    <section className="py-12 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer._id}
              className="bg-white rounded-xl shadow-md overflow-hidden relative group"
            >
              {offer.discountText && (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {offer.discountText}
                </div>
              )}
              {offer.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {offer.title}
                </h3>
                {offer.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {offer.description}
                  </p>
                )}
                <a
                  href={offer.link || "/contact"}
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-md transition-colors w-full text-center"
                >
                  Claim Offer
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
