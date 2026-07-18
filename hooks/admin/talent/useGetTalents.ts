"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getTalents } from "@/services/admin/talent/get-talents";

import { GetTalentsParams } from "@/types/admin/talent";

export function useGetTalents(params: GetTalentsParams) {
  const { data, error, isLoading, mutate } = useSWR(["talents", params], () =>
    getTalents(params),
  );

  return {
    talents: data?.data.talents ?? [],

    pagination: data?.data.pagination ?? null,

    loading: isLoading,

    error: error ? getErrorMessage(error, "Failed to get talents") : "",

    actions: {
      refresh: () => mutate(),
    },
  };
}
