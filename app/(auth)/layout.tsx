"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { AccountProvider, useAccount } from "@/contexts/AccountContext";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AccountProvider>
      <AuthLayoutContent>{children}</AuthLayoutContent>
    </AccountProvider>
  );
}

function AuthLayoutContent({ children }: { children: React.ReactNode }) {
  //
  // next router
  //
  const router = useRouter();

  //
  // ambil account
  //
  const { account, loading } = useAccount();

  //
  // sudah login -> dashboard
  //
  useEffect(() => {
    if (!loading && account) {
      router.replace("/");
    }
  }, [loading, account, router]);

  //
  // tunggu pengecekan account selesai
  //
  if (loading) {
    return null;
  }

  //
  // sedang redirect ke dashboard
  //
  if (account) {
    return null;
  }

  return <>{children}</>;
}
