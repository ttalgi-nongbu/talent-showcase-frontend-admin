"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useRegistrationChart } from "@/hooks/admin/dashboard/talent";

export default function RegistrationChart() {
  const { registrationChart, loading } = useRegistrationChart();

  if (loading) {
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
        <div
          className="
            h-80
            animate-pulse
            rounded-xl
            bg-gray-100
          "
        />
      </div>
    );
  }

  const data =
    registrationChart?.map((item) => ({
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
      <div>
        <h2
          className="
            text-lg
            font-semibold
            text-gray-900
          "
        >
          Registration Trend
        </h2>

        <p
          className="
            mt-1
            text-sm
            text-gray-500
          "
        >
          Talent registrations during the last 30 days.
        </p>
      </div>

      {/* CHART */}
      <div
        className="
          mt-6
          h-80
        "
      >
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
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
