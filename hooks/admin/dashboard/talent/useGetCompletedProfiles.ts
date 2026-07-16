"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getCompletedProfiles } from "@/services/admin/dashboard/talent/completed-profiles";

export function useGetCompletedProfiles() {
  const { data, error, isLoading, mutate } = useSWR(
    "completed-profiles",
    getCompletedProfiles,
  );

  return {
    completedProfiles: data?.data ?? null,

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get completed profiles")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
