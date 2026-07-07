"use client";

import { useState } from "react";
import {
  CheckCircle2,
  CircleDollarSign,
  Eye,
  EyeOff,
  Laptop,
  MoreHorizontal,
  Sparkles,
  Star,
  Trash2,
} from "lucide-react";

export default function LaptopTable({ laptops = [], onLaptopUpdated }) {
  const [loadingId, setLoadingId] = useState(null);

  const handleDelete = async (id) => {
    const shouldDelete = confirm(
      "Are you sure you want to permanently delete this laptop?",
    );

    if (!shouldDelete) return;

    try {
      setLoadingId(id);

      const res = await fetch(`/api/admin/laptops/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete laptop");
      }

      await onLaptopUpdated?.();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Unable to delete the laptop. Please try again.");
    } finally {
      setLoadingId(null);
    }
  };

  const handleToggle = async (id, field, value) => {
    try {
      setLoadingId(id);

      const res = await fetch(`/api/admin/laptops/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          [field]: !value,
        }),
      });

      if (!res.ok) {
        throw new Error(`Failed to update ${field}`);
      }

      await onLaptopUpdated?.();
    } catch (error) {
      console.error("Update error:", error);
      alert("Unable to update the laptop. Please try again.");
    } finally {
      setLoadingId(null);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price || 0);
  };

  if (!laptops.length) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100">
          <Laptop className="h-7 w-7 text-gray-500" />
        </div>

        <h3 className="mt-4 text-lg font-bold text-gray-900">
          No laptops found
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Add your first laptop to start managing your inventory.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-gray-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-gray-950">
              Laptop Inventory
            </h2>

            <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-700 ring-1 ring-inset ring-orange-200">
              {laptops.length}
            </span>
          </div>

          <p className="mt-1 text-sm text-gray-500">
            Manage availability, featured listings and inventory.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          {laptops.filter((laptop) => laptop.available).length} available
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50/80">
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                Laptop
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                Price
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-500">
                Status
              </th>

              <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {laptops.map((laptop) => {
              const isLoading = loadingId === laptop._id;
              console.log(laptop);
              return (
                <tr
                  key={laptop._id}
                  className="group transition-colors hover:bg-orange-50/30"
                >
                  {/* Laptop */}
                  <td className="px-6 py-5">
                    <div className="flex min-w-70 items-center gap-4">
                      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                        {laptop.images?.[0] ? (
                          <img
                            src={laptop.images[0]?.url}
                            alt={laptop.title || "Laptop"}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <Laptop className="h-6 w-6 text-gray-400" />
                          </div>
                        )}

                        {laptop.featured && (
                          <div className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow">
                            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-500" />
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="max-w-[320px] truncate text-sm font-bold text-gray-950">
                          {laptop.title}
                        </p>

                        <div className="mt-1.5 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-medium text-gray-500">
                            {laptop.brand || "Unknown brand"}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-gray-300" />

                          <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-semibold capitalize text-gray-600">
                            {laptop.condition || "Unknown"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                        <CircleDollarSign className="h-4 w-4 text-emerald-600" />
                      </div>

                      <div>
                        <p className="text-base font-extrabold text-gray-950">
                          ₹{formatPrice(laptop.price)}
                        </p>
                        <p className="text-xs text-gray-400">Selling price</p>
                      </div>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold ring-1 ring-inset ${
                          laptop.available
                            ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                            : "bg-gray-100 text-gray-600 ring-gray-200"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            laptop.available ? "bg-emerald-500" : "bg-gray-400"
                          }`}
                        />

                        {laptop.available ? "Available" : "Sold"}
                      </span>

                      {laptop.featured && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700 ring-1 ring-inset ring-amber-200">
                          <Sparkles className="h-3 w-3" />
                          Featured
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        disabled={isLoading}
                        onClick={() =>
                          handleToggle(
                            laptop._id,
                            "available",
                            laptop.available,
                          )
                        }
                        className={`inline-flex h-9 items-center gap-2 rounded-lg border px-3 text-xs font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${
                          laptop.available
                            ? "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                            : "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        }`}
                      >
                        {laptop.available ? (
                          <>
                            <EyeOff className="h-4 w-4" />
                            Mark Sold
                          </>
                        ) : (
                          <>
                            <Eye className="h-4 w-4" />
                            Make Available
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        disabled={isLoading}
                        onClick={() =>
                          handleToggle(laptop._id, "featured", laptop.featured)
                        }
                        title={
                          laptop.featured
                            ? "Remove from featured"
                            : "Add to featured"
                        }
                        className={`flex h-9 w-9 items-center justify-center rounded-lg border transition disabled:cursor-not-allowed disabled:opacity-50 ${
                          laptop.featured
                            ? "border-amber-200 bg-amber-50 text-amber-600 hover:bg-amber-100"
                            : "border-gray-200 bg-white text-gray-500 hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600"
                        }`}
                      >
                        <Star
                          className={`h-4 w-4 ${
                            laptop.featured ? "fill-current" : ""
                          }`}
                        />
                      </button>

                      <button
                        type="button"
                        disabled={isLoading}
                        onClick={() => handleDelete(laptop._id)}
                        title="Delete laptop"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="divide-y divide-gray-100 lg:hidden">
        {laptops.map((laptop) => {
          const isLoading = loadingId === laptop._id;

          return (
            <article key={laptop._id} className="p-4 sm:p-5">
              <div className="flex gap-4">
                <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                  {laptop.images?.[0] ? (
                    <img
                      src={laptop.images[0]}
                      alt={laptop.title || "Laptop"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Laptop className="h-7 w-7 text-gray-400" />
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="line-clamp-2 text-sm font-bold text-gray-950">
                        {laptop.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {laptop.brand} • {laptop.condition}
                      </p>
                    </div>

                    <MoreHorizontal className="h-5 w-5 shrink-0 text-gray-400" />
                  </div>

                  <p className="mt-3 text-lg font-extrabold text-gray-950">
                    ₹{formatPrice(laptop.price)}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                    laptop.available
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {laptop.available ? "Available" : "Sold"}
                </span>

                {laptop.featured && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">
                    <Star className="h-3 w-3 fill-current" />
                    Featured
                  </span>
                )}
              </div>

              <div className="mt-4 grid grid-cols-[1fr_auto_auto] gap-2">
                <button
                  disabled={isLoading}
                  onClick={() =>
                    handleToggle(laptop._id, "available", laptop.available)
                  }
                  className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-bold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
                >
                  {laptop.available ? "Mark Sold" : "Make Available"}
                </button>

                <button
                  disabled={isLoading}
                  onClick={() =>
                    handleToggle(laptop._id, "featured", laptop.featured)
                  }
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
                    laptop.featured
                      ? "border-amber-200 bg-amber-50 text-amber-600"
                      : "border-gray-200 text-gray-500"
                  }`}
                >
                  <Star
                    className={`h-4 w-4 ${
                      laptop.featured ? "fill-current" : ""
                    }`}
                  />
                </button>

                <button
                  disabled={isLoading}
                  onClick={() => handleDelete(laptop._id)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-100 text-red-500 transition hover:bg-red-50 disabled:opacity-50"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
