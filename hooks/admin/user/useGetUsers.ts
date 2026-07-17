"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getUsers } from "@/services/admin/user/get-users";

import { GetUsersParams } from "@/types/admin/user";

export function useGetUsers(params: GetUsersParams) {
  const { data, error, isLoading, mutate } = useSWR(["users", params], () =>
    getUsers(params),
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
