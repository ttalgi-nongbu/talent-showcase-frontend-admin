"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getShowcaseCategoryDistribution } from "@/services/admin/dashboard/showcase/showcase-category-distribution";

export function useGetShowcaseCategoryDistribution() {
  const { data, error, isLoading, mutate } = useSWR(
    "showcase-category-distribution",
    getShowcaseCategoryDistribution,
  );

  return {
    showcaseCategoryDistribution: data?.data ?? [],

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get showcase category distribution")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
