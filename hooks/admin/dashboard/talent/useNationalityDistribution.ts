"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getNationalityDistribution } from "@/services/admin/dashboard/talent/nationality-distribution";

export function useNationalityDistribution() {
  const { data, error, isLoading, mutate } = useSWR(
    "nationality-distribution",
    getNationalityDistribution,
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
