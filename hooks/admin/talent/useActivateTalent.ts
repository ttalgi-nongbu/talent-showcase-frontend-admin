"use client";

import { useState } from "react";

import { getErrorMessage } from "@/lib/error";

import { activateTalent } from "@/services/admin/talent/activate-talent";

export function useActivateTalent() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const action = async (id: number) => {
    setLoading(true);

    setError("");

    try {
      await activateTalent(id);

      return true;
    } catch (err) {
      setError(getErrorMessage(err, "Failed to activate talent"));

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
