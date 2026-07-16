"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getShowcaseLanguageDistribution } from "@/services/admin/dashboard/showcase/showcase-language-distribution";

export function useShowcaseLanguageDistribution() {
  const { data, error, isLoading, mutate } = useSWR(
    "showcase-language-distribution",
    getShowcaseLanguageDistribution,
  );

  return {
    showcaseLanguageDistribution: data?.data ?? [],

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get showcase language distribution")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
