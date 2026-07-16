"use client";

import { createContext, useContext } from "react";

import { useGetAccount } from "@/hooks/user";

import type { Account } from "@/types/user";

type AccountContextValue = {
  account: Account | null;

  loading: boolean;

  error: string;
};

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const { account, loading, error } = useGetAccount();

  return (
    <AccountContext.Provider
      value={{
        account,
        loading,
        error,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error("useAccount must be used within an AccountProvider");
  }

  return context;
}
