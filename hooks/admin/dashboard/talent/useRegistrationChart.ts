"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getRegistrationChart } from "@/services/admin/dashboard/talent/registration-chart";

export function useRegistrationChart() {
  const { data, error, isLoading, mutate } = useSWR(
    "registration-chart",
    getRegistrationChart,
  );

  return {
    registrationChart: data?.data ?? [],

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get registration chart")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
