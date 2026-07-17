"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getUsers } from "@/services/admin/user/get-users";

export function useGetUsers(page: number, limit: number) {
  const { data, error, isLoading, mutate } = useSWR(
    ["users", page, limit],
    () => getUsers(page, limit),
  );

  return {
    users: data?.users ?? [],

    pagination: data?.pagination,

    loading: isLoading,

    error: error ? getErrorMessage(error, "Failed to get users") : "",

    actions: {
      refresh: mutate,
    },
  };
}
