"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getDraftProfilePhotos } from "@/services/admin/dashboard/profile-photo/draft-profile-photos";

export function useGetDraftProfilePhotos() {
  const { data, error, isLoading, mutate } = useSWR(
    "draft-profile-photos",
    getDraftProfilePhotos,
  );

  return {
    draftProfilePhotos: data?.data ?? null,

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get draft profile photos")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
