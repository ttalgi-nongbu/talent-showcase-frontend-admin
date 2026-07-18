"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { mutate } from "swr";

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

      await mutate("account", null, false);

      router.push("/login");
    } catch (err: unknown) {
      const message = getErrorMessage(err, "Failed to logout");

      await showErrorAlert(message, "Logout Failed");

      if (message === "Session expired") {
        localStorage.removeItem("access_token");

        await mutate("account", null, false);

        return;
      }
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
