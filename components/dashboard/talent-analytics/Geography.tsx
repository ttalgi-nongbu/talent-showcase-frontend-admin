"use client";

import { useState } from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  useGetCityDistribution,
  useGetCountryDistribution,
  useGetNationalityDistribution,
} from "@/hooks/admin/dashboard/talent";

export default function Geography() {
  //
  // nationality
  //
  const [nationalityLimit, setNationalityLimit] = useState(10);

  const { nationalityDistribution } =
    useGetNationalityDistribution(nationalityLimit);

  //
  // country
  //
  const [countryLimit, setCountryLimit] = useState(10);

  const { countryDistribution } = useGetCountryDistribution(countryLimit);

  //
  // city
  //
  const [cityLimit, setCityLimit] = useState(10);

  const { cityDistribution } = useGetCityDistribution(cityLimit);

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
          Geography
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-gray-500
          "
        >
          Geographic distribution of registered talents.
        </p>
      </div>

      {/* CHARTS */}
      <div
        className="
          mt-8
          grid
          grid-cols-1
          gap-8
          xl:grid-cols-3
        "
      >
        {/* NATIONALITY DISTRIBUTION */}
        <div>
          <div
            className="
              mb-4
              flex
              items-center
              justify-between
            "
          >
            <h3
              className="
                text-base
                font-semibold
                text-gray-900
              "
            >
              Nationality Distribution
            </h3>

            <select
              value={nationalityLimit}
              onChange={(e) => setNationalityLimit(Number(e.target.value))}
              className="
                rounded-lg
                border
                border-gray-300
                px-3
                py-2
                text-sm
              "
            >
              <option value={10}>Top 10</option>

              <option value={20}>Top 20</option>
            </select>
          </div>

          <div className="h-[520px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={nationalityDistribution}
                layout="vertical"
                margin={{
                  top: 10,
                  right: 10,
                  left: 35,
                  bottom: 10,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#e5e7eb"
                />

                <XAxis
                  type="number"
                  allowDecimals={false}
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#6b7280",
                    fontSize: 13,
                  }}
                />

                <YAxis
                  dataKey="nationality"
                  type="category"
                  width={140}
                  interval={0}
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#6b7280",
                    fontSize: 13,
                  }}
                />

                <Tooltip />

                <Bar
                  dataKey="total"
                  fill="#f43f5e"
                  radius={[0, 8, 8, 0]}
                  maxBarSize={22}
                  animationDuration={900}
                  animationEasing="ease-out"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* COUNTRY DISTRIBUTION */}
        <div>
          <div
            className="
              mb-4
              flex
              items-center
              justify-between
            "
          >
            <h3
              className="
                text-base
                font-semibold
                text-gray-900
              "
            >
              Country Distribution
            </h3>

            <select
              value={countryLimit}
              onChange={(e) => setCountryLimit(Number(e.target.value))}
              className="
                rounded-lg
                border
                border-gray-300
                px-3
                py-2
                text-sm
              "
            >
              <option value={10}>Top 10</option>

              <option value={20}>Top 20</option>
            </select>
          </div>

          <div className="h-[520px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={countryDistribution}
                layout="vertical"
                margin={{
                  top: 10,
                  right: 10,
                  left: 35,
                  bottom: 10,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#e5e7eb"
                />

                <XAxis
                  type="number"
                  allowDecimals={false}
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#6b7280",
                    fontSize: 13,
                  }}
                />

                <YAxis
                  dataKey="country"
                  type="category"
                  width={140}
                  interval={0}
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#6b7280",
                    fontSize: 13,
                  }}
                />

                <Tooltip />

                <Bar
                  dataKey="total"
                  fill="#3b82f6"
                  radius={[0, 8, 8, 0]}
                  maxBarSize={22}
                  animationDuration={900}
                  animationEasing="ease-out"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CITY DISTRIBUTION */}
        <div>
          <div
            className="
              mb-4
              flex
              items-center
              justify-between
            "
          >
            <h3
              className="
                text-base
                font-semibold
                text-gray-900
              "
            >
              City Distribution
            </h3>

            <select
              value={cityLimit}
              onChange={(e) => setCityLimit(Number(e.target.value))}
              className="
                rounded-lg
                border
                border-gray-300
                px-3
                py-2
                text-sm
              "
            >
              <option value={10}>Top 10</option>

              <option value={20}>Top 20</option>
            </select>
          </div>

          <div className="h-[520px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={cityDistribution}
                layout="vertical"
                margin={{
                  top: 10,
                  right: 10,
                  left: 35,
                  bottom: 10,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#e5e7eb"
                />

                <XAxis
                  type="number"
                  allowDecimals={false}
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#6b7280",
                    fontSize: 13,
                  }}
                />

                <YAxis
                  dataKey="city"
                  type="category"
                  width={140}
                  interval={0}
                  tickLine={false}
                  axisLine={false}
                  tick={{
                    fill: "#6b7280",
                    fontSize: 13,
                  }}
                />

                <Tooltip />

                <Bar
                  dataKey="total"
                  fill="#10b981"
                  radius={[0, 8, 8, 0]}
                  maxBarSize={22}
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
