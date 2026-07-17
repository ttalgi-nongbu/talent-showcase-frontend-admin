"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getNationalityDistribution } from "@/services/admin/dashboard/talent/nationality-distribution";

export function useGetNationalityDistribution(limit: number) {
  const { data, error, isLoading, mutate } = useSWR(
    ["nationality-distribution", limit],
    () => getNationalityDistribution(limit),
  );

  return {
    nationalityDistribution: data?.data ?? [],

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get nationality distribution")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
