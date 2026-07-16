"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getRegistrationChart } from "@/services/admin/dashboard/talent/registration-chart";

export function useRegistrationChart(period: "week" | "month" | "year") {
  const { data, error, isLoading, mutate } = useSWR(
    ["registration-chart", period],
    () => getRegistrationChart(period),
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
