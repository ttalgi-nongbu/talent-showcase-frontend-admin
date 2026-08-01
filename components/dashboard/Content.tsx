"use client";

import { useCallback, useEffect, useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Tabs from "./Tabs";
import TabContent from "./tab-content/TabContent";

export default function Content() {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") ?? "talent",
  );

  useEffect(() => {
    setActiveTab(searchParams.get("tab") ?? "talent");
  }, [searchParams]);

  const handleTabChange = useCallback(
    (tab: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (tab === "talent") {
        params.delete("tab");
      } else {
        params.set("tab", tab);
      }

      router.replace(`${pathname}${params.toString() ? `?${params}` : ""}`, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  useEffect(() => {
    const tabs = ["talent", "showcase", "photo", "engagement"];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!event.ctrlKey) {
        return;
      }

      const currentIndex = tabs.indexOf(activeTab);

      if (currentIndex === -1) {
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        handleTabChange(tabs[(currentIndex + 1) % tabs.length]);
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();

        handleTabChange(tabs[(currentIndex - 1 + tabs.length) % tabs.length]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeTab, handleTabChange]);

  return (
    <>
      <h1
        className="
          text-3xl
          font-bold
          text-gray-800
        "
      >
        Dashboard
      </h1>

      <Tabs activeTab={activeTab} onChange={handleTabChange} />

      <TabContent activeTab={activeTab} />
    </>
  );
}
