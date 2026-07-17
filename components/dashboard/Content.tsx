"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import ShowcaseAnalytics from "./showcase-analytics/ShowcaseAnalytics";
import TalentAnalytics from "./talent-analytics/TalentAnalytics";

export default function Content() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab");

  function goToTalent() {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("tab");

    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname);
  }

  function goToShowcase() {
    const params = new URLSearchParams(searchParams.toString());

    params.set("tab", "showcase");

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      {/* TITLE */}
      <h1
        className="
          text-3xl
          font-bold
          text-gray-800
        "
      >
        Dashboard
      </h1>

      {/* TABS */}
      <div
        className="
          mt-6
          flex
          gap-6
          border-b
          border-gray-200
        "
      >
        <button
          onClick={goToTalent}
          className={`
            cursor-pointer
            border-b-2
            pb-3
            text-sm
            font-medium
            transition-colors
            ${
              tab !== "showcase"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }
          `}
        >
          Talent Analytics
        </button>

        <button
          onClick={goToShowcase}
          className={`
            cursor-pointer
            border-b-2
            pb-3
            text-sm
            font-medium
            transition-colors
            ${
              tab === "showcase"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }
          `}
        >
          Showcase Analytics
        </button>
      </div>

      {/* CONTENT */}
      <div className="mt-6">
        {tab === "showcase" ? <ShowcaseAnalytics /> : <TalentAnalytics />}
      </div>
    </>
  );
}
