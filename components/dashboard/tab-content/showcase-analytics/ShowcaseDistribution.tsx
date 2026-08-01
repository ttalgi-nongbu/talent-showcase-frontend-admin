"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  useGetShowcaseCategoryDistribution,
  useGetShowcaseLanguageDistribution,
} from "@/hooks/admin/dashboard/showcase";

const CATEGORY_COLORS = [
  "#f43f5e",
  "#fb7185",
  "#f97316",
  "#facc15",
  "#84cc16",
  "#22c55e",
  "#14b8a6",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
];

const LANGUAGE_COLORS = [
  "#3b82f6",
  "#60a5fa",
  "#06b6d4",
  "#14b8a6",
  "#22c55e",
  "#84cc16",
  "#facc15",
  "#f97316",
  "#ec4899",
  "#8b5cf6",
];

export default function ShowcaseDistribution() {
  //
  // showcase category distribution
  //
  const { showcaseCategoryDistribution } = useGetShowcaseCategoryDistribution();

  //
  // showcase language distribution
  //
  const { showcaseLanguageDistribution } = useGetShowcaseLanguageDistribution();

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
          Showcase Distribution
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-gray-500
          "
        >
          Distribution of showcases by category and language.
        </p>
      </div>

      {/* CHARTS */}
      <div
        className="
          mt-8
          grid
          grid-cols-1
          gap-8
          xl:grid-cols-2
        "
      >
        {/* CATEGORY DISTRIBUTION */}
        <div>
          <h3
            className="
              mb-4
              text-base
              font-semibold
              text-gray-900
            "
          >
            Category Distribution
          </h3>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={showcaseCategoryDistribution}
                  dataKey="total"
                  nameKey="category"
                  outerRadius={110}
                  stroke="none"
                  label={false}
                  isAnimationActive
                  animationDuration={1500}
                >
                  {showcaseCategoryDistribution.map((_, index) => (
                    <Cell
                      key={index}
                      fill={CATEGORY_COLORS[index % CATEGORY_COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* LANGUAGE DISTRIBUTION */}
        <div>
          <h3
            className="
              mb-4
              text-base
              font-semibold
              text-gray-900
            "
          >
            Language Distribution
          </h3>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={showcaseLanguageDistribution}
                  dataKey="total"
                  nameKey="language"
                  outerRadius={110}
                  stroke="none"
                  label={false}
                  isAnimationActive
                  animationDuration={1500}
                >
                  {showcaseLanguageDistribution.map((_, index) => (
                    <Cell
                      key={index}
                      fill={LANGUAGE_COLORS[index % LANGUAGE_COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
