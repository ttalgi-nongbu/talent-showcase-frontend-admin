"use client";

import { useCallback, useEffect, useState } from "react";

import { getErrorMessage } from "@/lib/error";

import { getAccount } from "@/services/user";

import type { Account } from "@/types/user";

export function useGetAccount() {
  const [account, setAccount] = useState<Account | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const refresh = useCallback(async () => {
    try {
      setLoading(true);

      const response = await getAccount();

      setAccount(response.data);

      setError("");
    } catch (err: unknown) {
      setAccount(null);

      setError(getErrorMessage(err, "Failed to get account"));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return {
    account,

    loading,

    error,

    actions: {
      refresh,
    },
  };
}
