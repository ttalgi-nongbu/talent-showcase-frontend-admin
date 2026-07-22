"use client";

import { useState } from "react";

import { showErrorAlert, showSuccessAlert } from "@/lib/alert";
import { getErrorMessage } from "@/lib/error";

import { changePassword } from "@/services/user";

export function useChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      await showErrorAlert(
        "Password confirmation does not match",
        "Change Password Failed",
      );

      return;
    }

    try {
      setLoading(true);

      const response = await changePassword({
        current_password: currentPassword,
        new_password: newPassword,
      });

      await showSuccessAlert(response.message, "Password Changed");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: unknown) {
      await showErrorAlert(
        getErrorMessage(err, "Failed to change password"),
        "Change Password Failed",
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    form: {
      currentPassword,
      newPassword,
      confirmPassword,
    },

    loading,

    actions: {
      setCurrentPassword,
      setNewPassword,
      setConfirmPassword,
      handleSubmit,
    },
  };
}
