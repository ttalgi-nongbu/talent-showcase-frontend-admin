"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import Sidebar from "@/components/shared/Sidebar";

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
        <div
          className="
          hidden
          lg:block
        "
        >
          <Sidebar />
        </div>

        {/* RIGHT SIDE */}
        <main
          id="main-scroll-container"
          className="
          min-w-0
          flex-1
          overflow-y-auto
          pb-16
          lg:pb-0
        "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
