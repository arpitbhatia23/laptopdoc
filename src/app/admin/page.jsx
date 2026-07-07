import Offer from "@/models/offer.model";
import Link from "next/link";
import dbConnect from "@/utils/dbConnect";
import resellLaptopSchema from "@/models/resellLaptop.schema";

import {
  ArrowRight,
  BadgeIndianRupee,
  CheckCircle2,
  CircleDot,
  Laptop,
  PackageCheck,
  Plus,
  Sparkles,
  Star,
  Tag,
  TrendingUp,
} from "lucide-react";

export default async function AdminDashboard() {
  await dbConnect();

  const [totalLaptops, availableLaptops, featuredLaptops, activeOffers] =
    await Promise.all([
      resellLaptopSchema.countDocuments(),
      resellLaptopSchema.countDocuments({
        available: true,
      }),
      resellLaptopSchema.countDocuments({
        featured: true,
      }),
      Offer.countDocuments({
        active: true,
      }),
    ]);

  const soldLaptops = totalLaptops - availableLaptops;

  const availabilityPercentage =
    totalLaptops > 0 ? Math.round((availableLaptops / totalLaptops) * 100) : 0;

  const stats = [
    {
      title: "Total Laptops",
      value: totalLaptops,
      description: "Total inventory items",
      icon: Laptop,
      iconClass: "bg-orange-50 text-orange-600",
      badgeClass: "bg-orange-50 text-orange-700",
      badge: "Inventory",
    },
    {
      title: "Available",
      value: availableLaptops,
      description: `${availabilityPercentage}% of total inventory`,
      icon: CheckCircle2,
      iconClass: "bg-emerald-50 text-emerald-600",
      badgeClass: "bg-emerald-50 text-emerald-700",
      badge: "In stock",
    },
    {
      title: "Sold",
      value: soldLaptops,
      description: "Successfully sold laptops",
      icon: PackageCheck,
      iconClass: "bg-gray-100 text-gray-600",
      badgeClass: "bg-gray-100 text-gray-700",
      badge: "Completed",
    },
    {
      title: "Active Offers",
      value: activeOffers,
      description: "Currently visible promotions",
      icon: Tag,
      iconClass: "bg-blue-50 text-blue-600",
      badgeClass: "bg-blue-50 text-blue-700",
      badge: "Live",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700 ring-1 ring-inset ring-orange-200">
              <CircleDot className="h-3.5 w-3.5" />
              Admin Panel
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Dashboard
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Monitor laptop inventory, sold devices and active offers from one
            place.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/admin/laptops"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
          >
            <Laptop className="h-4 w-4" />
            View Inventory
          </Link>

          <Link
            href="/admin/laptops/add"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-orange-500/20 transition hover:bg-orange-600"
          >
            <Plus className="h-4 w-4" />
            Add Laptop
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconClass}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${stat.badgeClass}`}
                >
                  {stat.badge}
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-500">
                  {stat.title}
                </p>

                <p className="mt-1 text-3xl font-black tracking-tight text-gray-950">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs font-medium text-gray-400">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Main Content */}
      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* Inventory Overview */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-black text-gray-950">
                Inventory Overview
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Current stock distribution
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <TrendingUp className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {/* Available */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

                  <span className="text-sm font-bold text-gray-700">
                    Available Laptops
                  </span>
                </div>

                <span className="text-sm font-black text-gray-950">
                  {availableLaptops}
                </span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all"
                  style={{
                    width: `${availabilityPercentage}%`,
                  }}
                />
              </div>

              <p className="mt-2 text-xs text-gray-400">
                {availabilityPercentage}% currently available for customers
              </p>
            </div>

            {/* Sold */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gray-400" />

                  <span className="text-sm font-bold text-gray-700">
                    Sold Laptops
                  </span>
                </div>

                <span className="text-sm font-black text-gray-950">
                  {soldLaptops}
                </span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-gray-400 transition-all"
                  style={{
                    width: `${
                      totalLaptops > 0
                        ? Math.round((soldLaptops / totalLaptops) * 100)
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Featured */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />

                  <span className="text-sm font-bold text-gray-700">
                    Featured Listings
                  </span>
                </div>

                <span className="text-sm font-black text-gray-950">
                  {featuredLaptops}
                </span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-amber-400 transition-all"
                  style={{
                    width: `${
                      totalLaptops > 0
                        ? Math.round((featuredLaptops / totalLaptops) * 100)
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-5">
            <Link
              href="/admin/laptops"
              className="group inline-flex items-center gap-2 text-sm font-bold text-orange-600 transition hover:text-orange-700"
            >
              Manage complete inventory
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <div>
            <h2 className="text-lg font-black text-gray-950">Quick Actions</h2>

            <p className="mt-1 text-sm text-gray-500">Common admin tasks</p>
          </div>

          <div className="mt-6 space-y-3">
            <Link
              href="/admin/laptops"
              className="group flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Laptop className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-950">
                  Manage Laptops
                </p>

                <p className="mt-0.5 text-xs text-gray-500">
                  Edit inventory and availability
                </p>
              </div>

              <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
            </Link>

            <Link
              href="/admin/offers"
              className="group flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-emerald-200 hover:bg-emerald-50/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Tag className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-gray-950">Manage Offers</p>

                <p className="mt-0.5 text-xs text-gray-500">
                  Update promotions and deals
                </p>
              </div>

              <ArrowRight className="h-4 w-4 text-gray-400 transition group-hover:translate-x-1 group-hover:text-emerald-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Summary Cards */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl bg-gray-950 p-6 text-white">
          <div className="relative z-10 max-w-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <Star className="h-5 w-5 text-amber-400" />
            </div>

            <h3 className="mt-5 text-xl font-black">
              {featuredLaptops} Featured Listings
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Featured laptops receive more visibility across your resale
              section.
            </p>

            <Link
              href="/admin/laptops"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white"
            >
              Update featured laptops
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Sparkles className="absolute -bottom-10 -right-8 h-44 w-44 text-white/4" />
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-orange-500 p-6 text-white">
          <div className="relative z-10 max-w-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
              <BadgeIndianRupee className="h-5 w-5" />
            </div>

            <h3 className="mt-5 text-xl font-black">
              Keep Your Inventory Updated
            </h3>

            <p className="mt-2 text-sm leading-6 text-orange-50">
              Mark sold laptops immediately so customers always see accurate
              availability.
            </p>

            <Link
              href="/admin/laptops"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white"
            >
              Review inventory
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Laptop className="absolute -bottom-10 -right-6 h-44 w-44 text-white/10" />
        </div>
      </section>
    </div>
  );
}
