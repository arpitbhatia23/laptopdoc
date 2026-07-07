"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  BadgePercent,
  CheckCircle2,
  CircleDot,
  RefreshCw,
  Sparkles,
  Tag,
} from "lucide-react";

import OfferForm from "@/components/admin/OfferForm";
import OfferTable from "@/components/admin/OfferTable";

export default function AdminOffersPage() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const fetchOffers = useCallback(async (showRefreshLoader = false) => {
    try {
      if (showRefreshLoader) {
        setRefreshing(true);
      }

      setError("");

      const res = await fetch("/api/admin/offers", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch offers");
      }

      const data = await res.json();

      setOffers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Offer fetch error:", err);
      setError("Unable to load offers. Please try again.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);

  const stats = useMemo(() => {
    const activeOffers = offers.filter((offer) => offer.active).length;
    const inactiveOffers = offers.length - activeOffers;

    return {
      total: offers.length,
      active: activeOffers,
      inactive: inactiveOffers,
    };
  }, [offers]);

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700 ring-1 ring-inset ring-orange-200">
              <CircleDot className="h-3.5 w-3.5" />
              Promotions
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Manage Offers
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Create, manage and publish promotional offers visible to your
            customers.
          </p>
        </div>

        <button
          type="button"
          onClick={() => fetchOffers(true)}
          disabled={refreshing}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <RefreshCw
            className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
          />

          {refreshing ? "Refreshing..." : "Refresh Offers"}
        </button>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <Tag className="h-5 w-5" />
            </div>

            <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-bold text-orange-700">
              All Offers
            </span>
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold text-gray-500">Total Offers</p>

            <p className="mt-1 text-3xl font-black tracking-tight text-gray-950">
              {stats.total}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>

            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
              Live
            </span>
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold text-gray-500">Active Offers</p>

            <p className="mt-1 text-3xl font-black tracking-tight text-gray-950">
              {stats.active}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-600">
              <BadgePercent className="h-5 w-5" />
            </div>

            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-bold text-gray-600">
              Hidden
            </span>
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold text-gray-500">
              Inactive Offers
            </p>

            <p className="mt-1 text-3xl font-black tracking-tight text-gray-950">
              {stats.inactive}
            </p>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="grid items-start gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
        {/* Offer Form */}
        <div className="xl:sticky xl:top-6">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 bg-linear-to-br from-orange-50 to-white px-5 py-5 sm:px-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-sm shadow-orange-500/20">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-lg font-black text-gray-950">
                    Create New Offer
                  </h2>

                  <p className="mt-1 text-sm leading-5 text-gray-500">
                    Add a new promotion for your customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <OfferForm onOfferAdded={() => fetchOffers(false)} />
            </div>
          </div>
        </div>

        {/* Offers List */}
        <div className="min-w-0">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-gray-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-black text-gray-950">
                    All Offers
                  </h2>

                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-600">
                    {offers.length}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  Manage offer visibility and promotional content.
                </p>
              </div>

              {!loading && !error && stats.active > 0 && (
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  {stats.active} live
                </div>
              )}
            </div>

            <div className="p-4 sm:p-6">
              {loading ? (
                <OfferTableSkeleton />
              ) : error ? (
                <ErrorState
                  message={error}
                  onRetry={() => fetchOffers(true)}
                  refreshing={refreshing}
                />
              ) : (
                <OfferTable
                  offers={offers}
                  onOfferUpdated={() => fetchOffers(false)}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function OfferTableSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-xl border border-gray-100 p-4"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-1 items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-gray-100" />

              <div className="flex-1">
                <div className="h-4 w-40 rounded bg-gray-100" />
                <div className="mt-2 h-3 w-28 rounded bg-gray-100" />
              </div>
            </div>

            <div className="h-8 w-20 rounded-lg bg-gray-100" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ErrorState({ message, onRetry, refreshing }) {
  return (
    <div className="rounded-2xl border border-red-100 bg-red-50 px-6 py-10 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-red-500 shadow-sm">
        <BadgePercent className="h-5 w-5" />
      </div>

      <h3 className="mt-4 text-base font-black text-gray-950">
        Unable to load offers
      </h3>

      <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
        {message}
      </p>

      <button
        type="button"
        onClick={onRetry}
        disabled={refreshing}
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gray-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-gray-800 disabled:opacity-60"
      >
        <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
        Try Again
      </button>
    </div>
  );
}
