"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getDraftShowcases } from "@/services/admin/dashboard/showcase/draft-showcases";

export function useDraftShowcases() {
  const { data, error, isLoading, mutate } = useSWR(
    "draft-showcases",
    getDraftShowcases,
  );

  return {
    draftShowcases: data?.data ?? null,

    loading: isLoading,

    error: error ? getErrorMessage(error, "Failed to get draft showcases") : "",

    actions: {
      refresh: mutate,
    },
  };
}
