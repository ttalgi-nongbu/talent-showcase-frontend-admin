"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { AccountProvider, useAccount } from "@/contexts/AccountContext";

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
  // redirect ke login jika belum login
  //
  useEffect(() => {
    if (!loading && !account) {
      router.replace("/login");
    }
  }, [loading, account, router]);

  //
  // tunggu account selesai diambil atau sedang redirect
  //
  if (loading || !account) {
    return null;
  }

  return (
    <div
      className="
        min-h-screen
        bg-zinc-100
      "
    >
      {children}
    </div>
  );
}
