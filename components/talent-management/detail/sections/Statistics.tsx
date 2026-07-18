"use client";

import { Statistics as StatisticsType } from "@/types/admin/talent";

interface Props {
  statistics: StatisticsType;
}

export default function Statistics({ statistics }: Props) {
  const items = [
    {
      label: "Showcases",
      value: statistics.showcases,
    },
    {
      label: "Photos",
      value: statistics.profile_photos,
    },
    {
      label: "Followers",
      value: statistics.followers,
    },
    {
      label: "Following",
      value: statistics.following,
    },
  ];

  return (
    <section
      className="
        rounded-2xl
        border
        border-gray-200
        p-6
      "
    >
      <h2
        className="
          text-lg
          font-semibold
          text-gray-800
        "
      >
        Statistics
      </h2>

      <div
        className="
          mt-6
          grid
          gap-4
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {items.map((item) => (
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

            <p
              className="
                mt-2
                text-3xl
                font-bold
                text-gray-900
              "
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
