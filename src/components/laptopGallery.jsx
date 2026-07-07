"use client";

import { useState } from "react";

export default function LaptopGallery({ images = [], title }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images.length) {
    return (
      <div className="flex aspect-4/3 items-center justify-center rounded-2xl bg-gray-100">
        <div className="text-center text-gray-400">
          <div className="text-6xl">💻</div>
          <p className="mt-3 text-sm font-semibold">No image available</p>
        </div>
      </div>
    );
  }

  const selectedImage = images[selectedIndex];

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
        <img
          src={selectedImage.url}
          alt={`${title} - Image ${selectedIndex + 1}`}
          className="h-full w-full object-cover"
        />

        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
            {selectedIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
          {images.map((image, index) => (
            <button
              key={`${image.url}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`View image ${index + 1}`}
              className={`aspect-square overflow-hidden rounded-xl border-2 bg-gray-100 transition ${
                selectedIndex === index
                  ? "border-orange-500 ring-2 ring-orange-100"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <img
                src={image.url}
                alt={`${title} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
