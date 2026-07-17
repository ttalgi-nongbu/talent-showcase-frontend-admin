"use client";

import { getErrorMessage } from "@/lib/error";

import { updateUserStatus } from "@/services/admin/user/update-user-status";

import { UpdateUserStatusRequest } from "@/types/admin/user";

export function useUpdateUserStatus() {
  const update = async (id: number, payload: UpdateUserStatusRequest) => {
    try {
      await updateUserStatus(id, payload);

      return {
        success: true,
        error: "",
      };
    } catch (error) {
      return {
        success: false,
        error: getErrorMessage(error, "Failed to update user status"),
      };
    }
  };

  return {
    update,
  };
}
