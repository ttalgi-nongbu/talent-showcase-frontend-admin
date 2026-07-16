"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getAgeDistribution } from "@/services/admin/dashboard/talent/age-distribution";

export function useGetAgeDistribution() {
  const { data, error, isLoading, mutate } = useSWR(
    "age-distribution",
    getAgeDistribution,
  );

  return {
    ageDistribution: data?.data ?? [],

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get age distribution")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
