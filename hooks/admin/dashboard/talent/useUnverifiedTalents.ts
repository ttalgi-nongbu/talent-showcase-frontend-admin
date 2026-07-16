"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getUnverifiedTalents } from "@/services/admin/dashboard/talent/unverified-talents";

export function useUnverifiedTalents() {
  const { data, error, isLoading, mutate } = useSWR(
    "unverified-talents",
    getUnverifiedTalents,
  );

  return {
    unverifiedTalents: data?.data ?? null,

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get unverified talents")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
