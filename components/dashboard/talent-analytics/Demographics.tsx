"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  useGetAgeDistribution,
  useGetGenderDistribution,
} from "@/hooks/admin/dashboard/talent";

const GENDER_COLORS = ["#f43f5e", "#3b82f6", "#10b981", "#f59e0b"];

export default function Demographics() {
  //
  // gender distribution
  //
  const { genderDistribution } = useGetGenderDistribution();

  //
  // age distribution
  //
  const { ageDistribution } = useGetAgeDistribution();

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
          Demographics
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-gray-500
          "
        >
          Gender and age distribution of registered talents.
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
        {/* GENDER DISTRIBUTION */}
        <div>
          <h3
            className="
              mb-4
              text-base
              font-semibold
              text-gray-900
            "
          >
            Gender Distribution
          </h3>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderDistribution}
                  dataKey="total"
                  nameKey="gender"
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  label={false}
                  stroke="none"
                  isAnimationActive
                  animationBegin={0}
                  animationDuration={900}
                  animationEasing="ease-out"
                >
                  {genderDistribution.map((_, index) => (
                    <Cell
                      key={index}
                      fill={GENDER_COLORS[index % GENDER_COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend verticalAlign="bottom" align="center" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AGE DISTRIBUTION */}
        <div>
          <h3
            className="
              mb-4
              text-base
              font-semibold
              text-gray-900
            "
          >
            Age Distribution
          </h3>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ageDistribution}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e5e7eb"
                />

                <XAxis
                  dataKey="age_group"
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#6b7280",
                    fontSize: 13,
                  }}
                />

                <YAxis
                  allowDecimals={false}
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#6b7280",
                    fontSize: 13,
                  }}
                />

                <Tooltip
                  cursor={{
                    fill: "#f3f4f6",
                  }}
                />

                <Bar
                  dataKey="total"
                  fill="#f43f5e"
                  radius={[8, 8, 0, 0]}
                  maxBarSize={48}
                  isAnimationActive
                  animationBegin={0}
                  animationDuration={900}
                  animationEasing="ease-out"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
