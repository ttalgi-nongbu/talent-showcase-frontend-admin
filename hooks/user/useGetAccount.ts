"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getAccount } from "@/services/user";

export function useGetAccount() {
  const { data, error, isLoading, mutate } = useSWR("account", getAccount);

  return {
    account: data?.data ?? null,

    loading: isLoading,

    error: error ? getErrorMessage(error, "Failed to get account") : "",

    actions: {
      refresh: mutate,
    },
  };
}
