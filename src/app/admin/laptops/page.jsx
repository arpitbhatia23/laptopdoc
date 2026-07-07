"use client";

import { useState, useEffect } from "react";
import { Laptop, RefreshCcw, PlusCircle } from "lucide-react";
import LaptopForm from "@/components/admin/LaptopForm";
import LaptopTable from "@/components/admin/LaptopTable";

export default function AdminLaptopsPage() {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchLaptops = async () => {
    try {
      setRefreshing(true);

      const res = await fetch("/api/admin/laptops", {
        cache: "no-store",
      });

      if (res.ok) {
        const data = await res.json();
        setLaptops(data?.laptops || data || []);
      }
    } catch (err) {
      console.error("Fetch laptops error:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchLaptops();
  }, []);

  const totalLaptops = laptops.length;
  const availableLaptops = laptops.filter((item) => item.available).length;
  const soldLaptops = laptops.filter((item) => !item.available).length;
  const featuredLaptops = laptops.filter((item) => item.featured).length;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
                  <Laptop className="h-6 w-6 text-orange-600" />
                </div>

                <div>
                  <h1 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
                    Manage Resale Laptops
                  </h1>
                  <p className="mt-1 text-sm text-gray-500">
                    Add, update, feature, mark sold and delete used laptops.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={fetchLaptops}
              disabled={refreshing}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-bold text-orange-700 hover:bg-orange-100 disabled:opacity-60"
            >
              <RefreshCcw
                className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
              />
              Refresh
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-500">
                Total Laptops
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                {totalLaptops}
              </h2>
            </div>

            <div className="rounded-2xl bg-green-50 p-5">
              <p className="text-sm font-semibold text-green-700">Available</p>
              <h2 className="mt-2 text-3xl font-extrabold text-green-700">
                {availableLaptops}
              </h2>
            </div>

            <div className="rounded-2xl bg-red-50 p-5">
              <p className="text-sm font-semibold text-red-700">Sold</p>
              <h2 className="mt-2 text-3xl font-extrabold text-red-700">
                {soldLaptops}
              </h2>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              <p className="text-sm font-semibold text-orange-700">Featured</p>
              <h2 className="mt-2 text-3xl font-extrabold text-orange-700">
                {featuredLaptops}
              </h2>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-3">
          {/* Form */}
          <section className="xl:col-span-1">
            <div className="sticky top-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100">
                  <PlusCircle className="h-5 w-5 text-orange-600" />
                </div>

                <div>
                  <h2 className="text-lg font-extrabold text-gray-900">
                    Add New Laptop
                  </h2>
                  <p className="text-xs text-gray-500">
                    Upload resale laptop details and images.
                  </p>
                </div>
              </div>

              <LaptopForm onLaptopAdded={fetchLaptops} />
            </div>
          </section>

          {/* Table */}
          <section className="xl:col-span-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-lg font-extrabold text-gray-900">
                    Laptop Inventory
                  </h2>
                  <p className="text-sm text-gray-500">
                    View all laptops added for resale.
                  </p>
                </div>

                <span className="rounded-full bg-gray-100 px-4 py-2 text-xs font-bold text-gray-600">
                  {totalLaptops} items
                </span>
              </div>

              {loading ? (
                <div className="flex min-h-75 items-center justify-center rounded-2xl bg-gray-50">
                  <div className="text-center">
                    <RefreshCcw className="mx-auto h-8 w-8 animate-spin text-orange-600" />
                    <p className="mt-3 text-sm font-semibold text-gray-600">
                      Loading laptops...
                    </p>
                  </div>
                </div>
              ) : laptops.length === 0 ? (
                <div className="flex min-h-75 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
                  <div>
                    <Laptop className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-4 text-lg font-extrabold text-gray-900">
                      No laptops added yet
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Add your first resale laptop from the form on the left.
                    </p>
                  </div>
                </div>
              ) : (
                <LaptopTable laptops={laptops} onLaptopUpdated={fetchLaptops} />
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
