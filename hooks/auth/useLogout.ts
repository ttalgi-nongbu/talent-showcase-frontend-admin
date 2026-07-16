"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { showErrorAlert } from "@/lib/alert";
import { getErrorMessage } from "@/lib/error";

import { logout } from "@/services/auth";

export function useLogout() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      await logout();

      localStorage.removeItem("access_token");

      router.push("/login");
    } catch (err: unknown) {
      await showErrorAlert(
        getErrorMessage(err, "Failed to logout"),
        "Logout Failed",
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,

    actions: {
      handleLogout,
    },
  };
}
