"use client";

import { useState } from "react";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useGetProfilePhotoChart } from "@/hooks/admin/dashboard/profile-photo";

export default function PhotoChart() {
  const [period, setPeriod] = useState<"week" | "month" | "year">("month");

  const { profilePhotoChart, loading } = useGetProfilePhotoChart(period);

  const data =
    profilePhotoChart?.map((item) => ({
      ...item,
      date: new Date(item.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    })) ?? [];

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
      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <div>
          <h2
            className="
              text-lg
              font-semibold
              text-gray-900
            "
          >
            Photo Trend
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-gray-500
            "
          >
            Photos created over time.
          </p>
        </div>

        <select
          value={period}
          onChange={(e) =>
            setPeriod(e.target.value as "week" | "month" | "year")
          }
          className="
            rounded-lg
            border
            border-gray-300
            bg-white
            px-3
            py-2
            text-sm
            text-gray-700
            outline-none
            transition
            focus:border-rose-500
            focus:ring-2
            focus:ring-rose-200
          "
        >
          <option value="week">Last 7 Days</option>

          <option value="month">Last 30 Days</option>

          <option value="year">Last 12 Months</option>
        </select>
      </div>

      {/* CHART */}
      <div
        className="
          mt-6
          h-80
        "
      >
        {loading ? (
          <div
            className="
              h-full
              animate-pulse
              rounded-xl
              bg-gray-100
            "
          />
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />

              <YAxis allowDecimals={false} />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="total"
                stroke="#f43f5e"
                strokeWidth={3}
                dot={{
                  r: 3,
                }}
                activeDot={{
                  r: 5,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
