"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getCountryDistribution } from "@/services/admin/dashboard/talent/country-distribution";

export function useGetCountryDistribution(limit: number) {
  const { data, error, isLoading, mutate } = useSWR(
    ["country-distribution", limit],
    () => getCountryDistribution(limit),
  );

  return {
    countryDistribution: data?.data ?? [],

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get country distribution")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
