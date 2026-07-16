"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getCityDistribution } from "@/services/admin/dashboard/talent/city-distribution";

export function useGetCityDistribution() {
  const { data, error, isLoading, mutate } = useSWR(
    "city-distribution",
    getCityDistribution,
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
