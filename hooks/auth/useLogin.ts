"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { showErrorAlert } from "@/lib/alert";
import { getErrorMessage } from "@/lib/error";

import { login } from "@/services/auth";

export function useLogin() {
  const router = useRouter();

  const [identifier, setIdentifier] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await login({
        identifier,
        password,
      });

      localStorage.setItem("access_token", response.data.access_token);

      router.push("/explore");
    } catch (err: unknown) {
      const appError = err as {
        message?: string;

        data?: {
          email?: string;
        };
      };

      if (
        appError.message === "Email is not verified" &&
        appError.data?.email
      ) {
        router.push(
          `/verify-email?email=${encodeURIComponent(appError.data.email)}`,
        );

        return;
      }

      await showErrorAlert(
        getErrorMessage(err, "Failed to login"),
        "Login Failed",
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    form: {
      identifier,
      password,
    },

    loading,

    actions: {
      setIdentifier,
      setPassword,
      handleLogin,
    },
  };
}
