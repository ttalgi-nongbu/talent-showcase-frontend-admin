"use client";

import TalentAnalytics from "./TalentAnalytics";

export default function Content() {
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

      <TalentAnalytics />
    </>
  );
}
