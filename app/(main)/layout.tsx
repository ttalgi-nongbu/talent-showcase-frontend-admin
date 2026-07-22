"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import Sidebar from "@/components/shared/Sidebar";

import { AccountProvider, useAccount } from "@/contexts/AccountContext";

import { logout } from "@/services/auth";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AccountProvider>
      <MainLayoutContent>{children}</MainLayoutContent>
    </AccountProvider>
  );
}

function MainLayoutContent({ children }: { children: React.ReactNode }) {
  //
  // next router
  //
  const router = useRouter();

  //
  // ambil account
  //
  const { account, loading } = useAccount();

  //
  // redirect jika belum login atau bukan admin
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

  return (
    <div
      className="
        h-screen
        overflow-hidden
        bg-zinc-100
      "
    >
      <div
        className="
          flex
          h-full
        "
      >
        {/* SIDEBAR */}
        <Sidebar />

        {/* RIGHT SIDE */}
        <main
          className="
            min-w-0
            flex-1
            overflow-y-auto
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
