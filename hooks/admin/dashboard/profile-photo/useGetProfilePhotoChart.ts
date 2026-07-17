"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getProfilePhotoChart } from "@/services/admin/dashboard/profile-photo/profile-photo-chart";

export function useGetProfilePhotoChart(period: "week" | "month" | "year") {
  const { data, error, isLoading, mutate } = useSWR(
    ["profile-photo-chart", period],
    () => getProfilePhotoChart(period),
  );

  return {
    profilePhotoChart: data?.data ?? [],

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get profile photo chart")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
