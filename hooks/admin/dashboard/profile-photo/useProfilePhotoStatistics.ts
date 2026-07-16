"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getProfilePhotoStatistics } from "@/services/admin/dashboard/profile-photo/profile-photo-statistics";

export function useProfilePhotoStatistics() {
  const { data, error, isLoading, mutate } = useSWR(
    "profile-photo-statistics",
    getProfilePhotoStatistics,
  );

  return {
    profilePhotoStatistics: data?.data ?? null,

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get profile photo statistics")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
