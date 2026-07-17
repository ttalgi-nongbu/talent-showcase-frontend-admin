"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getEngagementChart } from "@/services/admin/dashboard/engagement/engagement-chart";

export function useGetEngagementChart(period: "week" | "month" | "year") {
  const { data, error, isLoading, mutate } = useSWR(
    ["engagement-chart", period],
    () => getEngagementChart(period),
  );

  return {
    engagementChart: data?.data ?? [],

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get engagement chart")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
