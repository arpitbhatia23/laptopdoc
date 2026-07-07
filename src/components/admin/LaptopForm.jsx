"use client";

import { useState, useRef } from "react";
import {
  Upload,
  X,
  Loader2,
  CheckCircle,
  AlertCircle,
  ImagePlus,
} from "lucide-react";

export default function LaptopForm({ onLaptopAdded }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100";

  const labelClass = "mb-2 block text-sm font-bold text-gray-700";

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    setImageFiles(files);

    imagePreviews.forEach((url) => URL.revokeObjectURL(url));
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const removeImage = (index) => {
    const updatedFiles = imageFiles.filter((_, i) => i !== index);
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);

    URL.revokeObjectURL(imagePreviews[index]);

    setImageFiles(updatedFiles);
    setImagePreviews(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData(formRef.current);
      let images = [];

      for (const file of imageFiles) {
        const imageFormData = new FormData();
        imageFormData.append("images", file);

        const uploadRes = await fetch("/api/admin/upload", {
          method: "POST",
          body: imageFormData,
        });

        const uploadData = await uploadRes.json();
        console.log("upload data", uploadData);
        if (!uploadRes.ok) {
          throw new Error(uploadData.error || "Image upload failed");
        }

        // Server returns an array of uploaded images. Handle both array and single-object responses.
        if (Array.isArray(uploadData.images)) {
          for (const img of uploadData.images) {
            images.push({ url: img.url, public_id: img.public_id });
          }
        } else if (uploadData.images && uploadData.images.url) {
          images.push({
            url: uploadData.images.url,
            public_id: uploadData.images.public_id,
          });
        }
      }

      const featuresString = formData.get("features");
      const features = featuresString
        ? featuresString
            .split(",")
            .map((f) => f.trim())
            .filter(Boolean)
        : [];

      console.log(images);
      const laptopData = {
        title: formData.get("title"),
        brand: formData.get("brand"),
        category: formData.get("category"),
        processor: formData.get("processor"),
        ram: formData.get("ram"),
        storage: formData.get("storage"),
        graphics: formData.get("graphics"),
        display: formData.get("display"),
        operatingSystem: formData.get("operatingSystem"),
        batteryHealth: formData.get("batteryHealth"),
        condition: formData.get("condition"),
        warranty: formData.get("warranty"),
        price: Number(formData.get("price")),
        originalPrice: formData.get("originalPrice")
          ? Number(formData.get("originalPrice"))
          : undefined,
        description: formData.get("description"),
        features,
        available: formData.get("available") === "on",
        featured: formData.get("featured") === "on",
        location: formData.get("location"),
        seoTitle: formData.get("seoTitle"),
        seoDescription: formData.get("seoDescription"),
        images,
      };

      const res = await fetch("/api/admin/laptops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(laptopData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to save laptop");
      }

      setSuccess(true);
      formRef.current.reset();
      imagePreviews.forEach((url) => URL.revokeObjectURL(url));
      setImageFiles([]);
      setImagePreviews([]);

      onLaptopAdded?.();

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full max-h-[80vh] overflow-y-auto rounded-3xl bg-white">
      {error && (
        <div className="mb-5 flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          {error}
        </div>
      )}

      {success && (
        <div className="mb-5 flex gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-700">
          <CheckCircle className="h-5 w-5 shrink-0" />
          Laptop added successfully!
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className={labelClass}>Laptop Title *</label>
          <input
            required
            type="text"
            name="title"
            placeholder="Dell Latitude 5420 i5 11th Gen"
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Brand *</label>
            <select required name="brand" className={inputClass}>
              <option value="">Select brand</option>
              <option>Dell</option>
              <option>HP</option>
              <option>Lenovo</option>
              <option>ASUS</option>
              <option>Acer</option>
              <option>MSI</option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Category</label>
            <select
              name="category"
              defaultValue="Laptop"
              className={inputClass}
            >
              <option>Laptop</option>
              <option>Desktop</option>
              <option>Mini PC</option>
              <option>All-in-One</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Price *</label>
            <input
              required
              type="number"
              name="price"
              placeholder="32999"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Original Price</label>
            <input
              type="number"
              name="originalPrice"
              placeholder="49999"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Processor *</label>
            <input
              required
              type="text"
              name="processor"
              placeholder="Intel Core i5 11th Gen"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>RAM *</label>
            <input
              required
              type="text"
              name="ram"
              placeholder="8GB DDR4"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Storage *</label>
            <input
              required
              type="text"
              name="storage"
              placeholder="512GB SSD"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Graphics</label>
            <input
              type="text"
              name="graphics"
              placeholder="Intel Iris Xe / NVIDIA GTX"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Display</label>
            <input
              type="text"
              name="display"
              placeholder="15.6 inch FHD"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Operating System</label>
            <input
              type="text"
              name="operatingSystem"
              defaultValue="Windows 11"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Battery Health</label>
            <input
              type="text"
              name="batteryHealth"
              placeholder="85% / 2 hours backup"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Condition</label>
            <select name="condition" defaultValue="Good" className={inputClass}>
              <option>Excellent</option>
              <option>Good</option>
              <option>Average</option>
              <option>Fair</option>
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass}>Warranty</label>
          <input
            type="text"
            name="warranty"
            defaultValue="No Warranty"
            placeholder="3 Months Seller Warranty"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Features</label>
          <input
            type="text"
            name="features"
            placeholder="Backlit keyboard, Fingerprint, USB-C charging"
            className={inputClass}
          />
          <p className="mt-1 text-xs text-gray-500">
            Separate each feature with comma.
          </p>
        </div>

        <div>
          <label className={labelClass}>Laptop Images</label>

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50/50 px-5 py-8 text-center transition hover:bg-orange-50">
            <ImagePlus className="h-9 w-9 text-orange-600" />
            <p className="mt-3 text-sm font-bold text-gray-800">
              Click to upload laptop images
            </p>
            <p className="mt-1 text-xs text-gray-500">
              JPG, PNG, WEBP allowed. Multiple images supported.
            </p>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {imagePreviews.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {imagePreviews.map((src, index) => (
                <div
                  key={src}
                  className="group relative overflow-hidden rounded-xl border bg-gray-100"
                >
                  <img
                    src={src}
                    className="h-24 w-full object-cover"
                    alt={`Laptop preview ${index + 1}`}
                  />

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute right-2 top-2 rounded-full bg-black/70 p-1 text-white opacity-100 transition hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <label className={labelClass}>Description</label>
          <textarea
            name="description"
            rows={4}
            placeholder="Write laptop condition, usage, performance and included accessories..."
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Location</label>
          <input
            type="text"
            name="location"
            defaultValue="Chandigarh"
            className={inputClass}
          />
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <h3 className="text-sm font-extrabold text-gray-900">SEO Details</h3>

          <div className="mt-4 space-y-4">
            <input
              type="text"
              name="seoTitle"
              placeholder="SEO Title"
              className={inputClass}
            />

            <textarea
              name="seoDescription"
              rows={3}
              placeholder="SEO Description"
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
            <input
              type="checkbox"
              name="available"
              defaultChecked
              className="h-4 w-4 rounded border-gray-300 text-orange-600"
            />
            Available
          </label>

          <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
            <input
              type="checkbox"
              name="featured"
              className="h-4 w-4 rounded border-gray-300 text-orange-600"
            />
            Featured
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-4 text-sm font-extrabold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Saving Laptop...
            </>
          ) : (
            <>
              <Upload className="h-5 w-5" />
              Save Laptop
            </>
          )}
        </button>
      </form>
    </div>
  );
}
