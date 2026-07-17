"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getTalent } from "@/services/admin/talent/get-talent";

export function useGetTalent(id: number) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? ["talent", id] : null,
    () => getTalent(id),
  );

  return {
    talent: data?.data ?? null,

    loading: isLoading,

    error: error ? getErrorMessage(error, "Failed to get talent") : "",

    actions: {
      refresh: mutate,
    },
  };
}
