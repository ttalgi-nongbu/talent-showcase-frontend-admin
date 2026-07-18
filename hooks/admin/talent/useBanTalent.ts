"use client";

import { useState } from "react";

import { getErrorMessage } from "@/lib/error";

import { banTalent } from "@/services/admin/talent/ban-talent";

export function useBanTalent() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const action = async (id: number) => {
    setLoading(true);

    setError("");

    try {
      await banTalent(id);

      return true;
    } catch (err) {
      setError(getErrorMessage(err, "Failed to ban talent"));

      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,

    error,

    action,
  };
}
