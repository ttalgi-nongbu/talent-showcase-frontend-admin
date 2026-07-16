"use client";

import { useGetRegistrationStatistics } from "@/hooks/admin/dashboard/talent";

export default function RegistrationStatistics() {
  const { registrationStatistics, loading } = useGetRegistrationStatistics();

  const stats = [
    {
      label: "Today",
      value: registrationStatistics?.today ?? "-",
    },
    {
      label: "This Week",
      value: registrationStatistics?.this_week ?? "-",
    },
    {
      label: "This Month",
      value: registrationStatistics?.this_month ?? "-",
    },
    {
      label: "This Year",
      value: registrationStatistics?.this_year ?? "-",
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
          Registration Statistics
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-gray-500
          "
        >
          Talent registration summary.
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
