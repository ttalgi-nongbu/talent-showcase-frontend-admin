"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getRegistrationStatistics } from "@/services/admin/dashboard/talent/registration-statistics";

export function useGetRegistrationStatistics() {
  const { data, error, isLoading, mutate } = useSWR(
    "registration-statistics",
    getRegistrationStatistics,
  );

  return {
    registrationStatistics: data?.data ?? null,

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get registration statistics")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
