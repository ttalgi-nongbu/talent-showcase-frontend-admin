"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getPublishedProfilePhotos } from "@/services/admin/dashboard/profile-photo/published-profile-photos";

export function useGetPublishedProfilePhotos() {
  const { data, error, isLoading, mutate } = useSWR(
    "published-profile-photos",
    getPublishedProfilePhotos,
  );

  return {
    publishedProfilePhotos: data?.data ?? null,

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get published profile photos")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
