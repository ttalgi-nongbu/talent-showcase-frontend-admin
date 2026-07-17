"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getShowcaseStatistics } from "@/services/admin/dashboard/showcase/showcase-statistics";

export function useGetShowcaseStatistics() {
  const { data, error, isLoading, mutate } = useSWR(
    "showcase-statistics",
    getShowcaseStatistics,
  );

  return {
    showcaseStatistics: data?.data ?? null,

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get showcase statistics")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
