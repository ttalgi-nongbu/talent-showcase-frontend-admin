"use client";

import { useState } from "react";

import { getErrorMessage } from "@/lib/error";

import { unverifySkill } from "@/services/admin/skill";

export function useUnverifySkill() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const action = async (id: number) => {
    setLoading(true);

    setError("");

    try {
      await unverifySkill(id);

      return true;
    } catch (err) {
      setError(getErrorMessage(err, "Failed to unverify skill"));

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
