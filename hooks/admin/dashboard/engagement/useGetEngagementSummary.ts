"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getEngagementSummary } from "@/services/admin/dashboard/engagement/engagement-summary";

export function useGetEngagementSummary() {
  const { data, error, isLoading, mutate } = useSWR(
    "engagement-summary",
    getEngagementSummary,
  );

  return {
    engagementSummary: data?.data ?? null,

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get engagement summary")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
