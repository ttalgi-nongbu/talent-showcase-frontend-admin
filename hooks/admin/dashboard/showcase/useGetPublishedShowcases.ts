"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getPublishedShowcases } from "@/services/admin/dashboard/showcase/published-showcases";

export function useGetPublishedShowcases() {
  const { data, error, isLoading, mutate } = useSWR(
    "published-showcases",
    getPublishedShowcases,
  );

  return {
    publishedShowcases: data?.data ?? null,

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get published showcases")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
