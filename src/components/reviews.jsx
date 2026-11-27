import { Star, MapPin, Quote } from "lucide-react";

const reviews = [
  {
    name: "Amanpreet Singh",
    location: "Sector 22, Chandigarh",
    rating: 5,
    review:
      "My Dell laptop hinge was loose and making noise. They repaired it properly and also cleaned the laptop from inside. Good service in Chandigarh.",
  },
  {
    name: "Priya Sharma",
    location: "Sector 34, Chandigarh",
    rating: 5,
    review:
      "I visited for HP laptop heating issue. Fan cleaning and thermal paste service was done nicely. Laptop performance improved a lot.",
  },
  {
    name: "Gurpreet Kaur",
    location: "Zirakpur",
    rating: 4,
    review:
      "I sold my old Lenovo laptop here. They checked the condition, battery and configuration, then gave a fair resale price.",
  },
  {
    name: "Rohit Verma",
    location: "Panchkula",
    rating: 5,
    review:
      "My ASUS gaming laptop screen was damaged. Replacement quality was good and the work looked neat.",
  },
  {
    name: "Harpreet Gill",
    location: "Kharar",
    rating: 4,
    review:
      "Genuine laptop repair shop for Tricity customers. They explained the problem before starting the repair.",
  },
  {
    name: "Simranjeet Kaur",
    location: "Mohali",
    rating: 5,
    review:
      "Bought a used laptop for office work. Condition was clean, speed was good and price was reasonable.",
  },
  {
    name: "Jaspreet Sandhu",
    location: "Sector 15, Chandigarh",
    rating: 5,
    review:
      "Best experience for laptop SSD upgrade in Chandigarh. My old laptop became much faster after upgrade.",
  },
  {
    name: "Nitin Thakur",
    location: "Manimajra",
    rating: 3,
    review:
      "Service was good. It took some extra time because part was not available, but final repair was done properly.",
  },
  {
    name: "Rajwinder Singh",
    location: "Mohali Phase 7",
    rating: 5,
    review:
      "My MacBook was not charging. They checked the adapter, port and battery properly before suggesting repair.",
  },
];

export default function ReviewsSection() {
  const averageRating =
    reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length;
  const scrollingReviews = [...reviews, ...reviews];
  return (
    <section className="overflow-hidden bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
            Chandigarh Customer Reviews
          </span>

          <h2 className="mt-5 text-xl font-extrabold text-black md:text-3xl">
            Laptop Repair Reviews from Chandigarh & Tricity
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Customer feedback for laptop repair, used laptop resale, screen
            replacement, hinge repair, SSD upgrade and laptop service in
            Chandigarh, Mohali, Panchkula, Zirakpur and Kharar.
          </p>

          <div className="mt-6 flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-6 w-6 ${
                  star <= Math.round(averageRating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <p className="mt-2 text-sm font-bold text-gray-700">
            {averageRating.toFixed(1)} out of 5 based on {reviews.length} local
            reviews
          </p>
        </div>

        <div className="review-slider mt-12 py-2">
          <div className="review-track">
            {scrollingReviews.map((item, index) => (
              <article
                key={index}
                className="w-84 sm:w-90 shrink-0 rounded-2xl border border-gray-100 bg-white p-6 shadow-xs hover:border-orange-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        aria-hidden="true"
                        className={`h-4 w-4 ${
                          star <= item.rating
                            ? "fill-orange-400 text-orange-400"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-xs font-bold text-gray-500">
                      {item.rating}.0
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-700 italic">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-sm text-gray-900">{item.name}</h3>
                    <p className="mt-0.5 flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="h-3.5 w-3.5 text-orange-500 shrink-0" aria-hidden="true" />
                      {item.location}
                    </p>
                  </div>
                  <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-bold text-orange-700">
                    Verified
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
