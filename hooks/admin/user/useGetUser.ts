"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getUser } from "@/services/admin/user/get-user";

export function useGetUser(id: number) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? ["user", id] : null,
    () => getUser(id),
  );

  return {
    user: data,

    loading: isLoading,

    error: error ? getErrorMessage(error, "Failed to get user") : "",

    actions: {
      refresh: mutate,
    },
  };
}
