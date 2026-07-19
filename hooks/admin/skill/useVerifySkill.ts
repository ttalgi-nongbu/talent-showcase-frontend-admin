"use client";

import { useState } from "react";

import { getErrorMessage } from "@/lib/error";

import { verifySkill } from "@/services/admin/skill";

export function useVerifySkill() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const action = async (id: number) => {
    setLoading(true);

    setError("");

    try {
      await verifySkill(id);

      return true;
    } catch (err) {
      setError(getErrorMessage(err, "Failed to verify skill"));

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
