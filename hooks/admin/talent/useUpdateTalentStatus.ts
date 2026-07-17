"use client";

import { useState } from "react";

import { updateTalentStatus } from "@/services/admin/talent/update-talent-status";

import { UpdateTalentStatusRequest } from "@/types/admin/talent";

export function useUpdateTalentStatus() {
  const [loading, setLoading] = useState(false);

  const handleUpdateTalentStatus = async (
    id: number,
    payload: UpdateTalentStatusRequest,
  ) => {
    try {
      setLoading(true);

      return await updateTalentStatus(id, payload);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,

    actions: {
      handleUpdateTalentStatus,
    },
  };
}
