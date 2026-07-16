"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getRegisteredTalents } from "@/services/admin/dashboard/talent/registered-talents";

export function useGetRegisteredTalents() {
  const { data, error, isLoading, mutate } = useSWR(
    "registered-talents",
    getRegisteredTalents,
  );

  return {
    registeredTalents: data?.data ?? null,

    loading: isLoading,

    error: error
      ? getErrorMessage(error, "Failed to get registered talents")
      : "",

    actions: {
      refresh: mutate,
    },
  };
}
