"use client";

import { getErrorMessage } from "@/lib/error";

import { updateTalentStatus } from "@/services/admin/talent/update-talent-status";

import { UpdateTalentStatusRequest } from "@/types/admin/talent";

export function useUpdateTalentStatus() {
  const update = async (id: number, payload: UpdateTalentStatusRequest) => {
    try {
      await updateTalentStatus(id, payload);

      return {
        success: true,
        error: "",
      };
    } catch (error) {
      return {
        success: false,
        error: getErrorMessage(error, "Failed to update talent status"),
      };
    }
  };

  return {
    update,
  };
}
