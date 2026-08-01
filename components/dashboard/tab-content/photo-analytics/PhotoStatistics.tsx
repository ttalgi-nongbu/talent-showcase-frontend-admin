"use client";

import { useGetProfilePhotoStatistics } from "@/hooks/admin/dashboard/profile-photo";

export default function PhotoStatistics() {
  const { profilePhotoStatistics, loading } = useGetProfilePhotoStatistics();

  const stats = [
    {
      label: "Today",
      value: profilePhotoStatistics?.today ?? "-",
    },
    {
      label: "This Week",
      value: profilePhotoStatistics?.this_week ?? "-",
    },
    {
      label: "This Month",
      value: profilePhotoStatistics?.this_month ?? "-",
    },
    {
      label: "This Year",
      value: profilePhotoStatistics?.this_year ?? "-",
    },
  ];

  return (
    <div
      className="
        mt-6
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
      "
    >
      {/* HEADER */}
      <div>
        <h2
          className="
            text-lg
            font-semibold
            text-gray-900
          "
        >
          Photo Statistics
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-gray-500
          "
        >
          Photo creation summary.
        </p>
      </div>

      {/* CONTENT */}
      <div
        className="
          mt-6
          grid
          grid-cols-2
          gap-6
          lg:grid-cols-4
        "
      >
        {stats.map((item) => (
          <div
            key={item.label}
            className="
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              p-5
            "
          >
            <p
              className="
                text-sm
                text-gray-500
              "
            >
              {item.label}
            </p>

            <h3
              className="
                mt-2
                text-3xl
                font-bold
                text-gray-900
              "
            >
              {loading ? "-" : item.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
