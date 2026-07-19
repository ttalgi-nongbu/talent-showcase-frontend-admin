"use client";

import useSWR from "swr";

import { getErrorMessage } from "@/lib/error";

import { getSkills } from "@/services/admin/skill";

import { GetSkillsParams } from "@/types/admin/skill";

export function useGetSkills(params: GetSkillsParams) {
  const { data, error, isLoading, mutate } = useSWR(["skills", params], () =>
    getSkills(params),
  );

  return {
    skills: data?.data.skills ?? [],

    pagination: data?.data.pagination ?? null,

    loading: isLoading,

    error: error ? getErrorMessage(error, "Failed to get skills") : "",

    actions: {
      refresh: () => mutate(),
    },
  };
}
