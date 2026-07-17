"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getCityDistribution } from "@/services/admin/dashboard/talent/city-distribution";

export function useGetCityDistribution(limit: number) {
  const { data, error, isLoading, mutate } = useSWR(
    ["city-distribution", limit],
    () => getCityDistribution(limit),
  );

  return {
    cityDistribution: data?.data ?? [],

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get city distribution")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
