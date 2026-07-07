"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ImageIcon,
  Link2,
  Loader2,
  Percent,
  Sparkles,
  Trash2,
  Upload,
} from "lucide-react";

export default function OfferForm({ onOfferAdded }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const formRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setError("");

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

    if (!allowedTypes.includes(file.type)) {
      setError("Only JPG, PNG and WEBP images are allowed.");
      event.target.value = "";
      return;
    }

    const maxFileSize = 5 * 1024 * 1024;

    if (file.size > maxFileSize) {
      setError("Image size must be less than 5 MB.");
      event.target.value = "";
      return;
    }

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImageFile(null);
    setImagePreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current || loading) return;

    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      const formData = new FormData(formRef.current);
      let imageUrl = "";

      /*
       * Step 1: Upload image
       */
      if (imageFile) {
        const imageFormData = new FormData();
        imageFormData.append("image", imageFile);

        const uploadRes = await fetch("/api/admin/upload", {
          method: "POST",
          body: imageFormData,
        });

        const uploadData = await uploadRes.json();

        if (!uploadRes.ok) {
          throw new Error(
            uploadData.error || "Unable to upload the offer image.",
          );
        }

        imageUrl = uploadData.url;
      }

      /*
       * Step 2: Create offer
       */
      const offerData = {
        title: formData.get("title")?.trim(),
        description: formData.get("description")?.trim(),
        discountText: formData.get("discountText")?.trim(),
        link: formData.get("link")?.trim() || "/contact",
        priority: Number(formData.get("priority")) || 0,
        active: formData.get("active") === "on",
        image: imageUrl,
      };

      const res = await fetch("/api/admin/offers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(offerData),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || "Unable to save the offer.");
      }

      /*
       * Step 3: Reset UI
       */
      setSuccess(true);

      formRef.current.reset();

      removeImage();

      await onOfferAdded?.();

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.error("Offer creation error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Status Messages */}
      {error && (
        <div
          role="alert"
          className="mb-5 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4"
        >
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-red-500 shadow-sm">
            <AlertCircle className="h-4 w-4" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-bold text-red-700">
              Unable to save offer
            </p>

            <p className="mt-1 text-xs leading-5 text-red-600">{error}</p>
          </div>
        </div>
      )}

      {success && (
        <div
          role="status"
          className="mb-5 flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4"
        >
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-600 shadow-sm">
            <CheckCircle2 className="h-4 w-4" />
          </div>

          <div>
            <p className="text-sm font-bold text-emerald-700">
              Offer created successfully
            </p>

            <p className="mt-1 text-xs leading-5 text-emerald-600">
              The new promotional offer has been added.
            </p>
          </div>
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <FormField label="Offer Title" htmlFor="offer-title" required>
          <input
            id="offer-title"
            type="text"
            name="title"
            required
            maxLength={100}
            disabled={loading}
            placeholder="e.g. Summer Laptop Sale"
            className={inputClass}
          />
        </FormField>

        {/* Discount */}
        <FormField
          label="Discount Text"
          htmlFor="discount-text"
          description="Short promotional text shown prominently."
        >
          <div className="relative">
            <Percent className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <input
              id="discount-text"
              type="text"
              name="discountText"
              maxLength={50}
              disabled={loading}
              placeholder="e.g. Up to 50% OFF"
              className={`${inputClass} pl-10`}
            />
          </div>
        </FormField>

        {/* Description */}
        <FormField label="Description" htmlFor="offer-description">
          <textarea
            id="offer-description"
            name="description"
            rows={4}
            maxLength={300}
            disabled={loading}
            placeholder="Write a short description about the offer..."
            className={`${inputClass} min-h-27.5 resize-none`}
          />
        </FormField>

        {/* Image Upload */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-bold text-gray-800">
              Offer Image
            </label>

            <span className="text-[11px] font-medium text-gray-400">
              JPG, PNG or WEBP
            </span>
          </div>

          {imagePreview ? (
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
              <div className="aspect-video overflow-hidden">
                <img
                  src={imagePreview}
                  alt="Offer preview"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Image Overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 opacity-0 transition duration-200 group-hover:bg-black/40 group-hover:opacity-100">
                <button
                  type="button"
                  disabled={loading}
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-bold text-gray-800 shadow-lg transition hover:bg-gray-100"
                >
                  <Upload className="h-4 w-4" />
                  Replace
                </button>

                <button
                  type="button"
                  disabled={loading}
                  onClick={removeImage}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-500 text-white shadow-lg transition hover:bg-red-600"
                  aria-label="Remove image"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              {/* File Info */}
              <div className="flex items-center justify-between gap-3 bg-white px-4 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <ImageIcon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-gray-800">
                      {imageFile?.name}
                    </p>

                    <p className="mt-0.5 text-[11px] text-gray-400">
                      {imageFile ? formatFileSize(imageFile.size) : ""}
                    </p>
                  </div>
                </div>

                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
              </div>
            </div>
          ) : (
            <button
              type="button"
              disabled={loading}
              onClick={() => fileInputRef.current?.click()}
              className="group flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 px-6 py-10 text-center transition hover:border-orange-300 hover:bg-orange-50/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-gray-400 shadow-sm ring-1 ring-gray-200 transition group-hover:text-orange-500 group-hover:ring-orange-200">
                <Upload className="h-6 w-6" />
              </div>

              <p className="mt-4 text-sm font-bold text-gray-800">
                Upload offer image
              </p>

              <p className="mt-1 max-w-60 text-xs leading-5 text-gray-500">
                Click to browse and select a promotional image.
              </p>

              <span className="mt-4 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-orange-600 shadow-sm ring-1 ring-gray-200">
                Choose Image
              </span>
            </button>
          )}

          <input
            ref={fileInputRef}
            id="image-upload"
            type="file"
            accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
            className="sr-only"
            onChange={handleImageChange}
            disabled={loading}
          />
        </div>

        {/* Link + Priority */}
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Destination Link" htmlFor="offer-link">
            <div className="relative">
              <Link2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                id="offer-link"
                type="text"
                name="link"
                defaultValue="/contact"
                disabled={loading}
                placeholder="/contact"
                className={`${inputClass} pl-10`}
              />
            </div>
          </FormField>

          <FormField label="Priority" htmlFor="offer-priority">
            <input
              id="offer-priority"
              type="number"
              name="priority"
              defaultValue={0}
              min={0}
              disabled={loading}
              className={inputClass}
            />
          </FormField>
        </div>

        {/* Active Toggle */}
        <div className="rounded-xl border border-gray-200 bg-gray-50/60 p-4">
          <label
            htmlFor="active"
            className="flex cursor-pointer items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Sparkles className="h-4 w-4" />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">
                  Publish immediately
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Make this offer visible to customers after creation.
                </p>
              </div>
            </div>

            <div className="relative shrink-0">
              <input
                id="active"
                name="active"
                type="checkbox"
                defaultChecked
                disabled={loading}
                className="peer sr-only"
              />

              <div className="h-6 w-11 rounded-full bg-gray-300 transition peer-checked:bg-emerald-500 peer-focus-visible:ring-4 peer-focus-visible:ring-emerald-100 peer-disabled:opacity-50" />

              <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5" />
            </div>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-black text-white shadow-sm shadow-orange-500/20 transition hover:bg-orange-600 hover:shadow-md hover:shadow-orange-500/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Creating Offer...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              Create Offer
            </>
          )}
        </button>
      </form>
    </div>
  );
}

function FormField({ label, htmlFor, description, required, children }) {
  return (
    <div>
      <div className="mb-2">
        <label htmlFor={htmlFor} className="text-sm font-bold text-gray-800">
          {label}

          {required && <span className="ml-1 text-orange-500">*</span>}
        </label>

        {description && (
          <p className="mt-1 text-xs leading-5 text-gray-400">{description}</p>
        )}
      </div>

      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-medium text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-60";

function formatFileSize(bytes) {
  if (!bytes) return "";

  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
