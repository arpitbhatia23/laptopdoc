"use client";

import { useState } from "react";
import {
  BadgePercent,
  CheckCircle2,
  Eye,
  EyeOff,
  ImageIcon,
  Loader2,
  Sparkles,
  Tag,
  Trash2,
} from "lucide-react";

export default function OfferTable({ offers = [], onOfferUpdated }) {
  const [loadingAction, setLoadingAction] = useState(null);
  const [error, setError] = useState("");

  const handleDelete = async (id) => {
    const shouldDelete = confirm(
      "Are you sure you want to permanently delete this offer?",
    );

    if (!shouldDelete) return;

    try {
      setLoadingAction({
        id,
        action: "delete",
      });

      setError("");

      const res = await fetch(`/api/admin/offers/${id}`, {
        method: "DELETE",
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || "Unable to delete this offer.");
      }

      await onOfferUpdated?.();
    } catch (err) {
      console.error("Offer delete error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while deleting the offer.",
      );
    } finally {
      setLoadingAction(null);
    }
  };

  const handleToggleActive = async (id, currentStatus) => {
    try {
      setLoadingAction({
        id,
        action: "toggle",
      });

      setError("");

      const res = await fetch(`/api/admin/offers/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          active: !currentStatus,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || "Unable to update this offer.");
      }

      await onOfferUpdated?.();
    } catch (err) {
      console.error("Offer update error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while updating the offer.",
      );
    } finally {
      setLoadingAction(null);
    }
  };

  const isActionLoading = (id, action) => {
    return loadingAction?.id === id && loadingAction?.action === action;
  };

  if (!offers.length) {
    return <EmptyOffersState />;
  }

  return (
    <div className="space-y-4">
      {/* Error */}
      {error && (
        <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-red-500 shadow-sm">
            <BadgePercent className="h-4 w-4" />
          </div>

          <div>
            <p className="text-sm font-bold text-red-700">Action failed</p>

            <p className="mt-0.5 text-xs leading-5 text-red-600">{error}</p>
          </div>
        </div>
      )}

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-xl border border-gray-200 lg:block">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/80">
                <th className="px-5 py-4 text-left text-[11px] font-black uppercase tracking-wider text-gray-500">
                  Offer
                </th>

                <th className="px-5 py-4 text-left text-[11px] font-black uppercase tracking-wider text-gray-500">
                  Priority
                </th>

                <th className="px-5 py-4 text-left text-[11px] font-black uppercase tracking-wider text-gray-500">
                  Status
                </th>

                <th className="px-5 py-4 text-right text-[11px] font-black uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 bg-white">
              {offers.map((offer) => {
                const toggleLoading = isActionLoading(offer._id, "toggle");

                const deleteLoading = isActionLoading(offer._id, "delete");

                const disabled = toggleLoading || deleteLoading;

                return (
                  <tr
                    key={offer._id}
                    className="group transition-colors hover:bg-orange-50/30"
                  >
                    {/* Offer */}
                    <td className="px-5 py-5">
                      <div className="flex min-w-70 items-center gap-4">
                        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
                          {offer.image ? (
                            <img
                              src={offer.image}
                              alt={offer.title || "Offer"}
                              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-gray-50">
                              <ImageIcon className="h-6 w-6 text-gray-300" />
                            </div>
                          )}

                          {offer.active && (
                            <div className="absolute left-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
                              <Sparkles className="h-3.5 w-3.5 text-orange-500" />
                            </div>
                          )}
                        </div>

                        <div className="min-w-0">
                          <p className="max-w-75 truncate text-sm font-black text-gray-950">
                            {offer.title}
                          </p>

                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            {offer.discountText ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-black text-orange-700 ring-1 ring-inset ring-orange-200">
                                <BadgePercent className="h-3 w-3" />
                                {offer.discountText}
                              </span>
                            ) : (
                              <span className="text-xs text-gray-400">
                                No discount text
                              </span>
                            )}
                          </div>

                          {offer.description && (
                            <p className="mt-2 max-w-85 truncate text-xs text-gray-500">
                              {offer.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Priority */}
                    <td className="px-5 py-5">
                      <div className="inline-flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 ring-1 ring-inset ring-gray-200">
                        <Tag className="h-3.5 w-3.5 text-gray-400" />

                        <span className="text-sm font-black text-gray-800">
                          {offer.priority ?? 0}
                        </span>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-5">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-black ring-1 ring-inset ${
                          offer.active
                            ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                            : "bg-gray-100 text-gray-600 ring-gray-200"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            offer.active ? "bg-emerald-500" : "bg-gray-400"
                          }`}
                        />

                        {offer.active ? "Active" : "Inactive"}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-5">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          disabled={disabled}
                          onClick={() =>
                            handleToggleActive(offer._id, offer.active)
                          }
                          className={`inline-flex h-9 items-center justify-center gap-2 rounded-lg border px-3 text-xs font-black transition disabled:cursor-not-allowed disabled:opacity-50 ${
                            offer.active
                              ? "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                              : "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                          }`}
                        >
                          {toggleLoading ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Updating
                            </>
                          ) : offer.active ? (
                            <>
                              <EyeOff className="h-4 w-4" />
                              Disable
                            </>
                          ) : (
                            <>
                              <Eye className="h-4 w-4" />
                              Enable
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          disabled={disabled}
                          onClick={() => handleDelete(offer._id)}
                          aria-label={`Delete ${offer.title}`}
                          title="Delete offer"
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {deleteLoading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-3 lg:hidden">
        {offers.map((offer) => {
          const toggleLoading = isActionLoading(offer._id, "toggle");

          const deleteLoading = isActionLoading(offer._id, "delete");

          const disabled = toggleLoading || deleteLoading;

          return (
            <article
              key={offer._id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              {/* Image */}
              <div className="relative aspect-16/7 overflow-hidden bg-gray-100">
                {offer.image ? (
                  <img
                    src={offer.image}
                    alt={offer.title || "Offer"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gray-50">
                    <ImageIcon className="h-10 w-10 text-gray-300" />
                  </div>
                )}

                <div className="absolute left-3 top-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-black shadow-sm ${
                      offer.active
                        ? "bg-white text-emerald-700"
                        : "bg-white text-gray-600"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        offer.active ? "bg-emerald-500" : "bg-gray-400"
                      }`}
                    />

                    {offer.active ? "Active" : "Inactive"}
                  </span>
                </div>

                <div className="absolute right-3 top-3">
                  <span className="rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
                    Priority {offer.priority ?? 0}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-black text-gray-950">
                  {offer.title}
                </h3>

                {offer.discountText && (
                  <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-black text-orange-700">
                    <BadgePercent className="h-3.5 w-3.5" />
                    {offer.discountText}
                  </span>
                )}

                {offer.description && (
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                    {offer.description}
                  </p>
                )}

                <div className="mt-4 grid grid-cols-[1fr_auto] gap-2 border-t border-gray-100 pt-4">
                  <button
                    type="button"
                    disabled={disabled}
                    onClick={() => handleToggleActive(offer._id, offer.active)}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black transition disabled:opacity-50 ${
                      offer.active
                        ? "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                        : "bg-emerald-500 text-white hover:bg-emerald-600"
                    }`}
                  >
                    {toggleLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Updating...
                      </>
                    ) : offer.active ? (
                      <>
                        <EyeOff className="h-4 w-4" />
                        Disable Offer
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4" />
                        Enable Offer
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    disabled={disabled}
                    onClick={() => handleDelete(offer._id)}
                    aria-label={`Delete ${offer.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition hover:bg-red-100 disabled:opacity-50"
                  >
                    {deleteLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function EmptyOffersState() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 px-6 py-14 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-sm ring-1 ring-gray-200">
        <BadgePercent className="h-6 w-6" />
      </div>

      <h3 className="mt-4 text-base font-black text-gray-950">
        No offers created yet
      </h3>

      <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
        Create your first promotional offer using the form and it will appear
        here.
      </p>

      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Ready for your first promotion
      </div>
    </div>
  );
}
