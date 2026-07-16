"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getGenderDistribution } from "@/services/admin/dashboard/talent/gender-distribution";

export function useGenderDistribution() {
  const { data, error, isLoading, mutate } = useSWR(
    "gender-distribution",
    getGenderDistribution,
  );

  return {
    genderDistribution: data?.data ?? [],

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get gender distribution")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
