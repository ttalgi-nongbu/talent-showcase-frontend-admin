"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getShowcaseChart } from "@/services/admin/dashboard/showcase/showcase-chart";

export function useShowcaseChart() {
  const { data, error, isLoading, mutate } = useSWR(
    "showcase-chart",
    getShowcaseChart,
  );

  return {
    showcaseChart: data?.data ?? [],

    loading: isLoading,

    error: error ? getErrorMessage(error, "Failed to get showcase chart") : "",

    actions: {
      refresh: mutate,
    },
  };
}
