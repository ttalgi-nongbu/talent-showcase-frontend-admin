"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { AccountProvider, useAccount } from "@/contexts/AccountContext";

import { logout } from "@/services/auth";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AccountProvider>
      <SettingsLayoutContent>{children}</SettingsLayoutContent>
    </AccountProvider>
  );
}

function SettingsLayoutContent({ children }: { children: React.ReactNode }) {
  //
  // next router
  //
  const router = useRouter();

  //
  // ambil account
  //
  const { account, loading } = useAccount();

  //
  // validasi akses
  //
  useEffect(() => {
    if (loading) {
      return;
    }

    const handleUnauthorized = async () => {
      try {
        await logout();
      } catch {
        // abaikan jika logout gagal
      }

      localStorage.removeItem("access_token");

      router.replace("/login");
    };

    if (!account) {
      handleUnauthorized();

      return;
    }

    if (account.role !== "admin") {
      handleUnauthorized();
    }
  }, [loading, account, router]);

  //
  // tunggu account selesai diambil atau sedang redirect
  //
  if (loading || !account || account.role !== "admin") {
    return null;
  }

  return children;
}
